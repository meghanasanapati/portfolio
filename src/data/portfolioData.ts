import { Education, Project, Skill, Certification, ContactInfo } from '../types';

export const personalInfo = {
  name: 'Meghana Ram',
  title: 'Computer Science Engineering Student',
  institution: 'G. Narayanamma Institute of Technology and Science',
  location: 'Hyderabad, Telangana, India',
  about: [
    'As an enthusiastic and confident student, I thrive on embracing new challenges and continually expanding my knowledge base. With a diplomatic approach and an extroverted demeanor, I am adept at fostering meaningful connections and collaborations in diverse environments.',
    'Driven by a passion for learning and growth, I approach each opportunity with an open mind and a commitment to excellence. Whether navigating complex projects or engaging in dynamic discussions, I bring a blend of confidence and humility to every interaction.',
    'I welcome the opportunity to connect with like-minded professionals, share experiences, and explore potential collaborations. Let\'s connect and embark on a journey of growth and achievement together.'
  ]
};

export const educationData: Education[] = [
  {
    institution: 'G. Narayanamma Institute of Technology and Science',
    degree: 'Bachelor of Technology - Computer Science Engineering',
    duration: 'Class of 2027',
    grade: '9'
  },
  {
    institution: 'Excellencia Junior College',
    degree: 'Intermediate Education',
    duration: '2020 - 2022',
    grade: '98.9%'
  }
];

export const projectsData: Project[] = [
  {
    title: 'Faculty Invigilation Allotment Assistant',
    specialization: 'Web Application',
    batch: 'B21',
    institution: 'G. Narayanamma Institute of Technology & Science (Autonomous), Hyderabad',
    guide: 'Mr. P. Kranti Kiran, Assistant Professor',
    description: 'This project automates the exam invigilation allotment process, reducing manual scheduling efforts. It ensures fair distribution of invigilation duties by analyzing uploaded timetables and applying rules considering faculty availability, workload balance, and institutional constraints. The system minimizes conflicts and ensures smooth examination workflows, especially useful for large-scale academic institutions.',
    stack: ['MySQL', 'HTML', 'CSS', 'Python', 'Node.js']
  }
];

export const skillsData: Skill[] = [
  { name: 'Leadership', category: 'soft', level: 90 },
  { name: 'Engineering', category: 'technical', level: 85 },
  { name: 'Project Management', category: 'soft', level: 80 },
  { name: 'English', category: 'language', level: 95 },
  { name: 'Communication', category: 'soft', level: 90 },
  { name: 'Presentation Skills', category: 'soft', level: 85 },
  { name: 'JavaScript', category: 'technical', level: 75 },
  { name: 'React JS', category: 'technical', level: 70 }
];

export const certificationsData: Certification[] = [
  {
    name: 'JavaScript and React JS',
    issuer: 'AWS',
    date: 'Mar 2024',
    url: 'https://www.cert.devtown.in/verify/Z26rzwr'
  },
  {
    name: 'JavaScript and React JS',
    issuer: 'Google Developer Student Clubs',
    date: 'Mar 2024',
    url: 'https://www.cert.devtown.in/verify/Z1DoCyD'
  },
  {
    name: 'JavaScript and React JS',
    issuer: 'DevTown',
    date: 'Mar 2024',
    url: 'https://www.cert.devtown.in/verify/rDA7M'
  },
  {
    name: 'Introduction to Generative AI',
    issuer: 'Google Cloud Skills Boost',
    date: 'Feb 2024',
    url: 'https://www.cloudskillsboost.google/public_profiles/724864df-1a20-45b2-9f9e-03972ba74bb0/badges/8018736'
  },
  {
    name: 'Introduction to Responsible AI',
    issuer: 'Google Cloud Skills Boost',
    date: 'Feb 2024',
    url: 'https://www.cloudskillsboost.google/public_profiles/724864df-1a20-45b2-9f9e-03972ba74bb0/badges/8023463'
  },
  {
    name: 'Introduction to Large Language Models',
    issuer: 'Google Cloud Skills Boost',
    date: 'Feb 2024',
    url: 'https://www.cloudskillsboost.google/public_profiles/724864df-1a20-45b2-9f9e-03972ba74bb0/badges/8021657'
  }
];

export const contactData: ContactInfo[] = [
  {
    type: 'Email',
    value: 'meghanaram2003@gmail.com',
    url: 'mailto:meghanaram2003@gmail.com',
    icon: 'mail'
  },
  {
    type: 'Phone',
    value: '+91-9392764337',
    url: 'tel:+919392764337',
    icon: 'phone'
  },
  {
    type: 'LinkedIn',
    value: 'Meghana Ram',
    url: 'https://www.linkedin.com/in/meghana-ram-82b359227/',
    icon: 'linkedin'
  }
];

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' }
];