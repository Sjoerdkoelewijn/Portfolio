const path = require(`path`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const portfolioItem = path.resolve(`./src/templates/portfolio.js`)
  const serviceItem = path.resolve(`./src/templates/service.js`)
  const pageItem = path.resolve(`./src/templates/page.js`)
  const postItem = path.resolve(`./src/templates/post.js`)

  const result = await graphql(
    `
    {
      wordPress {
        portfolio_items {
          edges {
            node {
              id
              slug              
            }
          }
        }
        services {
          edges {
            node {
              id
              slug              
            }
          }
        }
        pages {
          edges {
            node {
              id
              slug              
            }
          }
        }
        posts {
          edges {
            node {
              id
              slug              
            }
          }
        }
      }
    }
    `
  )
 
  if (result.errors) {
    throw result.errors
  }

  
  


  result.data.wordPress.portfolio_items.edges.map((portfolio) => {    
    createPage({
      path: `/portfolio/${portfolio.node.slug}`,
      component: portfolioItem,
      context: {
        id: portfolio.node.id,
      },
    })
  })

  result.data.wordPress.services.edges.map((service) => {
    createPage({
      path: `/services/${service.node.slug}`,
      component: serviceItem,
      context: {
        id: service.node.id,
      },
    })
  })

  result.data.wordPress.posts.edges.map((post) => {
    createPage({
      path: post.node.slug,
      component: postItem,
      context: {
        id: post.node.id,
      },
    })
  })

  result.data.wordPress.pages.edges.map((page) => {
    createPage({
      path: page.node.slug,
      component: pageItem,
      context: {
        id: page.node.id,
      },
    })
  })  

},


exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: `File`,
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
    WPGraphQL_CustomBlocksHeroBlockAttributes: {
        imageFile: {
            type: `File`,
            async resolve(source) {
            let sourceUrl = source.mediaURL

            return await createRemoteFileNode({
                url: encodeURI(sourceUrl),
                store,
                cache,
                createNode,
                createNodeId,
                reporter,
            })
            },
        },
    },
    WPGraphQL_CustomBlocksPortfolioheroBlockAttributes: {
      imageFile: {
          type: `File`,
          async resolve(source) {
          let sourceUrl = source.mediaURL

          return await createRemoteFileNode({
              url: encodeURI(sourceUrl),
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
          })
          },
      },
    },
    WPGraphQL_CoreImageBlockAttributes: {
        imageFile: {
            type: `File`,
            async resolve(source) {
                let sourceUrl = source.url
    
                return await createRemoteFileNode({
                url: encodeURI(sourceUrl),
                store,
                cache,
                createNode,
                createNodeId,
                reporter,
                })
            },
        },
    }
  })
}