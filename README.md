# nishantsura

A modern, interactive portfolio website built with React, TypeScript, and Framer Motion.

## Features

### Interactive Work Section
- **Draggable Project Cards**: Swipe and drag project cards to explore
- **Refresh Button**: Reset all cards to their original positions
  - Click the refresh button in the top-right corner
  - Press `R` key for keyboard shortcut
  - Visual feedback with spinning animation and success checkmark
  - Smooth spring animations with bounce effect
- **Responsive Design**: Works seamlessly across all devices
- **Accessibility**: Full keyboard navigation support

## Development

```bash
npm install
npm run dev
```

## Technologies Used

- React 18
- TypeScript
- Framer Motion
- Tailwind CSS
- Vite
- Lucide React Icons

## Project Structure

```
src/
├── components/
│   ├── portfolio/          # Main portfolio components
│   ├── ui/                # Reusable UI components
│   └── animations/        # Animation utilities
├── pages/                 # Page components
└── styles/               # Global styles
```

## Key Components

### DraggableCardDemo
Located in `src/components/ui/draggable-card-demo-2.tsx`

**Features:**
- Interactive project cards with drag functionality
- Refresh button with loading states
- Keyboard shortcuts (R key)
- Success feedback animations
- Smooth reset animations with spring physics

**Usage:**
```tsx
import DraggableCardDemo from "@/components/ui/draggable-card-demo-2";

<DraggableCardDemo />
```

## Customization

### Adding New Projects
Edit the `items` array in `DraggableCardDemo`:

```tsx
const items = [
  {
    title: "Your Project",
    image: "/path/to/image.png",
    description: "Project description",
    className: "absolute top-20 left-[15%] rotate-[-5deg]",
    year: "2024",
    id: "001"
  },
  // ... more projects
];
```

### Styling
- Cards use Tailwind CSS classes for positioning
- Custom CSS variables for brand colors
- Responsive design with mobile-first approach

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance

- Optimized animations using Framer Motion
- Lazy loading for images
- Efficient re-rendering with React hooks
- Minimal bundle size with tree shaking
