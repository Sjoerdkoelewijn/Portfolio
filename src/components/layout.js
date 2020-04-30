import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

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
      }
    `}
    render={data => (

      <>

          <Helmet>

              <html lang="en" />
              <title>{data.wordPress.allSettings.generalSettingsTitle}</title>
              <meta name="description" content={data.wordPress.allSettings.generalSettingsDescription} />
              <meta name="author" content="Sjoerd Koelewijn" /> 
              <meta property="og:title" content={data.wordPress.allSettings.generalSettingsTitle} />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://sjoerdkoelewijn.com" />
              <meta property="og:image" content="https://sjoerdkoelewijn.com/images/og-image.jpg" />
              <meta property="og:description" content={data.wordPress.allSettings.generalSettingsDescription} />             

          </Helmet>
    
          <main>
            {children}
          </main>
      
      </>

    )}

  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout