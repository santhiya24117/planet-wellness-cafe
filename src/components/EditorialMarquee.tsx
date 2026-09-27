import React from 'react';

export type EditorialMarqueeProps = {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  duration?: number;
  variant?: 'light' | 'dark';
  className?: string;
};

export default function EditorialMarquee({
  children,
  direction = 'left',
  duration = 40,
  variant = 'light',
  className = ''
}: EditorialMarqueeProps) {
  const isLight = variant === 'light';

  // We repeat the item sequence 4 times so when translating 50% it loops seamlessly without gaps
  const items = [1, 2, 3, 4];

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-4 md:py-6 ${
        isLight ? 'bg-[#F4F0E6] text-[#172019]' : 'bg-[#111612] text-[#F4F0E6]'
      } border-y ${
        isLight ? 'border-[#172019]/10' : 'border-white/10'
      } ${className}`}
      style={{
        // set CSS variable for duration
        ['--marquee-duration' as any]: `${duration}s`
      }}
      aria-hidden="true"
    >
      <div
        className={
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }
      >
        {items.map((i) => (
          <div
            key={i}
            className="flex items-center shrink-0 pr-8 font-display whitespace-nowrap tracking-tight font-medium"
            style={{
              fontSize: isLight
                ? 'clamp(42px, 7vw, 110px)'
                : 'clamp(38px, 6vw, 92px)',
              lineHeight: 0.9,
              letterSpacing: '-0.04em'
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
