import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, ArrowUpRight, Check } from 'lucide-react';
import { SubscriptionPlan } from '../data/subscriptions';
import { orderLinks } from '../config/orderLinks';
import { createWhatsAppSubscriptionLink } from '../utils/whatsapp';

interface SubscriptionEnquiryModalProps {
  plan: SubscriptionPlan | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SubscriptionEnquiryModal({
  plan,
  isOpen,
  onClose
}: SubscriptionEnquiryModalProps) {
  const [selectedCadence, setSelectedCadence] = useState<string>('');
  const [dietary, setDietary] = useState<string>('Vegetarian');
  const [timing, setTiming] = useState<string>('Lunch (12:30 PM)');
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    if (plan) {
      if (plan.pricing.weekly) {
        setSelectedCadence(`Weekly (${plan.pricing.weekly})`);
      } else if (plan.pricing.daily) {
        setSelectedCadence(`Daily (${plan.pricing.daily})`);
      }
    }
  }, [plan]);

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

  if (!plan) return null;

  const whatsappUrl = createWhatsAppSubscriptionLink(orderLinks.whatsappNumber, plan.name, {
    cadence: selectedCadence,
    dietary,
    timing,
    notes: notes.trim() || undefined
  });

  const availableCadences = [
    plan.pricing.daily && { label: 'Daily Trial', value: `Daily (${plan.pricing.daily})`, price: plan.pricing.daily },
    plan.pricing.weekly && { label: 'Weekly (7 Days)', value: `Weekly (${plan.pricing.weekly})`, price: plan.pricing.weekly },
    plan.pricing.monthly && { label: 'Monthly (30 Days)', value: `Monthly (${plan.pricing.monthly})`, price: plan.pricing.monthly }
  ].filter(Boolean) as { label: string; value: string; price: string }[];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="subscription-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111612]/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[620px] bg-[#F4F0E6] text-[#172019] rounded-2xl sm:rounded-3xl border border-[#172019]/15 shadow-2xl p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#172019]/10">
              <div>
                <span className="text-[11px] tracking-[0.2em] font-semibold text-[#78956F] uppercase block mb-1">
                  PLANET WELLNESS · SUBSCRIPTION ENQUIRY
                </span>
                <h3
                  id="subscription-modal-title"
                  className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#172019]"
                >
                  {plan.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#172019]/75 mt-1 font-medium">
                  {plan.mealBreakdown}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 -mr-2 text-[#172019]/60 hover:text-[#172019] rounded-full hover:bg-[#172019]/5 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close subscription enquiry"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Details */}
            <div className="pt-6 space-y-6">
              {/* Cadence Selection */}
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-[#172019]/80 block mb-2.5">
                  1. SELECT PLAN DURATION
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {availableCadences.map((cadence) => {
                    const isSelected = selectedCadence === cadence.value;
                    return (
                      <button
                        key={cadence.value}
                        type="button"
                        onClick={() => setSelectedCadence(cadence.value)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between min-h-[50px] ${
                          isSelected
                            ? 'bg-[#172019] text-[#F4F0E6] border-[#172019] shadow-md'
                            : 'bg-white/60 text-[#172019] border-[#172019]/15 hover:border-[#172019]/40'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-semibold">{cadence.label}</div>
                          <div className={`font-mono text-xs mt-0.5 tabular-nums ${isSelected ? 'text-[#78956F]' : 'text-[#172019]/70'}`}>
                            {cadence.price}
                          </div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-[#78956F]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dietary Preferences */}
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-[#172019]/80 block mb-2">
                  2. DIETARY PREFERENCE
                </label>
                <div className="flex flex-wrap gap-2">
                  {['100% Vegetarian', 'Egg-Friendly', 'High Protein Focus'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setDietary(opt)}
                      className={`px-3.5 py-2 rounded-full text-xs font-medium border transition-colors cursor-pointer min-h-[40px] ${
                        dietary === opt
                          ? 'bg-[#172019] text-[#F4F0E6] border-[#172019]'
                          : 'bg-white/60 text-[#172019] border-[#172019]/15 hover:border-[#172019]/30'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Window */}
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-[#172019]/80 block mb-2">
                  3. PREFERRED DELIVERY TIMING
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Lunch (12:30 PM)', 'Dinner (7:30 PM)', 'Both Windows'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setTiming(opt)}
                      className={`px-3.5 py-2 rounded-full text-xs font-medium border transition-colors cursor-pointer min-h-[40px] ${
                        timing === opt
                          ? 'bg-[#172019] text-[#F4F0E6] border-[#172019]'
                          : 'bg-white/60 text-[#172019] border-[#172019]/15 hover:border-[#172019]/30'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-[#172019]/80 block mb-1.5">
                  ANY ALLERGIES OR SPECIAL PREFERENCES? (OPTIONAL)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. No dairy, extra greens, specific delivery instructions"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/70 border border-[#172019]/20 text-xs sm:text-sm text-[#172019] focus:outline-none focus:border-[#78956F]"
                />
              </div>

              {/* Features Summary */}
              <div className="p-4 bg-white/40 rounded-xl border border-[#172019]/10 text-xs space-y-1.5">
                <span className="font-semibold text-[#172019] block mb-1 uppercase tracking-wide">
                  PLAN INCLUSIONS:
                </span>
                {plan.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-[#172019]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#78956F] shrink-0 mt-1.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Primary Action Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-[#172019] hover:bg-[#253328] text-[#F4F0E6] font-semibold text-xs tracking-widest uppercase rounded-xl transition-all shadow-lg hover:-translate-y-0.5 min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 text-[#78956F]" />
                  <span>START SUBSCRIPTION VIA WHATSAPP</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-center text-[11px] text-[#A8A08C] mt-2.5">
                  Direct inquiry confirmed with Planet Wellness Café kitchen team in Saligramam.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
