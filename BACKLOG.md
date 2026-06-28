# Blog Feature Backlog

This document tracks ideas, planned features, and ongoing tasks for the blog. Feel free to reorder, add, or check off items as we go!

## Up Next



- [ ] **RSS Feed & Sitemap:** Add `@astrojs/rss` and `@astrojs/sitemap` for SEO and feed readers.
- [ ] **Pagination:** Implement a clean pagination system (e.g., 5-10 posts per page) for the `/blog` index to handle future growth.
- [ ] **Code Syntax Highlighting Theme:** Configure Astro's built-in Shiki engine with a premium theme (like Dracula or One Dark Pro) to match the dark glassmorphism aesthetic.
- [ ] **Dark/Light Mode Toggle:** Set up CSS variables for a light theme and add a sleek toggle switch to the navigation bar.
- [ ] **Social Links:** Add GitHub and Mastodon links/icons to the navigation or footer.
- [ ] **HubSpot Tracking:** Integrate HubSpot Tracking Cookie onboarding for personal HubSpot account.
- [ ] **Terms & Conditions:** Create a T&C page compliant for an Ireland-resident blogger.

## Completed
- [x] **Native View Transitions:** Add Astro's built-in View Transitions API for buttery-smooth, SPA-like navigation between pages.
- [x] **Custom Favicon:** Create and configure a custom `favicon.svg` and `favicon.ico` for the site.
- [x] **Table of Contents:** Generate and display a TOC for blog posts that have the `toc: true` frontmatter enabled.
- [x] **Tags & Categories System:** Created a dedicated `/tags` page and individual feeds so readers can easily filter content by topic.
- [x] Migrate from old Portfolio theme to a fresh minimal Astro 7 build.
- [x] Restructure posts into self-contained page bundles with colocated images.
- [x] Physically crop cover images to perfect 16:9 aspect ratios.
- [x] Fix inline image aspect ratios (`height: auto`).
