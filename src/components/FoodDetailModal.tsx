import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { StackCardItem } from '../data/wellnessCards';
import { orderLinks } from '../config/orderLinks';
import { createWhatsAppOrderLink } from '../utils/whatsapp';

interface FoodDetailModalProps {
  card: StackCardItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenOrderOptions?: (itemName: string) => void;
}

export default function FoodDetailModal({
  card,
  isOpen,
  onClose,
  onOpenOrderOptions
}: FoodDetailModalProps) {
  const [selectedDish, setSelectedDish] = useState<string>('');

  useEffect(() => {
    if (card && card.featuredDishes.length > 0) {
      setSelectedDish(card.featuredDishes[0].name);
    }
  }, [card]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!card) return null;

  const currentDishName = selectedDish || card.category;
  const whatsappUrl = createWhatsAppOrderLink(orderLinks.whatsappNumber, currentDishName);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="food-modal-title"
        >
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111612]/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[840px] bg-[#172019] text-[#F4F0E6] rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#111612]/70 text-white/80 hover:text-white hover:bg-[#111612] transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close food details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image Section */}
            <div className="relative md:w-1/2 min-h-[220px] md:min-h-full">
              <img
                src={card.image}
                alt={card.category}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172019] via-[#172019]/30 to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#172019]" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] tracking-[0.2em] font-medium text-[#78956F] uppercase">
                  CATEGORY {card.categoryNumber}
                </span>
                <h4 className="font-display text-2xl text-white font-medium">
                  {card.category}
                </h4>
              </div>
            </div>

            {/* Right Details Section */}
            <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] tracking-[0.2em] font-semibold text-[#78956F] uppercase">
                    PLANET WELLNESS
                  </span>
                  <span className="text-xs text-[#A8A08C]">SIGNATURE 0{card.categoryNumber}</span>
                </div>

                <h3
                  id="food-modal-title"
                  className="font-display text-2xl md:text-3xl font-medium tracking-tight text-white mb-2"
                >
                  {card.headline}
                </h3>
                <p className="text-xs md:text-sm text-[#D8D1BF] leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Featured Dishes List */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] tracking-[0.16em] uppercase text-[#A8A08C] block mb-2 font-medium">
                    FEATURED SELECTIONS:
                  </span>
                  {card.featuredDishes.map((dish) => {
                    const isSelected = selectedDish === dish.name;
                    return (
                      <div
                        key={dish.name}
                        onClick={() => setSelectedDish(dish.name)}
                        className={`p-3 rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#78956F]/20 border-[#78956F] text-white'
                            : 'bg-white/5 border-white/5 hover:border-white/20 text-[#D8D1BF]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-medium">
                            {dish.name}
                          </span>
                          <span className="font-mono text-xs text-[#78956F] font-semibold tabular-nums">
                            {dish.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#A8A08C] mt-0.5">
                          {dish.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#78956F] text-[#111612] hover:bg-[#8ea885] font-semibold text-xs tracking-wider uppercase rounded-lg transition-all min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ORDER THIS ↗</span>
                </a>

                {onOpenOrderOptions && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenOrderOptions(currentDishName);
                    }}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 bg-transparent border border-white/20 hover:border-white text-xs tracking-wider uppercase text-white rounded-lg transition-colors min-h-[44px] cursor-pointer"
                  >
                    <span>MORE OPTIONS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
