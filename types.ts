
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  logo?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  skills?: string[];
}

export interface Recommendation {
  author: string;
  role: string;
  content: string;
  date: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Milestone {
  title: string;
  description: string;
  image: string; // Placeholder for user's images
  tag: string;
  objectPosition?: string; // CSS object-position value (e.g., 'top', 'center 20%')
}
