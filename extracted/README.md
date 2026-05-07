# Ahmed Hassan – Design System

## Overview

Ahmed Hassan is a premium design portfolio showcasing social media campaigns, branding, print design, and logo design. The brand is positioned in the luxury-minimal space — targeting clients who value refined aesthetics, visual storytelling, and craftsmanship.

The portfolio is bilingual (Arabic + English), serving both MENA and international audiences. The aesthetic closely parallels editorial luxury fashion brands (think Vogue Arabia, LVMH microsites) and portfolio platforms like Behance at its most polished.

**Sources provided:**
- `My Portfolio/` — Codebase (mounted via File System Access API; was empty at design-system creation time)
- `uploads/Alexandria-VariableFont_wght.ttf` — Primary variable typeface (copied to `fonts/`)
- Detailed design brief (supplied via prompt)

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Minimal, confident, editorial.** Copy is sparse — let the work speak.
- Sentences are short. Fragments are fine. No filler.
- Bilingual: English primary headlines + labels; Arabic secondary / body where cultural context calls for it.
- **Casing:** Sentence case for headings. All-caps for category tags, labels, micro-copy (e.g. `SOCIAL MEDIA`, `LOGO DESIGN`).
- **Emoji:** None. Zero. The brand is too refined.
- **Numbers:** Written as numerals (`3 Projects`, not `three projects`).
- **First person:** Minimal. Prefer third-person or brand-neutral framing (`Selected Works`, not `My Best Work`).
- **Client-facing language:** Professional, warm, never salesy. `Available for freelance` > `Hire me now!`

### Example copy patterns
- Hero: `Visual Identity & Brand Craft`
- Sub-hero: `Ahmed Hassan — Creative Director & Visual Designer based in Cairo`
- CTA: `View Work` / `Get in Touch`
- Category filters: `ALL · SOCIAL · LOGO · BRANDING · PRINT`
- Project caption: `Zahra Jewels — Brand Identity, 2024`

---

## VISUAL FOUNDATIONS

### Color System
- **Background:** `#F5EDE6` — warm sand/beige; main canvas
- **Surface:** `#EFE4DA` — slightly darker beige; cards, sections
- **Surface Alt:** `#E8D9CC` — deeper warm tone for hover states, dividers
- **Text Primary:** `#3E2F28` — deep espresso brown; headlines, body
- **Text Secondary:** `#7A6155` — muted warm brown; captions, labels
- **Text Muted:** `#B0998F` — light warm brown; placeholders, meta
- **Accent:** `#C9A882` — warm gold/tan; underlines, hover highlights, active states
- **Accent Dark:** `#9E7A54` — richer bronze for press/focus states
- **White:** `#FDFAF7` — warm white; overlays, light surfaces
- **Black:** `#1A1210` — near-black espresso; footer, strong text moments

### Typography
- **Primary font:** Alexandria (variable weight, 100–900). Arabic-supporting, variable-weight. Used for ALL text.
- **Display:** Alexandria 300–400, large (80–120px). Tracked loosely. Used for hero/section titles.
- **Heading:** Alexandria 500, 32–56px. Used for project titles, section heads.
- **Subheading:** Alexandria 400, 18–24px. Labels, sub-titles.
- **Body:** Alexandria 400, 15–17px. Descriptions, bios.
- **Caption/Label:** Alexandria 500, 11–13px, all-caps, letter-spacing 0.15em. Category tags, meta info.
- **Arabic:** Same font (Alexandria has Arabic glyphs). `direction: rtl` for Arabic passages.
- **Line height:** Display 1.05–1.1; Body 1.65–1.75; Headings 1.2–1.3.
- **No secondary typeface.** Single-family system throughout.

### Spacing
- Base unit: 8px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192px
- Section padding: 96–128px vertical
- Card gap: 24–32px
- Content max-width: 1280px; text max-width: 680px

