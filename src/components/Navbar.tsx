/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Menu, 
  X, 
  Truck, 
  ShieldCheck, 
  Phone, 
  Building,
  Info
} from 'lucide-react';
import { SectionType } from '../types';

interface NavbarProps {
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home' as SectionType, label: 'Accueil', icon: Building },
    { id: 'transit' as SectionType, label: 'Transit & Logistique', icon: Truck, highlight: true },
    { id: 'scolaire' as SectionType, label: 'CSP YETTORE', icon: GraduationCap },
    { id: 'assurances' as SectionType, label: 'Assurances', icon: ShieldCheck },
    { id: 'propos' as SectionType, label: 'À Propos', icon: Info },
    { id: 'contact' as SectionType, label: 'Contact', icon: Phone },
  ];

  const handleNavClick = (sectionId: SectionType) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    // Smooth scroll to top of viewport when section changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div 
            id="logo-brand"
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-yetore-blue-800 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-yetore-gold-500 rounded-full flex items-center justify-center border border-white text-[9px] font-bold text-white">
                Y
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-yetore-blue-900 group-hover:text-yetore-blue-700 transition-colors">
                GROUPE YETORE
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-yetore-gold-600 font-semibold leading-none">
                Excellence & Intégrité
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    item.highlight
                      ? isActive
                        ? 'bg-yetore-blue-800 text-white shadow-md'
                        : 'bg-yetore-blue-50 text-yetore-blue-800 hover:bg-yetore-blue-100'
                      : isActive
                        ? 'text-yetore-blue-800 bg-yetore-blue-50/70'
                        : scrolled 
                          ? 'text-gray-600 hover:text-yetore-blue-800 hover:bg-gray-50'
                          : 'text-gray-800 hover:text-yetore-blue-800 hover:bg-white/40'
                  }`}
                >
                  <Icon className={`w-4.5 h-4.5 ${isActive ? 'scale-110' : ''}`} />
                  {item.label}
                  {item.highlight && (
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yetore-gold-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-yetore-gold-500"></span>
                    </span>
                  )}
                  {isActive && !item.highlight && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-yetore-blue-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="cta-mobile-school-fast"
              onClick={() => handleNavClick('scolaire')}
              className="px-3.5 py-1.5 rounded-lg bg-yetore-blue-800 text-white text-xs font-bold shadow-sm flex items-center gap-1"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              CSP YETTORE
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg border transition-colors ${
                scrolled 
                  ? 'border-gray-200 hover:bg-gray-50 text-gray-700' 
                  : 'border-white/30 hover:bg-white/10 text-gray-800'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <div className="px-3 py-1.5 mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">
                Navigation Divisions
              </div>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-yetore-blue-800 text-white shadow-md'
                        : item.highlight
                          ? 'bg-yetore-blue-50 text-yetore-blue-800'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-yetore-blue-800'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <span>{item.label}</span>
                      {item.highlight && !isActive && (
                        <span className="px-2 py-0.5 text-[9px] font-extrabold uppercase rounded bg-yetore-gold-500 text-white leading-none">
                          Prioritaire
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
              
              {/* Extra info/contact details in drawer */}
              <div className="mt-6 pt-5 border-t border-gray-100 px-4 text-center">
                <p className="text-[11px] text-gray-500 font-medium">
                  📍 Niamey, Niger
                </p>
                <p className="text-[11px] text-yetore-blue-800 font-bold mt-1">
                  📞 CSP YETTORE : +227 96 82 06 12
                </p>
                <p className="text-[11px] text-yetore-blue-800 font-bold mt-0.5">
                  📞 Transit : +227 20 31 57 85
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
