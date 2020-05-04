require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Sjoerd Koelewijn Portfolio`,
    description: `Sjoerd Koelewijn is freelance designer, webdeveloper and online marketer from Amsterdam. He specializes in designing and building fast websites.`,
    author: `Sjoerd Koelewijn`,
    siteUrl: `https://sjoerdkoelewijn.com`,
    twitterUsername: `@sjoerdkoelewijn`,
    OGimage: `/images/og-image.jpg`,
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wordPress`,
        url: `http://api.sjoerdkoelewijn.local/graphql`,
        refetchInterval: 60,
        batch: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sjoerd Koelewijn Portfolio`,
        short_name: `Portfolio`,
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
        paths: ['/', '/contact/', '/portfolio/**'],
        // Configure the z-index of the indicator element
        zIndex: 9999,
      },
    },    
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/contact/`, `/portfolio/*`],
      },
    },
  ],
};
