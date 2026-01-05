
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Language' | 'Frontend' | 'Backend' | 'Tool' | 'Other';
}

export interface ProfileData {
  name: string;
  role: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string;
  shortBio: string;
  location: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}
