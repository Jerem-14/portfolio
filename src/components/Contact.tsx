'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Globe, Github, Linkedin,
  Send, User, MessageSquare, Clock, Download
} from 'lucide-react';
import GlassCard from './ui/GlassCard';
import GlassButton from './ui/GlassButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contactInfo = [
    {
      id: 1,
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "jeremy.aubry69@gmail.com",
      link: "mailto:jeremy.aubry69@gmail.com",
      color: "from-blue-500 to-cyan-500",
      description: "Contactez-moi par email"
    },
    {
      id: 2,
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "06 69 56 42 15",
      link: "tel:0669564215",
      color: "from-green-500 to-emerald-500",
      description: "Appelez-moi directement"
    },
    {
      id: 3,
      icon: <Globe className="w-6 h-6" />,
      title: "Site Web",
      value: "www.jeremyaubry.fr",
      link: "https://www.jeremyaubry.fr",
      color: "from-purple-500 to-pink-500",
      description: "Visitez mon site web"
    },
    {
      id: 4,
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Jeremy Aubry",
      link: "https://www.linkedin.com/in/jeremy-aubry-9ba90b189/",
      color: "from-blue-600 to-blue-700",
      description: "Connectons-nous sur LinkedIn"
    },
    {
      id: 5,
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "github.com/Jerem-14",
      link: "https://github.com/Jerem-14",
      color: "from-gray-700 to-gray-900",
      description: "Explorez mes projets"
    },
    {
      id: 6,
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      value: "Lyon, France",
      link: null,
      color: "from-orange-500 to-red-500",
      description: "Basé à Lyon"
    }
  ];

  const quickActions = [
    {
      title: "Télécharger CV",
      icon: <Download className="w-5 h-5" />,
      action: () => window.open('/cv-jeremy-aubry.pdf', '_blank'),
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Planifier un appel",
      icon: <Clock className="w-5 h-5" />,
      action: () => window.open('https://calendly.com/jeremy-aubry', '_blank'),
      color: "from-green-500 to-teal-500"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background avec effet glassmorphisme */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full"
               style={{
                 background: 'var(--glass-medium)',
                 backdropFilter: 'var(--blur-strong)',
                 border: '1px solid var(--glass-border-medium)',
                 animation: 'blob 10s infinite'
               }} />
          <div className="absolute bottom-1/4 right-1/6 w-96 h-96 rounded-full"
               style={{
                 background: 'var(--glass-light)',
                 backdropFilter: 'var(--blur-medium)',
                 border: '1px solid var(--glass-border-light)',
                 animation: 'blob 10s infinite 3s'
               }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
               style={{
                 background: 'var(--glass-strong)',
                 backdropFilter: 'var(--blur-light)',
                 border: '1px solid var(--glass-border-strong)',
                 animation: 'blob 10s infinite 6s'
               }} />
        </div>
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
          <h2 className="font-heading text-5xl font-bold mb-6">
            Me{' '}
            <span style={{
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Contacter
            </span>
          </h2>

          
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-heading font-bold mb-8"
                style={{ color: 'var(--text-primary)' }}>
              Mes Coordonnées
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  onHoverStart={() => setHoveredCard(info.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <GlassCard 
                    variant={hoveredCard === info.id ? "strong" : "medium"} 
                    className="p-6 h-full relative overflow-hidden group cursor-pointer"
                    onClick={() => info.link && window.open(info.link, '_blank')}
                  >
                    {/* Accent coloré */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${info.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                    
                    {/* Icon avec fond coloré */}
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white flex-shrink-0`}>
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-heading font-bold mb-1"
                            style={{ color: 'var(--text-primary)' }}>
                          {info.title}
                        </h4>
                        <p className="font-medium text-blue-600 mb-1 break-words">
                          {info.value}
                        </p>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                          {info.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover effect */}
                    {hoveredCard === info.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `linear-gradient(135deg, ${info.color.split(' ')[1]} 0%, transparent 70%)`,
                          opacity: 0.03
                        }}
                      />
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Disponibilité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <GlassCard variant="light" className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <h4 className="text-lg font-heading font-bold"
                      style={{ color: 'var(--text-primary)' }}>
                    Disponible pour de nouveaux projets
                  </h4>
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Je suis actuellement ouvert pour de nouvelles opportunités.
                  N&apos;hésitez pas à me contacter pour discuter de votre projet !
                </p>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard variant="medium" className="p-8">
              <h3 className="text-3xl font-heading font-bold mb-6"
                  style={{ color: 'var(--text-primary)' }}>
                Envoyez-moi un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nom */}
                <div>
                  <label className="block text-sm font-medium mb-2"
                         style={{ color: 'var(--text-primary)' }}>
                    Nom complet
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                          style={{ color: 'var(--text-secondary)' }} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      style={{
                        background: 'var(--glass-light)',
                        backdropFilter: 'var(--blur-light)',
                        border: '1px solid var(--glass-border-light)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="Votre nom complet"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2"
                         style={{ color: 'var(--text-primary)' }}>
                    Adresse email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                          style={{ color: 'var(--text-secondary)' }} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      style={{
                        background: 'var(--glass-light)',
                        backdropFilter: 'var(--blur-light)',
                        border: '1px solid var(--glass-border-light)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                {/* Sujet */}
                <div>
                  <label className="block text-sm font-medium mb-2"
                         style={{ color: 'var(--text-primary)' }}>
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    style={{
                      background: 'var(--glass-light)',
                      backdropFilter: 'var(--blur-light)',
                      border: '1px solid var(--glass-border-light)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Sujet de votre message"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2"
                         style={{ color: 'var(--text-primary)' }}>
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5"
                                  style={{ color: 'var(--text-secondary)' }} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
                      style={{
                        background: 'var(--glass-light)',
                        backdropFilter: 'var(--blur-light)',
                        border: '1px solid var(--glass-border-light)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="Décrivez votre projet ou posez votre question..."
                    />
                  </div>
                </div>

                {/* Bouton d'envoi */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center space-x-2 py-4 px-6 cursor-pointer rounded-lg font-semibold text-white transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  style={{
                    background: isSubmitting 
                      ? 'var(--text-secondary)' 
                      : 'var(--accent-gradient)'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;