import React from 'react';
import { MessageCircle, ArrowUpRight, ShoppingBag, UtensilsCrossed } from 'lucide-react';
import { orderLinks } from '../config/orderLinks';
import { createWhatsAppOrderLink } from '../utils/whatsapp';

interface OrderOptionsProps {
  itemName?: string;
  onSelectOption?: () => void;
  className?: string;
}

export default function OrderOptions({
  itemName,
  onSelectOption,
  className = ''
}: OrderOptionsProps) {
  const whatsappUrl = createWhatsAppOrderLink(orderLinks.whatsappNumber, itemName);

  return (
    <div className={`space-y-4 ${className}`}>
      {/* 01: WHATSAPP - Primary & Highest Emphasis */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onSelectOption}
        className="group relative flex items-center justify-between p-5 md:p-6 bg-[#172019] text-[#F4F0E6] border border-[#78956F]/40 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#78956F] hover:shadow-xl hover:shadow-[#172019]/40 min-h-[56px]"
      >
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-[#78956F]/20 text-[#78956F] shrink-0 mt-0.5">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] tracking-[0.2em] font-medium text-[#78956F] uppercase">
                01 · DIRECT ORDER
              </span>
            </div>
            <h4 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-white group-hover:text-[#D8D1BF] transition-colors">
              Order via WhatsApp
            </h4>
            <p className="text-xs text-[#A8A08C] mt-1">
              {itemName ? `Direct order inquiry for ${itemName}` : 'Talk to us directly and place your order.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs uppercase tracking-wider text-[#78956F] font-semibold shrink-0 pl-2">
          <span>ORDER</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </a>

      {/* 02: SWIGGY - Secondary Delivery */}
      <a
        href={orderLinks.swiggyUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onSelectOption}
        className="group flex items-center justify-between p-4 md:p-5 bg-transparent border border-[#172019]/20 hover:border-[#172019] rounded-xl transition-all duration-200 hover:bg-[#172019]/5 min-h-[52px]"
      >
        <div className="flex items-center gap-3.5">
          <div className="p-2 rounded-lg bg-[#172019]/10 text-[#172019] shrink-0">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] tracking-[0.16em] uppercase text-[#A8A08C]">
              02 · DELIVERY
            </div>
            <h5 className="font-sans text-sm md:text-base font-semibold text-[#172019]">
              Order on Swiggy
            </h5>
            <p className="text-xs text-[#172019]/70">Order through Swiggy.</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs text-[#172019] font-medium shrink-0">
          <span>SWIGGY</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </a>

      {/* 03: ZOMATO - Tertiary Delivery */}
      <a
        href={orderLinks.zomatoUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onSelectOption}
        className="group flex items-center justify-between p-4 md:p-5 bg-transparent border border-[#172019]/20 hover:border-[#172019] rounded-xl transition-all duration-200 hover:bg-[#172019]/5 min-h-[52px]"
      >
        <div className="flex items-center gap-3.5">
          <div className="p-2 rounded-lg bg-[#172019]/10 text-[#172019] shrink-0">
            <UtensilsCrossed className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] tracking-[0.16em] uppercase text-[#A8A08C]">
              03 · DELIVERY
            </div>
            <h5 className="font-sans text-sm md:text-base font-semibold text-[#172019]">
              Order on Zomato
            </h5>
            <p className="text-xs text-[#172019]/70">Order through Zomato.</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs text-[#172019] font-medium shrink-0">
          <span>ZOMATO</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </a>
    </div>
  );
}
