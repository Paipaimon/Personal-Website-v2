import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const AnimatedButton = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  onClick,
  disabled = false,
  ...props 
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900",
    gradient: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:from-pink-600 hover:via-red-600 hover:to-yellow-600"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl"
  };

  const shimmerVariants = {
    initial: { x: '-100%' },
    hover: { 
      x: '100%',
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      variants={buttonVariants}
      initial="initial"
      whileHover={!disabled ? "hover" : "initial"}
      whileTap={!disabled ? "tap" : "initial"}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        variants={shimmerVariants}
        initial="initial"
        whileHover={!disabled ? "hover" : "initial"}
      />
      
      {/* Ripple effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </motion.button>
  );
};

export default AnimatedButton;