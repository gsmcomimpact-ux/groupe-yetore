/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type SectionType = 'home' | 'scolaire' | 'transit' | 'assurances' | 'propos' | 'contact';

export interface LevelDetail {
  id: string;
  name: string;
  description: string;
  ageRange: string;
  schedule: string;
  features: string[];
  subjects: string[];
  feesDescription: string;
  iconName: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
  image?: string;
}

export interface FacultyMember {
  name: string;
  role: string;
  degree: string;
  experience: string;
  avatar: string;
}

export interface TransitQuoteForm {
  origin: string;
  destination: string;
  cargoType: string;
  weightKg: number;
  volumeCbm?: number;
  transportMode: 'maritime' | 'aerien' | 'routier';
  withInsurance: boolean;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
}

export interface InsuranceQuoteForm {
  insuranceType: 'auto' | 'sante' | 'habitation' | 'transit';
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  additionalDetails: {
    vehicleValue?: number;
    familySize?: number;
    houseRooms?: number;
    cargoValue?: number;
  };
}

export interface RegistrationForm {
  studentFirstName: string;
  studentLastName: string;
  birthDate: string;
  targetLevel: string; // 'maternelle' | 'primaire' | 'college' | 'lycee'
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  previousSchool?: string;
  message?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
