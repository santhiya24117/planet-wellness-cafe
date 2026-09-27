import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { orderLinks } from '../config/orderLinks';
import { createWhatsAppOrderLink } from '../utils/whatsapp';

interface MobileOrderBarProps {
  onOpenOrderModal: () => void;
}

export default function MobileOrderBar({ onOpenOrderModal }: MobileOrderBarProps) {
  const whatsappUrl = createWhatsAppOrderLink(orderLinks.whatsappNumber);

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#111612]/92 backdrop-blur-md border-t border-white/10"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.75rem)' }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#78956F] text-[#111612] font-semibold text-xs tracking-wider uppercase rounded-xl transition-all active:scale-[0.98] min-h-[44px] shadow-lg"
        >
          <MessageCircle className="w-4 h-4" />
          <span>ORDER VIA WHATSAPP</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>

        <button
          type="button"
          onClick={onOpenOrderModal}
          className="px-3.5 py-3 bg-white/10 text-white border border-white/20 rounded-xl text-xs font-semibold tracking-wider uppercase min-h-[44px] cursor-pointer"
          aria-label="More ordering options"
        >
          MORE
        </button>
      </div>
    </div>
  );
}
