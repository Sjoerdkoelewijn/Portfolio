module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-scroll-indicator/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-scroll-indicator/gatsby-browser.js'),
      options: {"plugins":[],"color":"#FE5862","paths":["/","/about/","/contact/","/services/**","/work/**"],"zIndex":9999},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"precachePages":["/about/","/contact/","/services/*","/work/*"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"sjoerd-koelewijn-portfolio","short_name":"portfolio","start_url":"/","background_color":"#E9FBFF","theme_color":"#E9FBFF","display":"minimal-ui","icon":"src/images/logo-icon.png"},
    },{
      plugin: require('../node_modules/gatsby-source-prismic-graphql/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"sjoerdkoelewijn","accessToken":"MC5Ya19NNGhBQUFDWUFtenM0.77-977-977-9dO-_vTnvv73vv73vv70vAG0McjMz77-9fO-_vWrvv73vv73vv73vv70qRx3vv71V77-9T--_vQ","path":"/preview","previews":true,"pages":[{"type":"Portfolio_item","match":"/portfolio/:uid","path":"/portfolio/item","component":"D:\\development\\Portfolio\\src\\templates\\portfolio_item.js"}]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
