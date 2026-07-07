/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Check, 
  Clock, 
  Compass, 
  FileCheck, 
  HelpCircle, 
  Send,
  MessageSquare,
  Calculator,
  ChevronRight,
  ShieldCheck,
  Languages,
  Coffee,
  Bus,
  Code,
  X
} from 'lucide-react';
import { LevelDetail, RegistrationForm } from '../types';

interface ScolaireSectionProps {
  schoolHeroImage: string;
}

export default function ScolaireSection({ schoolHeroImage }: ScolaireSectionProps) {
  const [activeCycle, setActiveCycle] = useState<string>('maternelle');
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [generatedId, setGeneratedId] = useState<string>('');
  
  const [formState, setFormState] = useState<RegistrationForm>({
    studentFirstName: '',
    studentLastName: '',
    birthDate: '',
    targetLevel: 'maternelle',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    previousSchool: '',
    message: ''
  });

  const levels: LevelDetail[] = [
    {
      id: 'maternelle',
      name: 'Maternelle (Cycle d’Éveil)',
      description: 'Un environnement ludique, sécurisé et bilingue pour stimuler la créativité, la motricité et l’autonomie de vos tout-petits dès l’âge de 2 ans.',
      ageRange: '2 à 5 ans',
      schedule: '08:00 – 12:30 (Lundi au Vendredi)',
      features: [
        'Initiation précoce à l’anglais et à l’outil informatique',
        'Activités psychomotrices, artistiques et d’éveil sensoriel',
        'Salles climatisées et adaptées aux normes de sécurité internationales',
        'Cantine équilibrée et espace sieste encadré par des puéricultrices qualifiées'
      ],
      subjects: [
        'Langage et communication',
        'Découverte du monde',
        'Arts plastiques & Comptines',
        'Activités physiques adaptées',
        'Bilinguisme Anglais-Français'
      ],
      feesDescription: 'Frais de scolarité abordables avec possibilité de paiement en 3 tranches pour les familles de la Rive Droite.',
      iconName: 'Sparkles'
    },
    {
      id: 'primaire',
      name: 'Primaire (Cycle Fondamental)',
      description: 'L’acquisition solide des savoirs fondamentaux (lecture, écriture, calcul) alliée à un apprentissage actif de la citoyenneté.',
      ageRange: '6 à 11 ans',
      schedule: '07:30 – 12:30 & 15:00 – 17:30 (Mercredi après-midi libre)',
      features: [
        'Enseignement bilingue renforcé (Français - Anglais)',
        'Suivi individualisé des élèves en difficulté par des répétiteurs agréés',
        'Introduction aux sciences dures par l’expérimentation pratique',
        'Sorties pédagogiques sur le terrain et initiation aux valeurs citoyennes'
      ],
      subjects: [
        'Mathématiques & Résolution de problèmes',
        'Français (Grammaire, Conjugaison, Littérature)',
        'Anglais d’expression courante',
        'Sciences de la Vie et de la Terre (SVT)',
        'Histoire, Géographie & Éducation civique',
        'Informatique de base & Robotique'
      ],
      feesDescription: 'Excellence accessible. Inscription préférentielle disponible pour les fratries.',
      iconName: 'BookOpen'
    },
    {
      id: 'college',
      name: 'Collège (Cycle d’Orientation)',
      description: 'Structurer la pensée critique, développer la rigueur scientifique et accompagner l’adolescent dans son orientation académique.',
      ageRange: '12 à 15 ans (Classes de 6ème à la 3ème)',
      schedule: '07:30 – 13:00 & 15:00 – 18:00',
      features: [
        'Taux de réussite au BEPC supérieur à 95% de moyenne nationale',
        'Laboratoire scientifique moderne et fonctionnel pour la physique-chimie',
        'Clubs scientifiques obligatoires (SVT, Physique, Mathématiques)',
        'Préparation intensive au brevet et accompagnement psychopédagogique'
      ],
      subjects: [
        'Mathématiques avancées & Physique-Chimie',
        'SVT & Sciences de l’environnement',
        'Français & Littérature africaine',
        'Anglais & Seconde langue (Arabe / Allemand)',
        'Histoire, Géographie et Éducation à la citoyenneté',
        'Initiation au codage informatique et algorithmique'
      ],
      feesDescription: 'Bourses d’excellence octroyées aux meilleurs élèves à l’entrée en 6ème.',
      iconName: 'GraduationCap'
    },
    {
      id: 'lycee',
      name: 'Lycée (Cycle de Spécialisation)',
      description: 'Former les leaders de demain. Préparation rigoureuse aux baccalauréats scientifiques, littéraires et économiques pour l’accès aux grandes écoles.',
      ageRange: '16 à 18 ans (Secondes, Premières, Terminales A, C, D, G)',
      schedule: '07:30 – 13:00 & 15:00 – 18:30',
      features: [
        'Classes à effectifs optimisés (maximum 35 élèves par classe) pour un suivi optimal',
        'Préparation active aux concours d’entrée dans les classes préparatoires et instituts d’élite',
        'Partenariats universitaires nationaux et internationaux pour l’orientation',
        'Professeurs agrégés et certifiés issus des meilleurs lycées du pays'
      ],
      subjects: [
        'Séries C (Sciences Mathématiques) & D (Sciences Expérimentales)',
        'Séries A (Littérature et Philosophie)',
        'Série G (Techniques de Gestion et Économie)',
        'Philosophie & Économie politique',
        'Informatique avancée (Python, Base de données)',
        'Préparation aux examens types BAC et certifications TOEFL/IELTS'
      ],
      feesDescription: 'Tarifs compétitifs avec options de bourses de mérite et partenariats d’études supérieures.',
      iconName: 'Award'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate generation of a registration candidate ID
    const randomId = 'YET-' + Math.floor(100000 + Math.random() * 900000);
    setGeneratedId(randomId);
    setIsSubmitted(true);

    // Redirect to WhatsApp automatically
    const studentName = `${formState.studentFirstName} ${formState.studentLastName}`;
    const level = levelLabels[formState.targetLevel] || formState.targetLevel;
    
    const messageText = `Bonjour, je viens d'effectuer une pré-inscription en ligne pour mon enfant sur le site de l'école CSP YETTORE.

📝 *Détails de l'inscription* :
• *N° Dossier* : ${randomId}
• *Élève* : ${studentName}
• *Date de naissance* : ${formState.birthDate}
• *Niveau demandé* : ${level}
• *Établissement précédent* : ${formState.previousSchool || 'N/A'}

👤 *Informations Parent* :
• *Parent/Tuteur* : ${formState.parentName}
• *Téléphone* : ${formState.parentPhone}
• *Email* : ${formState.parentEmail}

💬 *Message/Observations* :
${formState.message || 'Aucune observation.'}

Je me présenterai à l'école pour finaliser les autres démarches d'inscription. Merci de confirmer la réception de mon dossier préliminaire.`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/22796820612?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const resetForm = () => {
    setFormState({
      studentFirstName: '',
      studentLastName: '',
      birthDate: '',
      targetLevel: 'maternelle',
      parentName: '',
      parentPhone: '',
      parentEmail: '',
      previousSchool: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  const selectedCycle = levels.find(l => l.id === activeCycle) || levels[0];

  // Helper mapping string level names to display titles
  const levelLabels: Record<string, string> = {
    maternelle: 'Maternelle',
    primaire: 'Primaire',
    college: 'Collège',
    lycee: 'Lycée'
  };

  // Fees computation simulator logic based on targetLevel
  const computeFees = (level: string) => {
    switch (level) {
      case 'maternelle': return { registration: '30 000 FCFA', tuition: '250 000 FCFA/An', books: '15 000 FCFA' };
      case 'primaire': return { registration: '35 000 FCFA', tuition: '300 000 FCFA/An', books: '25 000 FCFA' };
      case 'college': return { registration: '45 000 FCFA', tuition: '380 000 FCFA/An', books: '40 000 FCFA' };
      case 'lycee': return { registration: '50 000 FCFA', tuition: '450 000 FCFA/An', books: '50 000 FCFA' };
      default: return { registration: '30 000 FCFA', tuition: '250 000 FCFA/An', books: '15 000 FCFA' };
    }
  };

  const currentFees = computeFees(formState.targetLevel);

  return (
    <section id="scolaire-portal" className="bg-slate-50 py-20 relative overflow-hidden">
      {/* Decors background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yetore-blue-50 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-yetore-gold-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yetore-blue-100 text-yetore-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4 text-yetore-gold-500" />
            CSP YETTORE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-yetore-blue-900 leading-tight mb-4">
            Former les Générations de Demain sur la <span className="text-transparent bg-clip-text bg-gradient-to-r from-yetore-blue-800 to-yetore-gold-600">Rive Droite</span> de Niamey
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            L'école CSP YETTORE offre un cadre académique exceptionnel, combinant rigueur scientifique, bilinguisme précoce et éducation civique, pour guider vos enfants de la petite enfance vers l'élite universitaire.
          </p>
        </div>

        {/* Bento Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" id="stats-grid">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="p-3 bg-yetore-blue-50 text-yetore-blue-800 rounded-xl">
              <Award className="w-6 h-6 text-yetore-gold-500" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-yetore-blue-950 font-display">98.5%</div>
              <div className="text-xs font-bold text-yetore-gold-600 uppercase tracking-wide mt-1">Réussite au BAC</div>
              <p className="text-xs text-gray-500 mt-1">Séries scientifiques et littéraires au top national.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="p-3 bg-yetore-blue-50 text-yetore-blue-800 rounded-xl">
              <Languages className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-yetore-blue-950 font-display">Bilingue</div>
              <div className="text-xs font-bold text-yetore-gold-600 uppercase tracking-wide mt-1">FRANÇAIS & ANGLAIS</div>
              <p className="text-xs text-gray-500 mt-1">Dès la Maternelle pour une ouverture totale sur le monde.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="p-3 bg-yetore-blue-50 text-yetore-blue-800 rounded-xl">
              <Code className="w-6 h-6 text-yetore-emerald-600" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-yetore-blue-950 font-display">Tech Lab</div>
              <div className="text-xs font-bold text-yetore-gold-600 uppercase tracking-wide mt-1">Robotique & Informatique</div>
              <p className="text-xs text-gray-500 mt-1">Coding en Python et initiation aux algorithmes dès le Collège.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="p-3 bg-yetore-blue-50 text-yetore-blue-800 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-yetore-blue-950 font-display">30 Max</div>
              <div className="text-xs font-bold text-yetore-gold-600 uppercase tracking-wide mt-1">Élèves par classe</div>
              <p className="text-xs text-gray-500 mt-1">Pour un suivi psychopédagogique personnalisé et de qualité.</p>
            </div>
          </div>
        </div>

        {/* Dynamic Cycles Section Tabs */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden mb-16">
          <div className="bg-yetore-blue-900 px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between border-b border-yetore-blue-800 gap-4">
            <div>
              <h3 className="font-display font-bold text-lg text-white">Nos Cycles d'Enseignement</h3>
              <p className="text-xs text-yetore-blue-200 mt-0.5">Explorez nos programmes adaptés à chaque étape du développement intellectuel</p>
            </div>
            {/* Quick action button */}
            <button
              id="open-inscription-btn-top"
              onClick={() => setShowFormModal(true)}
              className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-yetore-gold-500 hover:bg-yetore-gold-600 text-white font-bold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileCheck className="w-4 h-4" />
              Inscrire un Élève en ligne
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Cycle list selector */}
            <div className="lg:col-span-4 bg-slate-50 border-r border-gray-100 p-4 space-y-2 lg:min-h-[450px]">
              {levels.map((lvl) => (
                <button
                  key={lvl.id}
                  id={`tab-cycle-${lvl.id}`}
                  onClick={() => setActiveCycle(lvl.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all cursor-pointer ${
                    activeCycle === lvl.id
                      ? 'bg-white shadow-md border-l-4 border-yetore-blue-800 text-yetore-blue-950 font-semibold'
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${
                    activeCycle === lvl.id ? 'bg-yetore-blue-800 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {lvl.id === 'maternelle' && <Sparkles className="w-5 h-5" />}
                    {lvl.id === 'primaire' && <BookOpen className="w-5 h-5" />}
                    {lvl.id === 'college' && <GraduationCap className="w-5 h-5" />}
                    {lvl.id === 'lycee' && <Award className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold block">{lvl.name.split(' (')[0]}</h4>
                    <span className="text-[11px] font-medium text-gray-500 block mt-0.5">Âge : {lvl.ageRange}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Tab content with beautiful transitions */}
            <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCycle.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-xs font-extrabold uppercase px-2.5 py-1 rounded bg-yetore-gold-100 text-yetore-gold-700 tracking-wider">
                      Cycle d'études
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-yetore-blue-950 mt-3">
                      {selectedCycle.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-2.5">
                      {selectedCycle.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Key characteristics list */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-extrabold uppercase text-gray-400 tracking-wider font-mono flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-yetore-blue-800" />
                        Atouts du cycle
                      </h4>
                      <ul className="space-y-2">
                        {selectedCycle.features.map((feat, index) => (
                          <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-yetore-gold-500 rounded-full mt-1.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Subjects and Program */}
                    <div className="space-y-3 bg-slate-50 p-4.5 rounded-2xl border border-gray-100">
                      <h4 className="text-xs font-extrabold uppercase text-gray-400 tracking-wider font-mono flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-yetore-blue-800" />
                        Matières & Programme clé
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedCycle.subjects.map((sub, index) => (
                          <div key={index} className="text-xs text-gray-700 font-semibold flex items-center gap-1.5 bg-white px-2 py-1.5 rounded-lg border border-gray-100">
                            <ChevronRight className="w-3 h-3 text-yetore-gold-500" />
                            <span className="truncate">{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timing & Fees Box */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-medium text-gray-500 bg-yetore-blue-50/50 p-4 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yetore-blue-800" />
                      <span><strong>Horaires : </strong> {selectedCycle.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-yetore-gold-600" />
                      <span>{selectedCycle.feesDescription}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action button in Cycle display */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <button
                  id={`cta-inscription-${selectedCycle.id}`}
                  onClick={() => {
                    setFormState(prev => ({ ...prev, targetLevel: selectedCycle.id }));
                    setShowFormModal(true);
                  }}
                  className="px-6 py-3 rounded-xl bg-yetore-blue-800 hover:bg-yetore-blue-900 text-white text-xs font-bold shadow-md hover:translate-y-[-1px] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-yetore-gold-500" />
                  Pré-inscription en {levelLabels[selectedCycle.id]}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Bank Campus Infrastructure Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video lg:aspect-square">
            <img 
              src={schoolHeroImage} 
              alt="Campus Scolaire Groupe Yétoré Niamey Rive Droite" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yetore-blue-950/80 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <span className="px-2 py-0.5 rounded bg-yetore-gold-500 text-[10px] font-bold uppercase tracking-wider">Nouveau Campus</span>
                <h4 className="font-display font-bold text-lg mt-1.5">Un environnement d'étude moderne et sécurisé</h4>
                <p className="text-xs text-gray-200 mt-1">Situé idéalement à la Rive Droite de Niamey, à l'abri des nuisances urbaines.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-display font-extrabold text-2xl text-yetore-blue-900">
              La Vie Scolaire sur le Campus de la Rive Droite
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nous pensons que l'apprentissage ne se limite pas aux manuels scolaires. Notre campus moderne dispose d'équipements complets favorisant l'épanouissement global des élèves :
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-yetore-gold-50 text-yetore-gold-700 mt-0.5">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-yetore-blue-950">Cantine Scolaire & Hygiène</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Des repas chauds, sains et variés préparés quotidiennement sous contrôle de nutritionnistes pour garantir la vitalité des enfants.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-yetore-gold-50 text-yetore-gold-700 mt-0.5">
                  <Bus className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-yetore-blue-950">Transport Scolaire Sécurisé</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Des minibus climatisés desservent quotidiennement tous les principaux quartiers de la Rive Droite (Lamordé, Karadjé, Kirkissoye, Harobanda, Gnalga).</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-yetore-gold-50 text-yetore-gold-700 mt-0.5">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-yetore-blue-950">Activités Extra-scolaires (Clubs d'Élite)</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Club d'échecs, atelier de programmation informatique/codage, théâtre, arts martiaux et cours de football encadrés le samedi matin.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical FAQs for Parents */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-yetore-blue-900">Foire Aux Questions — Parents d’Élèves</h3>
            <p className="text-xs text-gray-500 mt-1">Les réponses à vos questions les plus fréquentes concernant l'année académique</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-5 rounded-2xl bg-slate-50 border border-gray-100 space-y-2">
              <h4 className="font-bold text-yetore-blue-950 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-yetore-gold-500" />
                Quand commencent les inscriptions pour 2026-2027 ?
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Les pré-inscriptions en ligne et sur place débutent le <strong>1er Juillet 2026</strong>. Pour garantir une place dans nos effectifs limités, nous conseillons vivement aux parents d’effectuer la démarche de pré-inscription en ligne le plus tôt possible.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-gray-100 space-y-2">
              <h4 className="font-bold text-yetore-blue-950 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-yetore-gold-500" />
                Quels sont les documents physiques requis pour l'admission ?
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Vous devez fournir : un extrait d'acte de naissance de l'enfant, 4 photos d'identité récentes, le carnet de vaccination à jour, et les bulletins de notes de l'année précédente (pour le primaire, collège et lycée).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-gray-100 space-y-2">
              <h4 className="font-bold text-yetore-blue-950 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-yetore-gold-500" />
                Proposez-vous des réductions de frais pour plusieurs enfants ?
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Oui. L'établissement CSP YETTORE applique une politique de solidarité familiale : réduction de <strong>10%</strong> sur la scolarité du 2ème enfant inscrit, et <strong>15%</strong> à partir du 3ème enfant.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-gray-100 space-y-2">
              <h4 className="font-bold text-yetore-blue-950 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-yetore-gold-500" />
                Comment fonctionne le suivi des devoirs et de la discipline ?
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Chaque parent reçoit un accès personnalisé à notre plateforme numérique d'affichage de notes (Cahier de texte électronique). Un SMS hebdomadaire vous informe également de l'assiduité, de la conduite et des performances de votre enfant.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Interactive Registration Portal (Modal Form) */}
      <AnimatePresence>
        {showFormModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-yetore-blue-900/60 backdrop-blur-sm" id="inscription-modal">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="bg-yetore-blue-900 text-white p-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-yetore-gold-500" />
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg">Portail d'Inscription en Ligne</h3>
                    <p className="text-[11px] text-yetore-blue-200">CSP YETTORE - Session 2026-2027</p>
                  </div>
                </div>
                <button 
                  onClick={() => { setShowFormModal(false); resetForm(); }}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white cursor-pointer"
                  id="close-modal-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto flex-1">
                {!isSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-5" id="school-inscription-form">
                    <div className="bg-yetore-blue-50 p-4 rounded-xl border border-yetore-blue-100 flex items-start gap-3">
                      <FileCheck className="w-5 h-5 text-yetore-blue-800 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-extrabold text-yetore-blue-950 uppercase tracking-wide">Démarches administratives simplifiées</h4>
                        <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                          Cette pré-inscription en ligne réserve une place préliminaire pour votre enfant. Les parents devront ensuite se présenter directement au secrétariat de l'école pour finaliser l'inscription physique et obtenir toutes les informations relatives à la scolarité.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Student info */}
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1.5">Prénom de l'Élève *</label>
                        <input
                          type="text"
                          name="studentFirstName"
                          required
                          value={formState.studentFirstName}
                          onChange={handleInputChange}
                          className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yetore-blue-500"
                          placeholder="Ex: Adamou"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1.5">Nom de l'Élève *</label>
                        <input
                          type="text"
                          name="studentLastName"
                          required
                          value={formState.studentLastName}
                          onChange={handleInputChange}
                          className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yetore-blue-500"
                          placeholder="Ex: Soumana"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1.5">Date de Naissance *</label>
                        <input
                          type="date"
                          name="birthDate"
                          required
                          value={formState.birthDate}
                          onChange={handleInputChange}
                          className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yetore-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1.5">Cycle d'Études Souhaité *</label>
                        <select
                          name="targetLevel"
                          value={formState.targetLevel}
                          onChange={handleInputChange}
                          className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yetore-blue-500 bg-white"
                        >
                          <option value="maternelle">Maternelle (2 à 5 ans)</option>
                          <option value="primaire">Primaire (6 à 11 ans)</option>
                          <option value="college">Collège (6ème à 3ème)</option>
                          <option value="lycee">Lycée (A, C, D, G)</option>
                        </select>
                      </div>
                    </div>

                    {/* Parents info */}
                    <div className="pt-3 border-t border-gray-100">
                      <h4 className="text-xs font-bold text-yetore-blue-900 mb-3">Informations du Parent ou Tuteur Responsable</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-600 mb-1.5">Nom & Prénom du Parent *</label>
                          <input
                            type="text"
                            name="parentName"
                            required
                            value={formState.parentName}
                            onChange={handleInputChange}
                            className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yetore-blue-500"
                            placeholder="Ex: Oumarou Soumana"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-600 mb-1.5">Téléphone WhatsApp (SMS) *</label>
                          <input
                            type="tel"
                            name="parentPhone"
                            required
                            value={formState.parentPhone}
                            onChange={handleInputChange}
                            className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yetore-blue-500"
                            placeholder="Ex: +227 96 45 44 44"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-600 mb-1.5">Adresse Email *</label>
                          <input
                            type="email"
                            name="parentEmail"
                            required
                            value={formState.parentEmail}
                            onChange={handleInputChange}
                            className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yetore-blue-500"
                            placeholder="parent@gmail.com"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-600 mb-1.5">Établissement d'Origine (si applicable)</label>
                          <input
                            type="text"
                            name="previousSchool"
                            value={formState.previousSchool}
                            onChange={handleInputChange}
                            className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yetore-blue-500"
                            placeholder="Ex: École Rive Droite Niamey"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5">Observations ou demandes spéciales</label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formState.message}
                        onChange={handleInputChange}
                        className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yetore-blue-500"
                        placeholder="Ex: Besoin d'utiliser le bus de transport de Lamordé..."
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="checkbox" required className="rounded text-yetore-blue-800" id="agree-check" />
                      <label htmlFor="agree-check" className="text-[11px] text-gray-500">
                        Je certifie l'exactitude des informations fournies pour cette pré-inscription.
                      </label>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => { setShowFormModal(false); resetForm(); }}
                        className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 font-semibold text-xs cursor-pointer"
                      >
                        Annuler
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-yetore-blue-800 text-white font-bold text-xs shadow-md hover:bg-yetore-blue-900 cursor-pointer flex items-center gap-2"
                        id="submit-inscription-btn"
                      >
                        <Send className="w-4 h-4 text-yetore-gold-500" />
                        Confirmer la Pré-inscription
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-10 space-y-6" id="success-inscription-screen">
                    <div className="w-16 h-16 bg-yetore-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                      <Check className="w-10 h-10" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-2xl text-yetore-blue-950">Pré-Inscription Validée !</h3>
                      <p className="text-xs text-gray-600 max-w-md mx-auto">
                        Félicitations ! Le dossier préliminaire de votre enfant <strong>{formState.studentFirstName} {formState.studentLastName}</strong> a été enregistré avec succès pour la rentrée 2026-2027.
                      </p>
                    </div>

                    {/* Temporary generated receipt detail block */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 max-w-md mx-auto text-left space-y-3.5">
                      <div className="flex justify-between items-center pb-2.5 border-b border-gray-200">
                        <span className="text-xs text-gray-500">N° Dossier Unique :</span>
                        <span className="font-mono font-extrabold text-sm text-yetore-blue-900">{generatedId}</span>
                      </div>

                      <div className="text-xs space-y-2 text-gray-600">
                        <div>
                          <strong>Parent Référent :</strong> {formState.parentName}
                        </div>
                        <div>
                          <strong>Cycle d'entrée :</strong> <span className="capitalize font-bold">{levelLabels[formState.targetLevel]}</span>
                        </div>
                        <div>
                          <strong>Prochaine étape :</strong> Présentation physique à l'école
                        </div>
                      </div>

                      <div className="pt-3 border-t border-gray-200">
                        <h4 className="text-[10px] font-extrabold text-yetore-gold-700 uppercase tracking-wider font-mono flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Prochaine étape physique
                        </h4>
                        <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                          Présentez-vous au secrétariat du campus CSP YETTORE (Rive Droite Niamey) muni du numéro de dossier <strong>{generatedId}</strong> et des pièces justificatives pour finaliser les autres démarches et l'inscription définitive.
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp notification link */}
                    <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 max-w-md mx-auto text-center space-y-3">
                      <div className="flex items-center justify-center gap-1.5 text-emerald-800 font-extrabold text-xs uppercase font-mono">
                        <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                        Transmettre le dossier par WhatsApp
                      </div>
                      <p className="text-[11px] text-emerald-700 leading-relaxed">
                        Pour un traitement immédiat et prioritaire par le service d'admission, veuillez cliquer ci-dessous pour envoyer la fiche de pré-inscription par message WhatsApp.
                      </p>
                      <a
                        href={`https://wa.me/22796820612?text=${encodeURIComponent(
                          `Bonjour, je viens d'effectuer une pré-inscription en ligne pour mon enfant sur le site de l'école CSP YETTORE.

📝 *Détails de l'inscription* :
• *N° Dossier* : ${generatedId}
• *Élève* : ${formState.studentFirstName} ${formState.studentLastName}
• *Date de naissance* : ${formState.birthDate}
• *Niveau demandé* : ${levelLabels[formState.targetLevel] || formState.targetLevel}
• *Établissement précédent* : ${formState.previousSchool || 'N/A'}

👤 *Informations Parent* :
• *Parent/Tuteur* : ${formState.parentName}
• *Téléphone* : ${formState.parentPhone}
• *Email* : ${formState.parentEmail}

💬 *Message/Observations* :
${formState.message || 'Aucune observation.'}

Je me présenterai à l'école pour finaliser les autres démarches d'inscription. Merci de confirmer la réception de mon dossier préliminaire.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Envoyer au +227 96 82 06 12
                      </a>
                    </div>

                    <div className="flex justify-center gap-3">
                      <button
                        onClick={resetForm}
                        className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-50 cursor-pointer"
                      >
                        Inscrire un autre enfant
                      </button>
                      <button
                        onClick={() => { setShowFormModal(false); resetForm(); }}
                        className="px-5 py-2.5 rounded-xl bg-yetore-blue-800 text-white text-xs font-bold shadow-md hover:bg-yetore-blue-900 cursor-pointer"
                      >
                        Fermer le Portail
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
