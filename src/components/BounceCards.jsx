import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './BounceCards.css';

/**
 * @param {{
 *  className?: string,
 *  images?: string[],
 *  containerWidth?: number,
 *  containerHeight?: number,
 *  animationDelay?: number,
 *  animationStagger?: number,
 *  easeType?: string,
 *  transformStyles?: string[],
 *  enableHover?: boolean
 * }} props
 */
export default function BounceCards({
  className = '',
  images = [],
  containerWidth = 520,
  containerHeight = 300,
  animationDelay = 0.6,
  animationStagger = 0.08,
  easeType = 'elastic.out(1, 0.5)',
  transformStyles = [
    'rotate(5deg) translate(-150px)',
    'rotate(0deg) translate(-70px)',
    'rotate(-5deg)',
    'rotate(5deg) translate(70px)',
    'rotate(-5deg) translate(150px)'
  ],
  enableHover = true
}) {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cards = cardsRef.current.filter(Boolean);

    if (!cards.length) return;

    if (isReduced) {
      // Just set transforms statically without animation
      cards.forEach((card, idx) => {
        const customTransform = transformStyles[idx] || '';
        card.style.transform = customTransform;
        card.style.opacity = '1';
      });
      return;
    }

    // GSAP entrance animation with elastic bounce
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          scale: 0.2,
          opacity: 0,
          y: 80
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: easeType,
          stagger: animationStagger,
          delay: animationDelay,
          onComplete: () => {
            // Apply default transformStyles
            cards.forEach((card, idx) => {
              const base = transformStyles[idx] || '';
              gsap.to(card, {
                transform: base,
                duration: 0.6,
                ease: 'power2.out'
              });
            });
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [animationDelay, animationStagger, easeType, transformStyles]);

  const handleMouseEnter = (hoveredIdx) => {
    if (!enableHover) return;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const cards = cardsRef.current.filter(Boolean);
    cards.forEach((card, idx) => {
      if (idx === hoveredIdx) {
        gsap.to(card, {
          scale: 1.15,
          zIndex: 30,
          y: -15,
          boxShadow: '0 24px 48px rgba(0,0,0,0.45)',
          duration: 0.35,
          ease: 'power2.out'
        });
      } else {
        const offset = idx < hoveredIdx ? -20 : 20;
        gsap.to(card, {
          x: offset,
          scale: 0.95,
          opacity: 0.75,
          duration: 0.35,
          ease: 'power2.out'
        });
      }
    });
  };

  const handleMouseLeave = () => {
    if (!enableHover) return;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const cards = cardsRef.current.filter(Boolean);
    cards.forEach((card, idx) => {
      const base = transformStyles[idx] || '';
      gsap.to(card, {
        transform: base,
        scale: 1,
        opacity: 1,
        y: 0,
        x: 0,
        zIndex: idx + 1,
        boxShadow: '0 16px 36px rgba(17, 22, 18, 0.28)',
        duration: 0.5,
        ease: 'power2.out'
      });
    });
  };

  return (
    <div
      ref={containerRef}
      className={`bounce-cards-container ${className}`}
      style={{
        width: `${containerWidth}px`,
        height: `${containerHeight}px`
      }}
      onMouseLeave={handleMouseLeave}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          ref={(el) => (cardsRef.current[idx] = el)}
          className="bounce-card"
          style={{
            zIndex: idx + 1
          }}
          onMouseEnter={() => handleMouseEnter(idx)}
        >
          <img
            src={src}
            alt={`Planet Wellness Lifestyle ${idx + 1}`}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}
    </div>
  );
}
