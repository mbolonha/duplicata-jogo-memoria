require('dotenv').config()
const { credits } = require('./files-credits')

module.exports = {
	siteMetadata: {
		title: 'Jogo da Memória',
		description: `O Jogo da Memória é um app desenvolvido pela ADJ Diabetes Brasil.`,
		author: `@VisualStudio`,
		siteUrl: `https://diadodiabetes.intest.com.br/`,
		image: `${__dirname}/static/images/diabetes-brasil-logo.png`,
		author: {
			name: 'Visual Studio',
			minibio: `Agência Especializada em WordPress. Especialista em WordPress, Projetos Digitais, Soluções Web, Marketing Digital e Consultoria Digital.`,
		},
		organization: {
			name: 'ADJ Diabetes Brasil',
			url: 'https://adj.org.br/',
			logo: `${__dirname}/static/images/diabetes-brasil-logo.png`,
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
		`gatsby-transformer-sharp`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/static/images/`,
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
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `ADJ Diabetes Brasil`,
				short_name: `ADJ Diabetes Brasil`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#eb412c`,
				display: `fullscreen`,
				icon: `${__dirname}/static/images/diabetes-brasil-favicon.svg`, // This path is relative to the root of the site.
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
