interface Props {
  onPay: () => void;
  isSubmitting: boolean;
}

const trustItems = [
  { icon: '🔒', label: 'Secure Checkout' },
  { icon: '✓', label: 'Safe Payment' },
  { icon: '✓', label: 'Satisfaction Guaranteed' },
  { icon: '✓', label: 'SSL Protected' },
  { icon: '✓', label: 'Instant Access' },
];

export function OrderSummary({ onPay, isSubmitting }: Props) {
  return (
    <div className="space-y-4">
      {/* Order summary card */}
      <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h3 className="text-[#111827]" style={{ fontSize: '1rem' }}>Order Summary</h3>
        </div>

        <div className="p-5 space-y-3">
          {/* Item */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <div className="text-sm font-semibold text-[#111827]">Panchakarma Certification Course</div>
              <div className="text-xs text-muted-foreground mt-0.5">Complete Course — New Batch</div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-xs text-muted-foreground line-through">₹4,999</div>
              <div className="font-bold text-[#111827]">₹49</div>
            </div>
          </div>

          {/* Bonuses */}
          <div className="flex items-start justify-between gap-2 text-sm">
            <div className="text-muted-foreground">4 Bonus Materials</div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground line-through">₹2,999</div>
              <div className="font-semibold text-[#22C55E] text-xs">FREE</div>
            </div>
          </div>

          <div className="border-t border-dashed border-border pt-3 space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-[#111827]">₹49</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Discount (99% off)</span>
              <span className="text-[#22C55E] font-semibold">-₹4,950</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax</span>
              <span className="text-[#111827]">Included</span>
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-border pt-3">
            <span className="font-bold text-[#111827]">Total</span>
            <span
              className="font-bold text-[#22C55E]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.4rem' }}
            >
              ₹49.00
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-5 pb-5">
          <button
            onClick={onPay}
            disabled={isSubmitting}
            className="w-full relative overflow-hidden bg-[#22C55E] hover:bg-[#16A34A] disabled:opacity-70 text-white py-4 rounded-xl font-bold transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#22C55E]/30 flex items-center justify-center gap-2 group"
            style={{ fontSize: '1.05rem' }}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing Payment...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Pay ₹49 & Reserve My Seat
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>
          <p className="text-center text-xs text-muted-foreground mt-2">
            Powered by Razorpay • 100% Secure & Encrypted
          </p>
        </div>
      </div>

      {/* Trust badges */}
      <div className="bg-white rounded-2xl border border-border shadow-sm p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {trustItems.map(item => (
            <div
              key={item.label}
              className="flex items-center gap-1.5 text-xs text-[#374151]"
            >
              <span className="text-[#22C55E] font-bold text-sm flex-shrink-0">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Payment icons */}
        <div className="mt-3 pt-3 border-t border-border flex items-center justify-center gap-2 flex-wrap">
          {['UPI', 'Visa', 'Mastercard', 'RuPay', 'Net Banking', 'EMI'].map(method => (
            <span
              key={method}
              className="text-xs bg-[#F8FAFC] border border-border rounded-md px-2 py-0.5 text-muted-foreground"
            >
              {method}
            </span>
          ))}
        </div>
      </div>

      {/* Limited seats urgency */}
      <div className="bg-[#FEF2F2] border border-red-200 rounded-xl px-4 py-3 flex items-center gap-2">
        <span className="text-lg flex-shrink-0">🔥</span>
        <div className="text-xs">
          <span className="font-bold text-red-700">Limited seats in this batch</span>
          <span className="text-red-600"> at this price. Register now before the offer expires.</span>
        </div>
      </div>
    </div>
  );
}
