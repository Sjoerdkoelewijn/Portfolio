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
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        color: '#FFDB59',
        // Configure paths where the scroll indicator will appear
        paths: ['/', '/about/', '/work/**'],
        // Configure the z-index of the indicator element
        zIndex: 9999,
      },
    },
    
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'WordPress',
        fieldName: 'wordPress',
        url: 'https://api.sjoerdkoelewijn.com/graphql',
        //refetchInterval: 60,
      },
    },

    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/work/*`],
      },
    },   
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
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
  ],
};
