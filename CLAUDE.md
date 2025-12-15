# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite application for Climora Digital Marketing Agency. The project uses shadcn/ui components, Tailwind CSS, and integrates with Supabase for backend services including contact form submissions and admin functionality.

**Lovable Project URL**: https://lovable.dev/projects/12b95c97-423d-4d15-ac23-c2b4c7e4999d

## Development Commands

### Essential Commands
- `npm run dev` - Start development server (runs on port 8080)
- `npm run build` - Production build
- `npm run build:dev` - Development mode build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Development Server
The Vite dev server runs on `http://[::]:8080` (IPv6, all interfaces).

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router v6
- **State Management**: TanStack Query (React Query)
- **Backend**: Supabase (authentication, database)
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Architecture

### Path Aliases
The project uses `@/` as a path alias pointing to `src/`:
- `@/components` - React components
- `@/lib` - Utility functions
- `@/hooks` - Custom React hooks
- `@/pages` - Page components
- `@/integrations/supabase` - Supabase client and types

### Project Structure

```
src/
├── components/
│   ├── home/           # Home page sections (HeroSection, StatsSection, etc.)
│   ├── admin/          # Admin-specific components (SubmissionsTable, etc.)
│   └── ui/             # shadcn/ui components
├── pages/
│   ├── Index.tsx       # Home page (marketing landing page)
│   ├── Admin.tsx       # Admin dashboard for contact submissions
│   ├── Auth.tsx        # Authentication page
│   └── NotFound.tsx    # 404 page
├── layouts/
│   └── Layout.tsx      # Shared layout with navbar and footer
├── hooks/              # Custom React hooks (useIsAdmin, use-mobile)
├── integrations/
│   └── supabase/       # Supabase client and auto-generated types
├── utils/              # Utility functions
├── App.tsx             # Root component with routing setup
└── main.tsx            # Application entry point
```

### Application Setup (App.tsx)

The app is wrapped with these providers (in order):
1. `QueryClientProvider` - TanStack Query for data fetching
2. `TooltipProvider` - For shadcn/ui tooltips
3. `Toaster` & `Sonner` - Toast notifications (dual setup)
4. `BrowserRouter` - React Router
5. `Layout` - Shared layout wrapper with navbar and footer

### Layout Component

The Layout component ([src/layouts/Layout.tsx](src/layouts/Layout.tsx)) provides:
- Fixed black navbar with smooth scroll navigation
- Desktop and mobile responsive menus
- Active section highlighting based on scroll position
- Footer with company information and navigation links
- All pages are automatically wrapped with this layout

The navbar tracks scroll position to highlight the active section among: `home`, `company`, `programs`, `team`, and `contact`.

### Routing

Routes are defined in [App.tsx](src/App.tsx):
- `/` - Index page (marketing landing page)
- `/auth` - Authentication page
- `/admin` - Admin dashboard (protected route requiring admin access)
- `*` - NotFound page (catch-all)

**Important**: Add all custom routes ABOVE the catch-all `*` route.

The admin route is protected with `AdminProtectedRoute` component which checks for admin privileges.

### Supabase Integration

Supabase client is configured in [src/integrations/supabase/client.ts](src/integrations/supabase/client.ts) with:
- localStorage for auth persistence
- Auto-refresh tokens enabled
- TypeScript types auto-generated in `types.ts`

Environment variables required (in `.env`):
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`

Import the client: `import { supabase } from "@/integrations/supabase/client"`

#### Admin Dashboard Features
The admin dashboard ([src/pages/Admin.tsx](src/pages/Admin.tsx)) provides:
- Contact submission management from `contact_submissions` table
- Status filtering (pending, in_progress, resolved)
- Search functionality across name, email, and message
- Statistics cards showing submission counts by status
- Ability to respond to submissions and update status

### shadcn/ui Components

Configuration is in [components.json](components.json):
- Style: default
- Base color: slate
- CSS variables enabled
- Components installed in `src/components/ui/`

To add new shadcn/ui components, ensure the aliases in `components.json` match the Vite config.

### Styling System

Tailwind is configured with:
- CSS variables for theming (defined in `src/index.css`)
- Dark mode support via class strategy
- Custom color system (primary, secondary, accent, etc.)
- shadcn/ui color tokens
- Custom animations (accordion-down, accordion-up)
- Typography plugin enabled

Colors are defined using HSL CSS variables for easy theming. The design uses a professional black and white aesthetic with grayscale images.

### Page Structure

The home page ([src/pages/Index.tsx](src/pages/Index.tsx)) is composed of sections:
1. **HeroSection** - Bold headline with CTA
2. **StatsSection** - Key business metrics (2000+ customers, etc.)
3. **CultureSection** - Team values with alternating image layouts
4. **PortfolioSection** - Service/program showcase
5. **MarketingGoals** - Value proposition
6. **TestimonialSection** - Auto-rotating testimonial carousel
7. **CTASection** - Final call-to-action with background image

Each section has an `id` attribute for smooth scroll navigation from the navbar.

## Development Notes

### Navigation System
- The navbar uses smooth scrolling to section IDs
- Active section is tracked based on scroll position with 150px offset
- Section IDs include: `home`, `company`, `programs`, `team`, `contact`
- Mobile menu closes automatically after navigation

### TypeScript Configuration
- `noImplicitAny: false` - Allows implicit any types
- `strictNullChecks: false` - Nullable types not strictly enforced
- `skipLibCheck: true` - Skips type checking of declaration files

## Lovable Integration

This project is managed by Lovable. Changes made via the Lovable platform are automatically committed to this repository. Local changes pushed to the repo will also be reflected in Lovable.

The `lovable-tagger` plugin is enabled in development mode for component tracking.

## Deployment

Deployment is handled through Lovable: Navigate to the project → Share → Publish
