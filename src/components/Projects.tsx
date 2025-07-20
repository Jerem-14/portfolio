'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, Github, Play, Eye, Calendar, Users, Award
} from 'lucide-react';
import GlassCard from './ui/GlassCard';
import GlassButton from './ui/GlassButton';
import ProjectModal from './ui/ProjectModal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  interface Project {
    id: number;
    title: string;
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
      title: "EcoTrack - Suivi Environnemental",
      category: "Full Stack",
      description: "Application web complète pour le suivi des émissions carbone d'entreprise avec dashboard analytics et API REST sécurisée.",
      longDescription: "Développement d'une solution complète permettant aux entreprises de monitorer leur empreinte carbone en temps réel. Interface intuitive avec visualisations avancées et système de notifications automatiques.",
      problem: "Les entreprises manquent d'outils simples pour suivre leurs émissions carbone et respecter les réglementations environnementales.",
      solution: "Application web avec dashboard interactif, API robuste, et système d'alertes automatiques pour un suivi en temps réel.",
      results: [
        "Réduction de 30% du temps de reporting environnemental",
        "Interface adoptée par 5 PME locales",
        "Score de performance Lighthouse: 95/100",
        "API gérant 1000+ requêtes/minute"
      ],
      image: "/api/placeholder/600/400",
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500", "/api/placeholder/800/500"],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS EC2", "Chart.js"],
      features: [
        "Dashboard analytics en temps réel",
        "API REST sécurisée avec JWT",
        "Système de notifications automatiques",
        "Export de rapports PDF/Excel",
        "Interface responsive mobile-first"
      ],
      liveUrl: "https://ecotrack-demo.jeremyaubry.fr",
      githubUrl: "https://github.com/Jerem-14/ecotrack",
      status: "completed",
      difficulty: "advanced",
      timeline: "3 mois",
      team: "Solo",
      role: "Full Stack Developer",
      highlight: true,
      metrics: {
        performance: "95/100 Lighthouse",
        users: "50+ utilisateurs actifs",
        security: "Audit OWASP validé",
        other: "99.9% uptime"
      }
    },
    {
      id: 2,
      title: "SecureAudit - Sécurité Bancaire",
      category: "Cybersécurité",
      description: "Audit complet de sécurité d'une application bancaire avec correction de 15+ vulnérabilités critiques détectées par Checkmarx.",
      longDescription: "Mission d'audit cybersécurité sur une application bancaire existante. Identification et correction de vulnérabilités OWASP, implémentation de bonnes pratiques sécuritaires.",
      problem: "Application bancaire existante avec plusieurs failles de sécurité critiques détectées par les outils d'analyse.",
      solution: "Audit complet, correction des vulnérabilités, et mise en place d'un pipeline de sécurité automatisé.",
      results: [
        "15 vulnérabilités critiques corrigées",
        "Score de sécurité passé de C à A+",
        "Certification ISO 27001 obtenue",
        "Réduction de 90% des risques identifiés"
      ],
      image: "/api/placeholder/600/400",
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500"],
      technologies: ["Checkmarx", "OWASP ZAP", "PHP", "Symfony", "MySQL", "Docker"],
      features: [
        "Audit de sécurité complet OWASP",
        "Correction de vulnérabilités XSS/SQL",
        "Implémentation 2FA",
        "Chiffrement des données sensibles",
        "Pipeline CI/CD sécurisé"
      ],
      githubUrl: "https://github.com/Jerem-14/securebank-audit",
      status: "completed",
      difficulty: "advanced",
      timeline: "2 mois",
      team: "Équipe de 3",
      role: "Security Lead",
      highlight: true,
      metrics: {
        security: "Score A+ (95/100)",
        performance: "Aucun impact performance",
        other: "0 incident depuis mise en prod"
      }
    },
    {
      id: 3,
      title: "MediConnect - Télémédecine",
      category: "Frontend",
      description: "Interface React moderne pour téléconsultations médicales avec chat vidéo WebRTC intégré et gestion sécurisée des dossiers patients.",
      longDescription: "Développement front-end d'une plateforme de télémédecine complète permettant aux médecins de consulter leurs patients à distance avec un système de rendez-vous intégré.",
      problem: "Besoin d'une solution de télémédecine sécurisée et intuitive suite aux restrictions sanitaires.",
      solution: "Interface React performante avec chat vidéo WebRTC, gestion des dossiers patients et système de paiement intégré.",
      results: [
        "1000+ consultations mensuelles",
        "Temps de chargement < 2 secondes",
        "Interface accessible WCAG 2.1 AA",
        "Satisfaction utilisateur: 4.8/5"
      ],
      image: "/api/placeholder/600/400",
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500", "/api/placeholder/800/500"],
      technologies: ["React", "TypeScript", "WebRTC", "Socket.io", "Stripe", "Tailwind CSS"],
      features: [
        "Chat vidéo HD avec WebRTC",
        "Gestion des rendez-vous",
        "Dossiers patients sécurisés",
        "Paiement en ligne Stripe",
        "Interface responsive"
      ],
      liveUrl: "https://mediconnect-demo.jeremyaubry.fr",
      githubUrl: "https://github.com/Jerem-14/mediconnect",
      status: "completed",
      difficulty: "advanced",
      timeline: "4 mois",
      team: "Équipe de 5",
      role: "Frontend Lead",
      metrics: {
        performance: "98/100 Lighthouse",
        users: "500+ médecins inscrits",
        other: "Conformité RGPD validée"
      }
    },
    {
      id: 4,
      title: "StockFlow API - Inventaire",
      category: "Backend",
      description: "API REST haute performance en Node.js pour gestion d'inventaire temps réel avec cache Redis et architecture microservices.",
      longDescription: "Développement d'une API robuste pour la gestion d'inventaire en temps réel, avec système de cache Redis et architecture microservices pour une chaîne de magasins.",
      problem: "Ancien système de gestion d'inventaire lent et peu fiable pour une chaîne de magasins en expansion.",
      solution: "API REST moderne avec cache Redis, architecture microservices et monitoring en temps réel.",
      results: [
        "Performance 10x supérieure",
        "Gérer 10,000+ requêtes/minute",
        "Réduction de 95% des erreurs",
        "Temps de réponse < 100ms"
      ],
      image: "/api/placeholder/600/400",
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500"],
      technologies: ["Node.js", "NestJS", "MongoDB", "Redis", "Docker", "Kubernetes"],
      features: [
        "API REST documentation Swagger",
        "Cache Redis intelligent",
        "Architecture microservices",
        "Monitoring avec Prometheus",
        "Tests automatisés 95% coverage"
      ],
      githubUrl: "https://github.com/Jerem-14/stockflow-api",
      status: "completed",
      difficulty: "advanced",
      timeline: "3 mois",
      team: "Équipe de 4",
      role: "Backend Lead",
      metrics: {
        performance: "< 100ms réponse moyenne",
        users: "50 magasins connectés",
        other: "99.99% disponibilité"
      }
    },
    {
      id: 5,
      title: "TaskFlow - Gestion Projets",
      category: "Full Stack",
      description: "Application de gestion de projets avec interface Kanban, collaboration temps réel et système de notifications push.",
      longDescription: "Plateforme collaborative pour la gestion de projets d'équipe avec tableau Kanban interactif, chat en temps réel et système complet de notifications.",
      problem: "Équipes dispersées ayant besoin d'un outil de collaboration simple et efficace pour gérer leurs projets.",
      solution: "Application web avec interface Kanban intuitive, collaboration temps réel et intégrations multiples.",
      results: [
        "Adoption par 10+ équipes",
        "Amélioration de 40% de la productivité",
        "Interface temps réel fluide",
        "Intégration avec 5+ outils"
      ],
      image: "/api/placeholder/600/400",
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500"],
      technologies: ["Vue.js 3", "Laravel", "MySQL", "Socket.io", "Redis", "Docker"],
      features: [
        "Tableau Kanban interactif",
        "Chat équipe temps réel",
        "Notifications push",
        "Gestion des deadlines",
        "Rapports de productivité"
      ],
      liveUrl: "https://taskflow.jeremyaubry.fr",
      githubUrl: "https://github.com/Jerem-14/taskflow",
      status: "in-progress",
      difficulty: "intermediate",
      timeline: "4 mois",
      team: "Équipe de 3",
      role: "Full Stack Developer",
      metrics: {
        users: "100+ utilisateurs actifs",
        performance: "< 1s temps de chargement",
        other: "15+ projets gérés"
      }
    },
    {
      id: 6,
      title: "CryptoVault - Portfolio Web3",
      category: "Blockchain",
      description: "Application Web3 décentralisée pour gestion de portfolio crypto avec intégration DeFi et analytics avancées.",
      longDescription: "Plateforme Web3 complète permettant de gérer un portfolio de cryptomonnaies avec intégration DeFi, analytics avancées et alertes personnalisées.",
      problem: "Besoin d'une interface unifiée pour gérer différents wallets crypto et positions DeFi de manière sécurisée.",
      solution: "Application Web3 avec connexion multi-wallets, analytics temps réel et intégration protocoles DeFi populaires.",
      results: [
        "Intégration 15+ protocoles DeFi",
        "Gestion de $2M+ en assets",
        "Interface sécurisée multi-signature",
        "Analytics temps réel précises"
      ],
      image: "/api/placeholder/600/400",
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500"],
      technologies: ["React", "Web3.js", "Solidity", "Ethers.js", "The Graph", "MetaMask"],
      features: [
        "Connexion multi-wallets",
        "Analytics DeFi temps réel",
        "Smart contracts sécurisés",
        "Alertes prix personnalisées",
        "Interface multi-signature"
      ],
      liveUrl: "https://cryptovault.jeremyaubry.fr",
      githubUrl: "https://github.com/Jerem-14/crypto-vault",
      status: "concept",
      difficulty: "advanced",
      timeline: "5 mois",
      team: "Solo",
      role: "Full Stack + Blockchain Developer",
      metrics: {
        security: "Audit smart contract validé",
        users: "$2M+ assets sous gestion",
        other: "15+ protocoles intégrés"
      }
    }
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
                  <div className="absolute inset-0 bg-black bg-opacity-20" />
                  
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
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 text-white hover:bg-opacity-30 transition-all duration-300"
                    >
                      <Eye className="w-5 h-5" />
                    </motion.button>
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

      {/* Modal projet */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;