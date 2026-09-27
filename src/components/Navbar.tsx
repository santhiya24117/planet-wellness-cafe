import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { orderLinks } from '../config/orderLinks';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export default function Navbar({ onOpenOrderModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'MENU', href: '#signature-menu' },
    { label: 'EXPERIENCE', href: '#signature-experience' },
    { label: 'SUBSCRIPTIONS', href: '#subscriptions' },
    { label: 'VISIT', href: '#location' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111612]/85 backdrop-blur-[18px] border-b border-white/10 py-3.5 shadow-lg'
            : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark (Zone 1) */}
          <a
            href="#"
            className="font-display text-xl md:text-2xl font-semibold tracking-wide text-white transition-opacity hover:opacity-85 whitespace-nowrap"
          >
            PLANET WELLNESS
          </a>

          {/* Desktop Navigation Links (Zone 2) */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.18em] text-[#D8D1BF]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#78956F] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenOrderModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-white/10 hover:bg-white text-white hover:text-[#111612] text-xs font-semibold tracking-[0.14em] uppercase rounded-full border border-white/20 transition-all duration-300 cursor-pointer min-h-[44px]"
            >
              <span>ORDER ONLINE</span>
              <span className="text-sm">↗</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex items-center gap-1.5 px-3 py-2 text-white bg-white/10 border border-white/20 rounded-full text-xs font-semibold tracking-wider uppercase cursor-pointer min-h-[44px]"
              aria-label="Open mobile menu"
            >
              <span>MENU</span>
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Animated Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#111612] text-[#F4F0E6] flex flex-col justify-between p-6 sm:p-8"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="font-display text-xl font-semibold tracking-wide text-white">
                PLANET WELLNESS
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/70 hover:text-white rounded-full bg-white/5 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6 my-auto py-8">
              <a
                href="#signature-menu"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-4xl sm:text-5xl font-light hover:text-[#78956F] transition-colors"
              >
                MENU ↗
              </a>
              <a
                href="#signature-experience"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-4xl sm:text-5xl font-light hover:text-[#78956F] transition-colors"
              >
                EXPERIENCE ↗
              </a>
              <a
                href="#subscriptions"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-4xl sm:text-5xl font-light hover:text-[#78956F] transition-colors"
              >
                SUBSCRIPTIONS ↗
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="text-left font-display text-4xl sm:text-5xl font-light text-[#78956F] hover:text-white transition-colors cursor-pointer"
              >
                ORDER ↗
              </button>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-4xl sm:text-5xl font-light hover:text-[#78956F] transition-colors"
              >
                VISIT ↗
              </a>
              <a
                href={orderLinks.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-4xl sm:text-5xl font-light text-[#A8A08C] hover:text-white transition-colors"
              >
                INSTAGRAM ↗
              </a>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-[#A8A08C]">
              <div>
                <p className="font-semibold text-white">PLANET WELLNESS CAFÉ</p>
                <p>Saligramam, Chennai · Fresh Daily</p>
              </div>
              <p className="tracking-widest uppercase text-[11px] text-[#78956F]">
                Eat fresh. Feel good. Live better.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
