'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Globe, Github, Linkedin,
  Heart, Code, Download
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/jeremy-aubry-9ba90b189/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/Jerem-14',
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'Site Web',
      icon: <Globe className="w-5 h-5" />,
      url: 'https://www.jeremyaubry.fr',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const quickLinks = [
    { name: 'À propos', href: '#a-propos' },
    { name: 'Projets', href: '#projets' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: 'jeremy.aubry69@gmail.com',
      link: 'mailto:jeremy.aubry69@gmail.com'
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: '06 69 56 42 15',
      link: 'tel:0669564215'
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: 'Lyon, France',
      link: null
    }
  ];

  return (
    <footer className="relative pt-16 pb-6 px-6 overflow-hidden"
            style={{
              background: 'var(--glass-medium)',
              backdropFilter: 'var(--blur-medium)',
              borderTop: '1px solid var(--glass-border-medium)',
            }}>
      
      {/* Background décoratif */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full opacity-20"
             style={{
               background: 'var(--glass-strong)',
               backdropFilter: 'var(--blur-strong)',
               border: '1px solid var(--glass-border-strong)',
               animation: 'blob 12s infinite'
             }} />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full opacity-15"
             style={{
               background: 'var(--glass-light)',
               backdropFilter: 'var(--blur-light)',
               border: '1px solid var(--glass-border-light)',
               animation: 'blob 12s infinite 4s'
             }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section principale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          
          {/* À propos */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4"
                  style={{ color: 'var(--text-primary)' }}>
                Jeremy{' '}
                <span style={{
                  background: 'var(--accent-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  AUBRY
                </span>
              </h3>
              <p className="text-base mb-6 leading-relaxed"
                 style={{ color: 'var(--text-secondary)' }}>
                Développeur Full Stack passionné, spécialisé dans la création d'applications web 
                modernes et sécurisées. Je transforme vos idées en solutions digitales innovantes.
              </p>
              
              {/* Bouton CV */}
              <motion.a
                href="/cv-jeremy-aubry.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-white transition-all duration-300"
                style={{
                  background: 'var(--accent-gradient)',
                }}
              >
                <Download className="w-4 h-4" />
                <span>Télécharger mon CV</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Navigation rapide */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-heading font-bold mb-4"
                  style={{ color: 'var(--text-primary)' }}>
                Navigation
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-300 hover:text-orange-500 flex items-center space-x-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <div className="w-1 h-1 rounded-full bg-orange-500 opacity-60"></div>
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-heading font-bold mb-4"
                  style={{ color: 'var(--text-primary)' }}>
                Contact
              </h4>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        className="flex items-center space-x-3 text-sm transition-colors duration-300 hover:text-orange-500"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <div style={{ color: 'var(--accent-primary)' }}>
                          {info.icon}
                        </div>
                        <span>{info.text}</span>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-3 text-sm"
                           style={{ color: 'var(--text-secondary)' }}>
                        <div style={{ color: 'var(--accent-primary)' }}>
                          {info.icon}
                        </div>
                        <span>{info.text}</span>
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-opacity-20 pt-6 text-center"
          style={{ borderColor: 'var(--glass-border-light)' }}
        >
          <p className="text-sm flex items-center justify-center space-x-1"
             style={{ color: 'var(--text-secondary)' }}>
            <span>© {currentYear} Jeremy AUBRY. Développé avec</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>et</span>
            <Code className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
            <span>à Lyon.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;