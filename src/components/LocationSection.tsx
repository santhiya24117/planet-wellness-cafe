import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowUpRight, Clock, Compass } from 'lucide-react';
import { orderLinks } from '../config/orderLinks';

interface LocationSectionProps {
  onOpenOrderModal: () => void;
}

export default function LocationSection({ onOpenOrderModal }: LocationSectionProps) {
  return (
    <section id="location" className="relative w-full bg-[#F4F0E6] text-[#172019] py-24 md:py-36 border-t border-[#172019]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Address */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#78956F] block">
                VISIT THE SPACE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(44px,6.5vw,96px)] font-medium leading-[0.88] tracking-[-0.04em] text-[#172019] mb-8"
            >
              FIND<br />
              YOUR <span className="italic font-light text-[#78956F]">PLANET.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6 mb-10"
            >
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#78956F] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-base text-[#172019] mb-1">
                    Saligramam Café Counter
                  </h3>
                  <p className="text-sm text-[#172019]/75 leading-relaxed">
                    Shanthi Nagar, Arunachalam Road<br />
                    Saligramam, Chennai, Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#78956F] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-base text-[#172019] mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-sm text-[#172019]/75">
                    Open Daily: 08:00 AM — 10:30 PM<br />
                    Fresh kitchen prep starting 07:30 AM
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Direction and Order Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={orderLinks.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#172019] text-[#F4F0E6] hover:bg-[#253328] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 hover:-translate-y-0.5 min-h-[44px]"
              >
                <Compass className="w-4 h-4 text-[#78956F]" />
                <span>GET DIRECTIONS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-[#172019]/30 text-[#172019] hover:bg-[#172019] hover:text-[#F4F0E6] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer min-h-[44px]"
              >
                <span>ORDER ONLINE</span>
                <span className="text-sm">↗</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visual Location Vignette */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="relative p-8 md:p-12 rounded-3xl bg-[#172019] text-[#F4F0E6] border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-[10px] tracking-[0.24em] font-semibold text-[#78956F] uppercase block mb-3">
                  LOCATION & ATMOSPHERE
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-white font-medium mb-4">
                  A sanctuary for mindful eaters in Saligramam.
                </h3>
                <p className="text-sm text-[#D8D1BF] leading-relaxed mb-8">
                  Whether stepping in for your post-workout protein smoothie, grabbing a crisp baguette
                  between work sprints, or relaxing over cold brewed Arabica, Planet Wellness is designed
                  for your everyday rhythm.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10 text-xs text-[#D8D1BF]">
                  <div>
                    <span className="text-[#78956F] block uppercase tracking-wider font-semibold mb-1">
                      PARKING & ACCESS
                    </span>
                    Easy curbside bike & car access on Arunachalam Rd.
                  </div>
                  <div>
                    <span className="text-[#78956F] block uppercase tracking-wider font-semibold mb-1">
                      SERVICE MODES
                    </span>
                    Dine-in, Takeaway, WhatsApp Direct & Delivery.
                  </div>
                </div>
              </div>

              {/* Decorative background glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#78956F]/10 blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
