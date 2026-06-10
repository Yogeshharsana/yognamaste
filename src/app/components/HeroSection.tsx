import { CountdownTimer } from './CountdownTimer';

export function HeroSection() {
  return (
    <div className="space-y-4">
      {/* Live badge */}
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          Online Live Classes
        </span>
        <span className="text-xs text-muted-foreground">New Batch Starting Soon</span>
      </div>

      {/* Main headline */}
      <div>
        <h1
          className="text-[#111827] leading-tight"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
        >
          Master Panchakarma{' '}
          <span className="text-[#22C55E]">Certification</span>
          <br />
          Course
        </h1>
        <p className="mt-3 text-[#6B7280] text-base leading-relaxed">
          Learn Ancient Detox Science with Modern Practical Training. Become a Certified Panchakarma Therapist & Wellness Consultant.
        </p>
      </div>

      {/* Speaker card */}
      <div className="bg-white rounded-2xl border border-border p-4 shadow-sm flex gap-4 items-center">
        <div className="relative flex-shrink-0">
          <img
            src="src/app/components/images/instructor.jpeg"
            alt="Yog Namaste Academy — Ayurvedic Experts"
            className="w-20 h-20 rounded-xl object-cover bg-gray-100"
          />
          <div className="absolute -bottom-1 -right-1 bg-[#22C55E] rounded-full p-1">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div>
          <div className="text-xs text-[#22C55E] font-semibold uppercase tracking-wide mb-0.5">Your Instructor</div>
          <div className="font-bold text-[#111827]">Yogacharya Bharat</div>
          <div className="text-sm text-muted-foreground">Experienced Ayurvedic Experts</div>
          <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
            <span>⭐ 4.9/5 rating</span>
            <span>•</span>
            <span>1000+ students</span>
            <span>•</span>
            <span>Expert trainers</span>
          </div>
        </div>
      </div>

      {/* Pricing card */}
      <div className="relative bg-gradient-to-br from-[#111827] to-[#1F2937] rounded-2xl p-5 text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#22C55E]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#22C55E]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="text-sm text-gray-400 mb-1">Master Panchakarma Certification</div>
              <div className="flex items-baseline gap-2">
                <span
                  className="font-bold text-[#22C55E]"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  ₹49
                </span>
                <span className="text-gray-500 line-through text-xl">₹4,999</span>
              </div>
            </div>
            <div className="bg-[#22C55E] text-white text-xs font-bold px-2.5 py-1 rounded-lg">
              99% OFF
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10">
            {[
              { icon: '📚', label: 'Format', value: 'Live Classes' },
              { icon: '🎓', label: 'Level', value: 'All Levels' },
              { icon: '📜', label: 'Certificate', value: 'Included' },
            ].map(item => (
              <div key={item.label} className="text-center">
                <div className="text-lg mb-0.5">{item.icon}</div>
                <div className="text-xs text-gray-400">{item.label}</div>
                <div className="text-xs font-semibold text-white mt-0.5">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Countdown timer */}
      <CountdownTimer />

      {/* Social proof bar */}
      <div className="flex items-center gap-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-4 py-3">
        <div className="flex -space-x-2">
          {[
            'https://images.unsplash.com/photo-1534235187448-833893dfe3e0?w=40&h=40&fit=crop&auto=format',
            'https://images.unsplash.com/photo-1747264464928-9795abf30a29?w=40&h=40&fit=crop&auto=format',
            'https://images.unsplash.com/photo-1553009338-80e505b3f61b?w=40&h=40&fit=crop&auto=format',
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Recent registrant"
              className="w-8 h-8 rounded-full border-2 border-white object-cover bg-gray-100"
            />
          ))}
        </div>
        <div className="text-sm">
          <span className="font-semibold text-[#166534]">1,247 students</span>
          <span className="text-[#4B7A5A]"> enrolled in the last 30 days</span>
        </div>
      </div>
    </div>
  );
}
