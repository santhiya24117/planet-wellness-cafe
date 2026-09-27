import React, { useState } from 'react';
import { motion } from 'motion/react';
import FoodPlanet from './FoodPlanet';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export default function Hero({ onOpenOrderModal }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX / width - 0.5) * 28;
    const y = (clientY / height - 0.5) * 28;
    setMousePos({ x, y });
  };

  return (
    <section
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#111612] text-[#F4F0E6] pt-20 pb-16 md:py-0"
      onMouseMove={handleMouseMove}
    >
      {/* Deep Slate Atmospheric Background Gradients */}
      <div className="absolute inset-0 bg-[#111612] pointer-events-none" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 75% 50%, rgba(23, 32, 25, 0.9) 0%, rgba(17, 22, 18, 0) 100%)'
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 20% 40%, rgba(120, 149, 111, 0.15) 0%, transparent 60%)'
        }}
      />

      {/* Hero Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 my-auto">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & BRAND STATEMENT */}
        {/* ========================================================================= */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1 text-left">
          {/* Eyebrow Annotation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center gap-3 text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-[#78956F] mb-5 md:mb-7 font-sans"
          >
            <span>PLANET WELLNESS</span>
            <span aria-hidden="true" className="opacity-50">·</span>
            <span>SALIGRAMAM, CHENNAI</span>
            <span aria-hidden="true" className="opacity-50 hidden sm:inline">·</span>
            <span className="text-[#D8D1BF]/80 hidden sm:inline">FRESH DAILY</span>
          </motion.div>

          {/* Core Slogan: EAT FRESH. FEEL GOOD. LIVE BETTER. */}
          <h1
            className="font-display font-medium text-white select-none"
            style={{
              fontSize: 'clamp(56px, 7vw, 112px)',
              lineHeight: 0.86,
              letterSpacing: '-0.045em'
            }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              EAT FRESH.
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              FEEL GOOD.
            </motion.span>
            <motion.span
              className="block text-[#D8D1BF]"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            >
              LIVE BETTER.
            </motion.span>
          </h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.65 }}
            className="mt-6 md:mt-8 max-w-lg text-sm md:text-base text-[#D8D1BF] leading-relaxed font-normal"
          >
            Fresh food, vibrant flavours and everyday choices made to keep you feeling your best.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.78 }}
            className="mt-8 md:mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#signature-menu"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F4F0E6] text-[#172019] hover:bg-white text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer min-h-[44px]"
            >
              <span>EXPLORE MENU</span>
              <span className="text-sm">↗</span>
            </a>

            <button
              type="button"
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer min-h-[44px]"
            >
              <span>ORDER NOW</span>
              <span className="text-sm">↗</span>
            </button>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: THE FOOD PLANET INTERACTIVE 3D COMPOSITION */}
        {/* ========================================================================= */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2 relative py-4 lg:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full flex items-center justify-center max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px]"
          >
            {/* The Interactive Food Planet */}
            <FoodPlanet mousePos={mousePos} />

            {/* Subtle Minimalist PW Emblem Badge (Section requirement) */}
            <div className="hidden sm:flex absolute -bottom-2 right-4 lg:right-6 items-center gap-2 px-3 py-1.5 rounded-full bg-[#172019]/80 backdrop-blur-md border border-white/10 text-[10px] tracking-[0.2em] font-semibold text-[#D8D1BF] select-none pointer-events-none">
              <span className="font-display font-semibold text-[#78956F] text-xs">PW</span>
              <span className="opacity-40">|</span>
              <span className="text-[9px] uppercase">CULINARY WORLD</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity pointer-events-none">
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#D8D1BF] font-sans">SCROLL ↓</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#78956F] to-transparent" />
      </div>
    </section>
  );
}
