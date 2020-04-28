const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-portfolio-js": hot(preferDefault(require("D:\\development\\Portfolio\\Gatsby\\src\\templates\\portfolio.js"))),
  "component---src-templates-service-js": hot(preferDefault(require("D:\\development\\Portfolio\\Gatsby\\src\\templates\\service.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("D:\\development\\Portfolio\\Gatsby\\src\\templates\\post.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("D:\\development\\Portfolio\\Gatsby\\src\\templates\\page.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\development\\Portfolio\\Gatsby\\.cache\\dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\development\\Portfolio\\Gatsby\\src\\pages\\index.js")))
}

