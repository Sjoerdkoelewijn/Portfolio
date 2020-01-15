const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const slash = require(`slash`)

exports.createResolvers = (
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
  createResolvers({
    WordPress_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}

exports.createPages = async ({ graphql, actions, page }) => {
    const { createPage } = actions
    
    // query content for WordPress posts
    const result = await graphql(`
      query workQuery {
        wordPress {
          pages {
            edges {
              node {
                uri
              }
            }
          }
          works {
            edges {
                node {
                  id
                  slug
                  title
                }
            }
          }
          services {
            edges {
                node {
                  id
                  slug
                  title
                }
            }
          }
        }
      }
    `)
    const pageTemplate = path.resolve(`./src/templates/pages.js`)

      result.data.wordPress.pages.edges.forEach(edge => {

        const nodeUri = `${edge.node.uri}`;

        switch (nodeUri) {
          case 'about':
            break;
          case 'contact':
            break;
          default:
            createPage({
              path: nodeUri,
              component: slash(pageTemplate),
              context: {
                  uri: nodeUri,
              },
            })
          }
      })
    
    const postTemplate = path.resolve(`./src/templates/workpost.js`)
    result.data.wordPress.works.edges.forEach(edge => {
      createPage({
        // will be the url for the page
        path: `work/${edge.node.slug}`,
        // specify the component template of your choice
        component: slash(postTemplate),
        // In the ^template's GraphQL query, 'id' will be available
        // as a GraphQL variable to query for this posts's data.
        context: {
            ID: edge.node.id,
            slug: edge.node.slug,
        },
      })
    })

    const serviceTemplate = path.resolve(`./src/templates/servicepost.js`)
    result.data.wordPress.services.edges.forEach(edge => {
      createPage({
        // will be the url for the page
        path: `services/${edge.node.slug}`,
        // specify the component template of your choice
        component: slash(serviceTemplate),
        // In the ^template's GraphQL query, 'id' will be available
        // as a GraphQL variable to query for this posts's data.
        context: {
            ID: edge.node.id,
            slug: edge.node.slug,
        },
      })
    })

  }