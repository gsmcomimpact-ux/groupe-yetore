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
  TrendingUp,
  MapPin
} from 'lucide-react';

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

  const milestones = [
    {
      year: '2018',
      title: 'Fondation du Transit Yétoré',
      description: 'Lancement de l’agence de transit d’origine routière et maritime pour faciliter l’import-export de biens stratégiques pour le Niger.'
    },
    {
      year: '2021',
      title: 'Création de la branche Assurance',
      description: 'Pour offrir une protection intégrale aux conteneurs de transit et s’étendre aux familles de Niamey avec des formules Auto et Santé.'
    },
    {
      year: '2024',
      title: 'Inauguration du Complexe Scolaire d’Élite',
      description: 'Ouverture du campus moderne de la Rive Droite (Maternelle, Primaire et Collège) pour répondre à la demande d’une éducation bilingue d’excellence.'
    },
    {
      year: '2026',
      title: 'Extension au Lycée Scientifique',
      description: 'Inauguration des classes de Seconde, Première et Terminale S (C et D) équipées de laboratoires scientifiques haut de gamme.'
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
              Le <strong>Groupe Yétoré</strong> est né d'une volonté simple : bâtir un écosystème de services de premier plan sur la <strong>Rive Droite de Niamey</strong>. Convaincus que le développement socioéconomique d’un pays repose sur deux piliers — une éducation de classe mondiale pour sa jeunesse et des flux logistiques performants pour ses entreprises — nous avons réuni sous un même label le Complexe Scolaire d’excellence, l'agence agréée de transit, et le cabinet de conseil en assurances.
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
                  Devenir le groupe multiservice de référence à Niamey, reconnu pour la réussite à 100% de ses bacheliers et l’intégrité sans faille de sa chaîne de transit.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Milestones */}
          <div className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-gray-100">
            <h3 className="font-display font-extrabold text-lg text-yetore-blue-950 mb-8 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-yetore-gold-500" />
              L'Évolution du Groupe Yétoré
            </h3>

            <div className="relative border-l border-gray-200 ml-3 pl-6 space-y-8">
              {milestones.map((stone, idx) => (
                <div key={idx} className="relative">
                  {/* Indicator bullet */}
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-yetore-blue-800 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white shadow-sm" />
                  
                  <div className="space-y-1">
                    <span className="font-mono text-xs font-extrabold text-yetore-gold-600 block leading-none">
                      {stone.year}
                    </span>
                    <h4 className="text-xs font-bold text-yetore-blue-950">
                      {stone.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                      {stone.description}
                    </p>
                  </div>
                </div>
              ))}
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
