'use client';

import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient de base avec teintes orangées équilibrées */}
      <div className="absolute inset-0" 
           style={{
             background: `linear-gradient(135deg, 
               #F0B89C 0%, 
               #F4C7A8 25%,
               #F7D4BC 50%, 
               #F0B89C 75%,
               #EAA584 100%)`
           }} />
      
      {/* Cercles flottants avec glassmorphisme et nouvelle palette */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-blob"
           style={{
             background: 'var(--glass-light)',
             backdropFilter: 'var(--blur-medium)',
             border: '1px solid var(--glass-border-light)',
             animationDelay: '0s'
           }} />
      
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full animate-blob"
           style={{
             background: 'var(--glass-medium)',
             backdropFilter: 'var(--blur-strong)',
             border: '1px solid var(--glass-border-medium)',
             animationDelay: '2s'
           }} />
      
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full animate-blob"
           style={{
             background: 'var(--glass-strong)',
             backdropFilter: 'var(--blur-light)',
             border: '1px solid var(--glass-border-strong)',
             animationDelay: '4s'
           }} />
      
      {/* Mesh gradient overlay avec intensité modérée */}
      <div className="absolute inset-0 opacity-20"
           style={{
             background: `
               radial-gradient(circle at 20% 80%, rgba(224, 122, 95, 0.25) 0%, transparent 55%),
               radial-gradient(circle at 80% 20%, rgba(216, 90, 58, 0.2) 0%, transparent 55%),
               radial-gradient(circle at 40% 40%, rgba(232, 147, 122, 0.15) 0%, transparent 55%),
               radial-gradient(circle at 60% 70%, rgba(240, 166, 139, 0.15) 0%, transparent 55%)
             `
           }} />
      
      {/* Particules flottantes avec présence modérée */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-25"
           style={{
             background: 'rgba(224, 122, 95, 0.12)',
             backdropFilter: 'var(--blur-light)',
             border: '1px solid rgba(224, 122, 95, 0.15)',
             animation: 'float 8s ease-in-out infinite'
           }} />
      
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full opacity-20"
           style={{
             background: 'rgba(216, 90, 58, 0.12)',
             backdropFilter: 'var(--blur-medium)',
             border: '1px solid rgba(216, 90, 58, 0.15)',
             animation: 'float 10s ease-in-out infinite 2s'
           }} />

      <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full opacity-30"
           style={{
             background: 'rgba(232, 147, 122, 0.15)',
             backdropFilter: 'var(--blur-light)',
             border: '1px solid rgba(232, 147, 122, 0.18)',
             animation: 'float 6s ease-in-out infinite 4s'
           }} />
    </div>
  );
};

export default AnimatedBackground;