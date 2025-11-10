import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const FloatingElements = ({ 
  className,
  count = 6,
  variant = 'circles',
  colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'],
  ...props 
}) => {
  const generateElements = () => {
    const elements = [];
    
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 60 + 20;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const delay = Math.random() * 2;
      const duration = Math.random() * 3 + 2;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      const floatingVariants = {
        animate: {
          y: [0, -20, 0],
          x: [0, Math.random() * 20 - 10, 0],
          rotate: [0, Math.random() * 360, 0],
          scale: [1, 1.1, 1],
          transition: {
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }
        }
      };

      const hoverVariants = {
        hover: {
          scale: 1.2,
          rotate: 180,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 10
          }
        }
      };

      let elementContent;
      
      switch (variant) {
        case 'squares':
          elementContent = (
            <motion.div
              key={i}
              className="absolute rounded-lg backdrop-blur-sm"
              style={{
                width: size,
                height: size,
                backgroundColor: color + '20',
                border: `2px solid ${color}40`,
                left: `${x}%`,
                top: `${y}%`,
              }}
              variants={floatingVariants}
              whileHover="hover"
              animate="animate"
            />
          );
          break;
          
        case 'triangles':
          elementContent = (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              variants={floatingVariants}
              whileHover="hover"
              animate="animate"
            >
              <div
                className="backdrop-blur-sm"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: `${size/2}px solid transparent`,
                  borderRight: `${size/2}px solid transparent`,
                  borderBottom: `${size}px solid ${color}40`,
                  filter: `drop-shadow(0 0 10px ${color}60)`
                }}
              />
            </motion.div>
          );
          break;
          
        case 'hexagons':
          elementContent = (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              variants={floatingVariants}
              whileHover="hover"
              animate="animate"
            >
              <div
                className="backdrop-blur-sm"
                style={{
                  width: size,
                  height: size * 0.866,
                  backgroundColor: color + '20',
                  border: `2px solid ${color}40`,
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  filter: `drop-shadow(0 0 10px ${color}60)`
                }}
              />
            </motion.div>
          );
          break;
          
        case 'stars':
          elementContent = (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              variants={floatingVariants}
              whileHover="hover"
              animate="animate"
            >
              <div
                className="backdrop-blur-sm"
                style={{
                  width: size,
                  height: size,
                  backgroundColor: color + '40',
                  clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                  filter: `drop-shadow(0 0 15px ${color}80)`
                }}
              />
            </motion.div>
          );
          break;
          
        default: // circles
          elementContent = (
            <motion.div
              key={i}
              className="absolute rounded-full backdrop-blur-sm"
              style={{
                width: size,
                height: size,
                backgroundColor: color + '20',
                border: `2px solid ${color}40`,
                left: `${x}%`,
                top: `${y}%`,
                boxShadow: `0 0 20px ${color}60`
              }}
              variants={{...floatingVariants, ...hoverVariants}}
              whileHover="hover"
              animate="animate"
            />
          );
      }
      
      elements.push(elementContent);
    }
    
    return elements;
  };

  return (
    <motion.div
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      {...props}
    >
      {generateElements()}
      
      {/* Ambient light effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-500/5 to-transparent" />
    </motion.div>
  );
};

export default FloatingElements;