'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
}

const GlassButton: React.FC<GlassButtonProps> = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = ''
}) => {
  const variants = {
    primary: {
      background: 'var(--accent-gradient)',
      color: 'var(--text-light)',
      border: 'none',
    },
    secondary: {
      background: 'var(--glass-medium)',
      color: 'var(--text-primary)',
      border: '1px solid var(--glass-border-medium)',
    },
    ghost: {
      background: 'var(--glass-light)',
      color: 'var(--text-primary)',
      border: '1px solid var(--glass-border-light)',
    }
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const baseStyle = {
    ...variants[variant],
    backdropFilter: 'var(--blur-medium)',
    borderRadius: '2rem',
    cursor: 'pointer',
    fontWeight: '600',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    position: 'relative' as const,
    zIndex: 'var(--z-card)',
    willChange: 'transform',
    transition: 'var(--transition-smooth)',
  };

  // Hover effects réduits pour éviter les bugs
  const hoverProps = {
    scale: 1.02, // Réduit de 1.05 à 1.02
    boxShadow: variant === 'primary' 
      ? '0 8px 24px rgba(0, 212, 255, 0.3)' // Réduit l'intensité
      : '0 8px 24px rgba(31, 38, 135, 0.2)',
    background: variant === 'primary' 
      ? 'var(--accent-gradient-warm)' 
      : 'var(--glass-strong)',
    zIndex: 'var(--z-card-hover)',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      style={baseStyle}
      className={`${sizes[size]} ${className}`}
      onClick={onClick}
      href={href}
      whileHover={hoverProps}
      whileTap={{ scale: 0.98 }} // Réduit de 0.95 à 0.98
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      layout={true} // Évite les bugs de layout
    >
      {children}
    </Component>
  );
};

export default GlassButton;