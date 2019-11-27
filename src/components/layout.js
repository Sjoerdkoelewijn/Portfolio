import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import "../styles/layout.scss"

const TemplateWrapper = ({ children }) => (
  <StaticQuery query={graphql`
    query LayoutQuery
    {
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          twitterAccount

          fallbackSeo {
            title
            description
            image {
              url
            }
            twitterCard
          }
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }

    }
  `}
  render={data => (
    <div className="container">

      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
        title={data.datoCmsSite.globalSeo.siteName}
        description={data.datoCmsSite.globalSeo.fallbackSeo.description}
      />
   
      {children}

    </div>
    )}
  />
)

export default TemplateWrapper
