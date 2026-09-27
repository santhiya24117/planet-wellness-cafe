import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import OrderOptions from './OrderOptions';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName?: string;
}

export default function OrderModal({ isOpen, onClose, itemName }: OrderModalProps) {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111612]/75 backdrop-blur-md cursor-pointer"
          />

          {/* Modal / Bottom Sheet */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[560px] bg-[#F4F0E6] text-[#172019] rounded-t-3xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#172019]/10">
              <div>
                <span className="text-[11px] tracking-[0.2em] font-medium text-[#78956F] uppercase block mb-1">
                  PLANET WELLNESS CAFÉ
                </span>
                <h3
                  id="order-modal-title"
                  className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#172019]"
                >
                  ORDER YOUR WAY.
                </h3>
                <p className="text-xs sm:text-sm text-[#172019]/70 mt-1">
                  {itemName ? (
                    <span>
                      Ordering: <strong className="text-[#172019]">{itemName}</strong>
                    </span>
                  ) : (
                    'Choose the option that works for you.'
                  )}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 -mr-2 text-[#172019]/60 hover:text-[#172019] rounded-full hover:bg-[#172019]/5 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close ordering options"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="pt-6">
              <OrderOptions itemName={itemName} onSelectOption={onClose} />
            </div>

            <div className="mt-6 pt-4 text-center border-t border-[#172019]/10">
              <p className="text-[11px] text-[#A8A08C] uppercase tracking-wider">
                SALIGRAMAM, CHENNAI · FRESH DAILY
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
