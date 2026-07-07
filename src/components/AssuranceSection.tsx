/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ShieldCheck, 
  Car, 
  Heart, 
  Home, 
  Ship, 
  Clock, 
  CheckCircle2,
  Phone,
  Mail
} from 'lucide-react';

interface AssuranceSectionProps {
  insuranceImage: string;
}

export default function AssuranceSection({ insuranceImage }: AssuranceSectionProps) {
  const insurancePlans = [
    {
      type: 'auto',
      title: 'Assurance Automobile & Moto',
      description: 'Protégez votre véhicule et vos passagers sur les routes de Niamey. Responsabilité civile obligatoire, défense et recours, bris de glace, ou formule tous risques.',
      icon: Car,
      color: 'bg-emerald-50 text-emerald-800'
    },
    {
      type: 'sante',
      title: 'Assurance Santé Familiale & Scolaire',
      description: 'Une couverture médicale complète prenant en charge les consultations, frais d’hospitalisation, radiologies et pharmacie pour toute la famille ou les groupes scolaires.',
      icon: Heart,
      color: 'bg-rose-50 text-rose-800'
    },
    {
      type: 'habitation',
      title: 'Multirisque Habitation & Bureaux',
      description: 'Garantissez la sécurité de votre foyer ou de vos locaux professionnels contre les incendies, dégâts des eaux, vols, pillages et risques électriques sur la Rive Droite.',
      icon: Home,
      color: 'bg-amber-50 text-amber-800'
    },
    {
      type: 'transit',
      title: 'Assurance Facultés au Transit (Cargo)',
      description: 'Spécialement couplée à notre division Transit. Assurez vos marchandises importées de l’étranger contre les avaries communes, vols et pertes durant le trajet maritime ou routier.',
      icon: Ship,
      color: 'bg-emerald-50 text-emerald-800'
    }
  ];

  return (
    <section id="insurance-portal" className="bg-slate-50 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-yetore-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-yetore-gold-100 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yetore-blue-100 text-yetore-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-yetore-gold-500" />
            YÉTORÉ ASSURANCES
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-yetore-blue-900 leading-tight mb-4">
            Assurer votre Présent et Sécuriser votre Avenir
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Parce que la sérénité n’a pas de prix, Yétoré Assurances vous accompagne sur la Rive Droite de Niamey avec des polices sur-mesure pour votre famille, vos biens, vos véhicules et vos opérations logistiques de transit.
          </p>
        </div>

        {/* Insurance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {insurancePlans.map((plan, idx) => {
            const Icon = plan.icon;
            
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`p-3 rounded-xl inline-block ${plan.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-yetore-blue-950">{plan.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{plan.description}</p>
                </div>
                
                <div className="pt-6 border-t border-gray-100 mt-6">
                  <button
                    onClick={() => {
                      const el = document.getElementById('insurance-contact-anchor');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2 rounded-lg text-xs font-bold transition-all cursor-pointer bg-slate-50 hover:bg-yetore-blue-50 text-yetore-blue-800"
                  >
                    Contacter un conseiller
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact and Quote Request area */}
        <div 
          id="insurance-contact-anchor" 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100"
        >
          {/* Visual column with local agency representation */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-video">
                <img 
                  src={insuranceImage} 
                  alt="Agence de Conseil Yétoré Assurances Niamey" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-yetore-emerald-600 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
                  Courtier Agréé
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-extrabold text-xl text-yetore-blue-900">Pourquoi souscrire chez Yétoré Assurances ?</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Notre agence physique est implantée directement sur la <strong>Rive Droite de Niamey</strong>, ce qui vous évite d'avoir à traverser le pont pour déclarer vos sinistres ou retirer vos attestations de couverture.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-yetore-emerald-600 shrink-0" />
                    <span><strong>Indemnisation rapide :</strong> Évaluation d'experts locaux sous 48h.</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-yetore-emerald-600 shrink-0" />
                    <span><strong>Synergie logistique :</strong> Couverture intégrée lors de vos transits douaniers.</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-yetore-emerald-600 shrink-0" />
                    <span><strong>Tiers-payant Santé :</strong> Convention de dispense d'avance de frais de santé.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact details & WhatsApp click-to-action column */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-gray-100 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-yetore-blue-800 text-white rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-yetore-gold-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-yetore-blue-950">Obtenir une Cotisation Personnalisée</h3>
                  <p className="text-[11px] text-gray-400">Prenez contact directement avec nos conseillers spécialisés</p>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                Afin de vous proposer le tarif le plus juste et adapté à vos besoins réels (caractéristiques de votre véhicule, taille de votre famille, nature des marchandises à assurer), nos experts étudient votre dossier individuellement et gratuitement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200/60 space-y-2">
                  <span className="text-[10px] font-extrabold uppercase text-yetore-gold-600 font-mono block">📞 Par Téléphone</span>
                  <p className="text-xs font-bold text-yetore-blue-950 font-mono">
                    +227 20 31 57 85
                  </p>
                  <p className="text-xs font-bold text-yetore-blue-950 font-mono">
                    +227 96 45 20 90
                  </p>
                  <p className="text-[10px] text-gray-400">Du lundi au vendredi (8h - 17h)</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-200/60 space-y-2">
                  <span className="text-[10px] font-extrabold uppercase text-yetore-gold-600 font-mono block">✉️ Par Email</span>
                  <p className="text-xs font-bold text-yetore-blue-950 font-mono break-all">
                    yetoretransit14@gmail.com
                  </p>
                  <p className="text-[10px] text-gray-400">Réponse garantie sous 24 heures</p>
                </div>
              </div>

              <div className="bg-yetore-blue-50/50 p-4 rounded-xl border border-yetore-blue-100/50 space-y-1">
                <h4 className="text-xs font-bold text-yetore-blue-950 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-yetore-gold-500" />
                  Passer en Agence (Rive Droite)
                </h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Nos bureaux sont situés au Quartier Banga Bana, Immeuble YTT, Niamey. Évitez les embouteillages des ponts et venez nous rencontrer directement de votre côté du fleuve.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200/60 mt-6">
              <a
                href="https://wa.me/22796452090?text=Bonjour,%20je%20souhaite%20obtenir%20un%20devis%20personnalisé%20pour%20une%20assurance%20avec%20le%20Groupe%20Yétoré."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl bg-yetore-emerald-600 hover:bg-yetore-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-white" />
                Discuter avec un Conseiller sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
