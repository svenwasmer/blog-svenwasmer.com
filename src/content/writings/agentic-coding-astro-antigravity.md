---
title: "Agentic Coding in Astro Projects Using Antigravity"
description: "How to integrate Google's Antigravity CLI (agy) into your Astro workflow, leverage Model Context Protocol (MCP) servers, and write project-specific agent instructions."
date: 2026-06-15
tags: ["Astro", "Antigravity", "AI-Agents", "MCP", "Web-Development"]
draft: false
---


## Introduction to Agentic Coding

The landscape of AI-assisted development is shifting from autocomplete tools to **agentic coding**. Instead of writing code snippet-by-snippet, developers can now describe desired features or debugging targets, and let an autonomous agent carry out the tasks in a loop: reading files, executing commands, checking for linting issues, and iterating until the goal is met.

Google's **Antigravity CLI** (`agy`) is a terminal-based interface designed to bring this agentic power to your projects. In this post, we'll explore how to set up and optimize Antigravity for an Astro web application.

---

## 1. Setting Up Antigravity in an Astro Project

To configure Antigravity for your workspace, the CLI expects a configuration structure. You can customize the agent's behavior globally or locally.

### Workspace Configuration
By following the Antigravity workspace rules, you can place a `.agents` folder at the root of your Astro repository. Inside this folder, you can store:
*   `instructions.md`: Rules and standards that the agent must adhere to (e.g., using UnoCSS, preserving documentation integrity).
*   `mcp_config.json`: Local Model Context Protocol server endpoints specific to this project.

For example, your `/.agents/instructions.md` might look like this:
```markdown
# Local Agent Guidelines
- Astro Version: 5.x
- Content Management: Use the new Content Layer API (`src/content.config.ts`).
- Styles: Always use UnoCSS utility classes.
```

---

## 2. Leveraging the Astro Docs MCP Server

One of the key features of the Antigravity ecosystem is the **Model Context Protocol (MCP)**. Instead of relying on outdated training data, your agent can connect to the official **Astro Docs MCP Server** to query the latest documentation in real time.

You can configure the server URL remotely by pointing your agent to:
`https://mcp.docs.astro.build/mcp`

Once connected, your agent will always use up-to-date Astro 5.x standards, such as:
*   Using the `render()` helper from `astro:content` instead of the deprecated `.render()` entry method.
*   Constructing Content Layer schemas using the `glob` loader.
*   Configuring internationalization path overrides.

---

## 3. Best Practices for Agentic Development in Astro

When pair-programming with an agent in an Astro codebase, keep these rules in mind:

1.  **Keep the Rules Local**: Storing instructions in the `/.agents` directory of your workspace root ensures they are checked into Git and shared with other developers.
2.  **Explicit Intent**: When triggering the agent, clearly specify the boundaries of your files. Pointing the agent to files via absolute or relative links helps it find files faster.
3.  **Run Checks Continuously**: Use the agent to run `astro check` and `eslint` commands synchronously to catch syntax and TypeScript issues before committing your work.

Agentic coding with Antigravity turns development from a manual coding cycle into a high-level system architectural guide, letting you focus on design and user experience while the agent implements the clean code.
