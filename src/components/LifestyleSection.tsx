import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import BounceCards from './BounceCards';
import { lifestyleImages } from '../data/foodImages';

export default function LifestyleSection() {
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
    <section className="relative w-full bg-[#172019] text-[#F4F0E6] py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#78956F] mb-4"
          >
            A DIFFERENT KIND OF CAFÉ
          </motion.span>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(44px,6.5vw,98px)] font-medium leading-[0.88] tracking-[-0.04em] text-white max-w-4xl mb-8"
          >
            EAT WELL.<br />
            MOVE MORE.<br />
            <span className="italic font-light text-[#D8D1BF]">FEEL GOOD.</span>
          </motion.h2>

          {/* BounceCards Composition */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="my-10 md:my-14 flex justify-center w-full"
          >
            <BounceCards
              className="wellness-bounce-cards"
              images={lifestyleImages}
              containerWidth={isMobile ? 340 : 520}
              containerHeight={isMobile ? 220 : 300}
              animationDelay={0.4}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={
                isMobile
                  ? [
                      'rotate(4deg) translate(-100px)',
                      'rotate(0deg) translate(-50px)',
                      'rotate(-4deg)',
                      'rotate(4deg) translate(50px)',
                      'rotate(-4deg) translate(100px)'
                    ]
                  : [
                      'rotate(5deg) translate(-150px)',
                      'rotate(0deg) translate(-70px)',
                      'rotate(-5deg)',
                      'rotate(5deg) translate(70px)',
                      'rotate(-5deg) translate(150px)'
                    ]
              }
              enableHover={!isMobile}
            />
          </motion.div>

          {/* Narrative Body Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-xl mx-auto text-sm md:text-base text-[#D8D1BF] leading-relaxed mb-8"
          >
            <p>
              Fresh food. Good coffee. A place to pause, meet, refuel and keep moving.
            </p>
          </motion.div>

          {/* Core Brand Triad */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase font-semibold text-[#78956F]"
          >
            <span>CAFÉ</span>
            <span className="text-[#A8A08C]">+</span>
            <span>MOVEMENT</span>
            <span className="text-[#A8A08C]">+</span>
            <span>COMMUNITY</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
