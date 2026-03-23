/*
 * Design: Midnight Forge — Industrial Minimalism
 * Scarcity Timer: Digital LED-style countdown with urgency glow
 * Variant "earlyaccess" — amber glow (HIKED, My Guide AI)
 * Variant "beta"        — cyan/green glow (Project Pro beta offer)
 * Not tied to a specific date — rolling 72-hour window from first visit
 */
import { useState, useEffect } from 'react';

function getEndTime(key: string): number {
  const stored = localStorage.getItem(key);
  if (stored) {
    const val = parseInt(stored, 10);
    if (val > Date.now()) return val;
  }
  // Set a rolling 72-hour window
  const end = Date.now() + 72 * 60 * 60 * 1000;
  localStorage.setItem(key, end.toString());
  return end;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(endTime: number): TimeLeft {
  const diff = Math.max(0, endTime - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

interface ScarcityTimerProps {
  variant?: 'earlyaccess' | 'beta';
}

export default function ScarcityTimer({ variant = 'earlyaccess' }: ScarcityTimerProps) {
  const storageKey = variant === 'beta' ? 'nld_beta_timer_end' : 'nld_timer_end';
  const [endTime] = useState(() => getEndTime(storageKey));
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft(endTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calcTimeLeft(endTime));
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  const pad = (n: number) => n.toString().padStart(2, '0');

  const isBeta = variant === 'beta';

  // Color tokens per variant
  const accentColor = isBeta ? '#22c55e' : '#ff9100';
  const bgOpacity = isBeta ? 'bg-[#22c55e]/8' : 'bg-[#ff9100]/8';
  const borderOpacity = isBeta ? 'border-[#22c55e]/20' : 'border-[#ff9100]/20';
  const labelStyle = isBeta
    ? 'text-[#22c55e]'
    : 'text-[#ff9100]';
  const subLabelStyle = isBeta
    ? 'text-[#22c55e]/60'
    : 'text-[#ff9100]/60';
  const separatorStyle = isBeta
    ? 'text-[#22c55e]/40'
    : 'text-[#ff9100]/40';
  const label = isBeta ? 'Special Beta Offer — Pricing Closes Soon' : 'Early Access Pricing Closes Soon';

  return (
    <div className={`mt-4 p-3 rounded-md ${bgOpacity} border ${borderOpacity}`}>
      <p
        className={`font-mono ${labelStyle} text-[10px] sm:text-xs tracking-wider uppercase mb-2 text-center`}
      >
        {label}
      </p>
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        {[
          { value: pad(timeLeft.days), label: 'Days' },
          { value: pad(timeLeft.hours), label: 'Hrs' },
          { value: pad(timeLeft.minutes), label: 'Min' },
          { value: pad(timeLeft.seconds), label: 'Sec' },
        ].map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
            <div className="text-center">
              <div
                className="font-mono text-white text-lg sm:text-xl font-bold bg-[#0b1120]/80 rounded px-2 py-1 min-w-[2.5rem] tabular-nums"
                style={{ borderBottom: `1px solid ${accentColor}30` }}
              >
                {unit.value}
              </div>
              <div className={`font-body ${subLabelStyle} text-[9px] mt-1 uppercase tracking-wider`}>
                {unit.label}
              </div>
            </div>
            {i < 3 && (
              <span className={`${separatorStyle} font-mono text-lg font-bold -mt-4`}>:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
