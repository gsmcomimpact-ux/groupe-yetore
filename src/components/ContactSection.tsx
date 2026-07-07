/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Compass, 
  GraduationCap, 
  Truck, 
  ChevronRight
} from 'lucide-react';

export default function ContactSection() {
  const [routeFrom, setRouteFrom] = useState('plateau');
  const [simulatedRoute, setSimulatedRoute] = useState<any | null>({
    time: '12 min',
    distance: '6.2 km',
    steps: [
      'Prenez le Boulevard de la République vers le Pont Kennedy.',
      'Traversez le Pont Kennedy vers la Rive Droite.',
      'Au rond-point Rive Droite (Université), prenez la 2ème sortie (Route de Say).',
      'Continuez sur 800m. Le campus Groupe Yétoré se trouve à votre droite, juste après le complexe hospitalier de Lamordé.'
    ],
    landmark: 'Après l’Hôpital National de Lamordé, en face de la station-service.'
  });

  const handleRouteCalculation = (origin: string) => {
    setRouteFrom(origin);
    switch (origin) {
      case 'plateau':
        setSimulatedRoute({
          time: '12 min',
          distance: '6.2 km',
          steps: [
            'Prenez le Boulevard de la République vers le Pont Kennedy.',
            'Traversez le Pont Kennedy vers la Rive Droite.',
            'Au rond-point Rive Droite (Université), prenez la 2ème sortie (Route de Say).',
            'Continuez sur 800m. Le campus Groupe Yétoré se trouve à votre droite, en bordure de goudron.'
          ],
          landmark: 'Après l’Hôpital National de Lamordé, grand portail bleu et or.'
        });
        break;
      case 'kirkissoye':
        setSimulatedRoute({
          time: '7 min',
          distance: '3.4 km',
          steps: [
            'Prenez la route principale de Kirkissoye vers le Nord (dir. Lamordé).',
            'Au croisement de la pharmacie, continuez tout droit sur le goudron principal.',
            'À la hauteur du marché de Lamordé, tournez à gauche.',
            'Le complexe Yétoré est situé à 200m sur votre gauche.'
          ],
          landmark: 'Près de l’école primaire publique de Lamordé.'
        });
        break;
      case 'karadje':
        setSimulatedRoute({
          time: '9 min',
          distance: '4.8 km',
          steps: [
            'Prenez la route de Karadjé vers le rond-point de l’Université de Niamey.',
            'Au rond-point, prenez la 3ème sortie en direction de l’Hôpital de Lamordé (Route de Say).',
            'Parcourez 1 km sur la Route de Say.',
            'L’entrée principale se trouve sur votre droite après la station.'
          ],
          landmark: 'En face de l’agence d’assurances partenaire.'
        });
        break;
      case 'gaya':
        setSimulatedRoute({
          time: '3 h 45 min',
          distance: '290 km',
          steps: [
            'Prenez la Route Nationale 1 (RN1) en direction de Niamey Rive Droite.',
            'À l’entrée sud de Niamey (péage), continuez sur le Boulevard des Révolutionnaires.',
            'Au rond-point Lamordé, prenez la sortie Route de Say.',
            'Le bureau Transit / Assurances Yétoré est à 50m.'
          ],
          landmark: 'Entrée stratégique sud-ouest de Niamey.'
        });
        break;
      default:
        setSimulatedRoute(null);
    }
  };

  return (
    <section id="contact-portal" className="bg-slate-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yetore-blue-100 text-yetore-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Mail className="w-4 h-4 text-yetore-gold-500" />
            CONTACT & LOCALISATION
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-yetore-blue-900 leading-tight mb-4">
            Venez nous Rendre Visite au <span className="text-transparent bg-clip-text bg-gradient-to-r from-yetore-blue-800 to-yetore-gold-600">Groupe Yétoré</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Une question sur les inscriptions scolaires ? Besoin de dédouaner un conteneur urgent ou de souscrire un contrat d’assurance ? Retrouvez toutes nos coordonnées directes et notre calculateur d'itinéraire ci-dessous.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Contact coordinates (Left) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-lg text-yetore-blue-950 pb-2 border-b border-gray-100 mb-6">Nos Coordonnées</h3>
                
                <div className="space-y-6 text-xs text-gray-600">
                  {/* ECOLE */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-yetore-blue-950 font-bold border-l-4 border-yetore-blue-800 pl-2">
                      <GraduationCap className="w-4 h-4 text-yetore-gold-500" />
                      <span>COMPLEXE SCOLAIRE PRIVÉ YÉTORÉ</span>
                    </div>
                    
                    <div className="space-y-2 pl-3">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-yetore-gold-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-bold text-yetore-blue-900 block">Adresse :</span>
                          <p className="text-gray-600 text-[11px] mt-0.5">Voie latérite gauche près de l'hôtel Aliyah, quartier Koutéré, Plateau, Niamey, Niger.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Phone className="w-4 h-4 text-yetore-gold-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-bold text-yetore-blue-900 block">Téléphones & WhatsApp :</span>
                          <p className="text-gray-600 text-[11px] mt-0.5">+227 96 82 06 12 / 93 82 22 82</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Mail className="w-4 h-4 text-yetore-gold-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-bold text-yetore-blue-900 block">Courriel :</span>
                          <p className="text-gray-600 text-[11px] mt-0.5">cspyetore21@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TRANSIT & ASSURANCE */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-yetore-blue-950 font-bold border-l-4 border-yetore-gold-500 pl-2">
                      <Truck className="w-4 h-4 text-yetore-blue-800" />
                      <span>YÉTORÉ TRANSIT & ASSURANCES</span>
                    </div>
                    
                    <div className="space-y-2 pl-3">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-yetore-gold-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-bold text-yetore-blue-900 block">Adresse :</span>
                          <p className="text-gray-600 text-[11px] mt-0.5">Quartier Banga Bana, Immeuble YTT, Boulevard Mame Djaba, rue BB 23, Niamey, Niger.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Phone className="w-4 h-4 text-yetore-gold-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-bold text-yetore-blue-900 block">Téléphones :</span>
                          <p className="text-gray-600 text-[11px] mt-0.5">+227 20 31 57 85 / 96 45 20 90 / 94 10 50 16</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Mail className="w-4 h-4 text-yetore-gold-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-bold text-yetore-blue-900 block">Courriels :</span>
                          <p className="text-gray-600 text-[11px] mt-0.5">yetoretransit14@gmail.com / info@yetoretransit.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-gray-100 mt-6">
                <div className="p-2.5 rounded-lg bg-yetore-blue-50 text-yetore-blue-800 mt-0.5 animate-pulse">
                  <Clock className="w-4.5 h-4.5 text-yetore-gold-500" />
                </div>
                <div>
                  <h4 className="font-bold text-yetore-blue-950 text-xs">Heures d'Ouverture</h4>
                  <p className="mt-0.5 text-xs text-gray-500">Secrétariat : Lundi au Vendredi : 07h30 – 18h00 | Samedi : 08h00 – 12h00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Route GPS Planner Simulation Box (Right) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-yetore-blue-900 text-white p-6 sm:p-8 rounded-3xl border border-yetore-blue-800 shadow-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 pb-2 border-b border-yetore-blue-800 mb-6">
                  <Compass className="w-5 h-5 text-yetore-gold-500 animate-spin" style={{ animationDuration: '6s' }} />
                  <h3 className="font-display font-bold text-lg text-white">Calculateur d'Itinéraire Local</h3>
                </div>
                
                <p className="text-xs text-yetore-blue-200 mb-6 leading-relaxed">
                  Sélectionnez votre zone de départ à Niamey pour savoir comment nous rejoindre sans encombre à la Rive Droite ou à notre siège de Banga Bana.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-yetore-blue-300 mb-2">Point de départ :</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        onClick={() => handleRouteCalculation('plateau')}
                        className={`px-2.5 py-2 text-[11px] font-bold rounded-lg border text-center transition-all cursor-pointer ${
                          routeFrom === 'plateau' 
                            ? 'bg-yetore-gold-500 border-yetore-gold-500 text-white shadow-sm' 
                            : 'border-yetore-blue-700 bg-yetore-blue-800/50 hover:bg-yetore-blue-800 text-yetore-blue-100'
                        }`}
                      >
                        Plateau/Centre
                      </button>
                      <button
                        onClick={() => handleRouteCalculation('kirkissoye')}
                        className={`px-2.5 py-2 text-[11px] font-bold rounded-lg border text-center transition-all cursor-pointer ${
                          routeFrom === 'kirkissoye' 
                            ? 'bg-yetore-gold-500 border-yetore-gold-500 text-white shadow-sm' 
                            : 'border-yetore-blue-700 bg-yetore-blue-800/50 hover:bg-yetore-blue-800 text-yetore-blue-100'
                        }`}
                      >
                        Kirkissoye
                      </button>
                      <button
                        onClick={() => handleRouteCalculation('karadje')}
                        className={`px-2.5 py-2 text-[11px] font-bold rounded-lg border text-center transition-all cursor-pointer ${
                          routeFrom === 'karadje' 
                            ? 'bg-yetore-gold-500 border-yetore-gold-500 text-white shadow-sm' 
                            : 'border-yetore-blue-700 bg-yetore-blue-800/50 hover:bg-yetore-blue-800 text-yetore-blue-100'
                        }`}
                      >
                        Karadjé
                      </button>
                      <button
                        onClick={() => handleRouteCalculation('gaya')}
                        className={`px-2.5 py-2 text-[11px] font-bold rounded-lg border text-center transition-all cursor-pointer ${
                          routeFrom === 'gaya' 
                            ? 'bg-yetore-gold-500 border-yetore-gold-500 text-white shadow-sm' 
                            : 'border-yetore-blue-700 bg-yetore-blue-800/50 hover:bg-yetore-blue-800 text-yetore-blue-100'
                        }`}
                      >
                        Poste Gaya
                      </button>
                    </div>
                  </div>

                  {simulatedRoute && (
                    <div className="bg-yetore-blue-950 p-4 rounded-xl border border-yetore-blue-800 text-xs space-y-3" id="gps-route-result">
                      <div className="flex justify-between text-[11px] text-yetore-gold-500 font-extrabold border-b border-yetore-blue-800 pb-1.5">
                        <span>⏱ Durée : {simulatedRoute.time}</span>
                        <span>🗺 Distance : {simulatedRoute.distance}</span>
                      </div>
                      
                      <div className="space-y-2 text-[11px] text-gray-200">
                        {simulatedRoute.steps.map((step: string, i: number) => (
                          <div key={i} className="flex gap-2">
                            <ChevronRight className="w-3.5 h-3.5 text-yetore-gold-500 shrink-0 mt-0.5" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {simulatedRoute && (
                <div className="text-[10px] text-yetore-blue-300 italic pt-3 border-t border-yetore-blue-800 mt-4">
                  📍 <strong>Point de repère :</strong> {simulatedRoute.landmark}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
