import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Case Studies — bilingual markdown files
 * Naming convention: {slug}.{lang}.md  (e.g. dear-li-hua.zh.md)
 */
const cases = defineCollection({
  loader: glob({ pattern: "**/*.{zh,en}.md", base: "./src/content/cases" }),
  schema: z.object({
    name: z.string(),
    nameEn: z.string(),
    tagline: z.string(),
    taglineEn: z.string(),
    tags: z.array(z.string()),
    lang: z.enum(["zh", "en"]),
    // Context
    summary: z.string(),
    problem: z.string(),
    users: z.string(),
    stage: z.string(),
    // Decisions (3 items)
    decisions: z.array(
      z.object({
        title: z.string(),
        titleEn: z.string(),
        content: z.string(),
        contentEn: z.string(),
      })
    ),
    // Artifacts
    artifacts: z.array(
      z.object({
        type: z.string(),
        label: z.string(),
        url: z.string(),
        note: z.string().optional(),
      })
    ),
  }),
});

/**
 * Thinking Vault — reserved for Obsidian vault Git Submodule
 * Point your submodule at src/content/vault/
 *
 * Expected frontmatter schema:
 *   id: string
 *   title / titleEn: string
 *   type: "flashcard" | "blog"
 *   tags: string[]
 *   domain: string (flashcards only)
 *   date: string (blogs only)
 *   relatedCase: string (blogs only, optional)
 *   summary / summaryEn: string (blogs only)
 *
 * Body content goes in the markdown body.
 */
const vault = defineCollection({
  loader: glob({ pattern: "**/*.{zh,en}.md", base: "./src/content/vault" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    titleEn: z.string(),
    type: z.enum(["flashcard", "blog"]),
    tags: z.array(z.string()),
    // Flashcard fields
    domain: z.string().optional(),
    // Blog fields
    date: z.string().optional(),
    relatedCase: z.string().optional(),
    summary: z.string().optional(),
    summaryEn: z.string().optional(),
    lang: z.enum(["zh", "en"]),
  }),
});

export const collections = { cases, vault };
