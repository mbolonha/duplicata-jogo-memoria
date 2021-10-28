require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

const path = require('path')
const { credits } = require('./files-credits')

module.exports = {
	siteMetadata: {
		title: 'Jogo da Memória',
		description: `O Jogo da Memória é um app desenvolvido para você SEO aqui.`,
		author: `@VisualStudio`,
		siteUrl: `https://seudominio.dev`,
		image: `https://seudominio.dev/theimage.jpg`,
		author: {
			name: 'Visual Studio',
			minibio: `A Visual Studio é a melhor empresa do Brasil.`,
		},
		organization: {
			name: 'ADJ - Diabetes Brasil',
			url: 'https://adj.org.br/',
			logo: `${__dirname}/static/assets/images/diabetes-brasil-logo.svg`,
		},
		social: {
			instagram: 'https://www.instagram.com/adjdiabetesbrasil/',
			facebook: 'https://www.facebook.com/ADJDiabetesBrasil/',
			twitter: 'https://twitter.com/ADJ_Diabetes_BR',
			youtube: 'https://www.youtube.com/channel/UCj5rxMlBYLDiRSVdy2FprMA',
		},
		attrCredits: { credits },
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `uploads`,
				path: `${__dirname}/static/assets/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /images/,
				},
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-relative-images`,
						options: {
							name: `uploads`,
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1380,
							linkImagesToOriginal: false,
						},
					},
					`gatsby-remark-lazy-load`,
				],
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@AtomicBlock': path.resolve(__dirname, 'src/modules/atomic-block'),
					'@BlockBuilder': path.resolve(__dirname, 'src/modules/block-builder'),
					'@CQM': path.resolve(__dirname, 'src/modules/cqm'),
					'@Null': path.resolve(__dirname, 'src/modules/null'),
					'@Layout': path.resolve(__dirname, 'src/modules/layout'),
					'@assets': path.resolve(__dirname, 'static/assets'),
					'@tools': path.resolve(__dirname, 'src/tools'),
					'@styles': path.resolve(__dirname, 'src/styles'),
				},
				extensions: ['js', 'scss'],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Diabetes Brasil`,
				short_name: `Diabetes Brasil`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#eb412c`,
				display: `fullscreen`,
				icon: `${__dirname}/static/assets/images/diabetes-brasil-favicon.svg`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Mulish`, `Alegreya Sans\:300,400,500,700,800,900`, `Roboto`],
				display: 'swap',
			},
		},
	],
}
