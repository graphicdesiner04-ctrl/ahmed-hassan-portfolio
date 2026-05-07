# Ahmed Hassan Portfolio — UI Kit

## Overview
High-fidelity, interactive recreation of the Ahmed Hassan portfolio website. Runs as a click-through prototype in the browser.

## Screens
| Screen | Description |
|---|---|
| Home | Hero + featured projects strip + about teaser + footer |
| Projects | Full project grid with category filter chips |
| Project Detail | Behance-style long-scroll case study layout |
| About | Two-column about section with bio, stats, CTA |
| Contact | Split-layout contact form |

## Components
| File | Description |
|---|---|
| `Header.jsx` | Fixed header: wordmark + nav + frosted glass on scroll |
| `HeroSection.jsx` | Full-viewport hero with fade-up animation |
| `ProjectGrid.jsx` | Filterable 3-col project grid with hover states |
| `ProjectDetail.jsx` | Long-scroll project case study (Behance style) |
| `AboutSection.jsx` | Two-column about with scroll-reveal |
| `ContactSection.jsx` | Contact form with success state |
| `Footer.jsx` | Dark footer with links and availability badge |

## Usage
Open `index.html` directly in a browser. No build step required.
Font file (`../../fonts/Alexandria-VariableFont_wght.ttf`) must be present relative to this folder.

## Design Width
1280px desktop. The layout is fluid (uses `clamp()` for type, `max-width` for containers).
