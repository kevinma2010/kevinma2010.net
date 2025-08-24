# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based blog/portfolio site using the Terminal theme (ported from Hugo Terminal Theme). It's a static site with a terminal-inspired retro aesthetic, featuring monospace fonts and a minimalist design.

## Common Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run Astro CLI directly
npm run astro
```

## Architecture & Structure

### Core Framework
- **Astro v5.13.2** - Static site generator with content collections
- **Content Collections** - Type-safe content management system defined in `src/content.config.ts`
- **Markdown Processing** - Shiki syntax highlighting with CSS variables theme

### Content System
Content is managed through Astro's content collections:
- **Posts** (`src/content/posts/`) - Blog posts with frontmatter schema:
  - `title` (required)
  - `description`, `pubDate`, `author`, `tags`, `draft`, etc.
  - Type-safe via Zod schema in `content.config.ts`

### Layout Architecture
Two-tier layout system:
1. **BaseLayout** (`src/layouts/BaseLayout.astro`) - Root layout with:
   - Header with navigation menu (desktop/mobile variants)
   - Footer with credits
   - All CSS imports via global style tag
   - Menu JavaScript for dropdown functionality

2. **PostLayout** (`src/layouts/PostLayout.astro`) - Extends BaseLayout for blog posts

### Routing Structure
- `/` - Homepage listing posts
- `/posts/` - All posts listing with pagination
- `/posts/[slug]` - Individual post pages (dynamic route)
- `/tags/` - Tag index page
- `/tags/[tag]` - Posts filtered by tag
- `/about/` - Static about page
- `/rss.xml` - RSS feed generation

### Styling System
Modular CSS architecture with 13 separate stylesheets:
- `terminal.css` - CSS variables for theming (colors, fonts)
- Component-specific styles (header, footer, menu, post, etc.)
- `syntax.css` - Shiki syntax highlighting theme
- All styles imported globally in BaseLayout

### Key Configuration
- **Site URL**: `https://kevinma2010.net` (configured in `astro.config.mjs`)
- **Base Path**: `/` (root deployment)
- **Integrations**: Sitemap generation via `@astrojs/sitemap`

### Dynamic Features
- Tag-based post filtering with dedicated tag pages
- RSS feed generation (`src/pages/rss.xml.js`)
- Responsive navigation with JavaScript-powered dropdown menus
- Base URL handling for deployment flexibility

## Development Patterns

### Adding New Posts
Create markdown files in `src/content/posts/` with required frontmatter matching the Zod schema.

### Modifying Navigation
Edit the menu structure directly in `src/layouts/BaseLayout.astro` lines 54-83.

### Theming
Modify CSS variables in `src/styles/terminal.css` or use Terminal.css generator for new color schemes.

### Component Creation
Components go in `src/components/` and should follow existing patterns (FormattedDate, PostCard as examples).