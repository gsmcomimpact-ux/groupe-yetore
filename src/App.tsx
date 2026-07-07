/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  Building, 
  Users, 
  Star, 
  AlertCircle, 
  ChevronRight, 
  Sparkles,
  PhoneCall,
  CheckCircle,
  Clock,
  X
} from 'lucide-react';

import Navbar from './components/Navbar';
import ScolaireSection from './components/ScolaireSection';
import TransitSection from './components/TransitSection';
import AssuranceSection from './components/AssuranceSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { SectionType } from './types';

// Import local generated images
import schoolHero from './assets/images/yetore_school_hero_1783434363118.jpg';
import transitImg from './assets/images/yetore_transit_1783434378643.jpg';
import insuranceImg from './assets/images/yetore_insurance_1783434391940.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('home');
  const [showAnnouncement, setShowAnnouncement] = useState<boolean>(true);

  // Testimonials from right-bank Niamey residents and clients
  const testimonials = [
    {
      name: "Elhadj Soumana Oumarou",
      role: "Parent d'élèves (Lamordé)",
      comment: "Inscrire mes deux enfants au Complexe Scolaire Privé Yétoré est le meilleur choix que j'ai fait. Le programme bilingue est d'une grande rigueur, et le service de minibus climatisés évite à nos enfants la fatigue du trajet quotidien à travers le fleuve.",
      stars: 5
    },
    {
      name: "Mme Fatouma Djibo",
      role: "Directrice d'une coopérative d'importation",
      comment: "Le service de transit du Groupe Yétoré est d'un professionnalisme exemplaire. Ils ont géré l'acheminement de nos conteneurs de fournitures depuis le port de Cotonou jusqu'au dédouanement à Gaya avec une traçabilité parfaite.",
      stars: 5
    },
    {
      name: "Amadou Harouna",
      role: "Gérant d'une entreprise commerciale (Rive Droite)",
      comment: "Avec l'agence d'assurance Yétoré sur la Rive Droite, je gère la protection de mes véhicules commerciaux et la multirisque de mes bureaux en quelques minutes sans avoir à traverser les embouteillages du pont Kennedy.",
      stars: 5
    }
  ];

  const handleCTA = (section: SectionType) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans flex flex-col justify-between">
      
      {/* Global Navigation Header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections Routing */}
      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          
          {/* Section: HOME / PORTAL LANDING */}
          {activeSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-20"
            >
              {/* Dynamic Announcement Banner at top */}
              {showAnnouncement && (
                <div className="bg-yetore-blue-800 text-white py-3 px-4 border-b border-yetore-blue-700 relative flex items-center justify-between z-10">
                  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
                    <span className="bg-yetore-gold-500 text-white font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider font-mono shrink-0 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Rentré Académique 2026-2027
                    </span>
                    <p className="font-semibold leading-relaxed">
                      Inscriptions ouvertes au Complexe Scolaire Privé Yétoré (Maternelle, Primaire, Collège, Lycée) à la Rive Droite de Niamey. Réservez une place en ligne dès aujourd'hui !
                    </p>
                  </div>
                  <button 
                    onClick={() => setShowAnnouncement(false)} 
                    className="p-1 rounded hover:bg-white/10 text-white cursor-pointer"
                    aria-label="Fermer l'alerte"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Main Immersive Hero Banner - Strongly promoting the Groupe Scolaire while showing corporate divisions */}
              <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-white">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-yetore-blue-50/40 rounded-l-[100px] -z-10 hidden lg:block" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Hero Left Content */}
                  <div className="lg:col-span-6 space-y-6 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yetore-gold-50 text-yetore-gold-700 text-xs font-bold uppercase tracking-wide">
                      <GraduationCap className="w-4 h-4 text-yetore-blue-800" />
                      Groupe Scolaire mis à l'honneur
                    </div>
                    
                    <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-yetore-blue-900 leading-tight">
                      L'excellence académique à la <span className="text-transparent bg-clip-text bg-gradient-to-r from-yetore-blue-800 to-yetore-gold-600">Rive Droite</span> de Niamey
                    </h1>
                    
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                      Bienvenue sur le portail officiel du <strong>Groupe Yétoré</strong>. Notre complexe d'élite accompagne vos enfants de la maternelle au baccalauréat bilingue, tandis que nos divisions agréées de <strong>Transit</strong> et d'<strong>Assurances</strong> facilitent vos opérations commerciales et protègent vos biens.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        onClick={() => handleCTA('scolaire')}
                        className="px-6 py-3.5 rounded-xl bg-yetore-blue-800 hover:bg-yetore-blue-900 text-white font-bold text-xs shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        id="hero-scolaire-cta"
                      >
                        🏫 Visiter le Complexe Scolaire
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleCTA('contact')}
                        className="px-6 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-bold text-xs hover:bg-slate-50 flex items-center justify-center gap-2 cursor-pointer"
                        id="hero-contact-cta"
                      >
                        📞 Nous Contacter
                      </button>
                    </div>

                    {/* Compact Badges/Key Metrics */}
                    <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-3 text-xs text-gray-500 font-medium">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-4.5 h-4.5 text-yetore-emerald-600" />
                        <span>Maternelle, Primaire, Collège, Lycée</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-4.5 h-4.5 text-yetore-emerald-600" />
                        <span>Transit & Douanes Agréées</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-4.5 h-4.5 text-yetore-emerald-600" />
                        <span>Assurances & Courtage Local</span>
                      </div>
                    </div>
                  </div>

                  {/* Hero Right Visual Column - Custom Showcase of the School */}
                  <div className="lg:col-span-6 relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-4/3">
                      <img 
                        src={schoolHero} 
                        alt="Complexe Scolaire Groupe Yétoré Niamey Rive Droite" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-yetore-blue-950/70 via-transparent to-transparent flex items-end p-6">
                        <div className="text-white space-y-1">
                          <span className="px-2 py-0.5 rounded bg-yetore-gold-500 text-[10px] font-bold uppercase tracking-wider">Niamey Rive Droite</span>
                          <h3 className="font-display font-bold text-base sm:text-lg">Complexe Scolaire d'Excellence</h3>
                          <p className="text-[11px] text-gray-200">Un espace spacieux, ventilé et propice aux études d'élite.</p>
                        </div>
                      </div>
                    </div>

                    {/* Floating Info Badge */}
                    <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 max-w-xs animate-bounce" style={{ animationDuration: '4s' }}>
                      <div className="w-10 h-10 rounded-xl bg-yetore-gold-100 text-yetore-gold-700 flex items-center justify-center font-bold">
                        98%
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-yetore-blue-950">Taux de réussite BAC</h4>
                        <p className="text-[10px] text-gray-400">Mention excellence scientifique</p>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* Showcase Cards Grid representing the 3 Divisions of the Group */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="divisions-showcase">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-yetore-blue-900">
                    Les 3 Branches d’Activité de Notre Groupe
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    Découvrez nos services intégrés conçus pour répondre aux besoins éducatifs des familles et logistiques des entreprises nigériennes.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* School Division Card (Highlighted) */}
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-yetore-blue-800 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between">
                    <span className="absolute -top-1 -right-1 bg-yetore-gold-500 text-white font-extrabold text-[9px] uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                      Prioritaire / À l'honneur
                    </span>
                    
                    <div className="space-y-4">
                      <div className="p-3.5 bg-yetore-blue-50 text-yetore-blue-800 rounded-2xl inline-block">
                        <GraduationCap className="w-8 h-8 text-yetore-gold-500" />
                      </div>
                      <h3 className="font-display font-black text-lg text-yetore-blue-950">
                        Complexe Scolaire Privé Yétoré
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Maternelle, Primaire, Collège et Lycée Scientifique. Un cadre d'enseignement moderne offrant un programme bilingue (français/anglais), de l’initiation informatique (coding) et une cantine saine.
                      </p>
                      
                      <ul className="space-y-1.5 pt-2 text-[11px] text-gray-500 font-medium">
                        <li className="flex items-center gap-1.5">✓ Taux de succès remarquable (98% BAC, 100% BEPC)</li>
                        <li className="flex items-center gap-1.5">✓ Transport par bus climatisés sur la Rive Droite</li>
                        <li className="flex items-center gap-1.5">✓ Activités extra-scolaires (Coding, Échecs, Sports)</li>
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-gray-100 mt-6">
                      <button
                        onClick={() => handleCTA('scolaire')}
                        className="w-full py-3 rounded-xl bg-yetore-blue-800 hover:bg-yetore-blue-900 text-white text-xs font-bold shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                        id="portal-scolaire-btn"
                      >
                        Accéder au Portail Scolaire
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Transit Division Card */}
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="p-3.5 bg-slate-100 text-gray-700 rounded-2xl inline-block">
                        <Truck className="w-8 h-8 text-yetore-blue-800" />
                      </div>
                      <h3 className="font-display font-black text-lg text-yetore-blue-950">
                        Yétoré Transit & Logistique
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Commissionnaire agréé en douanes. Prise en charge de vos importations et exportations de marchandises depuis les ports de Cotonou, Lomé et Abidjan jusqu’à Niamey.
                      </p>
                      
                      <ul className="space-y-1.5 pt-2 text-[11px] text-gray-500 font-medium">
                        <li className="flex items-center gap-1.5">✓ Dédouanement sécurisé et réglementé au Niger</li>
                        <li className="flex items-center gap-1.5">✓ Transit routier via corridors régionaux suivis GPS</li>
                        <li className="flex items-center gap-1.5">✓ Simulateur de devis de transit douanier en ligne</li>
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-gray-100 mt-6">
                      <button
                        onClick={() => handleCTA('transit')}
                        className="w-full py-3 rounded-xl bg-slate-100 hover:bg-yetore-blue-50 hover:text-yetore-blue-800 text-gray-700 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                        id="portal-transit-btn"
                      >
                        Consulter la division Transit
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Insurance Division Card */}
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="p-3.5 bg-slate-100 text-gray-700 rounded-2xl inline-block">
                        <ShieldCheck className="w-8 h-8 text-yetore-emerald-600" />
                      </div>
                      <h3 className="font-display font-black text-lg text-yetore-blue-950">
                        Yétoré Assurances & Courtage
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Votre cabinet de conseil et souscription de proximité sur la Rive Droite de Niamey. Polices de protection sur-mesure pour votre auto, votre santé, vos habitations ou vos frets maritimes.
                      </p>
                      
                      <ul className="space-y-1.5 pt-2 text-[11px] text-gray-500 font-medium">
                        <li className="flex items-center gap-1.5">✓ Assurance Automobile, Moto & Flotte d'entreprise</li>
                        <li className="flex items-center gap-1.5">✓ Couverture Santé (Tiers-payant agréé consultations)</li>
                        <li className="flex items-center gap-1.5">✓ Assurance Fret spécialement couplée au Transit</li>
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-gray-100 mt-6">
                      <button
                        onClick={() => handleCTA('assurances')}
                        className="w-full py-3 rounded-xl bg-slate-100 hover:bg-yetore-blue-50 hover:text-yetore-blue-800 text-gray-700 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                        id="portal-insurance-btn"
                      >
                        Consulter la division Assurances
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Rive Droite Strategic Location Showcase section */}
              <section className="bg-yetore-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-5">
                    <span className="px-2.5 py-1 rounded bg-yetore-gold-500 text-white font-mono text-[9px] font-extrabold uppercase tracking-widest">
                      Niamey Rive Droite
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl">La Rive Droite au Cœur de Notre Stratégie</h3>
                    <p className="text-xs sm:text-sm text-yetore-blue-100 leading-relaxed">
                      Traditionnellement, de nombreux services administratifs et écoles d'élite étaient situés uniquement sur la Rive Gauche de Niamey, obligeant les habitants de Lamordé, Karadjé et Kirkissoye à traverser quotidiennement les ponts saturés. 
                    </p>
                    <p className="text-xs sm:text-sm text-yetore-blue-100 leading-relaxed">
                      Le <strong>Groupe Yétoré</strong> change la donne en proposant un pôle complet multiservice directement de votre côté du fleuve. Moins de fatigue pour vos enfants scolarisés, et plus de réactivité pour vos opérations de logistique commerciale.
                    </p>

                    <div className="grid grid-cols-3 gap-4 pt-2 text-center">
                      <div className="bg-yetore-blue-950 p-4 rounded-xl border border-yetore-blue-800">
                        <span className="block font-display font-extrabold text-lg text-yetore-gold-500">100%</span>
                        <span className="block text-[9px] text-gray-400 uppercase tracking-wider mt-0.5">Rive Droite</span>
                      </div>
                      <div className="bg-yetore-blue-950 p-4 rounded-xl border border-yetore-blue-800">
                        <span className="block font-display font-extrabold text-lg text-yetore-gold-500">-30 min</span>
                        <span className="block text-[9px] text-gray-400 uppercase tracking-wider mt-0.5">De Trajet</span>
                      </div>
                      <div className="bg-yetore-blue-950 p-4 rounded-xl border border-yetore-blue-800">
                        <span className="block font-display font-extrabold text-lg text-yetore-gold-500">5+</span>
                        <span className="block text-[9px] text-gray-400 uppercase tracking-wider mt-0.5">Quartiers desservis</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yetore-blue-950/50 p-6 sm:p-8 rounded-3xl border border-yetore-blue-800 space-y-4">
                    <h4 className="font-display font-bold text-base text-white">Nos Engagements Territoriaux :</h4>
                    
                    <div className="space-y-3 text-xs">
                      <div className="flex gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-yetore-gold-500 text-white flex items-center justify-center shrink-0 text-[10px] font-bold">1</div>
                        <p className="text-yetore-blue-100">Bourses de mérite pour les enfants des familles méritantes de Lamordé, Karadjé et alentours.</p>
                      </div>
                      <div className="flex gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-yetore-gold-500 text-white flex items-center justify-center shrink-0 text-[10px] font-bold">2</div>
                        <p className="text-yetore-blue-100">Synergie complète avec les douaniers du poste frontière de Gaya pour assurer un dédouanement fluide.</p>
                      </div>
                      <div className="flex gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-yetore-gold-500 text-white flex items-center justify-center shrink-0 text-[10px] font-bold">3</div>
                        <p className="text-yetore-blue-100">Un accueil chaleureux et professionnel dans nos bureaux Route de Say, à proximité immédiate de l’Hôpital Lamordé.</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCTA('contact')}
                      className="w-full mt-4 py-2.5 rounded-xl bg-yetore-gold-500 text-white text-xs font-bold shadow-md hover:bg-yetore-gold-600 transition-colors cursor-pointer"
                    >
                      Demander un itinéraire de visite
                    </button>
                  </div>
                </div>
              </section>

              {/* Testimonials Section */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="testimonials">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-yetore-blue-900">
                    Ce que disent nos Parents et Clients
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    Découvrez les retours d'expérience authentiques des usagers de nos différents pôles d'activité à Niamey.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((test, index) => (
                    <div key={index} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex gap-1 text-yetore-gold-500">
                          {Array.from({ length: test.stars }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <p className="text-xs text-gray-600 italic leading-relaxed">
                          "{test.comment}"
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100 mt-4 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-yetore-blue-800 text-white font-bold flex items-center justify-center text-xs">
                          {test.name[0]}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-yetore-blue-950">{test.name}</h4>
                          <span className="text-[10px] text-gray-400 font-medium">{test.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {/* Section: GROUPE SCOLAIRE PORTAL */}
          {activeSection === 'scolaire' && (
            <motion.div
              key="scolaire"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <ScolaireSection schoolHeroImage={schoolHero} />
            </motion.div>
          )}

          {/* Section: TRANSIT & LOGISTIQUE */}
          {activeSection === 'transit' && (
            <motion.div
              key="transit"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <TransitSection transitImage={transitImg} />
            </motion.div>
          )}

          {/* Section: ASSURANCES */}
          {activeSection === 'assurances' && (
            <motion.div
              key="assurances"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <AssuranceSection insuranceImage={insuranceImg} />
            </motion.div>
          )}

          {/* Section: ABOUT PROPOS */}
          {activeSection === 'propos' && (
            <motion.div
              key="propos"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <AboutSection />
            </motion.div>
          )}

          {/* Section: CONTACT */}
          {activeSection === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <ContactSection />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Global Interactive Footer */}
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}
