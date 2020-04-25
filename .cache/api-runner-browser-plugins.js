module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Sjoerd Koelewijn Portfolio","short_name":"Portfolio","start_url":"/","background_color":"#E9FBFF","theme_color":"#E9FBFF","display":"minimal-ui","icon":"src/images/icon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-scroll-indicator/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-scroll-indicator/gatsby-browser.js'),
      options: {"plugins":[],"color":"#FE5862","paths":["/","/contact/","/portfolio/**"],"zIndex":9999},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"precachePages":["/","/contact/","/portfolio/*"]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
