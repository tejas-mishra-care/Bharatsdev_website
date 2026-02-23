# Code Style Rules

Always follow these constraints when working on the BharatsDev codebase:

## 1. Quality & Types
- **TypeScript Strict Mode**: Always use proper types. Avoid `any` at all costs.
- **Component Structure**: Use functional components with arrow functions.
- **Prop Typing**: Use `interface` for prop definitions.

## 2. Styling (CSS)
- **Tailwind CSS**: Exclusively use Tailwind utility classes for all styling.
- **No Inline Styles**: Never use the `style` prop for CSS properties.
- **Shadcn UI**: Priority should be given to existing Shadcn UI components in `@/components/ui`.
- **Responsive Design**: Always ensure components are mobile-first and look great on all screen sizes.

## 3. UI/UX Excellence
- **Glassmorphism**: Use the project's glassmorphic tokens (e.g., `bg-card/60 backdrop-blur-2xl`) for a premium look.
- **Micro-animations**: Use `framer-motion` for subtle, high-quality transitions.
- **Dark Mode**: Always verify that every new component has appropriate `dark:` variants for all colors.

## 4. Performance
- **Image Optimization**: Use `next/image` for all images.
- **Client Components**: Only use `'use client'` when necessary for interactivity or hooks.
