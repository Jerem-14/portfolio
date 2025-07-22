'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour détecter le scroll
  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      
      // Afficher le bouton après un petit scroll (200px)
      // Le bouton reste visible jusqu'à la fin maintenant
      if (scrolled > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ 
            duration: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20 
          }}
          whileHover={{ 
            scale: 1.1, 
            y: -3,
            boxShadow: "0 8px 25px rgba(224, 122, 95, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 group"
          style={{
            background: 'var(--accent-gradient)',
            border: '1px solid var(--glass-border-medium)',
            backdropFilter: 'var(--blur-medium)',
            WebkitBackdropFilter: 'var(--blur-medium)',
          }}
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-6 h-6 text-white transition-transform duration-300 group-hover:-translate-y-1" />
          
          {/* Effet de pulsation */}
          <div 
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ background: 'var(--accent-gradient)' }} 
          />
          
          {/* Cercle de progression (optionnel pour montrer le pourcentage de scroll) */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/30"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;