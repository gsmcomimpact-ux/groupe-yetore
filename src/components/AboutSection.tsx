/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Building2, 
  Target, 
  History, 
  Eye, 
  Award, 
  CheckCircle,
  MapPin
} from 'lucide-react';

import directorImg from '../assets/images/yetore_director_photo_1783443010142.jpg';

export default function AboutSection() {
  const coreValues = [
    {
      title: 'Excellence Académique',
      description: 'Nous croyons en un apprentissage rigoureux et moderne, favorisant l’esprit d’initiative, la créativité et les compétences du 21e siècle (codage, bilinguisme).',
      icon: Award
    },
    {
      title: 'Logistique Intègre',
      description: 'Notre division Transit s’engage à respecter scrupuleusement la réglementation douanière nigérienne pour sécuriser et accélérer l’approvisionnement.',
      icon: Building2
    },
    {
      title: 'Proximité Rive Droite',
      description: 'En implantant nos trois services à la Rive Droite de Niamey, nous évitons les contraintes d’embouteillage sur les ponts pour les usagers locaux.',
      icon: MapPin
    }
  ];

  return (
    <section id="about-portal" className="bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Main Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yetore-blue-50 text-yetore-blue-800 text-xs font-bold uppercase tracking-wider">
              <History className="w-4 h-4 text-yetore-gold-500" />
              NOTRE HISTOIRE & VISION
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-yetore-blue-900 leading-tight">
              Un Engagement Global pour le Développement du Niger
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Le <strong>Groupe Yétoré</strong>, fondé par <strong>M. AMADOU SOUMANA</strong>, est né d'une volonté simple : bâtir un écosystème de services de premier plan sur la <strong>Rive Droite de Niamey</strong>. Convaincus que le développement socioéconomique d’un pays repose sur deux piliers — une éducation de classe mondiale pour sa jeunesse et des flux logistiques performants pour ses entreprises — le fondateur a réuni sous un même label le CSP YETTORE d’excellence, l'agence agréée de transit, et le cabinet de conseil en assurances.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-100 space-y-2">
                <div className="flex items-center gap-2 text-yetore-blue-900">
                  <Target className="w-5 h-5 text-yetore-gold-500" />
                  <h4 className="text-xs font-extrabold uppercase font-mono tracking-wider">Notre Mission</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Offrir aux familles et aux entrepreneurs du Niger des solutions d'excellence, de confiance et à impact local direct, au cœur de leur lieu de vie.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-100 space-y-2">
                <div className="flex items-center gap-2 text-yetore-blue-900">
                  <Eye className="w-5 h-5 text-yetore-gold-500" />
                  <h4 className="text-xs font-extrabold uppercase font-mono tracking-wider">Notre Vision</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Sous l'impulsion de son fondateur <strong>M. AMADOU SOUMANA</strong>, notre vision est de devenir le groupe multiservice de référence à Niamey, reconnu pour la réussite à 100% de ses bacheliers et l’intégrité sans faille de sa chaîne de transit et assurances.
                </p>
              </div>
            </div>
          </div>

          {/* Director Showcase */}
          <div className="space-y-6 lg:pl-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              <img 
                src={directorImg} 
                alt="M. AMADOU SOUMANA - Directeur Général du Groupe Yétoré" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yetore-blue-950/90 via-yetore-blue-950/20 to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-yetore-gold-500 text-[9px] font-extrabold uppercase tracking-widest text-yetore-blue-950">Fondateur & DG</span>
                  <h3 className="font-display font-black text-lg sm:text-xl text-white">M. AMADOU SOUMANA</h3>
                  <p className="text-[11px] text-yetore-blue-100 font-medium">Directeur Général du Groupe Yétoré</p>
                </div>
              </div>
            </div>
            
            <div className="bg-yetore-blue-50/50 p-6 rounded-2xl border border-yetore-blue-100/50 relative max-w-sm mx-auto lg:mx-0">
              <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-yetore-blue-800 text-white text-[9px] font-bold uppercase tracking-wider">Le Mot du Directeur</span>
              <p className="text-xs text-gray-600 italic leading-relaxed pt-2">
                "Notre engagement au sein du Groupe Yétoré repose sur une exigence d'intégrité et de rigueur absolue. Que ce soit pour former les leaders de demain dans notre école CSP YETTORE ou pour orchestrer vos flux de transit à travers le continent, notre priorité absolue reste votre réussite et la satisfaction de nos engagements envers le Niger."
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Historique */}
        <div className="my-20 pt-16 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-yetore-blue-900">Notre Historique</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Une décennie de croissance continue, d'engagement local et de diversification au service du Niger.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yetore-blue-800 to-yetore-gold-500 -translate-x-1/2 hidden md:block" />
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yetore-blue-800 to-yetore-gold-500 md:hidden" />

            <div className="space-y-12">
              {/* Timeline Item 2014 */}
              <div className="relative flex flex-col md:flex-row items-start md:justify-between group">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-yetore-blue-800 rounded-full -translate-x-1/2 top-1.5 z-10 group-hover:scale-125 transition-transform" />
                
                <div className="w-full md:w-[45%] pl-10 md:pl-0 md:text-right space-y-2">
                  <span className="inline-block px-3 py-1 bg-yetore-blue-50 text-yetore-blue-800 text-xs font-black rounded-full font-mono">
                    2014
                  </span>
                  <h4 className="font-display font-bold text-sm text-yetore-blue-950">
                    Création de la branche Transit & Logistique
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Lancement de nos activités de dédouanement et de logistique internationale. Le Groupe Yétoré s'impose rapidement comme un acteur de confiance à Niamey pour sécuriser les flux de marchandises à l'import-export.
                  </p>
                </div>
                <div className="hidden md:block w-[45%]" />
              </div>

              {/* Timeline Item 2018 */}
              <div className="relative flex flex-col md:flex-row-reverse items-start md:justify-between group">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-yetore-gold-500 rounded-full -translate-x-1/2 top-1.5 z-10 group-hover:scale-125 transition-transform" />
                
                <div className="w-full md:w-[45%] pl-10 md:pl-0 md:text-left space-y-2">
                  <span className="inline-block px-3 py-1 bg-yetore-gold-50 text-yetore-gold-600 text-xs font-black rounded-full font-mono">
                    2018
                  </span>
                  <h4 className="font-display font-bold text-sm text-yetore-blue-950">
                    Création de la branche Assurance & Conseil
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Diversification stratégique avec l'ouverture de notre cabinet de courtage en assurances. Une présence directe sur la Rive Droite pour accompagner de près les familles et les entreprises du Niger dans la gestion de leurs risques.
                  </p>
                </div>
                <div className="hidden md:block w-[45%]" />
              </div>

              {/* Timeline Item 2022 */}
              <div className="relative flex flex-col md:flex-row items-start md:justify-between group">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-yetore-blue-900 rounded-full -translate-x-1/2 top-1.5 z-10 group-hover:scale-125 transition-transform" />
                
                <div className="w-full md:w-[45%] pl-10 md:pl-0 md:text-right space-y-2">
                  <span className="inline-block px-3 py-1 bg-yetore-blue-950 text-white text-xs font-black rounded-full font-mono">
                    2022
                  </span>
                  <h4 className="font-display font-bold text-sm text-yetore-blue-950">
                    Création du Complexe Scolaire Privé CSP YETTORE
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Inauguration de notre campus scolaire d'élite bilingue sur la Rive Droite de Niamey. Une offre éducative d'excellence de la maternelle au lycée scientifique, alliant rigueur pédagogique, transport scolaire et éducation citoyenne.
                  </p>
                </div>
                <div className="hidden md:block w-[45%]" />
              </div>

            </div>
          </div>
        </div>

        {/* Corporate Core Values Cards */}
        <div className="pt-10 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display font-bold text-xl text-yetore-blue-950">Nos 3 Valeurs Cardinales</h3>
            <p className="text-xs text-gray-500 mt-1">Les principes fondamentaux qui guident l’ensemble de nos collaborateurs au quotidien</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-gray-100 text-center space-y-3.5 hover:bg-yetore-blue-50/25 transition-colors">
                  <div className="p-3 bg-white text-yetore-blue-800 rounded-xl inline-block shadow-sm">
                    <Icon className="w-6 h-6 text-yetore-gold-500" />
                  </div>
                  <h4 className="text-sm font-bold text-yetore-blue-950">{val.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
