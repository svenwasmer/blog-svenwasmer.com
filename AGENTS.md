## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

**CRITICAL:** Always use the local `Astro docs` MCP server (via the `search_astro_docs` tool) to look up documentation before making architectural decisions or writing new Astro 7 code.

## Git Workflow

- **Feature Branches:** Whenever starting work on a new feature or task from the backlog, always create and switch to a new feature branch first (`git checkout -b feature/<feature-name>`). Do not work directly on `master`.
