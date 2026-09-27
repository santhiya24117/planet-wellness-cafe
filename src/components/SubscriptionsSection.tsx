import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MessageCircle, Check } from 'lucide-react';
import { subscriptionPlans, SubscriptionPlan } from '../data/subscriptions';
import SubscriptionEnquiryModal from './SubscriptionEnquiryModal';

export default function SubscriptionsSection() {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenEnquiry = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  return (
    <section id="subscriptions" className="relative w-full bg-[#111612] text-[#F4F0E6] py-24 md:py-36 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#78956F] block">
                PLANET WELLNESS · SUBSCRIPTIONS
              </span>
              <span className="text-[#A8A08C]" aria-hidden="true">·</span>
              <span className="text-[11px] tracking-[0.2em] font-semibold text-[#D8D1BF] uppercase">
                MAKE IT A ROUTINE.
              </span>
            </div>

            <h2 className="font-display text-[clamp(44px,6.5vw,96px)] font-medium leading-[0.88] tracking-[-0.04em] text-white">
              HEALTHY<br />
              MEALS.<br />
              MADE<br />
              <span className="italic font-light text-[#D8D1BF]">EFFORTLESS.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm md:text-base text-[#D8D1BF] leading-relaxed">
              Eat fresh. Stay energized. Make healthy eating effortless with our daily meal subscriptions.
              Chef-crafted in Saligramam with seasonal produce, designed around your everyday movement.
            </p>
          </div>
        </div>

        {/* 3 Subscription Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {subscriptionPlans.map((plan, index) => {
            const isFeatured = Boolean(plan.badge);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl md:rounded-3xl transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#172019] text-[#F4F0E6] border-2 border-[#78956F] shadow-2xl shadow-black/50 md:-translate-y-2'
                    : 'bg-[#172019]/70 text-[#F4F0E6] border border-white/10 hover:border-white/25'
                }`}
              >
                {/* Most Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#78956F] text-[#111612] text-[10px] font-bold tracking-[0.2em] uppercase shadow-md whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Eyebrow & Title */}
                  <div className="mb-4">
                    <span className="text-[10px] tracking-[0.2em] font-semibold text-[#78956F] uppercase block mb-1">
                      PLAN 0{index + 1}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#A8A08C] leading-relaxed mb-6">
                    {plan.tagline}
                  </p>

                  {/* Meal Breakdown highlight box */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 mb-6">
                    <span className="text-[10px] tracking-[0.16em] uppercase text-[#78956F] font-semibold block mb-0.5">
                      DAILY PORTION:
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[#F4F0E6]">
                      {plan.mealBreakdown}
                    </span>
                  </div>

                  {/* Pricing Matrix */}
                  <div className="space-y-2 py-4 border-y border-white/10 mb-6 font-mono text-xs">
                    {plan.pricing.daily && (
                      <div className="flex justify-between items-center text-[#D8D1BF]">
                        <span className="text-[11px] font-sans uppercase tracking-wider text-[#A8A08C]">Daily Trial</span>
                        <span className="font-semibold text-white tabular-nums">{plan.pricing.daily}</span>
                      </div>
                    )}
                    {plan.pricing.weekly && (
                      <div className="flex justify-between items-center text-[#D8D1BF]">
                        <span className="text-[11px] font-sans uppercase tracking-wider text-[#A8A08C]">Weekly (7 Days)</span>
                        <span className="font-semibold text-[#78956F] tabular-nums">{plan.pricing.weekly}</span>
                      </div>
                    )}
                    {plan.pricing.monthly && (
                      <div className="flex justify-between items-center text-[#D8D1BF]">
                        <span className="text-[11px] font-sans uppercase tracking-wider text-[#A8A08C]">Monthly (30 Days)</span>
                        <span className="font-semibold text-white tabular-nums">{plan.pricing.monthly}</span>
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8 text-xs text-[#D8D1BF]">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#78956F] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquire Button */}
                <button
                  type="button"
                  onClick={() => handleOpenEnquiry(plan)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-semibold uppercase tracking-[0.14em] rounded-xl transition-all cursor-pointer min-h-[44px] ${
                    isFeatured
                      ? 'bg-[#78956F] hover:bg-[#8ea885] text-[#111612] shadow-lg'
                      : 'bg-white/10 hover:bg-white text-white hover:text-[#111612] border border-white/20'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ENQUIRE PLAN</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote reassurance */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A08C]">
          <p>
            *Customized portions, low-sodium adjustments, and delivery slot pause available on request.
          </p>
          <p className="text-[11px] tracking-widest uppercase text-[#78956F] font-semibold">
            Saligramam Kitchen · Prepared Fresh Daily
          </p>
        </div>
      </div>

      {/* Subscription Enquiry Modal */}
      <SubscriptionEnquiryModal
        plan={selectedPlan}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
