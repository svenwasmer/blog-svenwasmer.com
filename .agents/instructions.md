# Project Agent Rules: blog-svenwasmer.com

These rules govern all autonomous and agentic operations within this repository. Any AI assistant working on this project must strictly adhere to these instructions.

---

## 1. Stack & Technologies
* **Astro Framework**: Using Astro v5.x. All content fetching and querying must use the **Content Layer API** (`src/content.config.ts` and `import { getCollection, render } from 'astro:content'`). Do NOT use legacy Content Collections.
* **Styling**: Powered by **UnoCSS**. Use inline utility classes. Avoid creating custom CSS files unless requested.
* **Document Integrity**: Preserve all pre-existing comments, frontmatter fields, and documentation formats unless explicitly asked to modify them.

---

## 2. Content & Routing Rules
* **New Posts**: Always use the schema defined in `src/content.config.ts`. Key fields include:
  * `title`: string
  * `description`: string
  * `published`: date (ISO format string)
  * `draft`: boolean (default: true)
  * `lang`: enum matching defined locales
* **i18n Localization**: Support multiple locales mapped via `i18n.locales` objects in `astro.config.ts`.
