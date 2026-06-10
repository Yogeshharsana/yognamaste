const benefits = [
  {
    title: 'Foundations of Panchakarma',
    desc: 'Introduction, Prakriti assessment, Dosha techniques & detoxification importance.',
  },
  {
    title: 'Purvakarma (Preparation Therapies)',
    desc: 'Snehana, Swedana with practical demonstrations.',
  },
  {
    title: 'Five Main Panchakarma Therapies',
    desc: 'Vamana, Virechana, Basti, Nasya, and Raktamokshana protocols.',
  },
  {
    title: 'Disease-Wise Applications',
    desc: 'Obesity, Diabetes, Arthritis, Skin, Stress, Digestive & Hormonal treatments.',
  },
  {
    title: 'Clinical Practice & Case Studies',
    desc: 'Patient assessment, treatment planning, diet guidance & real cases.',
  },
  {
    title: 'Certification from Yog Namaste Academy',
    desc: 'Professional certificate to start your wellness practice.',
  },
  {
    title: 'Lifetime Learning Support',
    desc: 'Ongoing guidance, recorded sessions & PDF study materials.',
  },
];

function CheckIcon() {
  return (
    <div className="flex-shrink-0 w-5 h-5 bg-[#22C55E] rounded-full flex items-center justify-center mt-0.5">
      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export function BenefitsSection() {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] px-5 py-4">
        <div className="text-xs font-bold text-white/80 uppercase tracking-widest mb-1">
          Course Curriculum
        </div>
        <h2 className="text-white" style={{ fontSize: '1.1rem' }}>
          WHAT YOU WILL LEARN
        </h2>
      </div>

      {/* Benefits list */}
      <div className="p-5 space-y-4">
        {benefits.map((benefit, i) => (
          <div key={i} className="flex gap-3">
            <CheckIcon />
            <div>
              <div className="font-semibold text-[#111827] text-sm leading-snug">
                {benefit.title}
              </div>
              <div className="text-[#6B7280] text-sm mt-0.5 leading-snug">
                {benefit.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom stats */}
      <div className="border-t border-border bg-[#F8FAFC] px-5 py-4">
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { value: '5 Modules', label: 'Complete Course' },
            { value: 'Live+Recorded', label: 'Sessions' },
            { value: '₹2,999', label: 'Bonuses FREE' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="font-bold text-[#22C55E]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.1rem' }}>
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
