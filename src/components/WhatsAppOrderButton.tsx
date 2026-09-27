import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { orderLinks } from '../config/orderLinks';
import { createWhatsAppOrderLink } from '../utils/whatsapp';

interface WhatsAppOrderButtonProps {
  itemName?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'compact';
  label?: string;
}

export default function WhatsAppOrderButton({
  itemName,
  className = '',
  variant = 'primary',
  label
}: WhatsAppOrderButtonProps) {
  const whatsappUrl = createWhatsAppOrderLink(orderLinks.whatsappNumber, itemName);

  const defaultLabel = itemName ? `ORDER ${itemName.toUpperCase()} ↗` : 'ORDER VIA WHATSAPP ↗';
  const displayLabel = label || defaultLabel;

  if (variant === 'compact') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#172019] hover:text-[#78956F] transition-colors py-2 px-1 min-h-[44px] ${className}`}
        aria-label={`Order ${itemName || 'food'} via WhatsApp`}
      >
        <span>ORDER</span>
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    );
  }

  const isSecondary = variant === 'secondary';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 min-h-[44px] cursor-pointer ${
        isSecondary
          ? 'bg-transparent text-[#F4F0E6] border border-[#F4F0E6]/30 hover:bg-[#F4F0E6] hover:text-[#172019]'
          : 'bg-[#172019] text-[#F4F0E6] border border-[#172019] hover:bg-[#253328] hover:-translate-y-0.5'
      } ${className}`}
      aria-label={`Order ${itemName || 'via WhatsApp'}`}
    >
      <MessageCircle className="w-4 h-4 text-[#78956F]" />
      <span>{displayLabel}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
    </a>
  );
}
