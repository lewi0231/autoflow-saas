# AutoFlow - Modern SaaS Landing Page

A high-performance, visually engaging landing page showcasing modern web development techniques and attention to user experience. Features optimized code splitting with dynamic imports to minimize initial bundle size and reduce main-thread blocking.

## Technology Stack

**Framework & Build**

- Next.js 16 with App Router
- TypeScript for type safety
- Tailwind CSS with OKLCH color system for perceptual uniformity

**Libraries & Tools**

- Framer Motion for performant animations
- React Icons for scalable iconography
- Shadcn UI for accessible component primitives

## Key Features & Implementation

### Performance-Conscious Animations

**Scroll-Triggered Feature Shuffle**

- Feature cards automatically reorder when scrolled into view
- Uses `useInView` to activate only when visible
- Limits animation cycles to prevent excessive re-renders
- Smooth layout transitions using Framer Motion's layout animations

**Implementation**

```typescript
const isInView = useInView(ref, { once: false, amount: 0.5 });
useEffect(() => {
  if (isInView && shuffleCount < MAX_SHUFFLES) {
    // Shuffle logic
  }
}, [isInView, shuffleCount]);
```

**Why it matters**: Reduces unnecessary animations when not in view, improving performance while maintaining engagement.

### Advanced Scroll Animations

**Horizontal Testimonial Scroll**

- Converts vertical scroll into horizontal motion
- Seamless infinite scroll with duplicated content
- Smooth performance using transform-based animations
- Company logo marquee with CSS keyframes

**Implementation**

```typescript
const x = useTransform(
  scrollYProgress,
  [0, 1],
  [0, -((cardWidth + gap) * count)]
);
```

**Why it matters**: Creates memorable user experience without heavy JavaScript, leveraging browser-optimized transforms.

### Interactive Components

**Pricing Card Selection**

- State-driven UI that updates on interaction
- Spring physics for natural motion
- Keyboard accessible with `tabIndex` and `onKeyDown`
- Visual feedback through border and scale animations

**Why it matters**: Demonstrates understanding of both visual design and accessibility requirements.

### Design System & Theming

**Color Architecture**

- OKLCH color space for perceptual uniformity
- Semantically named tokens (`primary`, `secondary`, `muted`)
- Consistent contrast ratios across light/dark variants
- Custom gradient utilities for depth

**Component Reusability**

- `SectionHeader` component eliminates repetition
- Consistent spacing scale (8px increments)
- Shared animation patterns

**Why it matters**: Maintainable codebase with predictable design tokens, scalable to large applications.

### Responsive Typography

```tsx
className = "text-5xl md:text-7xl font-extrabold tracking-tight";
```

- Fluid type scaling from 48px to 72px
- Maintains readability across viewport sizes
- Proper line-height and tracking adjustments

### Accessibility Features

**Focus Management**

- Visible focus rings for keyboard navigation
- Proper ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard event handlers for custom interactive components

**Implementation**

```typescript
className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
tabIndex={0}
role="button"
aria-label="Select pricing plan"
```

### Code Quality Patterns

**Type Safety**

```typescript
const VARIANTS = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
} as const;
```

- Uses `as const` for literal type inference
- Prevents runtime errors through compile-time checks
- Self-documenting interfaces

**Performance Optimizations**

- **Code Splitting & Dynamic Imports**: Below-the-fold sections (FeatureSection, TestimonialSection, PricingSection) are dynamically loaded using Next.js `dynamic()` to reduce initial bundle size and avoid long main-thread tasks
- Cleans up timeouts to prevent memory leaks
- Conditional rendering based on viewport visibility
- Efficient re-render prevention with proper dependencies
- Layout animations over property animations

**Dynamic Loading Implementation**

```typescript
const FeatureSection = dynamic(() => import("@/components/feature-section"), {
  ssr: true,
});
```

**Why it matters**: By code-splitting heavy animation components (which use Framer Motion), the initial JavaScript bundle is significantly smaller. This improves Time to Interactive (TTI) and reduces Lighthouse's "long main-thread tasks" warnings, while maintaining SEO benefits through server-side rendering.

### Visual Polish

**Section Separators**

- Gradient borders for visual hierarchy
- Subtle pattern overlays for texture
- Consistent spacing rhythm (4, 8, 12, 16, 24px scale)
- Coordinated color accents throughout

**Micro-interactions**

- Hover states on all interactive elements
- Tap/click feedback animations
- Loading states with opacity transitions
- Count-up animations for statistics

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page composition
│   ├── globals.css        # Tailwind config + custom CSS
│   └── icon.svg           # Favicon
├── components/             # React components
│   ├── ui/               # Shadcn UI primitives
│   ├── hero.tsx          # Hero section with scroll animations
│   ├── feature-section.tsx
│   ├── pricing-section.tsx
│   ├── testimonial-section.tsx
│   ├── section-header.tsx # Reusable section component
│   └── custom-button.tsx # Button with variants
├── lib/                   # Utilities
│   ├── data.ts           # Data structures & types
│   ├── icon.tsx          # Dynamic icon component
│   └── utils.ts          # Helper functions
└── hooks/                # Custom React hooks
    └── useIsScrollAtTop.ts
```

## Design Decisions

**Why Framer Motion?**

- Leverages GPU acceleration for smooth animations
- Declarative API reduces animation logic complexity
- Built-in support for gesture recognition and scroll-triggered animations

**Why OKLCH Colors?**

- Perceptually uniform color space
- More predictable gradients and color mixing
- Better accessibility contrast calculations

**Why Component Composition?**

- Reduces bundle size through code reuse
- Consistent behavior across similar features
- Easier to maintain and update globally

## Running Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Browser Support

Modern browsers with CSS custom properties support. Graceful degradation for older browsers.

---

Built with attention to performance, accessibility, and user experience.
