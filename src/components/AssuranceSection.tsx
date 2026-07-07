/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Car, 
  Heart, 
  Home, 
  Ship, 
  UserCheck, 
  Calculator, 
  Clock, 
  FileCheck2, 
  CheckCircle2,
  AlertTriangle,
  Coins,
  Send
} from 'lucide-react';
import { InsuranceQuoteForm } from '../types';

interface AssuranceSectionProps {
  insuranceImage: string;
}

export default function AssuranceSection({ insuranceImage }: AssuranceSectionProps) {
  const [formState, setFormState] = useState<InsuranceQuoteForm>({
    insuranceType: 'auto',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    additionalDetails: {
      vehicleValue: 5000000, // Default 5 million FCFA
      familySize: 4,
      houseRooms: 3,
      cargoValue: 15000000
    }
  });

  const [simulatedQuote, setSimulatedQuote] = useState<any | null>(null);

  const insurancePlans = [
    {
      type: 'auto',
      title: 'Assurance Automobile & Moto',
      description: 'Protégez votre véhicule et vos passagers sur les routes de Niamey. Responsabilité civile obligatoire, défense et recours, bris de glace, ou formule tous risques.',
      icon: Car,
      color: 'bg-blue-50 text-blue-800'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('detail_')) {
      const field = name.replace('detail_', '');
      setFormState(prev => ({
        ...prev,
        additionalDetails: {
          ...prev.additionalDetails,
          [field]: Number(value)
        }
      }));
    } else {
      setFormState(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCalculateInsurance = (e: React.FormEvent) => {
    e.preventDefault();
    let baseAnnualPremium = 0;
    let description = '';

    if (formState.insuranceType === 'auto') {
      const val = formState.additionalDetails.vehicleValue || 5000000;
      baseAnnualPremium = (val * 0.022) + 45000; // 2.2% of value + base RC fee
      description = `Assurance Auto Tiers complet + Bris de Glace pour un véhicule d'une valeur de ${val.toLocaleString()} FCFA.`;
    } else if (formState.insuranceType === 'sante') {
      const size = formState.additionalDetails.familySize || 4;
      baseAnnualPremium = size * 65000; // 65000 FCFA per family member per year
      description = `Couverture Santé Famille incluant une prise en charge à 80% des soins pour ${size} personnes.`;
    } else if (formState.insuranceType === 'habitation') {
      const rooms = formState.additionalDetails.houseRooms || 3;
      baseAnnualPremium = rooms * 30000 + 15000;
      description = `Multirisque Habitation pour une villa/appartement de ${rooms} pièces à Niamey Rive Droite.`;
    } else if (formState.insuranceType === 'transit') {
      const cargoVal = formState.additionalDetails.cargoValue || 15000000;
      baseAnnualPremium = cargoVal * 0.0075; // 0.75% of cargo value
      description = `Assurance Transit Cargo (Facultés Maritimes et Routières) pour marchandises estimées à ${cargoVal.toLocaleString()} FCFA.`;
    }

    const certId = 'CERT-YET-' + Math.floor(100000 + Math.random() * 900000);

    setSimulatedQuote({
      certId,
      premiumFCFA: Math.round(baseAnnualPremium).toLocaleString() + ' FCFA / An',
      taxFCFA: Math.round(baseAnnualPremium * 0.12).toLocaleString() + ' FCFA', // 12% insurance tax
      totalFCFA: Math.round(baseAnnualPremium * 1.12).toLocaleString() + ' FCFA / An',
      description,
      clientName: formState.clientName
    });
  };

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
            const isSelectedInForm = formState.insuranceType === plan.type;
            
            return (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl bg-white border transition-all flex flex-col justify-between ${
                  isSelectedInForm 
                    ? 'border-yetore-blue-800 shadow-md ring-2 ring-yetore-blue-100' 
                    : 'border-gray-100 shadow-sm hover:shadow-md'
                }`}
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
                      setFormState(prev => ({ ...prev, insuranceType: plan.type as any }));
                      setSimulatedQuote(null);
                      // Smooth scroll to simulator container
                      const el = document.getElementById('insurance-calculator-anchor');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      isSelectedInForm 
                        ? 'bg-yetore-blue-800 text-white shadow-sm' 
                        : 'bg-slate-50 hover:bg-yetore-blue-50 text-yetore-blue-800'
                    }`}
                  >
                    {isSelectedInForm ? 'Sélectionné pour calcul' : 'Simuler le tarif'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main interactive calculator area */}
        <div 
          id="insurance-calculator-anchor" 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100"
        >
          {/* Visual column with local agency representation */}
          <div className="lg:col-span-5 space-y-6">
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

          {/* Interactive simulator form column */}
          <div className="lg:col-span-7 bg-slate-50 p-6 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 bg-yetore-blue-800 text-white rounded-lg">
                <Calculator className="w-5 h-5 text-yetore-gold-500" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-yetore-blue-950">Calculateur de Prime de Protection</h3>
                <p className="text-[11px] text-gray-400">Obtenez immédiatement une estimation budgétaire annuelle</p>
              </div>
            </div>

            <form onSubmit={handleCalculateInsurance} className="space-y-4" id="insurance-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Type d'Assurance Souhaité *</label>
                  <select
                    name="insuranceType"
                    value={formState.insuranceType}
                    onChange={handleInputChange}
                    className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                  >
                    <option value="auto">Automobile & Moto</option>
                    <option value="sante">Santé (Famille & Scolaire)</option>
                    <option value="habitation">Multirisque Habitation</option>
                    <option value="transit">Transitaire & Cargo maritime/routier</option>
                  </select>
                </div>

                {/* Conditional fields based on selection */}
                {formState.insuranceType === 'auto' && (
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Valeur estimée du véhicule (FCFA)</label>
                    <input
                      type="number"
                      name="detail_vehicleValue"
                      required
                      min="100000"
                      value={formState.additionalDetails.vehicleValue || ''}
                      onChange={handleInputChange}
                      className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                    />
                  </div>
                )}

                {formState.insuranceType === 'sante' && (
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Nombre d'assurés (Membres famille) *</label>
                    <input
                      type="number"
                      name="detail_familySize"
                      required
                      min="1"
                      max="15"
                      value={formState.additionalDetails.familySize || ''}
                      onChange={handleInputChange}
                      className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                    />
                  </div>
                )}

                {formState.insuranceType === 'habitation' && (
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Nombre de pièces de la villa / local *</label>
                    <input
                      type="number"
                      name="detail_houseRooms"
                      required
                      min="1"
                      max="20"
                      value={formState.additionalDetails.houseRooms || ''}
                      onChange={handleInputChange}
                      className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                    />
                  </div>
                )}

                {formState.insuranceType === 'transit' && (
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Valeur totale des marchandises assurées (FCFA)</label>
                    <input
                      type="number"
                      name="detail_cargoValue"
                      required
                      min="100000"
                      value={formState.additionalDetails.cargoValue || ''}
                      onChange={handleInputChange}
                      className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                    />
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Nom du Souscripteur *</label>
                    <input
                      type="text"
                      name="clientName"
                      required
                      value={formState.clientName}
                      onChange={handleInputChange}
                      className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                      placeholder="Ex: Hadjia Fatouma"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Adresse Email *</label>
                    <input
                      type="email"
                      name="clientEmail"
                      required
                      value={formState.clientEmail}
                      onChange={handleInputChange}
                      className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                      placeholder="fatouma@mail.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-gray-500 mb-1">Téléphone portable *</label>
                    <input
                      type="tel"
                      name="clientPhone"
                      required
                      value={formState.clientPhone}
                      onChange={handleInputChange}
                      className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-white"
                      placeholder="Ex: +227 80 12 12 12"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-yetore-blue-800 text-white font-bold text-xs shadow-md hover:bg-yetore-blue-900 cursor-pointer flex items-center justify-center gap-1.5"
                id="calculate-insurance-btn"
              >
                <Coins className="w-4 h-4 text-yetore-gold-500" />
                Estimer ma Prime Annuelle
              </button>
            </form>

            {/* Simulated premium invoice receipt panel */}
            <AnimatePresence>
              {simulatedQuote && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-5 border-t border-gray-200 overflow-hidden"
                  id="insurance-quote-result"
                >
                  <div className="bg-white p-5 rounded-xl border border-yetore-blue-100 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-extrabold font-mono text-gray-400">Demande de souscription</span>
                      <span className="font-mono text-xs font-extrabold text-yetore-blue-900">{simulatedQuote.certId}</span>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed italic bg-slate-50 p-3 rounded-lg border border-gray-100">
                      "{simulatedQuote.description}"
                    </p>

                    <div className="text-xs space-y-1.5 text-gray-500">
                      <div className="flex justify-between">
                        <span>Prime d'Assurance Pure :</span>
                        <span className="font-semibold text-yetore-blue-950">{simulatedQuote.premiumFCFA}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Taxes sur les Assurances (12%) :</span>
                        <span className="font-semibold text-yetore-blue-950">{simulatedQuote.taxFCFA}</span>
                      </div>
                      <div className="flex justify-between pt-1 border-t border-gray-100 text-sm font-extrabold text-yetore-blue-900">
                        <span>Total de votre prime annuelle :</span>
                        <span>{simulatedQuote.totalFCFA}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        alert(`Souscription provisoire enregistrée ! Notre agence Rive Droite prend contact avec ${simulatedQuote.clientName} sous 24h.`);
                        setSimulatedQuote(null);
                      }}
                      className="w-full py-2.5 rounded-lg bg-yetore-gold-500 hover:bg-yetore-gold-600 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Demander un Rappel pour Souscription Finale
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
