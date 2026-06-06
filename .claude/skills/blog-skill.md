---
name: blog-skill
description: Takes a markdown file and converts it into a blog post HTML page matching the site's existing format, then registers it in blogs.js
---

# Blog Post Conversion Skill

When the user asks you to convert or add a blog post, follow these steps exactly.

## Step 1 — Read the markdown file

Read the markdown file the user provides (or ask them to specify the path if not given). Also read `blogs.js` to see existing posts for context on ordering, tags, and prev/next navigation.

## Step 2 — Extract metadata

From the markdown content determine:
- **title** — the first top-level heading (`# Title`) or the first line
- **date** — look for a date in the file, or ask the user
- **tags** — infer 2–4 tags from the content topic (look at existing posts in `blogs.js` for tag naming conventions)
- **excerpt** — write a 1–2 sentence excerpt summarizing the post (similar style to existing excerpts in `blogs.js`: punchy, explains why it matters)
- **slug** — a short kebab-case filename, e.g. `my-post-title.html`
- **read time** — estimate from word count (average 200 words/min, round to nearest minute)

## Step 3 — Convert markdown to HTML prose

Map markdown constructs to the site's HTML patterns:

- `# Heading` at the top → `<h1 class="post-title">` (already handled in the header block, do NOT repeat in prose)
- `## Section` → `<h2>`
- `### Subsection` → `<h3>`
- Paragraphs → `<p>`
- `**bold**` → `<strong>`
- `*italic*` → `<em>`
- `> blockquote` → `<blockquote>`
- Bulleted lists → `<ul><li>` items
- Numbered lists → `<ol><li>` items
- Inline `code` → `<code>`
- Code blocks → `<pre><code>`
- A standalone bolded line or key takeaway → wrap in `<div class="callout"><strong>…</strong></div>`

## Step 4 — Determine prev/next navigation

Look at the post order in `blogs.js`. The new post will be added at the TOP (newest first). The prev/next links in `<div class="post-nav">` follow this convention:
- `←` points to the chronologically older post (the one that was previously at the top)
- `→` points to the chronologically newer post (if one exists after this one)

If this is the newest post, there is no `→` link. Match the link text to the post title (short form is fine, matching how other posts do it).

## Step 5 — Write the HTML file

Create `<slug>.html` in the project root using this exact template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>[Post Title] · Vidhi Vazirani</title>
  <link rel="stylesheet" href="post.css"/>
</head>
<body>
<nav>
  <a class="nav-logo" href="index.html">vv_</a>
  <ul class="nav-links">
    <li><a href="index.html#about">About</a></li>
    <li><a href="index.html#experience">Work</a></li>
    <li><a href="index.html#publications">Papers</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="index.html#contact">Contact</a></li>
  </ul>
</nav>

<article>
  <a class="back-link" href="blog.html">← All posts</a>

  <p class="post-eyebrow">// Blog</p>
  <h1 class="post-title">[Post Title]</h1>
  <div class="post-meta">
    <span>[Month Year]</span>
    <span>[N] min read</span>
  </div>
  <div class="post-tags">
    <span class="post-tag">[Tag1]</span>
    <span class="post-tag">[Tag2]</span>
  </div>
  <div class="post-divider"></div>

  <div class="prose">

    [converted HTML prose here]

  </div>

  <div class="post-nav">
    <a href="[prev-post].html">← [Prev Post Title]</a>
    <a href="[next-post].html">[Next Post Title] →</a>
  </div>
</article>

<footer>
  <span class="footer-copy">© 2026 Vidhi Vazirani</span>
  <div class="footer-links">
    <a href="index.html">Home</a>
    <a href="blog.html">Blog</a>
    <a href="index.html#contact">Contact</a>
  </div>
</footer>
</body>
</html>
```

Omit a nav link in `<div class="post-nav">` if there is no previous or next post.

## Step 6 — Update blogs.js

Prepend a new entry to the top of the `BLOGS` array in `blogs.js`:

```js
{
  title: "[Post Title]",
  date: "[Month DD, YYYY]",
  excerpt: "[1–2 sentence excerpt]",
  url: "[slug].html",
  tags: ["Tag1", "Tag2", "Tag3"]
},
```

## Step 7 — Confirm

Tell the user:
- The HTML file created (filename)
- The entry added to `blogs.js`
- Ask if they want to adjust anything (date, tags, excerpt, read time)
