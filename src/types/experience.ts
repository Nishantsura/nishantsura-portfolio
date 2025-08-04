
export interface Company {
  id: number;
  name: string;
  icon: React.ReactNode;
  role: string;
  achievements: string[];
  position: "left" | "right";
  image?: string; // Optional image path
}

export interface Project {
  id: string;
  name: string;
  category: string;
  type: string; // 'Case Study' or 'Work'
  image: string;
  description: string;
  skills: string;
  url?: string; // Optional URL to project
  isUnderConstruction?: boolean; // Flag for projects under construction
}
