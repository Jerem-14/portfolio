'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Zap, Shield } from 'lucide-react';
import GlassButton from './ui/GlassButton';
import GlassCard from './ui/GlassCard';

const Hero: React.FC = () => {
  const skills = [
    'PHP / Symfony', 'React / Angular', 'Node.js / NestJS', 
    'MySQL / MongoDB', 'Docker / AWS', 'Cybersécurité'
  ];

  const highlights = [
    { icon: <Code className="w-5 h-5" />, text: "4+ années d'expérience" },
    { icon: <Zap className="w-5 h-5" />, text: "25+ projets réalisés" },
    { icon: <Shield className="w-5 h-5" />, text: "Expert sécurité" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
      

        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="font-heading font-extrabold leading-tight mb-4"
              style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)'
              }}>
            Salut, je suis{' '}
            <span style={{
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Jeremy
            </span>
          </h1>
          
          <h2 className="font-heading font-bold mb-6"
              style={{ 
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                color: 'var(--text-secondary)'
              }}>
            Développeur Full Stack
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <GlassCard variant="medium" className="max-w-3xl mx-auto p-6">
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Je transforme vos idées en applications web robustes et sécurisées. 
              Spécialisé en développement moderne et audit cybersécurité, 
              j'`&apos;`accompagne les entreprises dans leur transformation digitale.
            </p>
          </GlassCard>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <GlassCard variant="light" className="px-4 py-3">
                <div className="flex items-center space-x-2">
                  <div style={{ color: 'var(--accent-primary)' }}>
                    {highlight.icon}
                  </div>
                  <span className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                    {highlight.text}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <GlassCard variant="light" className="px-4 py-2">
                <span className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                  {skill}
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <GlassButton variant="primary" size="lg" href="#projets">
            Voir mes projets
          </GlassButton>
          <GlassButton variant="ghost" size="lg" href="#contact">
            Me contacter
          </GlassButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="flex justify-center"
        >
          <motion.a
            href="#a-propos"
            className="flex flex-col items-center space-y-2 group cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-medium group-hover:text-orange-500 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}>
              Découvrir
            </span>
            <ArrowDown className="w-5 h-5 group-hover:text-orange-500 transition-colors" 
                       style={{ color: 'var(--text-secondary)' }} />
          </motion.a>
        </motion.div>
      </div>

      {/* Éléments décoratifs glassmorphisme */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full opacity-60"
           style={{
             background: 'var(--glass-medium)',
             backdropFilter: 'var(--blur-strong)',
             border: '1px solid var(--glass-border-medium)',
             animation: 'float 8s ease-in-out infinite'
           }} />
      
      <div className="absolute bottom-1/4 right-10 w-24 h-24 rounded-full opacity-40"
           style={{
             background: 'var(--glass-strong)',
             backdropFilter: 'var(--blur-medium)',
             border: '1px solid var(--glass-border-strong)',
             animation: 'float 10s ease-in-out infinite 2s'
           }} />

      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full opacity-50"
           style={{
             background: 'var(--primary-alpha-20)',
             backdropFilter: 'var(--blur-light)',
             border: '1px solid var(--glass-border-light)',
             animation: 'float 6s ease-in-out infinite 4s'
           }} />
    </section>
  );
};

export default Hero;
