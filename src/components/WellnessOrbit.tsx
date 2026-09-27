import React from 'react';

export default function WellnessOrbit({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute select-none flex items-center justify-center opacity-60 ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[520px] md:h-[520px] animate-spin-slow">
        {/* Outer subtle thin orbit ring */}
        <div className="absolute inset-0 rounded-full border border-[#78956F]/35" />

        {/* Inner concentric ring */}
        <div className="absolute inset-10 rounded-full border border-[#172019]/15" />

        {/* Dotted arc */}
        <div className="absolute inset-4 rounded-full border border-dashed border-[#78956F]/45" />

        {/* Semi-circle accent */}
        <svg
          className="absolute inset-0 w-full h-full text-[#78956F]/40"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M 12,50 A 38,38 0 0,1 88,50"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
        </svg>

        {/* Tiny orbital nodes / points */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#78956F] shadow-sm" />
        <div className="absolute bottom-6 right-12 w-2 h-2 rounded-full bg-[#172019]/70" />
        <div className="absolute top-1/3 left-2 w-1.5 h-1.5 rounded-full bg-[#78956F]/80" />
        <div className="absolute bottom-1/4 left-10 w-1 h-1 rounded-full bg-[#78956F]" />
      </div>
    </div>
  );
}
