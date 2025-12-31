import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CursorBlack = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });

      // Check element under cursor
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (elementUnderCursor) {
        const computedStyle = window.getComputedStyle(elementUnderCursor);
        const bgColor = computedStyle.backgroundColor;
        const textColor = computedStyle.color;
        
        // Check if background or text is dark
        const isDark = bgColor.includes('0, 0, 0') || 
                       bgColor.includes('rgb(0, 0, 0)') ||
                       textColor.includes('0, 0, 0');
        
        setIsInverted(isDark);
      }
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <motion.div 
      className={`hidden md:block  fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference -translate-x-1/2 -translate-y-1/2 ${
        isInverted ? 'bg-white' : 'bg-black'
      }`}
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
        mass: 0.5
      }}
    />
  )
}

export default CursorBlack
