'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Database, Server, Shield, Palette, Cloud,
  Monitor, Smartphone, Globe, Cpu, Lock, Layers
} from 'lucide-react';
import GlassCard from './ui/GlassCard';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      description: "Création d'interfaces utilisateur modernes et réactives",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Angular", level: 75 },
        { name: "Vue.js 3", level: 75 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      description: "Architectures robustes et APIs performantes",
      skills: [
        { name: "PHP/Symfony", level: 87 },
        { name: "Node.js", level: 85 },
        { name: "NestJS", level: 80 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      id: 3,
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      description: "Conception et optimisation de systèmes de données",
      skills: [
        { name: "MySQL", level: 95 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      id: 4,
      title: "DevOps & Cloud",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      description: "Déploiement et maintenance d'applications",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS EC2", level: 80 },
        { name: "Git/GitHub", level: 95 },
        { name: "Terraform/Kubernetes", level: 70 }
      ]
    },
    {
      id: 5,
      title: "Security & Audit",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      description: "Analyse de vulnérabilités et corrections sécuritaires",
      skills: [
        { name: "Checkmarx", level: 85 },
        { name: "SonarQube", level: 70 }
      ]
    },
    {
      id: 6,
      title: "Design & UX",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-purple-500",
      description: "Conception d'expériences utilisateur optimales",
      skills: [
        { name: "Figma", level: 88 },
        { name: "UI/UX Design", level: 80 },
        { name: "Responsive Design", level: 90 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="competences" className="py-20 px-6 relative overflow-hidden">
      {/* Background avec effets glassmorphisme */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
             style={{
               background: 'var(--glass-medium)',
               backdropFilter: 'var(--blur-strong)',
               border: '1px solid var(--glass-border-medium)',
               animation: 'blob 8s infinite'
             }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
             style={{
               background: 'var(--glass-strong)',
               backdropFilter: 'var(--blur-medium)',
               border: '1px solid var(--glass-border-strong)',
               animation: 'blob 8s infinite 2s'
             }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}>
            Mes{' '}
            <span style={{
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Compétences
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              onHoverStart={() => setHoveredSkill(category.id)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <GlassCard 
                variant={hoveredSkill === category.id ? "strong" : "medium"} 
                className="p-6 h-full relative overflow-hidden"
              >
                
                {/* Icon et titre */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold"
                        style={{ color: 'var(--text-primary)' }}>
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {category.description}
                </p>

                {/* Skills avec barres de progression */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                          {skill.name}
                        </span>
                        <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Barre de progression glassmorphisme */}
                      <div className="relative h-2 rounded-full overflow-hidden"
                           style={{
                             background: 'var(--glass-light)',
                             border: '1px solid var(--glass-border-light)'
                           }}>
                        <motion.div
                          className={`h-full rounded-full relative overflow-hidden bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        >
                          {/* Effet brillant */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hover effect overlay */}
                {hoveredSkill === category.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${category.color.split(' ')[1]} 0%, transparent 50%)`,
                      opacity: 0.05
                    }}
                  />
                )}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;