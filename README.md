# Accredian Enterprise — Landing Page Clone

A responsive recreation of the Accredian Enterprise landing page.

**Live Demo:** https://accredian-training-hub.vercel.app/
**Reference:** https://enterprise.accredian.com/

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (scroll reveals)
- Lucide React (icons)
- shadcn/ui (accessible primitives)
- React Hook Form (lead capture)

## Setup

```bash
git clone https://github.com/chahelpatwa/accredian-training-hub.git
cd accredian-training-hub
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Approach

I broke the landing page into 14 isolated, reusable components under `/src/components`. The page is a single scrollable composition with smooth-scroll anchor navigation and an IntersectionObserver hook (`useActiveSection`) that highlights the active nav link as the user scrolls.

Key architectural decisions:
- All UI primitives (Dialog, Accordion, Button) use shadcn/ui for accessibility out of the box
- A `LeadFormProvider` context exposes the lead capture modal globally so any "Enquire Now" CTA can trigger it
- The `Reveal` wrapper component uses Framer Motion's `whileInView` for subtle fade-in-on-scroll animations
- Design tokens (colors, shadows, radii) are defined as HSL CSS variables in `index.css`, making the theme easy to swap or extend
- Mobile-first responsive breakpoints with specific handling for the Accredian Edge timeline (zigzag on desktop, vertical list on mobile)

## AI Usage

**Where AI helped:**
- Used **Lovable** to scaffold the initial component structure, layouts, and Tailwind design system based on a detailed spec I wrote from reference screenshots
- Used **Claude** for planning the section breakdown, iterating on edge-case layouts, and debugging styling issues during iteration

**What I did manually:**
- Wrote the full design brief and feature spec that drove the initial generation
- Made targeted manual fixes to the FAQ accordion logic and the Accredian Edge timeline SVG path
- Tuned the testimonial carousel state logic
- Refined typography scale, button states, and spacing for a more institutional feel
- Set up the lead form context and modal behavior
- Adjusted responsive breakpoints where generated code broke on mobile
- Reviewed every component for clean, readable structure and removed unused imports

## Improvements With More Time

- Wire the lead form to a real backend (Supabase or a custom API route) with email notifications via Resend
- Migrate from Vite to Next.js App Router for server-side rendering and built-in API routes
- Add server-side form validation using Zod schemas shared between client and server
- Replace placeholder hero and section imagery with licensed stock photography
- Full accessibility pass: keyboard navigation, ARIA labels, prefers-reduced-motion support
- Performance optimization: image optimization, code splitting, lazy-loading below-the-fold sections
- Unit tests for form logic and integration tests with Playwright
- CMS-backed content (Sanity or Contentful) so marketing can edit copy without code changes

## Deployment

Deployed on Vercel via GitHub integration. Every push to `main` triggers a production deploy automatically.