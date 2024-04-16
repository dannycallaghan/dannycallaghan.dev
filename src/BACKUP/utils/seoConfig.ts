// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://dannycallaghan.dev", // Change this to your production URL.
	description:
		"Danny Callaghan - South East UK based developer with a passion for the web platform.", // Change this to be your website's description.
	type: "website",
	image: {
		url: "https://dannycallaghan.dev/images/site-thumbnail.jpg", // Change this to your website's thumbnail.
		alt: "Danny Callaghan - Web Developer", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	siteName: "Danny Callaghan", // Change this to your website's name,
	twitter: {
		card: "summary_large_image"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Danny Callaghan", // Change this to your website's name.
	short_name: "Danny Callaghan", // Change this to your website's short name.
	description:
		"Danny Callaghan - South East UK based developer with a passion for the web platform.", // Change this to your websites description.
	theme_color: "#EDFF86", // Change this to your primary color.
	background_color: "#112244", // Change this to your background color.
	display: "minimal-ui",
	icons: [
		{
			src: "/favicons/192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}
