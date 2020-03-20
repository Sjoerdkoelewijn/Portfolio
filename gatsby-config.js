require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Sjoerd Koelewijn Portfolio`,
    description: `I am Sjoerd Koelewijn. A freelance designer and developer based in Amsterdam. I design and build websites for people like you.`,
    author: `@sjoerdkoelewijn`,
    siteUrl: `https://sjoerdkoelewijn.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sjoerd-koelewijn-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#E9FBFF`,
        theme_color: `#E9FBFF`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Heebo',
            variants: ['300', '400', '500', '800', '900'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: process.env.CONSUMER_KEY,
          consumer_secret: process.env.CONSUMER_SECRET,
          bearer_token: process.env.BEARER_TOKEN,
        },
        queries: {
          tweets: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "sjoerdkoelewijn",
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
        },
      },
    },
    `gatsby-plugin-scroll-indicator`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: '#FE5862',
        // Configure paths where the scroll indicator will appear
        paths: ['/', '/about/', '/contact/', '/services/**', '/work/**'],
        // Configure the z-index of the indicator element
        zIndex: 9999,
      },
    },
    {
	    resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: process.env.REPO_NAME, // (REQUIRED, replace with your own)
        accessToken: process.env.ACCESS_TOKEN, // (optional API access token)
        path: '/preview', // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        pages: [{ // (optional, builds pages dynamically)
        type: 'Portfolio_item',         // TypeName from prismic
        match: '/portfolio/:uid',  // Pages will be generated under this pattern
        path: '/portfolio/item',        // Placeholder page for unpublished documents
        component: require.resolve('./src/templates/portfolio_item.js'),
      }],    
      }    
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/contact/`, `/services/*`, `/work/*`],
      },
    },
  ],
};
