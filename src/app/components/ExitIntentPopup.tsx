interface Props {
  onClose: () => void;
  onClaim: () => void;
  isSubmitting: boolean;
}

export function ExitIntentPopup({ onClose, onClaim, isSubmitting }: Props) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Red urgency header */}
        <div className="bg-red-500 px-6 py-4 text-white text-center">
          <div className="text-2xl mb-1">⚠️</div>
          <h2 className="text-white" style={{ fontSize: '1.1rem' }}>Wait! You're Leaving?</h2>
          <p className="text-red-100 text-sm mt-1">Don't miss this limited-time opportunity</p>
        </div>

        {/* Content */}
        <div className="p-6 text-center space-y-4">
          <p className="text-[#374151] text-sm leading-relaxed">
            Over 1,000 students have already launched successful wellness practices with this certification.
            At <strong className="text-[#22C55E]">just ₹49</strong>, this could be the most
            career-transforming ₹49 you ever invest.
          </p>

          {/* Offer box */}
          <div className="bg-[#F0FDF4] border-2 border-[#22C55E] rounded-xl p-4">
            <div className="text-xs font-bold text-[#22C55E] uppercase tracking-wide mb-2">
              Your Cart Total
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="text-center">
                <div className="text-muted-foreground line-through text-sm">₹4,999</div>
                <div className="text-xs text-muted-foreground">Course</div>
              </div>
              <div className="text-center">
                <div className="text-muted-foreground line-through text-sm">₹2,999</div>
                <div className="text-xs text-muted-foreground">4 Bonuses</div>
              </div>
              <div className="text-2xl text-[#22C55E]">=</div>
              <div className="text-center">
                <div
                  className="font-bold text-[#22C55E]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.8rem' }}
                >
                  ₹49
                </div>
                <div className="text-xs text-[#166534] font-semibold">LIMITED TIME</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
            <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <strong className="text-red-500">Limited seats</strong> in this batch — offer expires soon
          </div>

          {/* CTA */}
          <button
            onClick={() => { onClose(); onClaim(); }}
            disabled={isSubmitting}
            className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-3.5 rounded-xl font-bold text-base transition-all active:scale-[0.98] shadow-lg shadow-[#22C55E]/30"
          >
            🔒 Yes! Claim My ₹49 Seat Now
          </button>

          <button
            onClick={onClose}
            className="w-full text-muted-foreground text-sm hover:text-foreground transition-colors py-2"
          >
            No thanks, I'll pay full price later →
          </button>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
