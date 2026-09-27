import React from 'react';
import { motion } from 'motion/react';
import { images } from '../data/images';

interface DailyResetProps {
  onOpenOrderModal: () => void;
}

export default function DailyReset({ onOpenOrderModal }: DailyResetProps) {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center justify-center bg-[#111612] text-[#F4F0E6] overflow-hidden py-24 md:py-36">
      {/* Background Cinematic Food & Coffee Photography */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={images.dailyReset}
          alt="Coffee and reset moments at Planet Wellness Café"
          className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.1]"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111612] via-transparent to-[#111612]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#78956F] mb-6"
        >
          MOMENTS OF CALM & NOURISHMENT
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(52px,8vw,110px)] font-medium leading-[0.88] tracking-[-0.04em] text-white mb-8"
        >
          YOUR<br />
          DAILY<br />
          <span className="italic font-light text-[#D8D1BF]">RESET.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-lg text-sm md:text-base text-[#D8D1BF] leading-relaxed mb-10 font-normal"
        >
          <p>
            Coffee when you need focus.<br />
            Something fresh when you need energy.<br />
            A place to slow down, refuel, and start again.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <button
            type="button"
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F4F0E6] text-[#172019] hover:bg-white text-xs font-semibold tracking-[0.18em] uppercase rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer min-h-[44px]"
          >
            <span>ORDER YOUR RESET</span>
            <span className="text-sm">↗</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
