# La Combi Bar - Design System

## Concept & Vision

La Combi es un bar que combina la energía de la cultura underground con la calidez de los encuentros sociales. El diseño transmite современный, urbano y acolhedor. La experiencia visual debe sentirse como entrar a un espacio donde la música, los tragos y la buena compañía se unen naturalmente.

## Design Language

### Aesthetic Direction
Estilo "Industrial Chic" - materiales crudos como ladrillo y metal combinados con elementos cálidos como madera y luces cálidas. Referencias: bares artesanales de Brooklyn, espacios de música electrónica.

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Primary (Black) | `#000000` | Fondos principales, navbar |
| Secondary (Eucalyptus Green) | `#5D8A66` | CTAs, acentos, precios, hover states |
| Background (White) | `#FFFFFF` | Fondos, cards |
| Text Light | `#FFFFFF` | Texto sobre fondos oscuros |
| Text Dark | `#000000` | Texto sobre fondos claros |
| Gray 100 | `#F3F4F6` | Cards, inputs |
| Gray 200 | `#E5E7EB` | Bordes, separadores |
| Gray 400 | `#9CA3AF` | Texto secundario |
| Gray 600 | `#4B5563` | Texto terciario |

### Typography

- **Headings**: Sistema nativo (system-ui) - sans-serif bold
- **Body**: Sistema nativo - sans-serif regular
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto

### Spatial System

- Container max-width: 1280px (container mx-auto)
- Spacing scale: 4px base (Tailwind defaults)
- Card padding: 16px (p-4), 24px (p-6)
- Section padding: 32px (py-8), 64px (py-16)
- Gap between cards: 24px (gap-6)

### Motion Philosophy

- Hover transitions: 200-300ms ease
- Card lift on hover: -translate-y-1 with shadow increase
- Button press: scale-95 on active
- Page elements: fade-in naturally

### Visual Assets

- **Icons**: Heroicons (outline style)
- **Instagram**: Custom SVG icon
- **Images**: Unsplash (cocktails, food, music)
- **Logo**: /images/laCombiBar-logo.jpeg

## Layout & Structure

### Page Structure

```
├── Header (sticky, z-50)
│   ├── Logo (left)
│   └── Nav + Instagram (right)
│
├── Main Content
│   └── (varies per page)
│
├── Footer
│   └── (from layout/Footer.tsx)
```

### Pages

1. **Homepage** (`/`)
   - Hero: Logo pequeño izquierda + Instagram link + tagline + CTAs
   - Features: 3 cards (Reservas, Carta, Ambiente)
   - CTA final: Llamada a Reservar

2. **Menu** (`/menu`)
   - Filtros por categoría (5 botones horizontales)
   - Grid de cards 4 columnas (responsive)
   - Cada card: imagen, nombre, descripción, precio, badge categoría

3. **Reservas** (`/reservas`)
   - Formulario de reservas

4. **Reglas** (`/reglas`)
   - Header con icono
   - Grid 2 columnas con 6 reglas
   - CTA de contacto

5. **DJs** (`/djs`)
   - Grid de cards DJ
   - Links a Instagram/TikTok
   - Empty state cuando no hay DJs

### Responsive Strategy

- Mobile first
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Grid: 1 col → 2 cols → 4 cols

## Features & Interactions

### Navigation

- Sticky header
- Mobile: hamburger menu → slide down
- Desktop: horizontal nav
- Active link: highlighted

### Menu Filtering

- Click categoría → filter items
- "Todos" muestra todos
- Transición visual suave

### Menu Cards

- Hover: lift + shadow
- Image cover fit
- Badge categoría top-right
- Precio destacado naranja

### Social Links

- Instagram: SVG icon + @lacombibar
- DJs: Instagram/TikTok buttons con gradiente

### Error/Empty States

- No DJs: mensaje + icono + CTA
- Images fallbacks: placeholder

## Component Inventory

### Header
- States: default, mobile menu open
- Logo: 100px width
- Nav links: hover text-combi-green
- Instagram: hover text-combi-green

### Button
- Variants: primary (green), secondary (outlined white), social (gradient)
- States: default, hover (opacity/scale), active (scale-95), disabled

### Menu Card
- States: default, hover (lift + shadow)
- Image: 192px height, cover
- Badge: category label, top-right, green background
- Price: large, green, bold

### Filter Button
- States: active (green bg), inactive (gray bg)
- Transition: all 200ms

### DJ Card
- Image: 192px height with gradient overlay
- Name: white, bottom-left
- Bio: gray, below image
- Social buttons: Instagram gradient, TikTok dark

## Technical Approach

### Framework
- Next.js 14+ (App Router)
- React 18+
- TypeScript

### Styling
- Tailwind CSS
- Custom colors via tailwind.config.js

### Data
- Menu items: static array in page component
- DJs: static array in page component
- Images: Unsplash URLs (external)

### Key Dependencies
- next: App Router
- react: 18+
- tailwindcss: 3+
- typescript: 5+

### Configuration Files
- `tailwind.config.js` - custom colors
- `tsconfig.json` - TypeScript config
- `next.config.js` - Next.js config

## File Structure

```
laCombiBar/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   ├── menu/page.tsx       # Menu interactivo
│   ├── reservas/page.tsx   # Reservas
│   ├── reglas/page.tsx     # Normas del bar
│   └── djs/page.tsx        # DJs Amigos
├── components/
│   └── layout/
│       ├── Header.tsx      # Navbar + Instagram
│       └── Footer.tsx      # Footer
├── public/
│   └── images/             # Static images
└── docs/                  # Menu source images
```