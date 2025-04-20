// Define types for the portfolio data

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
}

export interface Project {
  title: string;
  specialization: string;
  batch: string;
  institution: string;
  guide: string;
  description: string;
  stack: string[];
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft' | 'language';
  level?: number; // 0-100 for progress bars
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface ContactInfo {
  type: string;
  value: string;
  url?: string;
  icon: string;
}