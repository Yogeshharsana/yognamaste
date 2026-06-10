const bonuses = [
  {
    icon: '📄',
    title: 'PDF Notes & Study Material',
    desc: 'Complete course notes & slides — yours to keep forever.',
    value: '₹999',
  },
  {
    icon: '📋',
    title: 'Panchakarma Protocol Sheets',
    desc: 'Ready-to-use treatment protocols for professional practice.',
    value: '₹999',
  },
  {
    icon: '📖',
    title: 'Ayurvedic Lifestyle Guide',
    desc: 'Comprehensive guide to Ayurvedic daily routines and wellness.',
    value: '₹499',
  },
  {
    icon: '📊',
    title: 'Patient Assessment Format',
    desc: 'Exclusive format for professional client consultations.',
    value: '₹502',
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

export function BonusSection() {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-[#22C55E] uppercase tracking-widest mb-1">
              Included Free
            </div>
            <h3 className="text-[#111827]" style={{ fontSize: '1rem' }}>
              Bonuses Worth{' '}
              <span className="text-[#22C55E]">₹2,999</span>
            </h3>
          </div>
          <div className="bg-[#FEF2F2] border border-red-200 text-red-600 text-xs font-bold px-2.5 py-1 rounded-lg">
            FREE TODAY
          </div>
        </div>
      </div>

      {/* Bonuses list */}
      <div className="p-5 space-y-3">
        {bonuses.map((bonus, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-border">
            <span className="text-2xl flex-shrink-0">{bonus.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[#111827] text-sm">{bonus.title}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{bonus.desc}</div>
            </div>
            <div className="flex-shrink-0 text-right">
              <div className="text-xs text-muted-foreground line-through">{bonus.value}</div>
              <div className="text-xs font-bold text-[#22C55E]">FREE</div>
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp community callout */}
      <div className="mx-5 mb-5 rounded-xl border-2 border-[#22C55E] bg-[#F0FDF4] p-4">
        <div className="flex gap-3 items-start">
          <div className="flex-shrink-0 w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-[#166534] text-sm">Join Our WhatsApp Community</div>
            <div className="text-xs text-[#4B7A5A] mt-0.5 leading-relaxed">
              After signup, you'll get a WhatsApp group link on the next page for{' '}
              <strong>course access + all 4 bonuses</strong>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
