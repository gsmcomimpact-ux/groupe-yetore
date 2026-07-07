/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Truck, 
  Anchor, 
  PlaneTakeoff, 
  FileText, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Calculator,
  Search,
  Package,
  BadgeAlert,
  Send
} from 'lucide-react';
import { TransitQuoteForm } from '../types';

interface TransitSectionProps {
  transitImage: string;
}

export default function TransitSection({ transitImage }: TransitSectionProps) {
  const [activeTab, setActiveTab] = useState<'quote' | 'track'>('quote');
  const [trackId, setTrackId] = useState('');
  const [trackResult, setTrackResult] = useState<any | null>(null);
  const [hasSearchedTrack, setHasSearchedTrack] = useState(false);
  
  const [quoteState, setQuoteState] = useState<TransitQuoteForm>({
    origin: 'Cotonou Port (Bénin)',
    destination: 'Niamey (Rive Droite)',
    cargoType: 'general',
    weightKg: 2500,
    volumeCbm: 12,
    transportMode: 'routier',
    withInsurance: true,
    clientName: '',
    clientEmail: '',
    clientPhone: ''
  });

  const [quoteResult, setQuoteResult] = useState<any | null>(null);

  const transitServices = [
    {
      title: 'Dédouanement & Déclarations',
      description: 'Prise en charge intégrale des formalités douanières à l’importation comme à l’exportation. Conseil tarifaire et classification de marchandises.',
      icon: FileText,
      atout: 'Agréé par l’État du Niger (Douanes Nationales).'
    },
    {
      title: 'Corridor Routier de Transit',
      description: 'Transport de conteneurs et marchandises en vrac par camion depuis les ports d’Afrique de l’Ouest jusqu’à Niamey.',
      icon: Truck,
      atout: 'Suivi par balise GPS en temps réel.'
    },
    {
      title: 'Consolidation & Fret Maritime',
      description: 'Transport maritime de conteneurs complets (FCL) ou groupage de marchandises (LCL) via Cotonou, Lomé, Abidjan.',
      icon: Anchor,
      atout: 'Partenariats avec CMA CGM, Maersk, MSC.'
    },
    {
      title: 'Fret Aérien Express',
      description: 'Acheminement rapide de colis et cargaisons prioritaires via l’Aéroport International Diori Hamani de Niamey.',
      icon: PlaneTakeoff,
      atout: 'Traitement douanier prioritaire en moins de 24h.'
    }
  ];

  const handleQuoteInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setQuoteState(prev => ({ ...prev, [name]: checked }));
    } else {
      setQuoteState(prev => ({ 
        ...prev, 
        [name]: name === 'weightKg' || name === 'volumeCbm' ? Number(value) : value 
      }));
    }
  };

  const calculateTransitCost = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple logic for simulator
    let basePricePerKg = 120; // 120 FCFA per kg
    if (quoteState.transportMode === 'aerien') basePricePerKg = 1800;
    if (quoteState.transportMode === 'maritime') basePricePerKg = 250;

    let baseTransitFees = quoteState.weightKg * basePricePerKg;
    let customsDutiesEst = baseTransitFees * 0.35; // 35% duties estimate
    let insuranceCost = quoteState.withInsurance ? (baseTransitFees * 0.02) : 0; // 2% cargo insurance
    let totalEst = baseTransitFees + customsDutiesEst + insuranceCost;

    const randomQuoteId = 'QUO-TR-' + Math.floor(10000 + Math.random() * 90000);

    setQuoteResult({
      quoteId: randomQuoteId,
      baseTransit: Math.round(baseTransitFees).toLocaleString() + ' FCFA',
      customsDuties: Math.round(customsDutiesEst).toLocaleString() + ' FCFA',
      insurance: insuranceCost > 0 ? Math.round(insuranceCost).toLocaleString() + ' FCFA' : '0 FCFA',
      total: Math.round(totalEst).toLocaleString() + ' FCFA',
      corridor: `${quoteState.origin} ➔ ${quoteState.destination}`
    });
  };

  const handleTrackingSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearchedTrack(true);
    // Simple realistic simulator logic
    if (trackId.trim().toUpperCase() === 'YET-TRACK') {
      setTrackResult({
        id: 'YET-TRACK',
        sender: 'CMA CGM Cargo',
        receiver: 'Groupe Yétoré S.A.',
        status: 'En transit douanier - Frontière Gaya/Malanville',
        step: 3,
        steps: [
          { name: 'Arrivée Port Cotonou', date: '02/07/2026', done: true },
          { name: 'Inspection & Documents', date: '04/07/2026', done: true },
          { name: 'Transit Routier (En cours)', date: '06/07/2026', done: true },
          { name: 'Dédouanement Niamey', date: 'Est: 09/07/2026', done: false },
          { name: 'Livraison Rive Droite', date: 'Est: 10/07/2026', done: false }
        ],
        location: 'Poste frontalier de Gaya, Niger',
        cargo: '1x Conteneur 40 pieds (Matériels informatiques et scolaires)'
      });
    } else {
      setTrackResult(null);
    }
  };

  return (
    <section id="transit-portal" className="bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yetore-gold-100 text-yetore-gold-800 text-xs font-bold uppercase tracking-wider">
              <Truck className="w-4 h-4 text-yetore-blue-800" />
              YETORE TRANSIT-LOGISTIQUE
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-yetore-blue-900 leading-tight">
              Connecter le Niger aux Corridors Maritimes et Globaux
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              En tant que commissionnaire agréé en douanes à Niamey, notre agence de transit prend en charge l'ensemble de la chaîne logistique. Du dédouanement portuaire à Gaya, Cotonou ou Lomé, jusqu'à la livraison finale à votre entrepôt, nous assurons rapidité, intégrité et traçabilité.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {transitServices.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl border border-gray-100 bg-slate-50 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded bg-yetore-blue-800 text-white">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-bold text-yetore-blue-950">{srv.title}</h4>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{srv.description}</p>
                    <span className="text-[10px] text-yetore-gold-700 font-bold block mt-1">✓ {srv.atout}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-lg h-96">
            <img 
              src={transitImage} 
              alt="Yétoré Transit & Logistique - Niamey Rive Droite" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yetore-blue-950/70 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <span className="px-2 py-0.5 rounded bg-yetore-blue-800 text-[9px] font-bold uppercase tracking-wider">Douanes Agréées</span>
                <h4 className="font-display font-bold text-base mt-2">Dédouanement Garanti en moins de 48h</h4>
                <p className="text-[11px] text-gray-200 mt-0.5">Optimisation des taxes et courtage professionnel à Niamey.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Simulator and Tracking tabs */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <div className="flex border-b border-gray-200 mb-6 gap-2">
            <button
              id="tab-transit-quote"
              onClick={() => setActiveTab('quote')}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'quote'
                  ? 'border-yetore-blue-800 text-yetore-blue-950 font-bold'
                  : 'border-transparent text-gray-500 hover:text-yetore-blue-800'
              }`}
            >
              <Calculator className="w-4 h-4" />
              Simulateur de Devis de Transit
            </button>
            <button
              id="tab-transit-track"
              onClick={() => { setActiveTab('track'); setHasSearchedTrack(false); }}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'track'
                  ? 'border-yetore-blue-800 text-yetore-blue-950 font-bold'
                  : 'border-transparent text-gray-500 hover:text-yetore-blue-800'
              }`}
            >
              <Search className="w-4 h-4" />
              Suivi de Conteneur / Colis
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'quote' ? (
              <motion.div
                key="quote"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Form left */}
                <form onSubmit={calculateTransitCost} className="space-y-4" id="transit-quote-form">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Origine *</label>
                      <select
                        name="origin"
                        value={quoteState.origin}
                        onChange={handleQuoteInputChange}
                        className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                      >
                        <option value="Port de Cotonou (Bénin)">Port de Cotonou (Bénin)</option>
                        <option value="Port de Lomé (Togo)">Port de Lomé (Togo)</option>
                        <option value="Port d'Abidjan (Côte d'Ivoire)">Port d'Abidjan (RCI)</option>
                        <option value="Aéroport Paris CDG (France)">Aéroport Paris CDG (France)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Destination *</label>
                      <input
                        type="text"
                        name="destination"
                        disabled
                        value="Niamey (Gaya, Niger)"
                        className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-gray-100 cursor-not-allowed text-gray-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Type de Cargo *</label>
                      <select
                        name="cargoType"
                        value={quoteState.cargoType}
                        onChange={handleQuoteInputChange}
                        className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                      >
                        <option value="general">Marchandises Générales</option>
                        <option value="vehicule">Véhicules / Engins lourds</option>
                        <option value="scolaire">Livres / Matériels éducatifs</option>
                        <option value="pereissable">Produits Périssables</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Mode de Transport *</label>
                      <select
                        name="transportMode"
                        value={quoteState.transportMode}
                        onChange={handleQuoteInputChange}
                        className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                      >
                        <option value="routier">Routier (Camion de transit)</option>
                        <option value="maritime">Maritime + Route (Port de Transit)</option>
                        <option value="aerien">Aérien Express (Diori Hamani)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Poids Total (Kg) *</label>
                      <input
                        type="number"
                        name="weightKg"
                        required
                        min="1"
                        value={quoteState.weightKg}
                        onChange={handleQuoteInputChange}
                        className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Volume Estimé (m³)</label>
                      <input
                        type="number"
                        name="volumeCbm"
                        min="1"
                        value={quoteState.volumeCbm || ''}
                        onChange={handleQuoteInputChange}
                        className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                        placeholder="Ex: 10"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 py-1">
                    <input
                      type="checkbox"
                      id="withInsurance"
                      name="withInsurance"
                      checked={quoteState.withInsurance}
                      onChange={handleQuoteInputChange}
                      className="rounded text-yetore-blue-800"
                    />
                    <label htmlFor="withInsurance" className="text-xs text-gray-600 font-medium">
                      Ajouter une couverture d'assurance Cargo Yétoré (+2%)
                    </label>
                  </div>

                  <div className="pt-2">
                    <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Nom / Entreprise *</label>
                    <input
                      type="text"
                      name="clientName"
                      required
                      value={quoteState.clientName}
                      onChange={handleQuoteInputChange}
                      className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                      placeholder="Ex: Établissements Alassane"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Email *</label>
                      <input
                        type="email"
                        name="clientEmail"
                        required
                        value={quoteState.clientEmail}
                        onChange={handleQuoteInputChange}
                        className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                        placeholder="alassane@mail.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Téléphone *</label>
                      <input
                        type="tel"
                        name="clientPhone"
                        required
                        value={quoteState.clientPhone}
                        onChange={handleQuoteInputChange}
                        className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                        placeholder="+227 96 00 00 00"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-yetore-blue-800 text-white font-bold text-xs shadow-md hover:bg-yetore-blue-900 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calculator className="w-4 h-4 text-yetore-gold-500" />
                    Simuler & Générer mon Devis
                  </button>
                </form>

                {/* Simulated Result right */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col justify-between">
                  {quoteResult ? (
                    <div className="space-y-4" id="transit-quote-result">
                      <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                        <div>
                          <span className="text-[10px] uppercase font-mono font-extrabold text-gray-400">ID Devis Estimatif</span>
                          <span className="font-mono text-sm font-extrabold text-yetore-blue-900 block mt-0.5">{quoteResult.quoteId}</span>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-yetore-blue-50 text-yetore-blue-800 text-[10px] font-extrabold uppercase tracking-wide">
                          Simulateur
                        </span>
                      </div>

                      <div className="text-xs space-y-2 text-gray-600">
                        <div className="flex justify-between">
                          <span>Itinéraire corridor :</span>
                          <span className="font-semibold text-yetore-blue-950 text-right">{quoteResult.corridor}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fret & Transit de Base :</span>
                          <span className="font-semibold text-yetore-blue-950">{quoteResult.baseTransit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Taxes & Douanes (Est.) :</span>
                          <span className="font-semibold text-yetore-blue-950">{quoteResult.customsDuties}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Assurance Transit Yétoré :</span>
                          <span className="font-semibold text-yetore-blue-950">{quoteResult.insurance}</span>
                        </div>
                      </div>

                      <div className="p-4 bg-yetore-blue-50 rounded-xl border border-yetore-blue-100 flex justify-between items-center">
                        <span className="text-xs font-bold text-yetore-blue-900">Total Budget Estimatif :</span>
                        <span className="text-base font-extrabold text-yetore-blue-950">{quoteResult.total}</span>
                      </div>

                      <div className="p-3 bg-yetore-gold-50/50 rounded-lg text-[10px] text-gray-500 leading-relaxed border border-yetore-gold-100">
                        ⚠️ <strong>Note :</strong> Ce calcul est un devis budgétaire simulé. Les taxes réelles dépendent de la valeur douanière finale déclarée au bureau frontière de Gaya. Notre conseiller vous contactera par email sous 24h.
                      </div>

                      <button
                        onClick={() => {
                          alert(`Demande soumise ! Notre service Transit vous contactera sous peu concernant le devis ${quoteResult.quoteId}`);
                          setQuoteResult(null);
                        }}
                        className="w-full py-2 rounded-lg bg-yetore-gold-500 hover:bg-yetore-gold-600 text-white font-bold text-xs shadow-sm cursor-pointer"
                      >
                        Valider et Transmettre au Déclarant
                      </button>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-4">
                      <div className="w-12 h-12 rounded-full bg-yetore-blue-50 text-yetore-blue-800 flex items-center justify-center mb-3">
                        <FileText className="w-6 h-6 text-yetore-gold-500" />
                      </div>
                      <h4 className="font-bold text-sm text-yetore-blue-950">Aucun devis généré</h4>
                      <p className="text-xs text-gray-400 mt-1 max-w-xs">
                        Remplissez le formulaire de transit à gauche pour obtenir instantanément une simulation budgétaire de vos opérations douanières et logistiques.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="track"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Tracking Search Input */}
                <form onSubmit={handleTrackingSearch} className="max-w-md mx-auto" id="tracking-search-form">
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 text-center">
                    Saisissez votre code de tracking de douane ou de connaissement
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={trackId}
                      onChange={(e) => setTrackId(e.target.value)}
                      required
                      placeholder="Ex : YET-TRACK"
                      className="flex-1 text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yetore-blue-500 bg-white font-mono font-bold"
                    />
                    <button
                      type="submit"
                      className="px-5 py-3 rounded-xl bg-yetore-blue-800 text-white font-bold text-xs flex items-center gap-1.5 hover:bg-yetore-blue-900 cursor-pointer"
                    >
                      <Search className="w-4 h-4" />
                      Rechercher
                    </button>
                  </div>
                  <span className="text-[10px] text-gray-400 block text-center mt-1.5">
                    Utilisez le code de démonstration <strong className="text-yetore-gold-600">YET-TRACK</strong> pour voir une simulation complète.
                  </span>
                </form>

                {/* Tracking results view */}
                <div className="border-t border-gray-100 pt-6">
                  {hasSearchedTrack && (
                    trackResult ? (
                      <div className="space-y-6" id="tracking-success-display">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div className="bg-white p-4 rounded-xl border border-gray-100">
                            <span className="text-gray-400 block text-[10px] uppercase font-mono font-extrabold">Cargaison</span>
                            <span className="font-semibold text-yetore-blue-950 mt-1 block">{trackResult.cargo}</span>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-gray-100">
                            <span className="text-gray-400 block text-[10px] uppercase font-mono font-extrabold">Localisation Actuelle</span>
                            <span className="font-semibold text-yetore-blue-950 mt-1 block flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-yetore-gold-500" />
                              {trackResult.location}
                            </span>
                          </div>
                        </div>

                        {/* Visual Stepper */}
                        <div className="space-y-4 bg-white p-6 rounded-2xl border border-gray-100">
                          <h4 className="text-xs font-bold text-yetore-blue-950">Statut du transit : <span className="text-yetore-gold-600 font-extrabold">{trackResult.status}</span></h4>
                          
                          <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
                            {trackResult.steps.map((step: any, idx: number) => {
                              const isPast = idx < trackResult.step;
                              const isCurrent = idx === trackResult.step - 1;
                              
                              return (
                                <div key={idx} className="relative flex items-start gap-4">
                                  <div className={`absolute -left-[20px] w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                                    isPast 
                                      ? 'bg-yetore-blue-800 border-yetore-blue-800 text-white' 
                                      : isCurrent
                                        ? 'bg-yetore-gold-500 border-yetore-gold-500 text-white animate-pulse'
                                        : 'bg-white border-gray-200 text-gray-300'
                                  }`}>
                                    {isPast ? (
                                      <CheckCircle className="w-4 h-4" />
                                    ) : (
                                      <span className="text-[10px] font-bold">{idx + 1}</span>
                                    )}
                                  </div>

                                  <div className="pl-4">
                                    <h5 className={`text-xs font-bold ${isCurrent ? 'text-yetore-gold-700' : 'text-yetore-blue-950'}`}>
                                      {step.name}
                                    </h5>
                                    <span className="text-[10px] text-gray-400 font-mono mt-0.5 block">{step.date}</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-6 bg-red-50 rounded-2xl border border-red-100 text-red-700 max-w-sm mx-auto" id="tracking-error-display">
                        <BadgeAlert className="w-10 h-10 mx-auto text-red-500 mb-2" />
                        <h4 className="font-bold text-sm">Code Inconnu ou Expiré</h4>
                        <p className="text-xs text-red-600/80 mt-1">
                          Nous n'avons pas pu trouver de connaissement ou de fret douanier actif correspondant à ce code. Essayez <strong className="font-mono">YET-TRACK</strong> pour le simulateur de test.
                        </p>
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
