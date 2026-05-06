# AGENTS.md - La Combi Bar

## Project Overview

Next.js/React web application for "La Combi" bar featuring:
- Online table reservations
- Instagram and TikTok integration
- Digital menu with cocktail and food imagery

## Tech Stack (Planned)

- **Framework**: Next.js (App Router recommended for new projects)
- **UI**: React + Tailwind CSS
- **Language**: TypeScript
- **Images**: Next.js Image optimization

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
app/               # Next.js App Router pages
  page.tsx         # Homepage
  menu/            # Menu/carta pages
  reservas/        # Reservation system
components/        # Reusable React components
  ui/              # Basic UI components
  menu/            # Menu-specific components
  reservas/        # Reservation components
public/            # Static assets
  images/          # Food/drink photos
lib/               # Utilities, helpers
```

## Key Features to Implement

1. **Reservations**: Table booking with date/time selection
2. **Social Media**: Instagram/TikTok feed integration or links
3. **Menu (Carta)**: 
   - Cocktail section with images
   - Food section with images
   - Categorization and filtering

## Conventions

- Use TypeScript for all new files
- Prefer Server Components by default; use 'use client' only when needed
- Store images in `/public/images/` with descriptive names
- Use Next.js `<Image>` component for optimized images
