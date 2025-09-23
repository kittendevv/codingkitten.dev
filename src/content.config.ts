import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const projects = defineCollection({
	// Load YAML files in the `src/content/projects/` directory only.
	// This keeps the projects collection limited to structured YAML content files.
	loader: glob({ base: './src/content/projects', pattern: '**/*.{yml,yaml}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			href: z.string().optional(),
			tags: z.array(z.string()).optional(),
			// Allow marking featured projects and an optional order for highlights
			featured: z.boolean().optional(),
			highlightOrder: z.number().int().optional(),
			// optional image
			image: image().optional(),
		}),
});

export const collections = { blog, projects };
