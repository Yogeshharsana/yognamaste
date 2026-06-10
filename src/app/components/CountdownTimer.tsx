import { useState, useEffect } from 'react';

interface Props {
  compact?: boolean;
  inline?: boolean;
}

const TIMER_DURATION = 90 * 60;

export function CountdownTimer({ compact, inline }: Props) {
  const [seconds, setSeconds] = useState(() => {
    const stored = sessionStorage.getItem('drw_timer_end');
    if (stored) {
      const remaining = Math.floor((parseInt(stored) - Date.now()) / 1000);
      if (remaining > 0) return remaining;
    }
    const end = Date.now() + TIMER_DURATION * 1000;
    sessionStorage.setItem('drw_timer_end', end.toString());
    return TIMER_DURATION;
  });

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => {
      setSeconds(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');

  if (compact) {
    return (
      <span className="font-mono font-bold text-[#22C55E]">
        {pad(mins)}:{pad(secs)}
      </span>
    );
  }

  if (inline) {
    return (
      <span className="font-mono font-bold">
        {pad(mins)}:{pad(secs)}
      </span>
    );
  }

  return (
    <div className="bg-[#111827] rounded-2xl p-5 text-white text-center">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">⚡ Flash Sale Ends In</p>
      <div className="flex items-center justify-center gap-4">
        <div className="text-center">
          <div
            className="text-4xl font-mono font-bold text-[#22C55E] tabular-nums"
            style={{ fontFamily: "'Plus Jakarta Sans', monospace" }}
          >
            {pad(mins)}
          </div>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Minutes</div>
        </div>
        <div className="text-3xl font-bold text-gray-500 pb-4">:</div>
        <div className="text-center">
          <div
            className="text-4xl font-mono font-bold text-[#22C55E] tabular-nums"
            style={{ fontFamily: "'Plus Jakarta Sans', monospace" }}
          >
            {pad(secs)}
          </div>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Seconds</div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-3">After this, price goes back to ₹999</p>
    </div>
  );
}
