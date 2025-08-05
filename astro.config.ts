import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import starlight from "@astrojs/starlight"
import { defineConfig } from "astro/config"

/**
 * @see {@link https://astro.build/config}
 */
export default defineConfig({
	integrations: [
		react(),
		starlight({
			title: "Colorado Tech Community",
			favicon: "/favicon.png",
			head: [
				// Add ICO favicon fallback
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/favicon.ico',
						sizes: '256x245',
					},
				},
			],
			logo: {
				src: "src/assets/ctc-logo.webp",
				alt: "Colorado Tech Community logo",
			},
			social: [
				{
					icon: "discord",
					label: "Discord",
					href: "https://discord.gg/KTKQAvK3rR",
				},
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/ColoradoTechCommunity/ctc-website",
				},
			],
			sidebar: [
				{
					label: "Code of Conduct",
					slug: "code-of-conduct",
				},
				{
					label: "The CTC Way",
					slug: "the-ctc-way",
				},
				{
					label: "Jobs Forum Rules",
					slug: "jobs-forum-rules",
				},
				{
					label: "How to Help",
					slug: "how-to-help",
				}
				// {
				// 	label: "Pages",
				// 	autogenerate: { directory: "pages" },
				// },
			],
		}),
		mdx(),
	],
	site: "https://coloradotech.community",
	trailingSlash: "never",
})
