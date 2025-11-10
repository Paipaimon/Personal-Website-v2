import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const AnimatedText = ({ 
  text, 
  className,
  variant = 'default',
  animation = 'fadeIn',
  delay = 0,
  speed = 50,
  ...props 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const variants = {
    default: "text-gray-900",
    gradient: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent",
    glow: "text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]",
    rainbow: "bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
  };

  // Typewriter effect
  useEffect(() => {
    if (animation === 'typewriter') {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setDisplayText(text);
    }
  }, [currentIndex, text, animation, speed]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: delay,
        staggerChildren: 0.05
      }
    }
  };

  const letterVariants = {
    initial: { 
      opacity: 0, 
      y: 50,
      rotateX: -90
    },
    animate: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  const slideInVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  const scaleVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const renderAnimatedText = () => {
    switch (animation) {
      case 'letters':
        return (
          <motion.div
            className={cn(variants[variant], className)}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            {...props}
          >
            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
        );
      
      case 'typewriter':
        return (
          <div className={cn(variants[variant], className)} {...props}>
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-0.5 h-5 bg-current ml-1"
            />
          </div>
        );
      
      case 'slideIn':
        return (
          <motion.div
            className={cn(variants[variant], className)}
            variants={slideInVariants}
            initial="initial"
            animate="animate"
            {...props}
          >
            {displayText}
          </motion.div>
        );
      
      case 'scale':
        return (
          <motion.div
            className={cn(variants[variant], className)}
            variants={scaleVariants}
            initial="initial"
            animate="animate"
            {...props}
          >
            {displayText}
          </motion.div>
        );
      
      default: // fadeIn
        return (
          <motion.div
            className={cn(variants[variant], className)}
            variants={fadeInVariants}
            initial="initial"
            animate="animate"
            {...props}
          >
            {displayText}
          </motion.div>
        );
    }
  };

  return renderAnimatedText();
};

export default AnimatedText;