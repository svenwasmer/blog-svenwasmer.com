---
title: "Agentic Workflows and AI Coding Assistants in Modern Web Development"
description: "A detailed outline and guide exploring how AI agents, custom system prompts, and developer rules are utilized to optimize web development and repository management."
published: "2026-06-15"
updated: ""
draft: false
author: "Sven"
lang: "en"
slug: "agentic-workflows-ai-coding-assistants"
tags: ["AI", "Agents", "Claude", "Gemini", "Cursor", "Antigravity", "WebDev", "Developer-Tools"]
pin: 0
toc: true
image: "/images/agents-cover.jpg"
abbrlink: "agentic-workflows-ai-coding"
---


## Outline: Agentic Workflows and AI Coding Assistants

This document serves as a draft outline for a blog post discussing the role of AI coding agents (such as Claude, Cursor, Windsurf, and Antigravity) in web development, along with recommendations on how and where to store project-specific rules or agent behaviors.


### 1. Introduction to Agentic Development
AI coding assistants are evolving from simple autocompletion engines into fully autonomous agents capable of running commands, managing tasks, editing files, and debugging code in a loop. But to make them safe, predictable, and highly aligned with your project requirements, we need custom rules and contexts.


### 2. Proposing a Safe Space to Store Agent Instructions for This Project
When working on this repository, you want any AI agent you pair-program with to follow the same standards (e.g., preserving document integrity, using specific i18n structure, or matching UnoCSS configurations). 

Here is a proposal for the best and safest places to store your agent instructions:

#### Option A: Project Root Rule Files (Recommended for Team Collaboration)
Create a `.cursorrules`, `.clauderules`, or `.ai-instructions.md` file in the root of the project:
*   **Why it's safe:** It is tracked by Git, versioned, and shared with anyone who clones the repository.
*   **Editor Support:** Editors like Cursor and VS Code Extensions automatically detect files like `.cursorrules` or `.clauderules` in the workspace root and apply them to all queries.

#### Option B: Global User Config Directory (Recommended for Personal Defaults)
Store agent definitions globally in your home directory, e.g., `/Users/svenwasmer/.gemini/config/agents` or `/Users/svenwasmer/.gemini/antigravity-cli/skills`:
*   **Why it's safe:** Keeps project repositories clean of local tool-specific files and keeps your private keys/preferences outside of public Git repositories.
*   **Usage:** Best for cross-project habits (like styling choices, favorite tools, or command execution permissions).

#### Option C: Local Editor Configuration (`.vscode/` or `.gemini/` inside workspace)
Keep configurations nested within your workspace's local configurations:
*   **Why it's safe:** Hidden from view but local to the project. Useful if you have environment-specific paths or local build scripts you want the AI to run.


### 3. Key Rules for the Agent in this Blog Project
If you create a project-specific instruction file, it should include:
- **Aesthetics & Styling:** Prefer UnoCSS and Tailwind-like utility classes inline. Do not use plain CSS placeholders.
- **Content Layer API:** Always use the new Astro 5 Content Layer API (`src/content.config.ts` and `astro:content`'s `render()` function) when query-handling.
- **i18n Mapping:** Maintain translation keys in `src/i18n` and follow localized routing.
