# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Eleventy (11ty) static site generator and Tailwind CSS. The site features blog posts, projects, testimonials, and services pages with a focus on SEO optimization.

## Key Commands

### Development and Building
- `npm run build` - Build the static site (Eleventy + Tailwind CSS)
- `npm run start` - Start development server with live reload
- `npm run watch` - Watch for file changes and rebuild automatically
- `npm run css` - Watch Tailwind CSS changes separately

### Architecture

**File Structure:**
- `src/` - Source directory for all content and templates
- `_site/` - Build output directory
- `.eleventy.js` - Eleventy configuration with custom filters and collections
- `tailwind.config.js` - Tailwind CSS configuration with custom color scheme

**Content Collections:**
- `src/blog/*.md` - Blog posts with frontmatter
- `src/projects/*.md` - Project showcases
- `src/testimonials/*.md` - Client testimonials
- `src/_includes/` - Reusable Nunjucks components
- `src/_includes/layouts/` - Base layout templates

**Custom Nunjucks Filters (.eleventy.js):**
- `readableDate` - Format dates as "Mon DD, YYYY"
- `slice` - Array slicing with error handling
- `filterByTag` - Filter blog posts by tags
- `shuffle` - Random array shuffling
- `getRelatedPosts` - Find related posts by common tags

**Custom Collections:**
- `projects` - All project files sorted by year (newest first)
- `blog` - All blog posts sorted by date (newest first)
- `testimonials` - All testimonials
- `tagList` - Unique tags from all blog posts

## Styling

**Tailwind CSS Configuration:**
- Custom color palette with primary (#0001E6), secondary (#E6E500), and background (#F3F3FF)
- Extended typography with custom font sizes up to 'display' (16rem)
- Custom breakpoints: xs: 30rem, 2xl: 100rem, 3xl: 120rem
- Typography plugin for prose content

## Key Components

**Main Sections:**
- Hero section (src/_includes/components/hero.njk)
- Recent articles (src/_includes/components/recent-articles.njk)
- Work/projects showcase (src/_includes/components/work.njk)
- Testimonials (src/_includes/components/testimonials.njk)
- Services (src/_includes/components/services.njk)
- About section (src/_includes/components/about.njk)

**Layout System:**
- Base layout with responsive navigation
- Component-based architecture with reusable Nunjucks includes
- RSS feed support for blog posts
- Tag-based blog organization

## Content Management

Blog posts and projects use standard Markdown frontmatter. The site automatically generates:
- RSS feed at /feed.xml
- Individual tag pages at /tags/{tag}/
- Related post suggestions based on shared tags