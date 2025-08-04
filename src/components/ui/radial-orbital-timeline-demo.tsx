"use client";

import { Calendar, Code, FileText, User, Clock, Car, Network, ShoppingBag, Database, Shield } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "ES Rentals",
    date: "2024",
    content: "Premier luxury and exotic car rental platform with premium concierge services",
    category: "Project",
    icon: Car,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 95,
    url: "https://www.esrentacar.ae/",
    skills: "UI/UX, React, Responsive Design, Payment Integration"
  },
  {
    id: 2,
    title: "ProQuo",
    date: "2024",
    content: "Professional business networking platform for tech professionals",
    category: "Project",
    icon: Network,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 90,
    url: "https://www.proquotechnologies.com/",
    skills: "User Research, Wireframing, Prototyping"
  },
  {
    id: 3,
    title: "Swiggy Delivery",
    date: "2024",
    content: "Improving the experience for food delivery partners",
    category: "Case Study",
    icon: ShoppingBag,
    relatedIds: [1, 5],
    status: "completed" as const,
    energy: 85,
    url: "https://tremendous-banjo-b0b.notion.site/Improve-The-Swiggy-Experience-For-The-Delivery-Partners-149d914b24114f90b562b5a90e050301C",
    skills: "UX Research, Service Design, Usability Testing"
  },
  {
    id: 4,
    title: "Cactus IT",
    date: "2024",
    content: "Enterprise IT solutions with modern interface design",
    category: "Project",
    icon: Database,
    relatedIds: [2, 6],
    status: "completed" as const,
    energy: 80,
    url: "https://cactusits.com/",
    skills: "Enterprise UX, System Design, Information Architecture"
  },
  {
    id: 5,
    title: "Digilocker",
    date: "2024",
    content: "Redesigning the government digital document storage system",
    category: "Case Study",
    icon: Shield,
    relatedIds: [3, 6],
    status: "completed" as const,
    energy: 75,
    url: "https://tremendous-banjo-b0b.notion.site/Redesigning-DigiLocker-A-Visual-Design-case-study-d8dbfb28243a4889ba64ef2a54a3d497",
    skills: "Government UX, Security Interface Design, Accessibility"
  },
  {
    id: 6,
    title: "Autostock AI",
    date: "2024",
    content: "AI-powered inventory management system for automotive dealers",
    category: "Project",
    icon: Code,
    relatedIds: [4, 5],
    status: "in-progress" as const,
    energy: 60,
    skills: "UX Research, Data Visualization, AI Interface"
  }
];

export function RadialOrbitalTimelineDemo() {
  return (
    <div className="w-full h-screen">
      <RadialOrbitalTimeline timelineData={timelineData} />
    </div>
  );
}

export default {
  RadialOrbitalTimelineDemo,
}; 