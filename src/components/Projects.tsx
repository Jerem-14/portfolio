'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, Github, Calendar, Users, Award
} from 'lucide-react';
import GlassCard from './ui/GlassCard';
import Image from 'next/image';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  interface Project {
    id: number;
    title: string;
    description: string;
    longDescription?: string;
    problem?: string;
    solution?: string;
    results?: string[];
    image: string;
    images?: string[];
    technologies: string[];
    features?: string[];
    liveUrl?: string;
    githubUrl?: string;
    status: 'completed' | 'in-progress' | 'concept';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    timeline: string;
    team?: string;
    role: string;
    category: string;
    highlight?: boolean;
    metrics?: {
      performance?: string;
      users?: string;
      security?: string;
      other?: string;
    };
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "MIA - Mon Interlocuteur ASGARD",
      category: "Full Stack",
      description: "Application web développé chez Enedis permettant a un technicien sur le terrain d'etre redirigé vers le bon interlocuteur d'urgence suivant sa géolocalisation en France. Il y'a tout un interface admin pour configurer les numéros ainsi qu'un dashboard statistique pour consulter le nombres d'appels par Direction Régionnale",
      image: "/assets/projects/mia.png",
      technologies: ["React", "Symfony", "PostgreSQL", "Redux", "AWS EC2"],     
      status: "completed",
      difficulty: "advanced",
      timeline: "9 mois",
      team: "Équipe de 3",
      role: "Full Stack Developer",
      highlight: true,
      metrics: {
        users: "50+ utilisateurs actifs"
      }
    },
    {
      id: 2,
      title: "Meme-on-rit - Jeu de mémorie en ligne",
      category: "Full Stack",
      description: "Jeu en de mémorie en ligne multi-joueurs (2). Utilisation des websockets pour la communication entre les joueurs. Dashboard pour les joueurs afin de consulter divers statistiques et historiques des parties.",
      image: "/assets/projects/meme-on-rit.png",
      technologies: ["React", "Node.js", "MySQL", "DaisyUI", "Websockets"],
      liveUrl: "https://meme-on-rit-neon.vercel.app/",
      githubUrl: "https://github.com/Jerem-14/jeu_react",
      status: "completed",
      difficulty: "advanced",
      timeline: "1 mois",
      team: "Solo",
      role: "Full Stack Developer",
      highlight: true
    },
    {
      id: 3,
      title: "Note de Douceur - Institut de beauté",
      category: "Frontend",
      description: "Site e-commerce pour l'institut de beauté Note de Douceur. Possibilité de commander des produits de beauté en ligne ou des RDV pour des soins.",
      image: "/assets/projects/notededouceur.png",
      technologies: ["Wordpress", "Woocommerce", "Stripe"],
      liveUrl: "https://www.notededouceur.com/",
      status: "completed",
      difficulty: "intermediate",
      timeline: "4 mois",
      team: "Solo",
      role: "Frontend Lead",
    },
    {
      id: 4,
      title: "Qui veut etre mon associé - API REST ",
      category: "Backend",
      description: "API REST en NestJS pour la gestion des associés de l'entreprise.",
  
      image: "/assets/projects/qvema.png",
      technologies: ["NestJS", "MySQL", "Fastify"],
      
      githubUrl: "https://github.com/Jerem-14/qvema",
      status: "completed",
      difficulty: "advanced",
      timeline: "3 mois",
      team: "Solo",
      role: "Backend Lead",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'from-green-500 to-emerald-500';
      case 'intermediate': return 'from-yellow-500 to-orange-500';
      case 'advanced': return 'from-red-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'concept': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'full stack': return 'bg-blue-500';
      case 'frontend': return 'bg-green-500';
      case 'backend': return 'bg-purple-500';
      case 'cybersécurité': return 'bg-red-500';
      case 'blockchain': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="projets" className="py-20 px-6 relative overflow-hidden">
      {/* Background avec glassmorphisme */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
             style={{
               background: 'var(--glass-medium)',
               backdropFilter: 'var(--blur-strong)',
               border: '1px solid var(--glass-border-medium)',
               animation: 'blob 12s infinite'
             }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
             style={{
               background: 'var(--glass-strong)',
               backdropFilter: 'var(--blur-medium)',
               border: '1px solid var(--glass-border-strong)',
               animation: 'blob 12s infinite 4s'
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
              Projets
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
            Une sélection de projets que j&apos;ai pu réaliser lors de mes études et en parallèle de mon apprentissage.
            
          </p>
        </motion.div>

        {/* Grille de projets */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="glass-safe-hover"
            >
              <GlassCard 
                variant={project.highlight ? "medium" : "light"} 
                className="h-full relative overflow-hidden group"
              >
                {/* Badge highlight */}
                {project.highlight && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                      <Award className="w-3 h-3" />
                      <span>Projet phare</span>
                    </div>
                  </div>
                )}

                {/* Image avec overlay */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg overflow-hidden">
                <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0} // Optionally prioritize the first image
              />
                  
                  
                  {/* Badges statut et catégorie */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status === 'completed' ? 'Terminé' : 
                       project.status === 'in-progress' ? 'En cours' : 'Concept'}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Indicateur de complexité */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={`w-2 h-2 rounded-full ${
                            (project.difficulty === 'beginner' && level === 1) ||
                            (project.difficulty === 'intermediate' && level <= 2) ||
                            (project.difficulty === 'advanced' && level <= 3)
                              ? 'bg-white'
                              : 'bg-white bg-opacity-30'
                          }`}
                        />
                      ))}
                      <span className="text-white text-xs ml-2 font-medium">
                        {project.difficulty === 'beginner' ? 'Débutant' :
                         project.difficulty === 'intermediate' ? 'Intermédiaire' : 'Avancé'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Overlay hover avec boutons */}
                  <div className="absolute inset-0 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-full bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 text-white hover:bg-opacity-30 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-full bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 text-white hover:bg-opacity-30 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-3"
                      style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>

                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  {/* Métriques rapides */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-xs">
                          <span style={{ color: 'var(--text-secondary)' }}>
                            {key === 'performance' ? '⚡' : 
                             key === 'users' ? '👥' : 
                             key === 'security' ? '🔒' : '📊'} {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md text-xs font-medium"
                        style={{
                          background: 'var(--glass-light)',
                          color: 'var(--text-primary)',
                          border: '1px solid var(--glass-border-light)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-xs font-medium text-gray-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{project.timeline}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{project.team}</span>
                      </span>
                    </div>
                    <span className="font-medium text-blue-600">{project.role}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;