---
title: "Automating My Blog Workflow with a Custom GPT + GitHub Integration"
description: "A behind-the-scenes look at how I automated my Astro blog workflow using a custom GPT connected directly to GitHub."
published: 2025-09-17
updated: ""
draft: true
author: "Sven Wasmer"
slug: "automating-my-blog-workflow-with-a-custom-gpt-plus-github-integration"
tags: ["astro", "automation", "ai", "github", "workflow"]
pin: 0
toc: true
lang: "en"
abbrlink: ""
image: ""
canonicalUrl: ""
---

Sometimes the best developer tools are the ones you build for yourself.  
This post is a little different—a is a devlog-style summary of how I created a **custom GPT** that drafts blog posts and commits them straight into my Astro project on GitHub.

## Why automate blogging?

It wanted to remove as much friction as possible from my blogging flow.  
Instead of juggling Markdown templates, metadata, and git commands, I wanted to just... write.  
The solution? Automating all of it with a GPT that knows my repo rules.

## How it works

The workflow looks like this:

1. I write a draft idea directly in chat.  
2. The GPT generates a Markdown file with the correct **frontmatter** (title, description, tags, dates, etc.).  
3. The entire file is Base64-encoded.  
4. A GitHub commit is created automatically into `master` under `src/content/posts/`.  
5. The draft appears in my repo, ready for editing or publishing.

## Guardrails and consistency

To keep things consistent, I defined strict rules for the GPT:

- `draft: true` for new posts.  
- ISO date format for `published`.   - `pin` is always a number (no booleans).  
- Commit messages follow a clear convention:  
  ``
chore(content): add draft post <slug>`
 ``

This makes sure every post enters the repo in a predictable way.

## Benefits

- **Zero setup overhead** → I can focus on writing ideas, not boilerplate.  
- **Consistency** — tontmatter never goes missing or malformed.  
- **Speed** — from idea to repo in seconds.  

## What’s next?

This is just the first step. Possible improvements I ’m exploring:  

- Auto-publishing when `draft: false`.`  
- Scheduling posts with a future `published` date.  
- Editing existing posts from chat.  

---

At the end of the day, this isn’t about AI replacing writing—it’s about removing the *busywork* around writing.  
And honestly, it’s been fun building a tool that feels like a personal editor + deployment bot rolled into one.