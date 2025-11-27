# Style Guide

This document outlines the styling conventions, theming, and architectural approach for the portfolio project. It is intended to guide the creation of new pages and components to ensure consistency.

## Core Philosophy

The project uses a **hybrid styling approach**:
1.  **Tailwind CSS** is the primary engine for layout, spacing, sizing, and colors.
2.  **Custom CSS** (in `src/css/`) is used for font definitions, specific animations, and complex component overrides.
3.  **Nunjucks** templates structure the HTML.

## Color Palette

The color palette is defined in `tailwind.config.js` and globally applied.

| Name            | Hex Code  | Usage                                      |
| :-------------- | :-------- | :----------------------------------------- |
| `primary`       | `#0001E6` | Deep Blue - Accents, primary actions       |
| `secondary`     | `#E6E500` | Yellow/Green - Highlights                  |
| `background`    | `#F3F3FF` | **Main Site Background** (Very Light Blue) |
| `white`         | `#F3F3FF` | *Redefined* to match background            |
| `black`         | `#000040` | **Main Text Color** (Dark Blue)            |
| `pure-white`    | `#ffffff` | Absolute white                             |
| `pure-black`    | `#000000` | Absolute black                             |
| `primary-light` | `#3333FF` | Lighter variation of primary               |

**Note:** The default `white` is overridden to `#F3F3FF` and `black` to `#000040`. Use `pure-white` or `pure-black` if you need absolute values.

## Typography

Fonts are loaded via `@font-face` in `src/css/fonts.css`.

### Font Families

*   **Headings:** `Satoshi` (Bold/Medium)
    *   Applied automatically to `h1` through `h6`.
    *   Utility: `.font-heading`
*   **Body:** `General Sans` (Medium)
    *   Applied automatically to `body`.
    *   Utility: `.font-body`

### Sizing

*   Tailwind's default type scale is extended with massive sizes for display text: `hero` (12rem), `display` (16rem).
*   Use `clamp()` for responsive headings where standard breakpoints are too rigid.

## Layout & Structure

### Page Container
All pages should generally extend `layouts/base.njk`. The base layout provides:
*   A wrapper: `div.container.mx-auto.px-4`
*   Main content wrapper: `div#page-wrapper` with **`space-y-36`** to ensure consistent, large vertical spacing between sections.

### Spacing
*   **Vertical Rhythm:** The site uses generous whitespace. Sections are typically separated by `space-y-36` (9rem).
*   **Horizontal:** Standard container padding `px-4` is used.

## Component Guidelines

### Buttons
Standard "Call to Action" buttons follow this pattern:
```html
<button class="px-6 py-3 bg-black text-white rounded-full text-lg font-semibold hover:scale-105 transition-transform">
  Button Text
</button>
```
*   **Shape:** `rounded-full`
*   **Color:** `bg-black` (Dark Blue), `text-white` (Light Blue)
*   **Interaction:** `hover:scale-105 transition-transform`

### Text Animations
For hero sections or impactful headings, use the custom `.text-animate` class (found in `src/css/animate.css` or similar custom files).

## CSS Organization
*   **Global Styles:** `src/css/global.css` (Resets, base body styles)
*   **Fonts:** `src/css/fonts.css`
*   **Tailwind Config:** `tailwind.config.js` (Theme extensions)
*   **Page-Specific:** Create a new CSS file in `src/css/` (e.g., `src/css/my-new-page.css`) and link it in the head of your template if you need substantial custom CSS that Tailwind cannot handle.

## How to Style a New Page

1.  **Create Template:** Create a `.njk` file in `src/`.
2.  **Extend Base:** `{% extends "layouts/base.njk" %}`.
3.  **Block Content:** Wrap content in `{% block content %}`.
4.  **Use Tailwind:** Apply utility classes for 90% of styling.
5.  **Vertical Spacing:** Ensure your sections are children of the main wrapper so they inherit `space-y-36`, or manually apply `mb-36` if nesting breaks the flow.
6.  **Check Colors:** Ensure you are using the semantic color names (`bg-background`, `text-black`) rather than hardcoded hex values.
