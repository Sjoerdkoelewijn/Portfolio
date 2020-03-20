const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("D:\\development\\Portfolio\\node_modules\\gatsby-plugin-offline\\app-shell.js"))),
  "component---node-modules-gatsby-source-prismic-graphql-components-preview-page-js": hot(preferDefault(require("D:\\development\\Portfolio\\node_modules\\gatsby-source-prismic-graphql\\components\\PreviewPage.js"))),
  "component---src-templates-portfolio-item-js": hot(preferDefault(require("D:\\development\\Portfolio\\src\\templates\\portfolio_item.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("D:\\development\\Portfolio\\src\\pages\\about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("D:\\development\\Portfolio\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\development\\Portfolio\\src\\pages\\index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("D:\\development\\Portfolio\\src\\pages\\portfolio.js")))
}

