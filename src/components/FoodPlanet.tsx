import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { images } from '../data/images';

interface FoodPlanetProps {
  mousePos: { x: number; y: number };
}

export default function FoodPlanet({ mousePos }: FoodPlanetProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Parallax offsets based on depth planes
  const planetX = reducedMotion ? 0 : mousePos.x * 0.35;
  const planetY = reducedMotion ? 0 : mousePos.y * 0.35;

  const fgX = reducedMotion ? 0 : mousePos.x * 0.75;
  const fgY = reducedMotion ? 0 : mousePos.y * 0.75;

  const bgX = reducedMotion ? 0 : mousePos.x * -0.25;
  const bgY = reducedMotion ? 0 : mousePos.y * -0.25;

  return (
    <div
      className="relative flex items-center justify-center select-none w-full max-w-[540px] aspect-square"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ========================================================================= */}
      {/* 1. BACKGROUND GLOW & DEEP SPACE ATMOSPHERE */}
      {/* ========================================================================= */}
      <div
        className="pointer-events-none absolute w-[130%] h-[130%] rounded-full opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(120, 149, 111, 0.22) 0%, rgba(23, 32, 25, 0.1) 50%, transparent 75%)'
        }}
      />

      {/* ========================================================================= */}
      {/* 2. BACKGROUND ORBITING INGREDIENTS (Z-INDEX 5: BEHIND PLANET) */}
      {/* ========================================================================= */}
      <motion.div
        animate={{
          x: bgX,
          y: bgY
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-0 z-[5]"
      >
        {/* Ingredient 1: Basil / Spinach Leaf (Top-Right behind) */}
        <div
          className={`absolute top-[12%] right-[10%] ${
            reducedMotion ? '' : 'animate-float-slow'
          }`}
          style={{ animationDuration: '9s' }}
        >
          <div className="relative w-12 h-16 opacity-75 filter blur-[0.6px] rotate-[28deg]">
            <svg viewBox="0 0 48 64" fill="none" className="w-full h-full drop-shadow-md">
              <path
                d="M 24 2 C 38 16 46 36 38 52 C 32 62 16 62 10 52 C 2 36 10 16 24 2 Z"
                fill="#4C6E43"
              />
              <path
                d="M 24 6 Q 34 24 28 54"
                stroke="#6B935F"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path d="M 24 22 Q 32 24 35 28" stroke="#6B935F" strokeWidth="0.8" />
              <path d="M 23 34 Q 15 36 13 40" stroke="#6B935F" strokeWidth="0.8" />
            </svg>
          </div>
        </div>

        {/* Ingredient 2: Wild Strawberry Slice (Bottom-Left behind) */}
        <div
          className={`absolute bottom-[16%] left-[6%] ${
            reducedMotion ? '' : 'animate-float-slow'
          }`}
          style={{ animationDuration: '11s', animationDelay: '-3s' }}
        >
          <div className="relative w-14 h-14 opacity-70 filter blur-[0.4px] rotate-[-24deg]">
            <svg viewBox="0 0 56 56" fill="none" className="w-full h-full drop-shadow-lg">
              <path
                d="M 28 6 C 42 6 52 20 48 38 C 44 48 36 54 28 54 C 20 54 12 48 8 38 C 4 20 14 6 28 6 Z"
                fill="#A63333"
              />
              <path
                d="M 28 14 C 36 14 42 22 39 34 C 36 42 32 46 28 46 C 24 46 20 42 17 34 C 14 22 20 14 28 14 Z"
                fill="#D45D5D"
              />
              {/* Seeds */}
              <circle cx="28" cy="22" r="1.2" fill="#F4E8B0" />
              <circle cx="23" cy="30" r="1.2" fill="#F4E8B0" />
              <circle cx="33" cy="30" r="1.2" fill="#F4E8B0" />
              <circle cx="28" cy="38" r="1.2" fill="#F4E8B0" />
            </svg>
          </div>
        </div>

        {/* Ingredient 3: Microgreen Tendril (Top-Left behind) */}
        <div
          className={`absolute top-[18%] left-[14%] ${
            reducedMotion ? '' : 'animate-float-slow'
          }`}
          style={{ animationDuration: '13s', animationDelay: '-5s' }}
        >
          <div className="w-8 h-10 opacity-60 filter blur-[0.8px] rotate-[-45deg]">
            <svg viewBox="0 0 32 40" fill="none">
              <path d="M 6 36 Q 16 20 26 8" stroke="#78956F" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="26" cy="8" r="3.5" fill="#88AC7E" />
              <circle cx="16" cy="20" r="2.8" fill="#6B935F" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 3. LIQUID ATMOSPHERE RINGS (Z-INDEX 8: WRAPPING AROUND SPHERE) */}
      {/* ========================================================================= */}
      <motion.div
        animate={{
          x: planetX * 0.7,
          y: planetY * 0.7,
          rotate: isHovered ? 2 : 0
        }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-[-18%] z-[8] flex items-center justify-center"
      >
        {/* Ring 1: Cold-Pressed Green Smoothie / Elixir Stream */}
        <div
          className={`absolute w-[124%] h-[56%] rounded-full border border-[#78956F]/45 ${
            reducedMotion ? '' : 'animate-spin-slow'
          }`}
          style={{
            transform: 'rotate(-26deg) rotateX(68deg)',
            boxShadow: '0 0 24px rgba(120, 149, 111, 0.35), inset 0 0 16px rgba(120, 149, 111, 0.25)',
            borderWidth: '1.5px',
            animationDuration: '38s'
          }}
        >
          {/* Liquid droplet bead 1 */}
          <div className="absolute top-[8%] left-[24%] w-3 h-3 rounded-full bg-[#8EB883] shadow-[0_0_12px_#78956F]" />
          {/* Liquid droplet bead 2 */}
          <div className="absolute bottom-[10%] right-[32%] w-2 h-2 rounded-full bg-[#D8D1BF]/90 shadow-[0_0_8px_#D8D1BF]" />
        </div>

        {/* Ring 2: Golden Citrus / Hydration Droplet Arc */}
        <div
          className={`absolute w-[138%] h-[64%] rounded-full border border-dashed border-[#D8D1BF]/35 ${
            reducedMotion ? '' : 'animate-spin-slow'
          }`}
          style={{
            transform: 'rotate(18deg) rotateX(72deg)',
            animationDuration: '46s',
            animationDirection: 'reverse'
          }}
        >
          {/* Pure moisture bead */}
          <div className="absolute top-[28%] right-[12%] w-2.5 h-2.5 rounded-full bg-white/80 shadow-[0_0_10px_white]" />
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 4. THE FOOD PLANET SPHERE CORE (Z-INDEX 10) */}
      {/* ========================================================================= */}
      <motion.div
        animate={{
          x: planetX,
          y: planetY,
          scale: isHovered ? 1.025 : 1
        }}
        transition={{
          x: { duration: 0.7, ease: 'easeOut' },
          y: { duration: 0.7, ease: 'easeOut' },
          scale: { duration: 0.5, ease: 'easeOut' }
        }}
        className="relative z-10 w-[78%] h-[78%] rounded-full overflow-hidden shadow-[0_28px_80px_-12px_rgba(0,0,0,0.85)] cursor-pointer"
        style={{
          border: '1px solid rgba(120, 149, 111, 0.25)'
        }}
      >
        {/* Photorealistic Food Planet Texture & Surface Rotation */}
        <div
          className={`relative w-full h-full ${
            reducedMotion ? '' : 'animate-spin-slow'
          }`}
          style={{
            animationDuration: '34s',
            transformOrigin: 'center center'
          }}
        >
          <img
            src={images.foodPlanetHero}
            alt="The Food Planet — A rich celestial sphere crafted from fresh organic greens, berries, avocado, and vegetables at Planet Wellness Café"
            className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.08]"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Photorealistic 3D Spherical Volume Shading */}
        {/* Highlight Specular Rim (Top-Left sun/studio light) */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 32% 28%, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.08) 32%, transparent 62%)',
            mixBlendMode: 'overlay'
          }}
        />

        {/* Planet Atmosphere Rim Glow (Luminous Sage green halo) */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            boxShadow:
              'inset 0 0 45px rgba(120, 149, 111, 0.45), inset -12px -16px 50px rgba(17, 22, 18, 0.85)'
          }}
        />

        {/* Planetary Terminator Shadow (Bottom-Right deep eclipse shading) */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              'linear-gradient(135deg, transparent 40%, rgba(17, 22, 18, 0.45) 70%, rgba(17, 22, 18, 0.82) 100%)'
          }}
        />
      </motion.div>

      {/* ========================================================================= */}
      {/* 5. FOREGROUND ORBITING INGREDIENTS (Z-INDEX 20: IN FRONT OF PLANET) */}
      {/* ========================================================================= */}
      <motion.div
        animate={{
          x: fgX,
          y: fgY
        }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-0 z-20"
      >
        {/* Foreground 1: Wild Ripe Blueberry (Bottom-Right Front) */}
        <div
          className={`absolute bottom-[14%] right-[14%] ${
            reducedMotion ? '' : 'animate-float-slow'
          }`}
          style={{ animationDuration: '7s' }}
        >
          <div className="relative w-11 h-11 filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.6)]">
            <svg viewBox="0 0 44 44" fill="none" className="w-full h-full">
              {/* Deep indigo blueberry body */}
              <circle cx="22" cy="22" r="20" fill="#202A44" />
              <circle
                cx="22"
                cy="22"
                r="19"
                fill="radial-gradient(circle at 35% 30%, #4D5F8A 0%, #202A44 70%)"
              />
              {/* Crown calyx */}
              <path
                d="M 18 8 L 22 12 L 26 8 L 24 13 L 28 15 L 23 16 L 22 21 L 20 16 L 15 15 L 19 13 Z"
                fill="#161D30"
              />
              {/* Specular bloom */}
              <ellipse cx="16" cy="16" rx="4" ry="2.5" fill="#7D93C4" opacity="0.6" transform="rotate(-30 16 16)" />
            </svg>
          </div>
        </div>

        {/* Foreground 2: Fresh Lime Slice (Top-Left Front) */}
        <div
          className={`absolute top-[16%] left-[8%] ${
            reducedMotion ? '' : 'animate-float-slow'
          }`}
          style={{ animationDuration: '8.5s', animationDelay: '-2s' }}
        >
          <div className="relative w-14 h-14 filter drop-shadow-[0_14px_24px_rgba(0,0,0,0.55)] rotate-[-18deg]">
            <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
              {/* Lime rind */}
              <circle cx="28" cy="28" r="26" fill="#4E7C38" />
              <circle cx="28" cy="28" r="23" fill="#D6E8B5" />
              <circle cx="28" cy="28" r="21" fill="#72A84E" />
              {/* Center pith & segments */}
              <circle cx="28" cy="28" r="3.5" fill="#D6E8B5" />
              {/* 8 radiating segment lines */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <line
                  key={angle}
                  x1="28"
                  y1="28"
                  x2={28 + 20 * Math.cos((angle * Math.PI) / 180)}
                  y2={28 + 20 * Math.sin((angle * Math.PI) / 180)}
                  stroke="#D6E8B5"
                  strokeWidth="1.2"
                />
              ))}
              {/* Juice vesicles highlights */}
              <circle cx="22" cy="20" r="1.5" fill="#EFF7DB" opacity="0.8" />
              <circle cx="34" cy="22" r="1.5" fill="#EFF7DB" opacity="0.8" />
            </svg>
          </div>
        </div>

        {/* Foreground 3: Ripe Avocado Crescent (Bottom-Center Front) */}
        <div
          className={`absolute bottom-[2%] left-[42%] ${
            reducedMotion ? '' : 'animate-float-slow'
          }`}
          style={{ animationDuration: '10s', animationDelay: '-4s' }}
        >
          <div className="relative w-16 h-12 filter drop-shadow-[0_16px_28px_rgba(0,0,0,0.65)] rotate-[15deg]">
            <svg viewBox="0 0 64 48" fill="none" className="w-full h-full">
              {/* Dark textured skin */}
              <path
                d="M 6 36 C 14 44 48 46 58 32 C 54 22 42 12 28 14 C 16 16 10 26 6 36 Z"
                fill="#1E2818"
              />
              {/* Creamy golden-green flesh */}
              <path
                d="M 10 33 C 18 40 44 41 53 30 C 50 22 40 16 28 17 C 18 19 14 26 10 33 Z"
                fill="#B8C96C"
              />
              {/* Pale buttery core */}
              <path
                d="M 18 30 C 24 35 40 36 47 28 C 44 23 36 20 28 20 C 22 21 19 25 18 30 Z"
                fill="#E2EB9E"
              />
            </svg>
          </div>
        </div>

        {/* Foreground 4: Crisp Cucumber Wheel (Top-Right Front) */}
        <div
          className={`absolute top-[20%] right-[4%] ${
            reducedMotion ? '' : 'animate-float-slow'
          }`}
          style={{ animationDuration: '9.2s', animationDelay: '-1.5s' }}
        >
          <div className="relative w-12 h-12 filter drop-shadow-[0_12px_22px_rgba(0,0,0,0.55)] rotate-[35deg]">
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
              {/* Dark green skin */}
              <circle cx="24" cy="24" r="22" fill="#2E5429" />
              {/* Crisp translucent pale flesh */}
              <circle cx="24" cy="24" r="19" fill="#CCE6C4" />
              <circle cx="24" cy="24" r="13" fill="#DFF0D8" />
              {/* Seed ring */}
              <ellipse cx="24" cy="18" rx="1.5" ry="3" fill="#B3D7A6" />
              <ellipse cx="24" cy="30" rx="1.5" ry="3" fill="#B3D7A6" />
              <ellipse cx="18" cy="24" rx="3" ry="1.5" fill="#B3D7A6" />
              <ellipse cx="30" cy="24" rx="3" ry="1.5" fill="#B3D7A6" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 6. DRIFTING VITALITY PARTICLES */}
      {/* ========================================================================= */}
      <div className="pointer-events-none absolute inset-[-10%] z-25 overflow-hidden">
        {[
          { top: '15%', left: '25%', size: 3, delay: '0s', opacity: 0.7 },
          { top: '75%', left: '80%', size: 4, delay: '2s', opacity: 0.6 },
          { top: '35%', left: '88%', size: 2.5, delay: '4s', opacity: 0.8 },
          { top: '82%', left: '20%', size: 3.5, delay: '1s', opacity: 0.5 },
          { top: '10%', left: '70%', size: 2, delay: '3s', opacity: 0.75 },
        ].map((pt, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-[#78956F] shadow-[0_0_8px_#78956F] ${
              reducedMotion ? '' : 'animate-float-slow'
            }`}
            style={{
              top: pt.top,
              left: pt.left,
              width: `${pt.size}px`,
              height: `${pt.size}px`,
              opacity: pt.opacity,
              animationDelay: pt.delay,
              animationDuration: '6s'
            }}
          />
        ))}
      </div>
    </div>
  );
}
