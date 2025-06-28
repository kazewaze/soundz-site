import React, { useState, useRef, useLayoutEffect, useEffect, useId } from 'react';
import styles from './Tooltip.module.css';

export default function Tooltip({ content, children, side = 'top', offset = 8 }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [actualSide, setActualSide] = useState(side);
  const wrapperRef = useRef(null);
  const tooltipRef = useRef(null);
  const id = useId(); // ✅ Unique ID per tooltip

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const toggle = () => setVisible(v => !v);

  // Auto positioning + side fallback
  useLayoutEffect(() => {
    if (visible && wrapperRef.current && tooltipRef.current) {
      const triggerRect = wrapperRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const margin = 8;

      const fitsTop = triggerRect.top >= tooltipRect.height + margin;
      const fitsBottom = window.innerHeight - triggerRect.bottom >= tooltipRect.height + margin;
      const fitsLeft = triggerRect.left >= tooltipRect.width + margin;
      const fitsRight = window.innerWidth - triggerRect.right >= tooltipRect.width + margin;

      let newSide = side;
      if (side === 'top' && !fitsTop) newSide = fitsBottom ? 'bottom' : 'top';
      if (side === 'bottom' && !fitsBottom) newSide = fitsTop ? 'top' : 'bottom';
      if (side === 'left' && !fitsLeft) newSide = fitsRight ? 'right' : 'left';
      if (side === 'right' && !fitsRight) newSide = fitsLeft ? 'left' : 'right';

      setActualSide(newSide);

      let top = 0, left = 0;

      switch (newSide) {
        case 'top':
          top = triggerRect.top - tooltipRect.height - offset;
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + offset;
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
          break;
        case 'left':
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          left = triggerRect.left - tooltipRect.width - offset;
          break;
        case 'right':
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          left = triggerRect.right + offset;
          break;
        default:
          break;
      }

      setPosition({ top: Math.max(top, 4), left: Math.max(left, 4) });
    }
  }, [visible, side, offset]);

  // Close on scroll/click
  useEffect(() => {
    const close = () => setVisible(false);
    if (visible) {
      window.addEventListener('click', close);
      window.addEventListener('scroll', close, true);
    }
    return () => {
      window.removeEventListener('click', close);
      window.removeEventListener('scroll', close, true);
    };
  }, [visible]);

  // Close on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setVisible(false);
    };
    if (visible) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [visible]);

  // Mobile tap support
  const handleTouch = (e) => {
    e.stopPropagation();
    toggle();
  };

  return (
        <span
          className={styles.wrapper}
          ref={wrapperRef}
          onMouseEnter={show}
          onMouseLeave={hide}
          onFocus={show}
          onBlur={hide}
          onClick={handleTouch}
          tabIndex={0}
          aria-describedby={id}
        >
          {children}
  
          {visible && (
            <div
              ref={tooltipRef}
              role="tooltip"
              id={id}
              className={`${styles.tooltip} ${styles[actualSide]}`}
              style={{ top: `${position.top}px`, left: `${position.left}px` }}
            >
              {content}
              <span className={`${styles.arrow} ${styles[`arrow-${actualSide}`]}`} />
            </div>
          )}
        </span>
  );
}