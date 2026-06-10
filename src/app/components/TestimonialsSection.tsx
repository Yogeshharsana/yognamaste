const testimonials = [
  {
    name: 'Rajesh Kumar',
    city: 'Bangalore',
    age: 38,
    image: 'https://images.unsplash.com/photo-1534235187448-833893dfe3e0?w=100&h=100&fit=crop&auto=format',
    quote: 'This course completely changed my understanding of Panchakarma. The practical protocols and case studies made everything so clear. Now I confidently treat my clients.',
    before: 'No experience',
    after: 'Certified therapist',
    metric: '25+ clients',
    stars: 5,
  },
  {
    name: 'Priya Mehta',
    city: 'Mumbai',
    age: 32,
    image: 'https://images.unsplash.com/photo-1747264464928-9795abf30a29?w=100&h=100&fit=crop&auto=format',
    quote: 'The disease-wise treatment modules were incredibly valuable. I started my own wellness practice within 2 months of completing the course!',
    before: 'Yoga teacher',
    after: 'Wellness consultant',
    metric: 'Own practice',
    stars: 5,
  },
  {
    name: 'Suresh Patel',
    city: 'Ahmedabad',
    age: 45,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&auto=format',
    quote: 'As an Ayurveda student, this course filled all the gaps in my knowledge. The trainers are experienced and the live sessions were interactive.',
    before: 'Theoretical knowledge',
    after: 'Practical skills',
    metric: 'Career boost',
    stars: 5,
  },
  {
    name: 'Anjali Singh',
    city: 'Delhi',
    age: 29,
    image: 'https://images.unsplash.com/photo-1747264463445-b9261d310f9c?w=100&h=100&fit=crop&auto=format',
    quote: 'The PDF notes and protocol sheets are professional-grade. I use them daily in my practice. Best investment for my wellness career!',
    before: 'Health enthusiast',
    after: 'Certified practitioner',
    metric: 'Professional tools',
    stars: 5,
  },
  {
    name: 'Mubina Khan',
    city: 'Hyderabad',
    age: 42,
    image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=100&h=100&fit=crop&auto=format',
    quote: 'The recorded sessions and lifetime support are priceless. I can review modules anytime. The certification from Yog Namaste Academy is well-recognized.',
    before: 'Naturopath',
    after: 'Panchakarma specialist',
    metric: 'Expertise gained',
    stars: 5,
  },
  {
    name: 'Lakshmi Reddy',
    city: 'Chennai',
    age: 35,
    image: 'https://images.unsplash.com/photo-1747264466528-ef936aad51e1?w=100&h=100&fit=crop&auto=format',
    quote: 'The patient assessment techniques and treatment planning modules gave me the confidence to handle real cases. Highly recommended!',
    before: 'Beginner',
    after: 'Confident therapist',
    metric: 'Real skills',
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-[#F0FDF4] border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] border border-[#BBF7D0] rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#22C55E] text-sm">⭐</span>
            <span className="text-[#166534] text-sm font-semibold">4.9/5 Average Rating</span>
          </div>
          <h2 className="text-[#111827]" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
            Success Stories from Our
            <br />
            <span className="text-[#22C55E]">Panchakarma Students</span>
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">Real transformations from real students — verified reviews.</p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border shadow-sm p-5 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
            >
              {/* Stars + verified */}
              <div className="flex items-center justify-between">
                <StarRating count={t.stars} />
                <span className="text-xs text-[#22C55E] font-semibold flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified
                </span>
              </div>

              {/* Quote */}
              <p className="text-sm text-[#374151] leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Before / After metric */}
              <div className="grid grid-cols-3 gap-2 bg-[#F8FAFC] rounded-xl p-3 text-xs">
                <div className="text-center">
                  <div className="text-muted-foreground mb-0.5">Before</div>
                  <div className="font-semibold text-red-500 text-[11px] leading-tight">{t.before}</div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[#22C55E] font-bold text-[11px]">{t.metric}</div>
                    <svg className="w-4 h-4 text-[#22C55E] mx-auto mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-muted-foreground mb-0.5">After</div>
                  <div className="font-semibold text-[#22C55E] text-[11px] leading-tight">{t.after}</div>
                </div>
              </div>

              {/* Person */}
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover bg-gray-100 flex-shrink-0"
                />
                <div>
                  <div className="font-semibold text-[#111827] text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.city} • Age {t.age}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm mb-1">
            Join <strong className="text-[#111827]">1,000+ students</strong> who have transformed their careers
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-[#22C55E] font-semibold">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Scroll up to register now
          </div>
        </div>
      </div>
    </section>
  );
}
