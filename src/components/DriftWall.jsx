import React, { useRef, useEffect, useState, useMemo } from 'react';
import './DriftWall.css';

/**
 * @param {{
 *  items?: any[],
 *  columns?: number,
 *  tileWidth?: number,
 *  tileHeight?: number,
 *  gap?: number,
 *  radius?: number,
 *  tilt?: number,
 *  turn?: number,
 *  perspective?: number,
 *  depth?: number,
 *  speed?: number,
 *  direction?: 'up' | 'down',
 *  variance?: number,
 *  parallax?: number,
 *  pauseOnHover?: boolean,
 *  lift?: number,
 *  fade?: number,
 *  dim?: number,
 *  grayscale?: boolean,
 *  overlayColor?: string,
 *  className?: string,
 *  style?: React.CSSProperties
 * }} props
 */
export default function DriftWall({
  items = [],
  columns = 5,
  tileWidth = 220,
  tileHeight = 148,
  gap = 18,
  radius = 16,
  tilt = 12,
  turn = -10,
  perspective = 1200,
  depth = 120,
  speed = 26,
  direction = 'up',
  variance = 0.32,
  parallax = 0.45,
  pauseOnHover = true,
  lift = 70,
  fade = 0.62,
  dim = 0.5,
  grayscale = false,
  overlayColor = '#111612',
  className = '',
  style = {}
}) {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const offsetsRef = useRef([]);
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(0);

  // Group items into columns
  const columnData = useMemo(() => {
    if (!items.length) return [];
    const cols = Array.from({ length: columns }, () => []);
    items.forEach((item, i) => {
      cols[i % columns].push(item);
    });
    // Duplicate column contents to allow seamless loop
    return cols.map(col => {
      // Ensure enough items in column
      let list = [...col];
      while (list.length < 6) {
        list = [...list, ...col];
      }
      return [...list, ...list];
    });
  }, [items, columns]);

  // Speeds per column based on variance
  const columnSpeeds = useMemo(() => {
    return Array.from({ length: columns }, (_, idx) => {
      const v = ((idx % 3) - 1) * variance;
      return speed * (1 + v);
    });
  }, [columns, speed, variance]);

  useEffect(() => {
    offsetsRef.current = new Array(columns).fill(0);
  }, [columns]);

  // Drift animation loop
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const columnElements = containerRef.current?.querySelectorAll('.driftwall-column');
    if (!columnElements || !columnElements.length) return;

    const loop = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      if (!isPaused) {
        const itemTotalHeight = tileHeight + gap;
        columnElements.forEach((colEl, colIdx) => {
          const colItemsCount = columnData[colIdx]?.length || 1;
          const halfHeight = (colItemsCount / 2) * itemTotalHeight;
          const colSpeed = columnSpeeds[colIdx] || speed;
          const dirMultiplier = direction === 'up' ? 1 : -1;

          offsetsRef.current[colIdx] = (offsetsRef.current[colIdx] || 0) + colSpeed * delta * dirMultiplier;

          // Wrap around seamlessly
          if (offsetsRef.current[colIdx] >= halfHeight) {
            offsetsRef.current[colIdx] -= halfHeight;
          } else if (offsetsRef.current[colIdx] < 0) {
            offsetsRef.current[colIdx] += halfHeight;
          }

          colEl.style.transform = `translateY(${-offsetsRef.current[colIdx]}px)`;
        });
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPaused, columnData, columnSpeeds, direction, gap, speed, tileHeight]);

  return (
    <div
      ref={containerRef}
      className={`driftwall-viewport ${className}`}
      style={{
        '--overlay-color': overlayColor,
        ...style
      }}
      onMouseEnter={() => {
        if (pauseOnHover) setIsPaused(true);
      }}
      onMouseLeave={() => {
        if (pauseOnHover) setIsPaused(false);
        setHoveredIndex(null);
      }}
    >
      <div
        className="driftwall-scene"
        style={{
          perspective: `${perspective}px`,
          transform: `rotateX(${tilt}deg) rotateY(${turn}deg) translateZ(-${depth}px)`,
          gap: `${gap}px`
        }}
      >
        {columnData.map((colItems, colIdx) => (
          <div
            key={colIdx}
            className="driftwall-column"
            style={{
              gap: `${gap}px`,
              width: `${tileWidth}px`
            }}
          >
            {colItems.map((item, rowIdx) => {
              const globalIndex = `${colIdx}-${rowIdx}`;
              const isHovered = hoveredIndex === globalIndex;

              return (
                <div
                  key={globalIndex}
                  className="driftwall-tile"
                  style={{
                    width: `${tileWidth}px`,
                    height: `${tileHeight}px`,
                    borderRadius: `${radius}px`,
                    transform: isHovered
                      ? `translateZ(${lift}px) scale(1.06)`
                      : 'translateZ(0px) scale(1)',
                    filter: isHovered
                      ? 'brightness(1.1) contrast(1.05)'
                      : grayscale
                      ? `grayscale(1) brightness(${1 - dim * 0.4})`
                      : `brightness(${1 - dim * 0.3})`,
                    boxShadow: isHovered
                      ? '0 20px 40px rgba(0,0,0,0.6)'
                      : '0 8px 20px rgba(0,0,0,0.35)',
                    zIndex: isHovered ? 20 : 1
                  }}
                  onMouseEnter={() => setHoveredIndex(globalIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={item.image}
                    alt={item.title || 'Planet Wellness Food Ingredient'}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="tile-scrim" />
                  {item.title && (
                    <div className="tile-title font-sans">
                      {item.title}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="driftwall-vignette" />
    </div>
  );
}
