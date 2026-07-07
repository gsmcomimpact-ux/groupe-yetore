/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Truck, 
  ChevronRight,
  ArrowUp
} from 'lucide-react';
import { SectionType } from '../types';

interface FooterProps {
  setActiveSection: (section: SectionType) => void;
}

export default function Footer({ setActiveSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (section: SectionType) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-yetore-blue-900 text-white pt-16 pb-8 border-t border-yetore-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand/About Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-white text-yetore-blue-900 flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6 text-yetore-blue-800" />
              </div>
              <div>
                <span className="font-display font-black text-lg tracking-tight text-white block">
                  GROUPE YETORE
                </span>
                <span className="text-[9px] uppercase font-mono tracking-wider text-yetore-gold-500 font-bold leading-none block mt-0.5">
                  Excellence, Transit & Protection
                </span>
              </div>
            </div>

            <p className="text-xs text-yetore-blue-200 leading-relaxed max-w-sm">
              Implanté fièrement à la Rive Droite de Niamey (Niger), le Groupe Yétoré est un acteur multiservice engagé pour la réussite scolaire, la facilitation douanière internationale et la sécurité financière des familles et entreprises.
            </p>

            <div className="pt-2 flex gap-3">
              <span className="w-8 h-8 rounded-full bg-yetore-blue-800 flex items-center justify-center hover:bg-yetore-gold-500 hover:text-yetore-blue-900 transition-colors cursor-pointer text-xs font-bold" title="Facebook">
                F
              </span>
              <span className="w-8 h-8 rounded-full bg-yetore-blue-800 flex items-center justify-center hover:bg-yetore-gold-500 hover:text-yetore-blue-900 transition-colors cursor-pointer text-xs font-bold" title="LinkedIn">
                in
              </span>
              <span className="w-8 h-8 rounded-full bg-yetore-blue-800 flex items-center justify-center hover:bg-yetore-gold-500 hover:text-yetore-blue-900 transition-colors cursor-pointer text-xs font-bold" title="WhatsApp">
                WA
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-yetore-gold-500 font-mono">
              Nos Divisions
            </h4>
            <ul className="space-y-2.5 text-xs text-yetore-blue-200 font-medium">
              <li>
                <button 
                  onClick={() => handleLinkClick('scolaire')} 
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-yetore-gold-500" />
                  Complexe Scolaire d'Excellence
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('transit')} 
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-yetore-gold-500" />
                  Yétoré Transit & Logistique
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('assurances')} 
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-yetore-gold-500" />
                  Yétoré Assurances & Courtage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('propos')} 
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-yetore-gold-500" />
                  Histoire, Vision & Valeurs
                </button>
              </li>
            </ul>
          </div>

          {/* Location / Direct Coordinates Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-yetore-gold-500 font-mono">
              Nous Rejoindre
            </h4>
            <div className="space-y-3 text-xs text-yetore-blue-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yetore-gold-500 shrink-0 mt-0.5" />
                <span>Complexe Scolaire Yétoré, Route de Say (800m après l'Hôpital), Rive Droite, Niamey, Niger.</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-yetore-gold-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block">Scolaire : +227 96 45 44 44</span>
                  <span className="block mt-0.5">Transit & Assurances : +227 80 12 12 12</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-yetore-gold-500 shrink-0 mt-0.5" />
                <span>contact@yetore-groupe.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-yetore-blue-800 text-center md:flex md:justify-between md:items-center text-xs text-yetore-blue-300">
          <p>
            © {currentYear} <strong>GROUPE YETORE</strong>. Tous droits réservés. Agence de la Rive Droite de Niamey, Niger.
          </p>
          
          <div className="mt-4 md:mt-0 flex justify-center gap-4 text-[11px]">
            <span className="hover:text-white cursor-pointer" onClick={() => handleLinkClick('propos')}>Charte de Qualité Académique</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer" onClick={() => handleLinkClick('contact')}>Mentions Légales</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
