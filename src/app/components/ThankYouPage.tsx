import { PaymentSuccess } from '../types';

const WHATSAPP_GROUP_LINK = 'https://linktr.ee/devtec2810'; // Replace with your actual WhatsApp group link

interface Props {
  data: PaymentSuccess;
  onBack: () => void;
}

export function ThankYouPage({ data, onBack }: Props) {
  const firstName = data.name.split(' ')[0];

  return (
    <div className="min-h-screen bg-[#F0FDF4] flex flex-col">
      {/* Success header */}
      <div className="bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white py-12 px-4 text-center">
        <div className="max-w-xl mx-auto">
          {/* Checkmark animation */}
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-white" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>
            Congratulations, {firstName}! 🎉
          </h1>
          <p className="text-white/90 mt-2 text-base">
            You're enrolled in the Master Panchakarma Certification Course!
          </p>

          {/* Payment ID */}
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mt-4 text-sm text-white/90">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Payment ID: {data.paymentId || 'pay_confirmed'}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-xl mx-auto w-full px-4 py-8 space-y-5">
        {/* WhatsApp CTA — most important */}
        <div className="bg-white rounded-2xl border-2 border-[#25D366] shadow-lg p-6 text-center">
          <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
          <h2 className="text-[#111827]" style={{ fontSize: '1.2rem' }}>
            Join Our WhatsApp Community
          </h2>
          <p className="text-muted-foreground text-sm mt-2 mb-5">
            Get your <strong className="text-[#111827]">course access link + all 4 bonuses</strong> instantly
            by joining our WhatsApp group now.
          </p>
          <a
            href={WHATSAPP_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EA952] text-white px-6 py-3.5 rounded-xl font-bold transition-all active:scale-[0.98] shadow-lg shadow-[#25D366]/30 w-full justify-center"
            style={{ fontSize: '1rem' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Join WhatsApp Group Now →
          </a>
          <p className="text-xs text-muted-foreground mt-3">
            Free to join • Workshop link sent within minutes
          </p>
        </div>

        {/* Confirmation details */}
        <div className="bg-white rounded-2xl border border-border shadow-sm p-5 space-y-3">
          <h3 className="text-[#111827] font-semibold" style={{ fontSize: '0.95rem' }}>
            📧 Confirmation Sent To
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Name</span>
              <span className="font-medium text-[#111827]">{data.name}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Email</span>
              <span className="font-medium text-[#111827]">{data.email}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Phone</span>
              <span className="font-medium text-[#111827]">+91 {data.phone}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Course</span>
              <span className="font-medium text-[#111827]">Starts Soon</span>
            </div>
          </div>
        </div>

        {/* Bonuses reminder */}
        <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
          <h3 className="text-[#111827] font-semibold mb-3" style={{ fontSize: '0.95rem' }}>
            🎁 Your Free Bonuses
          </h3>
          <div className="space-y-2">
            {[
              'PDF Notes & Study Material',
              'Panchakarma Protocol Sheets',
              'Ayurvedic Lifestyle Guide',
              'Patient Assessment Format',
            ].map((bonus, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[#374151]">
                <div className="w-4 h-4 bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {bonus}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">
            All bonuses are delivered via WhatsApp group after you join.
          </p>
        </div>

        {/* What to do next */}
        <div className="bg-[#111827] rounded-2xl p-5 text-white">
          <h3 className="text-white font-semibold mb-3" style={{ fontSize: '0.95rem' }}>
            📋 Next Steps
          </h3>
          <div className="space-y-3">
            {[
              { num: '1', text: 'Join the WhatsApp group using the button above' },
              { num: '2', text: 'Check your email for payment receipt & confirmation' },
              { num: '3', text: 'Wait for batch start announcement in WhatsApp group' },
              { num: '4', text: 'Attend live sessions, complete modules & get certified' },
            ].map(step => (
              <div key={step.num} className="flex gap-3 items-start">
                <div className="w-6 h-6 bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  {step.num}
                </div>
                <span className="text-gray-300 text-sm">{step.text}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Have questions?{' '}
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20registered%20for%20the%20Panchakarma%20Certification%20Course"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#22C55E] font-medium underline"
          >
            WhatsApp us for support
          </a>
        </p>
      </div>
    </div>
  );
}
