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
			name: 'Visual Studio - Milton Bolonha',
			minibio: `A Visual Studio é a melhor empresa do Brasil.`,
		},
		organization: {
			name: 'Diabetes Brasil',
			url: 'https://diabetes.org.br/',
			logo: `${__dirname}/static/assets/images/diabetes-brasil-logo.svg`,
		},
		social: {
			instagram: 'https://www.instagram.com/diabetessbd/',
			facebook: 'https://www.facebook.com/SBD.Diabetes',
			twitter: 'https://twitter.com/diabetes_sbd',
			youtube: 'https://www.youtube.com/user/socbrasdiabetes',
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
		// {
		// 	resolve: `gatsby-source-filesystem`,
		// 	options: {
		// 		name: `posts`,
		// 		path: `${__dirname}/posts`,
		// 	},
		// },
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
					include: /images/, // See below to configure properly
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
				icon: `${__dirname}/static/assets/images/diabetes-brasil-logo.svg`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Mulish`, `Alegreya Sans`],
				display: 'swap',
			},
		},
	],
}
