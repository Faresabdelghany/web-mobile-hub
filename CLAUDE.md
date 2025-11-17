# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite application using shadcn/ui components and Tailwind CSS. The project is built with Lovable (lovable.dev) and integrates with Supabase for backend services.

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
- **Backend**: Supabase
- **Form Handling**: React Hook Form with Zod validation

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
├── components/       # Reusable UI components (Hero, Navigation, Footer, etc.)
├── components/ui/    # shadcn/ui components
├── pages/           # Page-level components (Index, NotFound)
├── hooks/           # Custom React hooks
├── lib/             # Utilities
├── integrations/
│   └── supabase/    # Supabase client and auto-generated types
├── App.tsx          # Root component with routing setup
└── main.tsx         # Application entry point
```

### Application Setup (App.tsx)

The app is wrapped with these providers (in order):
1. `QueryClientProvider` - TanStack Query for data fetching
2. `TooltipProvider` - For shadcn/ui tooltips
3. `Toaster` & `Sonner` - Toast notifications (dual setup)
4. `BrowserRouter` - React Router

### Routing

Routes are defined in [App.tsx](src/App.tsx):
- `/` - Index page (landing page)
- `*` - NotFound page (catch-all)

**Important**: Add all custom routes ABOVE the catch-all `*` route.

### Supabase Integration

Supabase client is configured in [src/integrations/supabase/client.ts](src/integrations/supabase/client.ts) with:
- localStorage for auth persistence
- Auto-refresh tokens enabled
- TypeScript types auto-generated in `types.ts`

Environment variables required:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`

Import the client: `import { supabase } from "@/integrations/supabase/client"`

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

Colors are defined using HSL CSS variables for easy theming.

## Lovable Integration

This project is managed by Lovable. Changes made via the Lovable platform are automatically committed to this repository. Local changes pushed to the repo will also be reflected in Lovable.

The `lovable-tagger` plugin is enabled in development mode for component tracking.

## Deployment

Deployment is handled through Lovable: Navigate to the project → Share → Publish
