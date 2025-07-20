'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, Github, ChevronLeft, ChevronRight,
  Calendar, Users, Award, Target, Lightbulb, TrendingUp
} from 'lucide-react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  results: string[];
  image: string;
  images: string[];
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'completed' | 'in-progress' | 'concept';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeline: string;
  team?: string;
  role: string;
  metrics?: {
    performance?: string;
    users?: string;
    security?: string;
    other?: string;
  };
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4"
        style={{ zIndex: 'var(--z-modal)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <GlassCard variant="ultra-strong" className="relative">
            {/* Header avec bouton fermer */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white border-opacity-20"
                 style={{ background: 'var(--glass-strong)', backdropFilter: 'var(--blur-strong)' }}>
              <div>
                <h2 className="text-2xl font-heading font-bold" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h2>
                <div className="flex items-center space-x-4 mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.timeline}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{project.team}</span>
                  </span>
                  <span className="font-medium text-blue-600">{project.role}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
              >
                <X className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
              </button>
            </div>

            <div className="p-6">
              {/* Galerie d'images */}
              <div className="relative mb-8 rounded-lg overflow-hidden">
                <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute inset-0 bg-black bg-opacity-20" />
                  
                  {/* Navigation images */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-30 transition-all"
                      >
                        <ChevronLeft className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-30 transition-all"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                      
                      {/* Indicateurs */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentImageIndex 
                                ? 'bg-white' 
                                : 'bg-white bg-opacity-50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Actions rapides */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.liveUrl && (
                  <GlassButton 
                    variant="primary" 
                    href={project.liveUrl}
                    className="flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Voir le projet</span>
                  </GlassButton>
                )}
                {project.githubUrl && (
                  <GlassButton 
                    variant="secondary" 
                    href={project.githubUrl}
                    className="flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code source</span>
                  </GlassButton>
                )}
              </div>

              {/* Contenu principal */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Colonne principale */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-4 flex items-center space-x-2"
                        style={{ color: 'var(--text-primary)' }}>
                      <Lightbulb className="w-5 h-5 text-yellow-500" />
                      <span>À propos du projet</span>
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Problématique */}
                  <GlassCard variant="light" className="p-6">
                    <h4 className="text-lg font-heading font-bold mb-3 flex items-center space-x-2"
                        style={{ color: 'var(--text-primary)' }}>
                      <Target className="w-5 h-5 text-red-500" />
                      <span>Problématique</span>
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>{project.problem}</p>
                  </GlassCard>

                  {/* Solution */}
                  <GlassCard variant="light" className="p-6">
                    <h4 className="text-lg font-heading font-bold mb-3 flex items-center space-x-2"
                        style={{ color: 'var(--text-primary)' }}>
                      <Lightbulb className="w-5 h-5 text-blue-500" />
                      <span>Solution apportée</span>
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>{project.solution}</p>
                  </GlassCard>

                  {/* Résultats */}
                  <GlassCard variant="light" className="p-6">
                    <h4 className="text-lg font-heading font-bold mb-4 flex items-center space-x-2"
                        style={{ color: 'var(--text-primary)' }}>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      <span>Résultats obtenus</span>
                    </h4>
                    <ul className="space-y-3">
                      {project.results.map((result, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                          <span style={{ color: 'var(--text-secondary)' }}>{result}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </GlassCard>

                  {/* Fonctionnalités */}
                  <div>
                    <h4 className="text-lg font-heading font-bold mb-4"
                        style={{ color: 'var(--text-primary)' }}>
                      Fonctionnalités principales
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <GlassCard variant="light" className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                              <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                                {feature}
                              </span>
                            </div>
                          </GlassCard>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Métriques */}
                  {project.metrics && (
                    <GlassCard variant="medium" className="p-6">
                      <h4 className="text-lg font-heading font-bold mb-4 flex items-center space-x-2"
                          style={{ color: 'var(--text-primary)' }}>
                        <Award className="w-5 h-5 text-orange-500" />
                        <span>Métriques</span>
                      </h4>
                      <div className="space-y-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                              {key === 'performance' ? '⚡ Performance' : 
                               key === 'users' ? '👥 Utilisateurs' : 
                               key === 'security' ? '🔒 Sécurité' : '📊 Autre'}
                            </span>
                            <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  )}

                  {/* Technologies */}
                  <GlassCard variant="medium" className="p-6">
                    <h4 className="text-lg font-heading font-bold mb-4"
                        style={{ color: 'var(--text-primary)' }}>
                      Technologies utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: 'var(--glass-light)',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--glass-border-light)'
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </GlassCard>

                  {/* Informations projet */}
                  <GlassCard variant="medium" className="p-6">
                    <h4 className="text-lg font-heading font-bold mb-4"
                        style={{ color: 'var(--text-primary)' }}>
                      Informations
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--text-secondary)' }}>Statut</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'completed' ? 'bg-green-100 text-green-700' :
                          project.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {project.status === 'completed' ? 'Terminé' : 
                           project.status === 'in-progress' ? 'En cours' : 'Concept'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--text-secondary)' }}>Durée</span>
                        <span style={{ color: 'var(--text-primary)' }}>{project.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--text-secondary)' }}>Équipe</span>
                        <span style={{ color: 'var(--text-primary)' }}>{project.team}</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--text-secondary)' }}>Mon rôle</span>
                        <span style={{ color: 'var(--text-primary)' }}>{project.role}</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--text-secondary)' }}>Complexité</span>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3].map((level) => (
                            <div
                              key={level}
                              className={`w-2 h-2 rounded-full ${
                                (project.difficulty === 'beginner' && level === 1) ||
                                (project.difficulty === 'intermediate' && level <= 2) ||
                                (project.difficulty === 'advanced' && level <= 3)
                                  ? 'bg-blue-500'
                                  : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;