### Backgrounds & Surfaces
- Flat warm beige — no gradients, no textures
- Full-bleed project imagery (photography/mockups) within cards and hero
- No patterned or illustrated backgrounds
- Subtle paper-like warmth through color alone

### Borders & Dividers
- `1px solid #E8D9CC` — thin, warm; separates sections
- No heavy borders; prefer whitespace for separation
- Hairline rule used sparingly as a typographic ornament

### Corner Radii
- Cards/images: `0px` — sharp edges, no rounding (editorial luxury)
- Buttons: `0px` or very subtle `2px` max
- Tags/chips: `2px`

### Shadows
- Minimal / none on most elements
- Cards on hover: `0 8px 40px rgba(62,47,40,0.10)` — very subtle warm lift
- No drop shadows on type or icons

### Animation & Motion
- Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` — smooth, unhurried
- Duration: 300–500ms for transitions; 600–900ms for page-level reveals
- Reveals: fade + slight upward translate (12–20px Y). Nothing bouncy.
- Hover images: very slow scale (1.02–1.04 over 600ms)
- No spinning, no bouncing, no spring physics

### Hover & Press States
- Links/nav: underline slide-in from left OR opacity 0.6→1
- Buttons: background shifts to `#3E2F28`; text to `#FDFAF7`
- Cards: subtle shadow lift + image slow zoom
- Press: slight opacity reduction (0.85)

### Layout Rules
- Grid: 12-col CSS Grid; 80px gutters on desktop; single col on mobile
- Fixed header: always visible, minimal height (~64px), `backdrop-filter: blur` on scroll
- Project grid: masonry-ish 2–3 col on desktop, 1 col mobile
- RTL support: layout flips for Arabic passages

### Imagery
- Warm, desaturated or naturally-toned photography
- Mockups on warm-toned surfaces (wood, marble, paper)
- No cold-toned, no blue-heavy images
- B&W imagery used for some hero moments (editorial punch)

### Use of Blur/Transparency
- Frosted glass header on scroll: `backdrop-filter: blur(12px)` + semi-transparent `#F5EDE6CC`
- No other blur effects

### Cards
- Sharp corners, no border by default
- Thin `1px #E8D9CC` border OR no border
- Hover: warm shadow lift
- Image fills card top; text metadata below

---

## ICONOGRAPHY

- **No icon library used.** The brand avoids icon clutter.
- Navigation and UI affordances use text labels + minimal inline SVG arrows/chevrons
- Category filters use text chips, not icons
- Social links use simple inline SVGs (minimalist line-art style, no filled icons)
- No emoji used anywhere
- Arrow motif: `→` (right arrow, unicode) used as a design accent for CTAs
- **Assets folder:** `assets/` — contains any logo SVG and brand marks
- No external icon font (no Font Awesome, Lucide, etc.)

---

## FILE INDEX

```
README.md                          — This file; design system overview
SKILL.md                           — Agent skill definition
colors_and_type.css                — CSS custom properties for color + type tokens
fonts/
  Alexandria-VariableFont_wght.ttf — Primary variable typeface
assets/
  logo.svg                         — Ahmed Hassan wordmark/logo
preview/
  colors-primary.html              — Primary color palette swatches
  colors-semantic.html             — Semantic color roles
  type-scale.html                  — Typography scale specimen
  type-arabic.html                 — Arabic type specimen
  spacing-tokens.html              — Spacing scale tokens
  spacing-radii-shadow.html        — Radii, shadow, border tokens
  components-buttons.html          — Button states
  components-cards.html            — Project card variants
  components-tags.html             — Category tags / chips
  components-nav.html              — Navigation bar
ui_kits/
  portfolio/
    README.md                      — UI kit overview
    index.html                     — Interactive portfolio prototype
    Header.jsx                     — Site header component
    HeroSection.jsx                — Hero section
    ProjectGrid.jsx                — Project grid with filters
    ProjectDetail.jsx              — Behance-style project detail
    Footer.jsx                     — Site footer
```
