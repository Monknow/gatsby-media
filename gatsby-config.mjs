import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
	flags: {
		DEV_SSR: true,
	},
	siteMetadata: {
		title: `gatsby-headaches-media`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		"gatsby-plugin-sass",
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					"@assets": path.resolve(__dirname, "src/assets"),
					"@components": path.resolve(__dirname, "src/components"),
					"@pages": path.resolve(__dirname, "src/pages"),
				},
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `videos`,
				path: `${__dirname}/src/assets/videos`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown`,
				// Path to the directory
				path: `${__dirname}/src/assets/markdown`,
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
		"gatsby-transformer-remark",
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};

export default config;
