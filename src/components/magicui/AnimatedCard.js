import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const AnimatedCard = ({ 
  children, 
  className,
  variant = 'default',
  hover = true,
  delay = 0,
  ...props 
}) => {
  const baseClasses = "relative overflow-hidden rounded-xl transition-all duration-300";
  
  const variants = {
    default: "bg-white border border-gray-200 shadow-sm hover:shadow-lg",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl",
    gradient: "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50 shadow-md",
    dark: "bg-gray-900 border border-gray-800 shadow-xl text-white"
  };

  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    },
    hover: hover ? {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    } : {}
  };

  const glowVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      className={cn(baseClasses, variants[variant], className)}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={hover ? "hover" : "animate"}
      {...props}
    >
      {/* Glow effect */}
      {hover && (
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-xl blur-lg"
          variants={glowVariants}
          initial="initial"
          whileHover="hover"
        />
      )}
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Border gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-pink-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default AnimatedCard;