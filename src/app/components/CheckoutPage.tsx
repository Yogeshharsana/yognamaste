import { useState, useRef, useEffect, useCallback } from 'react';
import { HeroSection } from './HeroSection';
import { RegistrationForm, FormData, FormErrors } from './RegistrationForm';
import { BenefitsSection } from './BenefitsSection';
import { BonusSection } from './BonusSection';
import { OrderSummary } from './OrderSummary';
import { TestimonialsSection } from './TestimonialsSection';
import { CountdownTimer } from './CountdownTimer';
import { ExitIntentPopup } from './ExitIntentPopup';
import { PaymentSuccess } from '../types';
import { CourseCatalogue } from './CourseCatalogue';

// ─── Configuration ─────────────────────────────────────────────────────────
// Replace these with your actual values before going live

const RAZORPAY_KEY = 'rzp_test_gPIU9GkI1U8CfQ';
// Get your key from: https://dashboard.razorpay.com/app/website-app-settings/api-keys

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbw2_O6mffMfKgUPnyEGn0TRoektnYQtUPjcCz-O5SPaZ073-jeJP_ejQQmn2myRgHQx/exec';
// Setup instructions:
// 1. Open your Google Sheet
// 2. Extensions → Apps Script
// 3. Paste the script from the comment at the bottom of this file
// 4. Deploy → New Deployment → Web App → Execute as: Me → Anyone can access
// 5. Copy the Web App URL and paste it above

 const WHATSAPP_SUPPORT = 'https://linktr.ee/devtec2810';
// Replace +919999999999 with your actual WhatsApp number
// ───────────────────────────────────────────────────────────────────────────

interface Props {
  onSuccess: (data: PaymentSuccess) => void;
}

const loadRazorpay = (): Promise<boolean> => {
  return new Promise(resolve => {
    if ((window as any).Razorpay) { resolve(true); return; }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const saveToGoogleSheets = async (data: Record<string, string>) => {
  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch {
    // Fail silently — don't block the user flow
  }
};

const validate = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.firstName.trim()) errors.firstName = 'First name is required';
  if (!data.lastName.trim()) errors.lastName = 'Last name is required';
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^[6-9]\d{9}$/.test(data.phone.replace(/\s/g, ''))) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number';
  }
  if (!data.profession) errors.profession = 'Please select your profession';
  if (!data.state) errors.state = 'Please select your state';
  if (!data.whatsappConsent) errors.whatsappConsent = 'Please agree to receive WhatsApp updates';
  return errors;
};

