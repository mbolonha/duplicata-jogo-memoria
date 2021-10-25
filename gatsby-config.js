require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const path = require("path");
const { credits } = require("./files-credits");

module.exports = {
  siteMetadata: {
    title: "Edu4Dev",
    description: `A Edu4Dev é a Escola de Programação, Desenvolvimento Web
		e de Aplicativos com o método imersivo e disruptivo.`,
    author: `@MiltonBolonha`,
    siteUrl: `https://edu4.dev`,
    image: `https://edu4.dev/theimage.jpg`,
    author: {
      name: "Instituto Organizacionista",
      minibio: `O Instituto Organizacionista é um grupo formalmente constituído,
			com o intuito de produzir o saber e difundi-lo junto à sociedade,
			seguindo os preceitos da Filosofia Organizacionista.`,
    },
    organization: {
      name: "Edu4dev - Escola de Programação",
      url: "https://edu4.dev",
      logo: "https://edu4.dev/theimage.jpg",
    },
    social: {
      twitter: "@NUktpls",
      // fbAppID: '',
    },
    attrCredits: { credits },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    // `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/static/assets/videos`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
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
          "@AtomicBlock": path.resolve(__dirname, "src/modules/atomic-block"),
          "@BlockBuilder": path.resolve(__dirname, "src/modules/block-builder"),
          "@CQM": path.resolve(__dirname, "src/modules/cqm"),
          "@Null": path.resolve(__dirname, "src/modules/null"),
          "@Layout": path.resolve(__dirname, "src/modules/layout"),
          "@assets": path.resolve(__dirname, "static/assets"),
          "@tools": path.resolve(__dirname, "src/tools"),
          "@styles": path.resolve(__dirname, "src/styles"),
        },
        extensions: ["js", "scss"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BolonhaDev`,
        short_name: `BolonhaDev`,
        start_url: `/`,
        background_color: `#040508`,
        theme_color: `#282a36`,
        display: `fullscreen`,
        icon: `${__dirname}/static/assets/images/ico-edu4dev-logo.png`, // This path is relative to the root of the site.
      },
    },

    // {
    // 	resolve: '@ccalamos/gatsby-source-googlemaps-static',
    // 	options: {
    // 		key: process.env.NODE_ENV,
    // 		center: 'Rua Campos Salles, 601, Vila Assis, Sorocaba - SP',
    // 		size: `200x500`,
    // 		format: `jpg`,
    // 	},
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Comfortaa:300,400,500,600,700`,
          `Ubuntu Mono`,
          `Bowlby One SC`,
          `Josefin Sans`,
          `Coda`,
        ],
        display: "swap",
      },
    },
    // {
    // 	resolve: 'gatsby-plugin-mailchimp',
    // 	options: {
    // 		endpoint: process.env.MAILCHIMP_ENDPOINT, // string; add your MC list endpoint here; see instructions below
    // 		timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
    // 	},
    // },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
};

// {
//   resolve: 'gatsby-source-filesystem',
//   options: {
//     name: 'images',
//     path: './src/images/',
//   },
//   __key: 'images',
// },
// {
// 	resolve: `gatsby-source-filesystem`,
// 	options: {
// 		name: `images`,
// 		path: `${__dirname}/static/assets`,
// 	},
// },
// {
// 	resolve: `gatsby-source-filesystem`,
// 	options: {
// 		name: `uploads`,
// 		path: `${__dirname}/static/assets/images`,
// 	},
// },
// {
// 	resolve: `gatsby-source-filesystem`,
// 	options: {
// 		name: `posts`,
// 		path: `${__dirname}/posts`,
// 	},
// },
// {
// 	resolve: 'gatsby-plugin-mailchimp',
// 	options: {
// 		endpoint:
// 			'', // string; add your MC list endpoint here; see instructions below
// 		timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
// 	},
// },
