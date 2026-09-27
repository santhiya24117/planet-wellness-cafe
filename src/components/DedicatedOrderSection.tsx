import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ShoppingBag, UtensilsCrossed, ArrowUpRight } from 'lucide-react';
import { orderLinks } from '../config/orderLinks';
import { createWhatsAppOrderLink } from '../utils/whatsapp';

export default function DedicatedOrderSection() {
  const whatsappUrl = createWhatsAppOrderLink(orderLinks.whatsappNumber);

  return (
    <section id="order-section" className="relative w-full bg-[#172019] text-[#F4F0E6] py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#78956F] block">
                ORDER CONVERSION
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(44px,6vw,92px)] font-medium leading-[0.88] tracking-[-0.04em] text-white mb-6"
            >
              READY<br />
              WHEN<br />
              <span className="italic font-light text-[#D8D1BF]">YOU ARE.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm md:text-base text-[#D8D1BF] leading-relaxed max-w-md mb-8"
            >
              Choose how you want to order. Fresh food is only a few taps away.
              Connect directly with our café counter in Saligramam or have signature items brought to your door.
            </motion.p>

            <div className="text-xs uppercase tracking-[0.2em] text-[#78956F] font-semibold">
              SALIGRAMAM, CHENNAI · FRESH DAILY
            </div>
          </div>

          {/* Right Column: 3-Route Ordering Cards */}
          <div className="lg:col-span-7 space-y-4">
            {/* Route 01: WhatsApp Direct (Highest Emphasis) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 md:p-8 bg-[#111612] border border-[#78956F]/40 rounded-2xl relative overflow-hidden group hover:border-[#78956F] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#78956F]/20 text-[#78956F] rounded-xl shrink-0 mt-1">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] font-semibold text-[#78956F] uppercase block mb-1">
                      01 · DIRECT ORDER & ENQUIRY
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-medium text-white mb-1">
                      WhatsApp Ordering
                    </h3>
                    <p className="text-xs md:text-sm text-[#A8A08C]">
                      Talk to us directly and place your order. Fastest confirmation for custom requests.
                    </p>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#78956F] hover:bg-[#8ea885] text-[#111612] font-semibold text-xs tracking-wider uppercase rounded-xl transition-all hover:-translate-y-0.5 whitespace-nowrap min-h-[44px]"
                >
                  <span>ORDER VIA WHATSAPP</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Route 02: Swiggy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 md:p-7 bg-[#111612]/60 border border-white/10 hover:border-white/30 rounded-2xl transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 text-white/80 rounded-xl shrink-0 mt-1">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] font-semibold text-[#A8A08C] uppercase block mb-1">
                      02 · DOORSTEP DELIVERY
                    </span>
                    <h3 className="font-display text-2xl font-medium text-white mb-1">
                      Swiggy Delivery
                    </h3>
                    <p className="text-xs md:text-sm text-[#A8A08C]">
                      Order through Swiggy. Live tracking and convenient delivery in Chennai.
                    </p>
                  </div>
                </div>

                <a
                  href={orderLinks.swiggyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-white/20 hover:border-white text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-all hover:bg-white/10 whitespace-nowrap min-h-[44px]"
                >
                  <span>ORDER ON SWIGGY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Route 03: Zomato */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 md:p-7 bg-[#111612]/60 border border-white/10 hover:border-white/30 rounded-2xl transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 text-white/80 rounded-xl shrink-0 mt-1">
                    <UtensilsCrossed className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] font-semibold text-[#A8A08C] uppercase block mb-1">
                      03 · DOORSTEP DELIVERY
                    </span>
                    <h3 className="font-display text-2xl font-medium text-white mb-1">
                      Zomato Delivery
                    </h3>
                    <p className="text-xs md:text-sm text-[#A8A08C]">
                      Order through Zomato. Explore complete verified catalog & reviews.
                    </p>
                  </div>
                </div>

                <a
                  href={orderLinks.zomatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-white/20 hover:border-white text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-all hover:bg-white/10 whitespace-nowrap min-h-[44px]"
                >
                  <span>ORDER ON ZOMATO</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
