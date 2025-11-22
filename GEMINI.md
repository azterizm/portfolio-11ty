# Project Overview

This is a personal portfolio website, designed to showcase the work and expertise of Abdullah Memon, an expert Full-Stack Developer. The site emphasizes SEO and a modern design.

## Technologies Used

*   **Static Site Generator:** Eleventy (11ty)
*   **Templating Language:** Nunjucks
*   **Styling Framework:** Tailwind CSS
*   **Content:** Markdown files for blog posts, projects, and testimonials.
*   **Plugins:** `@11ty/eleventy-plugin-rss` for generating an RSS feed.

## Architecture

The project follows a typical Eleventy structure:
*   `src/`: Contains all source files, including Nunjucks templates, Markdown content, assets, and CSS.
*   `src/_includes/`: Houses reusable Nunjucks components, layouts, and the main Tailwind CSS input file.
*   `src/_data/`: Stores global data, such as `metadata.json` for site-wide information.
*   `src/assets/`: Contains static assets like images, fonts, and JavaScript scripts.
*   `src/blog/`, `src/projects/`, `src/testimonials/`: Directories for content written in Markdown, which Eleventy processes into HTML pages.
*   `_site/`: The output directory where the generated static website files are placed after a build.

## Building and Running

To set up and run the project locally:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Start Development Server:**
    To run Eleventy with a local server and watch for changes:
    ```bash
    npm start
    ```
    This command will also watch for changes in Nunjucks templates and Markdown files.

3.  **Watch and Compile CSS:**
    In a separate terminal, to watch for changes in `src/_includes/tailwind.css` and recompile the Tailwind CSS output:
    ```bash
    npm run css
    ```

4.  **Build for Production:**
    To generate the static site for deployment:
    ```bash
    npm run build
    ```
    This command first runs Eleventy to build the HTML and then compiles the Tailwind CSS.


## Styling

Reference to ./STYLE.md for styling conventions.

## Development Conventions

*   **Templating:** Nunjucks is used for all dynamic content and page layouts. Custom Nunjucks filters are defined in `.eleventy.js` for tasks like date formatting, array manipulation (slice, shuffle), filtering posts by tags, and retrieving related posts.
*   **Styling:** Tailwind CSS is the primary styling framework. The configuration in `tailwind.config.js` includes custom color palettes, extended font sizes, and additional screen breakpoints.
*   **Content Management:** Blog posts, projects, and testimonials are managed as individual Markdown files within their respective `src/` subdirectories.
*   **SEO:** Extensive SEO meta tags (title, description, keywords, Open Graph, Twitter cards, canonical URL, RSS feed link) are implemented in `src/_includes/layouts/base.njk`, pulling data from `src/_data/metadata.json` and individual page front matter.
*   **JavaScript:** Custom JavaScript files for various animations and functionalities are located in `src/assets/scripts/`.
