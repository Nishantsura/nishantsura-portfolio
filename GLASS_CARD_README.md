# Glass Card Component

A stunning 3D glass card component with advanced hover animations, tool icons, and responsive design for portfolio projects.

## Features

### 🎨 Visual Effects
- **3D Perspective**: Cards rotate in 3D space on hover
- **Glass Morphism**: Translucent glass overlay with backdrop blur
- **Layered Depth**: Multiple layers with different z-index translations
- **Smooth Animations**: Staggered animations for tool icons and decorative elements

### 🛠️ Tool Integration
- **Custom Tool Icons**: React, TypeScript, Vite, Tailwind, and more
- **Hover Effects**: Tool icons lift and glow on hover
- **Color-coded**: Each tool has its brand color
- **Accessible**: Tooltips show tool names on hover

### 📱 Responsive Design
- **Mobile First**: Optimized for all screen sizes
- **Flexible Grid**: 1 column on mobile, 2 on tablet, 3 on desktop
- **Adaptive Sizing**: Cards scale appropriately for different viewports

### ⚡ Performance
- **Hardware Acceleration**: Uses CSS transforms for smooth animations
- **Optimized Rendering**: Efficient 3D transforms and transitions
- **Lazy Loading**: Images load only when needed

## Usage

### Basic Implementation

```tsx
import GlassCard from "@/components/ui/glass-card";
import { ReactIcon, TypeScriptIcon } from "./icons";

const project = {
  title: "My Project",
  description: "A fantastic project description",
  image: "/path/to/image.jpg",
  year: "2024",
  tools: [
    { name: "React", icon: ReactIcon, color: "#61DAFB" },
    { name: "TypeScript", icon: TypeScriptIcon, color: "#3178C6" },
  ]
};

<GlassCard
  title={project.title}
  description={project.description}
  image={project.image}
  tools={project.tools}
  year={project.year}
/>
```

### Demo Component

```tsx
import GlassCardsDemo from "@/components/ui/glass-cards-demo";

// Use the pre-configured demo with your projects
<GlassCardsDemo />
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Project title |
| `description` | `string` | Project description |
| `image` | `string` | Project image URL |
| `year` | `string` | Project year |
| `tools` | `Tool[]` | Array of tools used |
| `className` | `string` | Additional CSS classes |

### Tool Object

```tsx
interface Tool {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}
```

## Animation Features

### 3D Transform Effects
- **Perspective**: 1000px perspective for realistic 3D
- **Rotation**: 15-degree rotation on hover
- **Shadow**: Dynamic shadow that follows the rotation
- **Layered Elements**: Different z-index translations for depth

### Staggered Animations
- **Tool Icons**: 200ms delay between each icon animation
- **Decorative Circles**: Cascading animation delays
- **Project Logo**: Final element with 1.6s delay

### Hover Interactions
- **Scale**: Cards scale up to 105% on hover
- **Rotation**: Subtle 1-degree rotation for dynamic feel
- **Tool Lifting**: Tool icons lift 50px in 3D space
- **Glow Effects**: Enhanced shadows and glows

## CSS Classes

### Core Classes
- `group`: Container for hover effects
- `[perspective:1000px]`: 3D perspective
- `[transform-style:preserve-3d]`: Maintains 3D context
- `backdrop-blur-sm`: Glass morphism effect

### Animation Classes
- `transition-all duration-500`: Smooth transitions
- `group-hover:[transform:rotate3d(1,1,0,15deg)]`: 3D rotation
- `hover:scale-105`: Scale on hover
- `hover:rotate-1`: Subtle rotation

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Performance Notes

- Uses CSS transforms for hardware acceleration
- Minimal DOM manipulation
- Efficient 3D rendering
- Optimized for 60fps animations

## Customization

### Adding New Tools

```tsx
const MyCustomIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    {/* Your SVG path */}
  </svg>
);

const tools = [
  { name: "My Tool", icon: MyCustomIcon, color: "#FF0000" }
];
```

### Modifying Animations

```tsx
// In glass-card.tsx, adjust these values:
group-hover:[transform:rotate3d(1,1,0,15deg)] // Change 15deg
hover:scale-105 // Change scale factor
transition-all duration-500 // Change duration
```

## Dependencies

- `react`: Core React functionality
- `lucide-react`: Icon library
- `framer-motion`: Animation library (for demo)
- `tailwindcss`: Styling framework

## Installation

The component is already integrated into the project. To use it:

1. Import the component: `import GlassCard from "@/components/ui/glass-card"`
2. Use with your project data
3. Customize as needed

## Examples

### Portfolio Integration

The component is currently used in the main portfolio page (`src/components/portfolio/MainContent.tsx`) to showcase:

- ES Rentals, Dubai (2025)
- ProQuo Technologies (2024)  
- Swiggy Case Study (2024)

Each project displays with:
- Project image
- Year badge
- Title and description
- Relevant tool icons
- Interactive hover effects

## Future Enhancements

- [ ] Add click handlers for project details
- [ ] Implement image lazy loading
- [ ] Add more tool icons
- [ ] Create dark/light theme variants
- [ ] Add accessibility improvements
- [ ] Implement keyboard navigation 