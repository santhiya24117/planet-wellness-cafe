import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import './Stack.css';

/**
 * @param {{
 *  cards?: any[],
 *  randomRotation?: boolean,
 *  sensitivity?: number,
 *  sendToBackOnClick?: boolean,
 *  autoplay?: boolean,
 *  autoplayDelay?: number,
 *  pauseOnHover?: boolean,
 *  mobileClickOnly?: boolean,
 *  mobileBreakpoint?: number,
 *  animationConfig?: { stiffness: number, damping: number },
 *  onCardClick?: (card: any) => void,
 *  className?: string
 * }} props
 */
export default function Stack({
  cards = [],
  randomRotation = true,
  sensitivity = 140,
  sendToBackOnClick = true,
  autoplay = true,
  autoplayDelay = 4200,
  pauseOnHover = true,
  mobileClickOnly = true,
  mobileBreakpoint = 768,
  animationConfig = { stiffness: 260, damping: 20 },
  onCardClick,
  className = ''
}) {
  const [stack, setStack] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    setStack(cards);
  }, [cards]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= mobileBreakpoint);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const sendToBack = useCallback(() => {
    setStack(prev => {
      if (prev.length <= 1) return prev;
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  }, []);

  // Autoplay
  useEffect(() => {
    if (!autoplay || stack.length <= 1) return;
    if (pauseOnHover && isHovered) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      sendToBack();
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, pauseOnHover, isHovered, stack.length, sendToBack]);

  const handleCardClick = (card, index) => {
    if (isDraggingRef.current) return;
    if (index === 0) {
      if (onCardClick) {
        onCardClick(card);
      }
      if (sendToBackOnClick && stack.length > 1) {
        sendToBack();
      }
    }
  };

  return (
    <div
      className={`stack-container ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {stack.map((card, index) => {
        const isTop = index === 0;
        const depth = index;
        const scale = 1 - depth * 0.05;
        const yOffset = depth * 14;
        const rotAngle = randomRotation ? (index === 0 ? 0 : index % 2 === 0 ? 3 : -3) : 0;

        return (
          <StackCard
            key={card.id || index}
            card={card}
            isTop={isTop}
            depth={depth}
            scale={scale}
            yOffset={yOffset}
            rotAngle={rotAngle}
            total={stack.length}
            isMobile={isMobile}
            mobileClickOnly={mobileClickOnly}
            sensitivity={sensitivity}
            animationConfig={animationConfig}
            isDraggingRef={isDraggingRef}
            onSendToBack={sendToBack}
            onClick={() => handleCardClick(card, index)}
          />
        );
      })}
    </div>
  );
}

function StackCard({
  card,
  isTop,
  depth,
  scale,
  yOffset,
  rotAngle,
  total,
  isMobile,
  mobileClickOnly,
  sensitivity,
  animationConfig,
  isDraggingRef,
  onSendToBack,
  onClick
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);

  const canDrag = isTop && !(isMobile && mobileClickOnly);

  const handleDragStart = () => {
    isDraggingRef.current = true;
  };

  const handleDragEnd = (_, info) => {
    const offsetMagnitude = Math.hypot(info.offset.x, info.offset.y);
    const velocityMagnitude = Math.hypot(info.velocity.x, info.velocity.y);

    if (offsetMagnitude > sensitivity || velocityMagnitude > 500) {
      onSendToBack();
    }
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);
  };

  return (
    <motion.div
      className="stack-card"
      style={{
        zIndex: total - depth,
        x: isTop ? x : 0,
        y: isTop ? y : yOffset,
        rotate: isTop ? rotate : rotAngle,
        scale,
        transformOrigin: 'bottom center'
      }}
      animate={{
        scale,
        y: yOffset,
        rotate: rotAngle
      }}
      transition={{
        type: 'spring',
        stiffness: animationConfig.stiffness,
        damping: animationConfig.damping
      }}
      drag={canDrag ? true : false}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.7}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={onClick}
    >
      <div className="stack-card-inner group relative w-full h-full overflow-hidden">
        <img
          src={card.image}
          alt={card.category || 'Planet Wellness Signature'}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111612] via-[#111612]/45 to-transparent pointer-events-none" />

        {/* Card Content Overlay */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-white pointer-events-none">
          <div className="flex items-center justify-between">
            <span className="text-[11px] tracking-[0.2em] font-medium text-[#78956F] uppercase">
              {card.categoryNumber}
            </span>
            <span className="text-[11px] tracking-[0.16em] uppercase text-white/70">
              FRESH DAILY
            </span>
          </div>

          <div>
            <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-white mb-2 leading-tight">
              {card.category}
            </h3>
            <p className="text-xs md:text-sm text-[#D8D1BF] line-clamp-2 leading-relaxed mb-4">
              {card.headline}
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-white font-medium group-hover:text-[#78956F] transition-colors">
              <span>DISCOVER DISHES</span>
              <span className="text-sm">↗</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
