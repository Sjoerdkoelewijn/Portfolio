import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import OpenGraphImage from '../images/og-image.jpg'

const Layout = ({ children }) => (
  <StaticQuery query={graphql`
      query SiteMeta {
        wordPress {
          allSettings {
            generalSettingsTitle
            generalSettingsDescription
            generalSettingsLanguage
          }
        }
        site {
          siteMetadata {
            author
            siteUrl            
            twitterUsername
          }
        }
      }
    `}
    render={data => {
      


      return (

      <>

          <Helmet>

              <html lang="en" />
              <title>{data.wordPress.allSettings.generalSettingsTitle}</title>
              <meta name="description" content={data.wordPress.allSettings.generalSettingsDescription} />
              <meta name="author" content={data.site.siteMetadata.author} /> 
              <meta property="og:title" content={data.wordPress.allSettings.generalSettingsTitle} />
              <meta property="og:type" content="website" />
              <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
              <meta property="og:image" content={OpenGraphImage} />
              <meta property="og:description" content={data.wordPress.allSettings.generalSettingsDescription} />             

          </Helmet>
    
          <main>
            {children}
          </main>
      
      </>

    )}}

  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout