import { CountdownTimer } from './CountdownTimer';
import instructorImage from './images/instructor.jpeg';

export function HeroSection() {
  return (
    <div className="space-y-4">
      {/* Live badge */}
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          Online Live Classes
        </span>
        <span className="text-xs text-muted-foreground">
          New Batch Starting Soon
        </span>
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
          Learn Ancient Detox Science with Modern Practical Training.
          Become a Certified Panchakarma Therapist & Wellness Consultant.
        </p>
      </div>

      {/* Instructor Card */}
      <div className="bg-white rounded-2xl border border-border p-4 shadow-sm flex gap-4 items-center">
        <div className="relative flex-shrink-0">
          <img
            src={instructorImage}
            alt="Yogacharya Bharat"
            className="w-20 h-20 rounded-xl object-cover bg-gray-100"
          />

          <div className="absolute -bottom-1 -right-1 bg-[#22C55E] rounded-full p-1">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div>
          <div className="text-xs text-[#22C55E] font-semibold uppercase tracking-wide mb-0.5">
            Your Instructor
          </div>

          <div className="font-bold text-[#111827]">
            Yogacharya Bharat
          </div>

          <div className="text-sm text-muted-foreground">
            Experienced Ayurvedic Expert
          </div>

          <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
            <span>⭐ 4.9/5 rating</span>
            <span>•</span>
            <span>1000+ students</span>
            <span>•</span>
            <span>Expert trainer</span>
          </div>
        </div>
      </div>

      {/* Rest of your component remains unchanged */}
      <CountdownTimer />
    </div>
  );
}