import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { menuItems, menuCategories } from '../data/menu';
import { orderLinks } from '../config/orderLinks';
import { createWhatsAppOrderLink } from '../utils/whatsapp';

interface SignatureMenuProps {
  onOpenOrderModal: (itemName?: string) => void;
}

export default function SignatureMenu({ onOpenOrderModal }: SignatureMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="signature-menu" className="relative w-full bg-[#F4F0E6] text-[#172019] py-24 md:py-36 border-t border-[#172019]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#78956F] block mb-2">
              CURATED SELECTIONS
            </span>
            <h2 className="font-display text-[clamp(40px,5.5vw,80px)] font-medium leading-[0.9] tracking-tight text-[#172019]">
              FROM THE PLANET
            </h2>
          </div>

          <p className="text-xs md:text-sm text-[#172019]/70 max-w-sm">
            Handcrafted beverages, crisp grain boxes, and artisan toasts prepared with uncompromised vitality.
          </p>
        </div>

        {/* Filter Navigation (Interactive button segmented tabs as per frontend-design) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-[#172019]/10">
          {menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap min-h-[44px] ${
                  isActive
                    ? 'bg-[#172019] text-[#F4F0E6] shadow-md'
                    : 'bg-transparent text-[#172019]/60 hover:text-[#172019] hover:bg-[#172019]/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Horizontal Menu Table / Rows */}
        <div className="divide-y divide-[#172019]/10 border-b border-[#172019]/10">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const formattedNumber = (index + 1).toString().padStart(2, '0');
              const whatsappUrl = createWhatsAppOrderLink(orderLinks.whatsappNumber, item.name);

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredItemId(item.id)}
                  onMouseLeave={() => setHoveredItemId(null)}
                  className="group py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-[#172019]/[0.03] px-3 md:px-6 rounded-xl"
                >
                  {/* Left: Number & Name */}
                  <div className="flex items-start md:items-center gap-4 md:gap-8">
                    <span className="font-mono text-xs md:text-sm text-[#A8A08C] font-semibold tabular-nums pt-1 md:pt-0">
                      {formattedNumber}
                    </span>

                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight text-[#172019] group-hover:text-[#78956F] transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-[10px] tracking-[0.16em] uppercase font-semibold text-[#78956F] bg-[#78956F]/10 px-2 py-0.5 rounded">
                          {item.categoryLabel}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-[#172019]/70 mt-1 max-w-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Price & Order Action */}
                  <div className="flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0">
                    <span className="font-mono text-base md:text-lg font-semibold text-[#172019] tabular-nums">
                      {item.price}
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#172019] text-[#F4F0E6] hover:bg-[#78956F] hover:text-[#111612] text-xs font-semibold tracking-wider uppercase rounded-lg transition-all min-h-[44px]"
                        aria-label={`Order ${item.name} on WhatsApp`}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>ORDER</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <button
                        type="button"
                        onClick={() => onOpenOrderModal(item.name)}
                        className="hidden sm:inline-flex items-center justify-center p-2.5 text-[#172019]/70 hover:text-[#172019] hover:bg-[#172019]/10 rounded-lg transition-colors cursor-pointer min-w-[44px] min-h-[44px]"
                        aria-label={`More ordering options for ${item.name}`}
                        title="More options"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Menu Action */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-xs text-[#A8A08C]">
            *Prices and seasonal availability subject to daily market harvest.
          </p>

          <button
            type="button"
            onClick={() => onOpenOrderModal()}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#172019] hover:text-[#78956F] transition-colors py-2 cursor-pointer min-h-[44px]"
          >
            <span>VIEW FULL ORDERING OPTIONS</span>
            <span className="text-sm">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
