'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Code, Users, Zap } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      id: 1,
      role: "Développeur Web",
      company: "Enedis DR AFC",
      period: "Septembre 2023 - Septembre 2025",
      type: "Alternance",
      location: "Besançon, France",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-500",
      bulletColor: "bg-blue-500",
      tasks: [
        "Conception d'application (maquettage et schéma de données)",
        "Développement d'application web Symfony & React|Angular",
        "Configuration de serveur sur offre Amazon EC2",
        "Audit cybersécurité (Checkmarx) et correction de vulnérabilité",
        "Gestion de projets et MCO sur applications en production"
      ]
    },
    {
      id: 2,
      role: "Intégrateur Web",
      company: "Agence Web Dioqa",
      period: "Septembre 2021 - Août 2023",
      type: "Alternance",
      location: "Rilleux-la-Pape, France",
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      textColor: "text-orange-500",
      bulletColor: "bg-orange-500",
      tasks: [
        "Intégration de maquettes responsives pour sites vitrines et e-commerces sous WordPress",
        "Gestion de projets et animation de réunions clients",
        "Mise en ligne et maintenance (Ticketing)"
      ]
    }
  ];

  const formations = [
    {
      diploma: "Mastère Ingénierie du Web",
      school: "ESGI - Campus Sciences-U Lyon",
      period: "2023-2025"
    },
    {
      diploma: "Bachelor Ingénierie du Web",
      school: "ESGI - Campus Sciences-U Lyon",
      period: "2022-2023"
    },
    {
      diploma: "BTS Services Informatiques aux Organisations",
      school: "Maestris BTS - Campus Sciences-U Lyon",
      period: "2020-2022"
    }
  ];

  const stats = [
    { label: "Années d'expérience", value: "4+", icon: <Calendar className="w-5 h-5" /> },
    { label: "Projets réalisés", value: "10+", icon: <Award className="w-5 h-5" /> },
    { label: "Technologies maîtrisées", value: "8+", icon: <Code className="w-5 h-5" /> },
    { label: "Clients satisfaits", value: "20+", icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <section id="a-propos" className="py-20 px-6 relative overflow-hidden">
      {/* Background décoratif */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-30"
             style={{
               background: 'var(--glass-medium)',
               backdropFilter: 'var(--blur-strong)',
               border: '1px solid var(--glass-border-medium)',
             }} />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full opacity-20"
             style={{
               background: 'var(--glass-light)',
               backdropFilter: 'var(--blur-medium)',
               border: '1px solid var(--glass-border-light)',
             }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}>
            Mon{' '}
            <span style={{
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Parcours
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Développeur passionné de 25 ans, je combine formation académique solide et expérience pratique 
            pour créer des solutions web innovantes et performantes.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GlassCard variant="medium" className="p-6 text-center">
                <div className="flex justify-center mb-3 text-blue-500">
                  {stat.icon}
                </div>
                <div className="text-3xl font-heading font-bold mb-2"
                     style={{ color: 'var(--text-primary)' }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {stat.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <GlassCard variant="light" className="p-2 flex space-x-2">
            {['Expériences', 'Formations'].map((tab, index) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === index 
                    ? 'text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                style={{
                  background: activeTab === index ? 'var(--accent-gradient)' : 'transparent',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </GlassCard>
        </motion.div>

        {/* Content Tabs */}
        <div className="min-h-[600px]">
          {activeTab === 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <GlassCard variant="medium" className="p-8 relative overflow-hidden">
                    
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.color} text-white`}>
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-heading font-bold mb-1"
                              style={{ color: 'var(--text-primary)' }}>
                            {exp.role}
                          </h3>
                          <p className={`text-lg font-semibold mb-1 ${exp.textColor}`}>
                            {exp.company}
                          </p>
                          <div className="flex items-center space-x-4 text-sm"
                               style={{ color: 'var(--text-secondary)' }}>
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                              background: 'var(--glass-strong)',
                              color: 'var(--text-primary)',
                              border: '1px solid var(--glass-border-medium)'
                            }}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Tasks */}
                    <div className="space-y-3">
                      {exp.tasks.map((task, taskIndex) => (
                        <motion.div
                          key={taskIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: taskIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className={`w-2 h-2 rounded-full ${exp.bulletColor} mt-2 flex-shrink-0`} />
                          <p style={{ color: 'var(--text-secondary)' }}>{task}</p>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {formations.map((formation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <GlassCard variant="medium" className="p-6 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <Award className="w-8 h-8 text-orange-500" />
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-2"
                        style={{ color: 'var(--text-primary)' }}>
                      {formation.diploma}
                    </h3>
                    <p className="text-orange-500 font-medium mb-2">
                      {formation.school}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {formation.period}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;