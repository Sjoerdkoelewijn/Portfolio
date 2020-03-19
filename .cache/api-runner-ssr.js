var plugins = [{
      plugin: require('D:/development/Portfolio/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('D:/development/Portfolio/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('D:/development/Portfolio/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[],"precachePages":["/about/","/contact/","/services/*","/work/*"]},
    },{
      plugin: require('D:/development/Portfolio/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"sjoerd-koelewijn-portfolio","short_name":"portfolio","start_url":"/","background_color":"#E9FBFF","theme_color":"#E9FBFF","display":"minimal-ui","icon":"src/images/logo-icon.png"},
    },{
      plugin: require('D:/development/Portfolio/node_modules/gatsby-plugin-prefetch-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":[{"family":"Heebo","variants":["300","400","500","800","900"]}]},
    },{
      plugin: require('D:/development/Portfolio/node_modules/gatsby-source-prismic-graphql/gatsby-ssr'),
      options: {"plugins":[],"repositoryName":"sjoerdkoelewijn","accessToken":"MC5Ya19NNGhBQUFDWUFtenM0.77-977-977-9dO-_vTnvv73vv73vv70vAG0McjMz77-9fO-_vWrvv73vv73vv73vv70qRx3vv71V77-9T--_vQ","path":"/preview","previews":true,"pages":[{"type":"Portfolio_item","match":"/portfolio/:uid","path":"/portfolio/item","component":"D:\\development\\Portfolio\\src\\templates\\portfolio_item.js"}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
