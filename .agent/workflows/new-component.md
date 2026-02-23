---
description: Create a new high-fidelity UI component with standard styling and patterns.
---

# New Component Workflow

When asked to create a new component (e.g., `/new-component PricingCard`), follow these steps:

1.  **Architecture**: Create the component file in `src/components/` (or a subfolder).
2.  **Boilerplate**:
    - Add `'use client'` if interactive.
    - Define props interface.
    - Use functional component pattern.
3.  **Styling**:
    - Apply Tailwind utility classes.
    - Use the project's design system (Search for `globals.css` or `tailwind.config.ts` if unsure of tokens).
    - Ensure it fits the "premium glassmorphic" aesthetic of BharatsDev.
4.  **Interactivity**:
    - Integrate `framer-motion` for hover/entrance animations.
5.  **Integration**:
    - Import and showcase the component in a relevant page (About, Services, or a demo section).
6.  **Verification**:
    - Run `npm run build` or use the browser tool to verify the visual result.
