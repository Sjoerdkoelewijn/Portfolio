module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Sjoerd Koelewijn Portfolio","short_name":"Portfolio","start_url":"/","background_color":"#E9FBFF","theme_color":"#E9FBFF","display":"minimal-ui","icon":"src/images/icon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-tagmanager/gatsby-browser.js'),
      options: {"plugins":[],"id":"GTM-5RWBB6W","includeInDevelopment":false,"defaultDataLayer":{"type":"object","value":{"platform":"gatsby"}}},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-4523109-3","head":true,"anonymize":true,"respectDNT":true,"exclude":["/preview/**"],"pageTransitionDelay":0,"optimizeId":"OPT-MG7R8L9","defer":false,"sampleRate":100,"siteSpeedSampleRate":100,"cookieDomain":"sjoerdkoelewijn.com"},
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
