# Shiny Button Component

A modern, animated button component with glowing effects and smooth hover animations. Perfect for creating engaging user interfaces with a futuristic design aesthetic.

## Features

- ✨ **Glowing Effects**: Multiple layered glow effects with SVG filters
- 🎨 **Smooth Animations**: Rotating gradient animations on hover
- 📱 **Responsive Design**: Works seamlessly across all devices
- 🎯 **Accessibility**: Full keyboard navigation and screen reader support
- 🔧 **Customizable**: Multiple size variants and flexible styling
- ⚡ **Performance**: Optimized animations using CSS transforms

## Installation

The component is already integrated into your project at `src/components/ui/shiny-button-1.tsx`.

## Usage

### Basic Usage

```tsx
import { GlowButton } from "@/components/ui/shiny-button-1";

function MyComponent() {
  return (
    <GlowButton onClick={() => console.log('Button clicked!')}>
      Click Me
    </GlowButton>
  );
}
```

### With Icons

```tsx
import { GlowButton } from "@/components/ui/shiny-button-1";
import { Briefcase, ArrowUpRight } from "lucide-react";

function MyComponent() {
  return (
    <GlowButton 
      onClick={() => scrollToSection('work')}
      className="flex items-center gap-2"
    >
      <Briefcase className="w-4 h-4" />
      Let's Build Together
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </GlowButton>
  );
}
```

### Form Submission

```tsx
import { GlowButton } from "@/components/ui/shiny-button-1";

function ContactForm() {
  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <GlowButton type="submit" className="w-full">
        Send Message
      </GlowButton>
    </form>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | `'Register'` | Button content |
| `onClick` | `() => void` | `undefined` | Click handler function |
| `className` | `string` | `''` | Additional CSS classes |
| `disabled` | `boolean` | `false` | Disable the button |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type for forms |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size variant |

## Size Variants

### Small (`size="sm"`)
- Width: `min-w-[120px]`
- Height: `h-[48px]`
- Padding: `px-4 py-2`
- Text: `text-xs`

### Medium (`size="md"`) - Default
- Width: `min-w-[140px]`
- Height: `h-[60px]`
- Padding: `px-6 py-3`
- Text: `text-sm`

### Large (`size="lg"`)
- Width: `min-w-[160px]`
- Height: `h-[72px]`
- Padding: `px-8 py-4`
- Text: `text-base`

## Examples

### Portfolio Integration

The component has been integrated into your portfolio with the following buttons:

1. **Hero Section**: "Let's Build Together" and "See My Process"
2. **Contact Form**: "Send Message"

### Test Page

Visit `/test-shiny-buttons` to see all button variations in action.

## Technical Details

### Animation System

The button uses a sophisticated animation system with:

- **SVG Filters**: Creates the glowing effect using `feColorMatrix`
- **CSS Animations**: Smooth rotation and scaling effects
- **Framer Motion**: Integration with existing animation system

### Performance Optimizations

- Unique IDs for each button instance to prevent filter conflicts
- CSS transforms for smooth animations
- Minimal DOM manipulation
- Efficient re-rendering

### Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Customization

### Colors

The button uses a dark theme with orange and blue gradients. To customize colors, modify the gradient values in the component:

```tsx
// Outer glow
background: 'linear-gradient(90deg, #f50 30%, #0000 50%, #05f 70%)'

// Middle glow  
background: 'linear-gradient(90deg, #f95 20%, #0000 45% 55%, #59f 80%)'

// Inner glow
background: 'linear-gradient(90deg, #fc9 30%, #0000 45% 55%, #9cf 70%)'
```

### Animation Speed

Adjust animation duration by modifying the CSS keyframes:

```css
@keyframes speen {
  0% { transform: rotate(10deg); }
  50% { transform: rotate(190deg); }
  100% { transform: rotate(370deg); }
}
```

## Integration Notes

- The component is fully compatible with your existing shadcn/ui setup
- Uses Tailwind CSS for styling
- TypeScript support included
- Follows your project's component structure

## Future Enhancements

Potential improvements for the component:

- [ ] Color theme variants (light/dark)
- [ ] More animation presets
- [ ] Loading state support
- [ ] Ripple effect on click
- [ ] Custom gradient support via props
