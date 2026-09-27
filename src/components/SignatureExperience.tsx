import React, { useState } from 'react';
import { motion } from 'motion/react';
import Stack from './Stack';
import WellnessOrbit from './WellnessOrbit';
import FoodDetailModal from './FoodDetailModal';
import { wellnessStackCards, StackCardItem } from '../data/wellnessCards';

interface SignatureExperienceProps {
  onOpenOrderOptions: (itemName: string) => void;
}

export default function SignatureExperience({ onOpenOrderOptions }: SignatureExperienceProps) {
  const [selectedCard, setSelectedCard] = useState<StackCardItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (card: StackCardItem) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  return (
    <section id="signature-experience" className="relative w-full bg-[#F4F0E6] text-[#172019] py-20 md:py-32 overflow-hidden">
      {/* Subtle Floating Editorial Labels (Section 30) */}
      <div className="hidden lg:block absolute top-16 left-12 text-[10px] tracking-[0.22em] uppercase text-[#A8A08C]">
        FRESH DAILY
      </div>
      <div className="hidden lg:block absolute top-16 right-12 text-[10px] tracking-[0.22em] uppercase text-[#A8A08C]">
        SALIGRAMAM · CHENNAI
      </div>
      <div className="hidden lg:block absolute bottom-16 left-12 text-[10px] tracking-[0.22em] uppercase text-[#A8A08C]">
        EAT FRESH / FEEL GOOD / LIVE BETTER
      </div>
      <div className="hidden lg:block absolute bottom-16 right-12 text-[10px] tracking-[0.22em] uppercase text-[#A8A08C]">
        09 — 23
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#78956F] block">
                PLANET WELLNESS · SIGNATURES
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(44px,6.5vw,94px)] font-medium leading-[0.88] tracking-[-0.04em] text-[#172019] mb-8"
            >
              FRESH.<br />
              CLEAN.<br />
              FULL OF<br />
              <span className="italic font-light text-[#78956F]">FLAVOUR.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm md:text-base text-[#172019]/75 max-w-lg leading-relaxed mb-8"
            >
              Explore our core culinary pillars designed around crisp wholesome textures,
              slow-crafted recipes, and refreshing ingredients prepared fresh every single day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-6 text-xs text-[#172019]/80 font-medium tracking-wide uppercase"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#78956F]" />
                <span>01 Smoothies</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#78956F]" />
                <span>02 Power Meals</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#78956F]" />
                <span>03 Baguettes</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: React Bits Stack Component */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center justify-center"
            >
              {/* Perfectly aligned circular loop behind the cards */}
              <WellnessOrbit className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

              <Stack
                cards={wellnessStackCards}
                randomRotation={true}
                sensitivity={140}
                sendToBackOnClick={true}
                autoplay={true}
                autoplayDelay={4200}
                pauseOnHover={true}
                mobileClickOnly={true}
                mobileBreakpoint={768}
                animationConfig={{
                  stiffness: 260,
                  damping: 20
                }}
                onCardClick={handleCardClick}
              />

              <p className="text-center text-[11px] tracking-[0.18em] uppercase text-[#A8A08C] mt-6 select-none">
                CLICK OR DRAG CARDS TO DISCOVER
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stack Detail Modal */}
      <FoodDetailModal
        card={selectedCard}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onOpenOrderOptions={onOpenOrderOptions}
      />
    </section>
  );
}