export function CheckoutPage({ onSuccess }: Props) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '',
    profession: '', state: '', whatsappConsent: false,
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleFormChange = useCallback((field: keyof FormData, value: string | boolean) => {
    setFormData(prev => {
      const next = { ...prev, [field]: value };
      if (hasAttemptedSubmit) setFormErrors(validate(next));
      return next;
    });
  }, [hasAttemptedSubmit]);

  const handlePayment = useCallback(async () => {
    setHasAttemptedSubmit(true);
    const errors = validate(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    setIsSubmitting(true);

    const loaded = await loadRazorpay();
    if (!loaded) {
      alert('Could not load payment gateway. Please check your internet connection and try again.');
      setIsSubmitting(false);
      return;
    }

    const options = {
      key: RAZORPAY_KEY,
      amount: 4900,
      currency: 'INR',
      name: 'Panchakarma Certification Course',
      description: 'Master Panchakarma — Yog Namaste Academy',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=80&h=80&fit=crop&auto=format',
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: `+91${formData.phone}`,
      },
      notes: {
        profession: formData.profession,
        state: formData.state,
        source: 'checkout-page',
      },
      theme: { color: '#22C55E' },
      handler: async (response: { razorpay_payment_id: string }) => {
        const paymentId = response.razorpay_payment_id;

        await saveToGoogleSheets({
  firstName: formData.firstName,
  lastName: formData.lastName,
  email: formData.email,
  phone: formData.phone,
  profession: formData.profession,
  state: formData.state,
  paymentStatus: 'SUCCESS',
  razorpayPaymentId: paymentId,
  timestamp: new Date().toISOString(),
});

        setIsSubmitting(false);
        onSuccess({
          paymentId,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
        });
      },
      modal: {
        ondismiss: () => setIsSubmitting(false),
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.on('payment.failed', () => {
      setIsSubmitting(false);
      alert('Payment failed. Please try again or use a different payment method.');
    });
    rzp.open();
  }, [formData, onSuccess]);

  // Exit intent
  useEffect(() => {
    let triggered = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered) {
        triggered = true;
        setTimeout(() => setShowExitPopup(true), 300);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Announcement bar */}
      <div className="bg-[#111827] text-white py-2.5 px-4 text-center text-sm leading-snug">
        <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse inline-block" />
            <strong>⚡ Limited Seats Available</strong>
          </span>
          <span className="text-gray-300">
            New batch starting soon — Special discount expires in{' '}
            <CountdownTimer compact />
          </span>
        </span>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#22C55E] rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-[#111827] text-sm leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Yog Namaste
              </div>
              <div className="text-xs text-muted-foreground">Academy</div>
            </div>
          </div>

          <a
            href={WHATSAPP_SUPPORT}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[#25D366] font-semibold hover:opacity-80 transition-opacity"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="hidden sm:inline">Need Help?</span>
            <span className="sm:hidden">Help</span>
          </a>
        </div>
      </header>

      {/* Flash sale banner */}
      <div className="bg-[#FEF2F2] border-b border-red-100 py-2 px-4 text-center">
        <p className="text-sm text-red-700">
          🔥 <strong>Special Registration Discount:</strong> Course fee drops from ₹4,999 → ₹49 only for{' '}
          <CountdownTimer inline /> more
        </p>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8 lg:py-12 pb-32 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_420px] gap-8 xl:gap-12 items-start">

          {/* ─ Left column ─────────────────────────────────────────── */}
          <div className="space-y-6">
            <HeroSection />
            <CourseCatalogue />
            <div ref={formRef} id="registration-form">
              <RegistrationForm
                formData={formData}
                formErrors={formErrors}
                onChange={handleFormChange}
                hasAttemptedSubmit={hasAttemptedSubmit}
              />
            </div>

            {/* Mobile-only benefits (shown between form and order summary on mobile) */}
            <div className="lg:hidden space-y-5">
              <BenefitsSection />
              <BonusSection />
              <OrderSummary onPay={handlePayment} isSubmitting={isSubmitting} />
            </div>
          </div>

          {/* ─ Right column (desktop only) ──────────────────────────── */}
          <div className="hidden lg:flex flex-col gap-5 lg:sticky lg:top-24">
            <BenefitsSection />
            <BonusSection />
            <OrderSummary onPay={handlePayment} isSubmitting={isSubmitting} />
          </div>
        </div>
      </main>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Footer */}
      <footer className="bg-[#111827] text-gray-400 py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-8 bg-[#22C55E] rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-white font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Yog Namaste Academy
            </span>
          </div>
          <p className="text-xs leading-relaxed max-w-lg mx-auto mb-4">
            This course is for educational and informational purposes only. Results may vary.
            Individual results depend on effort, experience, and practice. Always consult
            qualified professionals before implementing Panchakarma therapies.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs flex-wrap">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Refund Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Contact Us</span>
          </div>
          <p className="text-xs mt-4 text-gray-600">© 2026 Yog Namaste Academy. All rights reserved.</p>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-border px-4 pt-3 pb-4 shadow-xl">
        <button
          onClick={handlePayment}
          disabled={isSubmitting}
          className="w-full bg-[#22C55E] hover:bg-[#16A34A] disabled:opacity-70 text-white py-4 rounded-xl font-bold text-base transition-all active:scale-[0.98] shadow-lg shadow-[#22C55E]/25 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              🔒 Reserve My Seat — ₹49
            </>
          )}
        </button>
        <p className="text-center text-xs text-muted-foreground mt-1.5">
          Limited seats • Secure payment via Razorpay
        </p>
      </div>

      {/* Exit intent popup */}
      {showExitPopup && (
        <ExitIntentPopup
          onClose={() => setShowExitPopup(false)}
          onClaim={handlePayment}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
}

/*
 * ════════════════════════════════════════════════════════════════
 *  GOOGLE APPS SCRIPT — paste this in Extensions → Apps Script
 * ════════════════════════════════════════════════════════════════
 *
 * function doPost(e) {
 *   try {
 *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *     var data = JSON.parse(e.postData.contents);
 *
 *     // Add header row if empty
 *     if (sheet.getLastRow() === 0) {
 *       sheet.appendRow([
 *         'First Name', 'Last Name', 'Email', 'Phone',
 *         'Profession', 'State', 'Payment Status',
 *         'Razorpay Payment ID', 'Timestamp'
 *       ]);
 *     }
 *
 *     sheet.appendRow([
 *       data.firstName, data.lastName, data.email, data.phone,
 *       data.profession, data.state, data.paymentStatus,
 *       data.razorpayPaymentId, data.timestamp
 *     ]);
 *
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ result: 'success' }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   } catch(err) {
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 *
 * Deploy → New Deployment → Web App:
 *   Execute as: Me
 *   Who has access: Anyone
 * Then copy the Web App URL into GOOGLE_SHEETS_URL above.
 * ════════════════════════════════════════════════════════════════
 */
