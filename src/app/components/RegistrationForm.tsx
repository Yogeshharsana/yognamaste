export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profession: string;
  state: string;
  whatsappConsent: boolean;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  profession?: string;
  state?: string;
  whatsappConsent?: string;
}

interface Props {
  formData: FormData;
  formErrors: FormErrors;
  onChange: (field: keyof FormData, value: string | boolean) => void;
  hasAttemptedSubmit: boolean;
}

const professions = [
  'Ayurveda Student',
  'Yoga Teacher',
  'Naturopathy Practitioner',
  'Wellness Coach',
  'Medical Professional',
  'Health Enthusiast',
  'Fitness Trainer',
  'Nutrition Consultant',
  'Student',
  'Other',
];

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman & Nicobar Islands', 'Chandigarh', 'Dadra & Nagar Haveli',
  'Daman & Diu', 'Delhi (NCT)', 'Jammu & Kashmir', 'Ladakh',
  'Lakshadweep', 'Puducherry',
];

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
      <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      {msg}
    </p>
  );
}

const inputClass = (hasError: boolean) =>
  `w-full px-3.5 py-2.5 rounded-xl border bg-white text-[#111827] text-sm transition-colors outline-none focus:ring-2 focus:ring-[#22C55E]/30 ${
    hasError
      ? 'border-red-400 focus:border-red-400'
      : 'border-border focus:border-[#22C55E]'
  }`;

export function RegistrationForm({ formData, formErrors, onChange, hasAttemptedSubmit }: Props) {
  const handlePhoneChange = (val: string) => {
    const cleaned = val.replace(/\D/g, '').slice(0, 10);
    onChange('phone', cleaned);
  };

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] px-5 py-4">
        <h2 className="text-white" style={{ fontSize: '1.1rem' }}>
          📝 Register Now — Secure Your Seat
        </h2>
        <p className="text-white/80 text-sm mt-0.5">Fill in your details below to enroll in the course</p>
      </div>

      <div className="p-5 space-y-4">
        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-[#374151] mb-1.5">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Rahul"
              value={formData.firstName}
              onChange={e => onChange('firstName', e.target.value)}
              className={inputClass(!!formErrors.firstName)}
            />
            <FieldError msg={formErrors.firstName} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#374151] mb-1.5">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Sharma"
              value={formData.lastName}
              onChange={e => onChange('lastName', e.target.value)}
              className={inputClass(!!formErrors.lastName)}
            />
            <FieldError msg={formErrors.lastName} />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-[#374151] mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              type="email"
              placeholder="rahul@gmail.com"
              value={formData.email}
              onChange={e => onChange('email', e.target.value)}
              className={`${inputClass(!!formErrors.email)} pl-10`}
            />
          </div>
          <FieldError msg={formErrors.email} />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-[#374151] mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <div className="flex items-center gap-1.5 px-3 bg-[#F9FAFB] border border-border rounded-xl text-sm text-[#374151] flex-shrink-0">
              🇮🇳 +91
            </div>
            <div className="flex-1">
              <input
                type="tel"
                placeholder="9876543210"
                value={formData.phone}
                onChange={e => handlePhoneChange(e.target.value)}
                maxLength={10}
                className={inputClass(!!formErrors.phone)}
              />
            </div>
          </div>
          <FieldError msg={formErrors.phone} />
        </div>

        {/* Profession */}
        <div>
          <label className="block text-xs font-semibold text-[#374151] mb-1.5">
            Profession <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.profession}
            onChange={e => onChange('profession', e.target.value)}
            className={inputClass(!!formErrors.profession)}
          >
            <option value="">Select your profession</option>
            {professions.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <FieldError msg={formErrors.profession} />
        </div>

        {/* State */}
        <div>
          <label className="block text-xs font-semibold text-[#374151] mb-1.5">
            State <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.state}
            onChange={e => onChange('state', e.target.value)}
            className={inputClass(!!formErrors.state)}
          >
            <option value="">Select your state</option>
            {indianStates.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <FieldError msg={formErrors.state} />
        </div>

        {/* WhatsApp consent */}
        <div>
          <label
            className={`flex items-start gap-3 cursor-pointer p-3 rounded-xl border transition-colors ${
              formData.whatsappConsent
                ? 'border-[#22C55E] bg-[#F0FDF4]'
                : formErrors.whatsappConsent
                ? 'border-red-300 bg-red-50'
                : 'border-border bg-[#F8FAFC]'
            }`}
          >
            <div className="relative flex-shrink-0 mt-0.5">
              <input
                type="checkbox"
                checked={formData.whatsappConsent}
                onChange={e => onChange('whatsappConsent', e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                  formData.whatsappConsent ? 'bg-[#22C55E] border-[#22C55E]' : 'border-gray-300 bg-white'
                }`}
              >
                {formData.whatsappConsent && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <div className="text-xs text-[#374151] leading-relaxed">
              <span className="font-semibold">I agree to receive course updates via WhatsApp</span>
              <span className="text-muted-foreground"> — We'll send you course access link, batch updates, and bonuses.</span>
            </div>
          </label>
          <FieldError msg={formErrors.whatsappConsent} />
        </div>

        {hasAttemptedSubmit && Object.keys(formErrors).length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">
            Please fill in all required fields correctly before proceeding.
          </div>
        )}
      </div>
    </div>
  );
}
