import React from "react"
import PropTypes from "prop-types"
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
      />
   

      {children}

    </div>
    )}
  />
)

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
