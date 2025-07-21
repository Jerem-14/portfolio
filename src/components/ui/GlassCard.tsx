'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'medium' | 'strong' | 'ultra-strong';
  hover?: boolean;
  animated?: boolean;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  variant = 'medium',
  hover = true,
  animated = true,
  onClick
}) => {
  const variants = {
    light: {
      background: 'var(--glass-light)',
      border: '1px solid var(--glass-border-light)',
      boxShadow: 'var(--shadow-glass-light)',
    },
    medium: {
      background: 'var(--glass-medium)',
      border: '1px solid var(--glass-border-medium)',
      boxShadow: 'var(--shadow-glass-medium)',
    },
    strong: {
      background: 'var(--glass-strong)',
      border: '1px solid var(--glass-border-strong)',
      boxShadow: 'var(--shadow-glass-strong)',
    },
    'ultra-strong': {
      background: 'var(--glass-ultra-strong)',
      border: '1px solid var(--glass-border-strong)',
      boxShadow: 'var(--shadow-glass-strong)',
    }
  };

  const baseStyle = {
    ...variants[variant],
    backdropFilter: 'var(--blur-medium)',
    borderRadius: '1rem',
    transition: 'var(--transition-smooth)',
    position: 'relative' as const,
    zIndex: 'var(--z-card)',
    willChange: 'transform', // Optimisation performance
  };

  // Hover styles séparés pour éviter les conflits
  const hoverStyles = hover ? {
    transform: 'translateY(-4px)', // Réduit de -8px à -4px
    boxShadow: 'var(--shadow-glass-strong)',
    background: variant === 'light' ? 'var(--glass-medium)' : 'var(--glass-strong)',
    zIndex: 'var(--z-card-hover)',
  } : {};

  const Component = animated ? motion.div : 'div';

  const motionProps = animated ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    whileHover: hover ? hoverStyles : {},
    viewport: { once: true },
    layout: true, // Évite les bugs de layout
  } : {};

  return (
    <Component
      style={baseStyle}
      className={`relative overflow-hidden ${className}`}
      {...motionProps}
    >
      {/* Reflet glassmorphisme - Position absolue sécurisée */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
          zIndex: 1,
        }}
      />
      
      {/* Contenu avec z-index sécurisé */}
      <div className="relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </Component>
  );
};

export default GlassCard;
