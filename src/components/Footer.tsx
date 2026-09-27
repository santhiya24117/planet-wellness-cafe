import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { orderLinks } from '../config/orderLinks';
import { createWhatsAppOrderLink } from '../utils/whatsapp';

interface FooterProps {
  onOpenOrderModal: () => void;
}

export default function Footer({ onOpenOrderModal }: FooterProps) {
  const whatsappUrl = createWhatsAppOrderLink(orderLinks.whatsappNumber);

  return (
    <footer className="relative w-full bg-[#111612] text-[#F4F0E6] pt-20 pb-24 md:pb-16 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Brand Statement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-16 border-b border-white/10">
          <div>
            <span className="text-[11px] tracking-[0.25em] font-semibold text-[#78956F] uppercase block mb-4">
              SALIGRAMAM · CHENNAI
            </span>
            <h2 className="font-display text-[clamp(48px,9vw,120px)] font-medium leading-[0.84] tracking-[-0.04em] text-white">
              PLANET<br />
              WELLNESS
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="font-display text-2xl md:text-3xl text-[#D8D1BF] leading-snug mb-3">
              EAT FRESH.<br />
              FEEL GOOD.<br />
              LIVE BETTER.
            </p>
            <p className="text-xs text-[#A8A08C] leading-relaxed">
              Crafted fresh food, cold beverages, and wholesome meals designed for real energy.
            </p>
          </div>
        </div>

        {/* Links Navigation Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs">
          <div>
            <span className="text-[10px] tracking-[0.2em] font-semibold uppercase text-[#78956F] block mb-4">
              NAVIGATION
            </span>
            <ul className="space-y-3 font-medium text-[#D8D1BF]">
              <li>
                <a href="#signature-menu" className="hover:text-white transition-colors">
                  MENU ↗
                </a>
              </li>
              <li>
                <a href="#signature-experience" className="hover:text-white transition-colors">
                  EXPERIENCE ↗
                </a>
              </li>
              <li>
                <a href="#subscriptions" className="hover:text-white transition-colors">
                  SUBSCRIPTIONS ↗
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  VISIT ↗
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenOrderModal}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  ORDER ↗
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.2em] font-semibold uppercase text-[#78956F] block mb-4">
              ORDER CHANNELS
            </span>
            <ul className="space-y-3 font-medium text-[#D8D1BF]">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>WHATSAPP DIRECT</span>
                  <ArrowUpRight className="w-3 h-3 text-[#78956F]" />
                </a>
              </li>
              <li>
                <a
                  href={orderLinks.swiggyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>SWIGGY</span>
                  <ArrowUpRight className="w-3 h-3 text-[#78956F]" />
                </a>
              </li>
              <li>
                <a
                  href={orderLinks.zomatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>ZOMATO</span>
                  <ArrowUpRight className="w-3 h-3 text-[#78956F]" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.2em] font-semibold uppercase text-[#78956F] block mb-4">
              CONNECT
            </span>
            <ul className="space-y-3 font-medium text-[#D8D1BF]">
              <li>
                <a
                  href={orderLinks.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>INSTAGRAM</span>
                  <ArrowUpRight className="w-3 h-3 text-[#78956F]" />
                </a>
              </li>
              <li>
                <span className="text-[#A8A08C]">Saligramam, Chennai</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.2em] font-semibold uppercase text-[#78956F] block mb-4">
              KITCHEN HOURS
            </span>
            <div className="space-y-2 text-[#D8D1BF]">
              <p>Daily 08:00 AM — 10:30 PM</p>
              <p className="text-[#A8A08C] text-[11px]">
                Fresh Daily · Arunachalam Road, Saligramam
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A8A08C]">
          <p>© 2026 Planet Wellness Café. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[#78956F]">
            Eat fresh. Feel good. Live better.
          </p>
        </div>
      </div>
    </footer>
  );
}
