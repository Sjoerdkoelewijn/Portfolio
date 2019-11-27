require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Sjoerd Koelewijn Portfolio`,
    description: `I am Sjoerd Koelewijn. A freelance designer and developer based in Amsterdam. I design and build websites for people like you.`,
    author: `@sjoerdkoelewijn`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
       
      },
    },

  ],
}
