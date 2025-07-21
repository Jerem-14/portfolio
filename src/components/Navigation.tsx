'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlassButton from './ui/GlassButton';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Détermine si on a scrollé assez pour déclencher l'effet glassmorphisme
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0,
        opacity: 1
      }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="fixed top-0 left-0 right-0 w-full px-6 py-4 z-[1000]"
      style={{
        background: isScrolled 
          ? 'rgba(244, 241, 222, 0.85)' 
          : 'rgba(244, 241, 222, 0.3)',
        backdropFilter: isScrolled ? 'blur(30px)' : 'blur(20px)',
        WebkitBackdropFilter: isScrolled ? 'blur(30px)' : 'blur(20px)',
        borderBottom: isScrolled 
          ? '1px solid rgba(224, 122, 95, 0.3)' 
          : '1px solid rgba(224, 122, 95, 0.15)',
        boxShadow: isScrolled 
          ? '0 8px 24px rgba(224, 122, 95, 0.15)' 
          : '0 4px 16px rgba(224, 122, 95, 0.1)',
        willChange: 'transform, opacity, background, backdrop-filter',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease, box-shadow 0.4s ease',
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-2xl font-heading font-bold"
          style={{ 
            background: 'linear-gradient(135deg, #E07A5F, #D85A3A)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            position: 'relative',
            zIndex: 2,
          }}
        >
          JA
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {['À propos', 'Projets', 'Compétences', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-').replace('à', 'a').replace('é', 'e')}`}
              className="relative text-base font-medium transition-colors duration-300 hover:text-orange-600"
              style={{ 
                color: '#3D405B',
                position: 'relative',
                zIndex: 2,
              }}
              whileHover={{ y: -1 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
            >
              {item}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                style={{ 
                  background: 'linear-gradient(90deg, #E07A5F, #D85A3A)',
                  zIndex: 1 
                }}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <GlassButton variant="primary" href="#contact">
            Me contacter
          </GlassButton>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
                  <motion.button 
            className="p-2 rounded-lg"
            style={{
              background: 'rgba(244, 241, 222, 0.3)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(224, 122, 95, 0.2)',
              color: '#3D405B'
            }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-current rounded"></div>
            <div className="w-full h-0.5 bg-current rounded"></div>
            <div className="w-full h-0.5 bg-current rounded"></div>
          </div>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navigation;