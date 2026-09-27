import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'pointer' | 'view' | 'order'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('a[href*="wa.me"], button:has(.lucide-message-circle), .order-btn')) {
        setCursorState('order');
      } else if (target.closest('img, .driftwall-tile, .stack-card, .bounce-card')) {
        setCursorState('view');
      } else if (target.closest('a, button, [role="button"], input, select')) {
        setCursorState('pointer');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isText = cursorState === 'view' || cursorState === 'order';

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center font-sans uppercase font-bold text-[9px] tracking-widest text-[#111612]"
      style={{
        x: pos.x,
        y: pos.y,
        translateX: '-50%',
        translateY: '-50%'
      }}
      animate={{
        width: isText ? 52 : cursorState === 'pointer' ? 24 : 10,
        height: isText ? 52 : cursorState === 'pointer' ? 24 : 10,
        backgroundColor: isText
          ? 'rgba(244, 240, 230, 0.95)'
          : cursorState === 'pointer'
          ? 'rgba(120, 149, 111, 0.6)'
          : 'rgba(120, 149, 111, 0.9)',
        borderRadius: 9999
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 28
      }}
    >
      {cursorState === 'view' && <span>VIEW</span>}
      {cursorState === 'order' && <span>ORDER</span>}
    </motion.div>
  );
}
