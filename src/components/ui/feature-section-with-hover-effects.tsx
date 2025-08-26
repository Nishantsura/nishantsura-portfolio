import { cn } from "@/lib/utils";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "React/Next.js frontends with TypeScript",
      description:
        "I build type-safe, component-driven UIs that scale without regressions. Every UI element is modular, tested, and designed for fast iteration.",
      icon: "⚛️",
    },
    {
      title: "UI/UX Design & Prototyping",
      description:
        "I create intuitive user experiences from wireframes to high-fidelity prototypes. Every design decision is backed by user research and accessibility best practices.",
      icon: "🎨",
    },
    {
      title: "Database design (PostgreSQL, MongoDB)",
      description:
        "I design schemas that match access patterns. Indexing for performance, migrations that don't break, and queries optimized to handle growth.",
      icon: "🗄️",
    },
    {
      title: "API integration & third-party services",
      description:
        "I integrate cleanly, wrapping external APIs with fail-safes and retries. No more silent failures — every response is logged and traceable.",
      icon: "🔗",
    },
    {
      title: "Mobile App Development (React Native)",
      description:
        "I build cross-platform mobile applications that deliver native performance. From concept to App Store deployment, I handle the complete mobile development lifecycle.",
      icon: "📱",
    },
    {
      title: "Scalable Architecture Design",
      description:
        "I design systems that grow with your business. From microservices to monoliths, I ensure your architecture supports your scale.",
      icon: "🏗️",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-8 relative group/feature bg-black/20 backdrop-blur-sm rounded-lg border border-black",
        (index === 0 || index === 3) && "lg:border-l lg:border-black",
        index < 3 && "lg:border-b lg:border-black",
        "lg:border-r lg:border-black"
      )}
    >
      {/* Subtle tubelight glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 pointer-events-none">
        {/* Top border glow */}
        {index < 3 && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 via-blue-500 via-purple-500 via-pink-500 to-transparent blur-sm" />
        )}
        {/* Bottom border glow */}
        {index >= 3 && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 via-blue-500 via-purple-500 via-pink-500 to-transparent blur-sm" />
        )}
        {/* Right border glow */}
        <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 via-blue-500 via-purple-500 via-pink-500 to-transparent blur-sm" />
        {/* Left border glow for first and fourth items */}
        {(index === 0 || index === 3) && (
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 via-blue-500 via-purple-500 via-pink-500 to-transparent blur-sm" />
        )}
      </div>

      {/* Background gradient on hover */}
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-white/5 to-transparent pointer-events-none rounded-lg" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-lg" />
      )}
      
      <div className="mb-4 relative z-10 px-6 text-3xl">
        {icon}
      </div>
      <div className="text-lg font-bold mb-3 relative z-10 px-6">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-[2px] rounded-tr-full rounded-br-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 group-hover/feature:shadow-sm group-hover/feature:shadow-cyan-400/30 transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-white/70 max-w-xs relative z-10 px-6 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
