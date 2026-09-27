import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import DriftWall from './DriftWall';
import { foodImages } from '../data/foodImages';
import { images } from '../data/images';

export default function SaladStory() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="craft-film" className="relative w-full bg-[#111612] text-[#F4F0E6] overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
      {/* Intro Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="inline-block"
        >
          <span className="text-[11px] md:text-xs tracking-[0.25em] font-semibold text-[#78956F] uppercase">
            THIS IS HOW FRESH STARTS.
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mt-3">
            A Food Film in Daily Motion
          </h2>
        </motion.div>
      </div>

      {/* DriftWall as cinematic background atmosphere */}
      <div className="relative w-full">
        {isMobile ? (
          <DriftWall
            items={foodImages}
            columns={3}
            tileWidth={145}
            tileHeight={98}
            gap={10}
            radius={14}
            tilt={8}
            turn={-6}
            perspective={1000}
            depth={80}
            speed={18}
            direction="up"
            variance={0.2}
            parallax={0.2}
            pauseOnHover={false}
            lift={35}
            fade={0.65}
            dim={0.52}
            grayscale={false}
            overlayColor="#111612"
            style={{ height: '480px' }}
          />
        ) : (
          <DriftWall
            items={foodImages}
            columns={5}
            tileWidth={220}
            tileHeight={148}
            gap={18}
            radius={16}
            tilt={12}
            turn={-10}
            perspective={1200}
            depth={120}
            speed={26}
            direction="up"
            variance={0.32}
            parallax={0.45}
            pauseOnHover={true}
            lift={70}
            fade={0.62}
            dim={0.5}
            grayscale={false}
            overlayColor="#111612"
            style={{ height: '640px' }}
          />
        )}

        {/* Foreground Centerpiece Arch: Salad Preparation Video Composition */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4 z-20">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] h-[480px] sm:h-[580px] md:h-[640px] overflow-hidden border border-white/20 shadow-2xl shadow-black/80 bg-[#172019]"
            style={{
              borderRadius: '240px 240px 24px 24px',
            }}
          >
            {/* Background video / poster with graceful fallback */}
            <video
              src="/videos/salad-preparation.mp4"
              poster={images.saladVideoPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* In case video is loading or fallback poster */}
            <img
              src={images.saladVideoPoster}
              alt="Salad Preparation at Planet Wellness Café"
              className="absolute inset-0 w-full h-full object-cover -z-10"
              referrerPolicy="no-referrer"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111612] via-[#111612]/30 to-transparent pointer-events-none" />

            {/* Top Badge */}
            <div className="absolute top-8 left-0 right-0 flex justify-between items-center px-8 text-white z-10">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#78956F] bg-[#111612]/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                01 — PREP
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-white/90 bg-[#111612]/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                MADE FRESH
              </span>
            </div>

            {/* Bottom Content in Arch */}
            <div className="absolute bottom-8 left-8 right-8 text-white z-10">
              <h3 className="font-display font-light text-3xl sm:text-4xl md:text-5xl leading-[0.92] tracking-tight mb-3">
                FROM<br />
                FRESH<br />
                TO<br />
                PLATE.
              </h3>
              <p className="text-xs sm:text-sm text-[#D8D1BF] leading-relaxed max-w-xs font-normal">
                Fresh ingredients. Simple preparation. Food made with intention.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
