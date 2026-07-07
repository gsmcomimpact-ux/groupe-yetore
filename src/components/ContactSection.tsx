/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  Map, 
  Compass, 
  GraduationCap, 
  Truck, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { ContactMessage } from '../types';

export default function ContactSection() {
  const [formState, setFormState] = useState<ContactMessage>({
    name: '',
    email: '',
    phone: '',
    subject: 'Scolaire (Inscriptions)',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      // Auto-reset form after notification
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: 'Scolaire (Inscriptions)',
        message: ''
      });
    }, 5000);
  };

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
            Venez nous Rendre Visite à la <span className="text-transparent bg-clip-text bg-gradient-to-r from-yetore-blue-800 to-yetore-gold-600">Rive Droite</span> de Niamey
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Une question sur les inscriptions scolaires ? Besoin de dédouaner un conteneur urgent ou de souscrire un contrat d’assurance ? Remplissez notre formulaire ou utilisez le simulateur d’itinéraire ci-dessous.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Contact coordinates and Route Finder (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-lg text-yetore-blue-950">Nos Coordonnées</h3>
              
              <div className="space-y-4 text-xs text-gray-600">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-yetore-blue-50 text-yetore-blue-800 mt-0.5">
                    <MapPin className="w-4.5 h-4.5 text-yetore-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-yetore-blue-950">Adresse Physique</h4>
                    <p className="mt-0.5">Complexe Yétoré, Route de Say (800m après l’Hôpital Lamordé), Rive Droite, Niamey, Niger.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-yetore-blue-50 text-yetore-blue-800 mt-0.5">
                    <Phone className="w-4.5 h-4.5 text-yetore-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-yetore-blue-950">Téléphones & WhatsApp</h4>
                    <p className="mt-0.5">Scolaire : <strong>+227 96 45 44 44</strong> (Appel / WA)</p>
                    <p className="mt-0.5">Transit & Assurances : <strong>+227 80 12 12 12</strong> / +227 20 73 15 15</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-yetore-blue-50 text-yetore-blue-800 mt-0.5">
                    <Mail className="w-4.5 h-4.5 text-yetore-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-yetore-blue-950">Courriels Officiels</h4>
                    <p className="mt-0.5">scolaire@yetore-groupe.com</p>
                    <p className="mt-0.5">transit.assurances@yetore-groupe.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-yetore-blue-50 text-yetore-blue-800 mt-0.5">
                    <Clock className="w-4.5 h-4.5 text-yetore-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-yetore-blue-950">Heures d'Ouverture</h4>
                    <p className="mt-0.5">Secrétariat : Lundi au Vendredi : 07h30 – 18h00 | Samedi : 08h00 – 12h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Route GPS Planner Simulation Box */}
            <div className="bg-yetore-blue-900 text-white p-6 sm:p-8 rounded-3xl border border-yetore-blue-800 shadow-lg space-y-4">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-yetore-gold-500 animate-spin" style={{ animationDuration: '6s' }} />
                <h3 className="font-display font-bold text-base text-white">Calculateur d'Itinéraire Local</h3>
              </div>
              <p className="text-[11px] text-yetore-blue-200">
                Sélectionnez votre zone de départ à Niamey pour savoir comment nous rejoindre sans encombre à la Rive Droite.
              </p>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-yetore-blue-300 mb-1.5">Point de départ :</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
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

                  <div className="text-[10px] text-yetore-blue-300 italic pt-1 border-t border-yetore-blue-800">
                    📍 <strong>Point repère :</strong> {simulatedRoute.landmark}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Core Interactive Contact Form (Right) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-display font-bold text-lg text-yetore-blue-950 mb-1">Formulaire de Contact Unifié</h3>
            <p className="text-xs text-gray-500 mb-6">Votre demande sera automatiquement dirigée vers la division compétente du Groupe Yétoré.</p>

            <AnimatePresence mode="wait">
              {!isSent ? (
                <form onSubmit={handleSubmitMessage} className="space-y-4" id="contact-form-block">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Nom complet ou Raison Sociale *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yetore-blue-500 bg-slate-50"
                      placeholder="Ex: Elhadj Ibrahim Adamou"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">Adresse Courriel *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yetore-blue-500 bg-slate-50"
                        placeholder="ibrahim@mail.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">Téléphone de Contact *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleInputChange}
                        className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yetore-blue-500 bg-slate-50"
                        placeholder="Ex: +227 96 00 00 00"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Division Destinataire *</label>
                    <select
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yetore-blue-500 bg-slate-50"
                    >
                      <option value="Scolaire (Inscriptions)">🏫 Groupe Scolaire (Inscriptions / Scolarité)</option>
                      <option value="Scolaire (Emploi)">📝 Groupe Scolaire (Candidature / Recrutement enseignant)</option>
                      <option value="Transit (Import / Export)">🚢 Transit (Opérations Douanières & Import/Export)</option>
                      <option value="Assurances (Souscriptions)">🛡️ Assurances (Souscriptions / Devis)</option>
                      <option value="Assurances (Sinistres)">⚠️ Assurances (Déclaration de Sinistre / Remboursement)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Message ou Détails de la requête *</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleInputChange}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yetore-blue-500 bg-slate-50"
                      placeholder="Décrivez votre demande en détail afin que nos agents préparent la réponse adéquate..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-yetore-blue-800 text-white font-bold text-xs shadow-md hover:bg-yetore-blue-900 cursor-pointer flex items-center justify-center gap-1.5"
                    id="submit-contact-btn"
                  >
                    <Send className="w-4 h-4 text-yetore-gold-500" />
                    Envoyer ma Demande Sécurisée
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                  id="contact-success-panel"
                >
                  <div className="w-14 h-14 bg-yetore-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-yetore-blue-950">Message Envoyé Avec Succès !</h3>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                    Merci d'avoir contacté le <strong>Groupe Yétoré</strong>. Votre demande concernant <strong>{formState.subject}</strong> a bien été routée à nos bureaux de la Rive Droite de Niamey. Un conseiller vous répondra par courriel ou téléphone sous 24 heures ouvrées.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="mt-4 px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold text-yetore-blue-800 hover:bg-slate-50 cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
