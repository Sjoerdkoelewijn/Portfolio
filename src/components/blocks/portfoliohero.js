import React from 'react';
import { graphql } from 'gatsby';
import styles from '../../styles/modules/blocks/portfoliohero.module.scss';

import Menu from '../menu';
import ArrowDownIcon from '../icons/arrowDownIcon';
import BackgroundImage from 'gatsby-background-image';

export const fragment = graphql`
  fragment CustomPortfolioHero on WPGraphQL_CustomBlocksPortfolioheroBlock {
    attributes {
      title
      introduction
      website
      websiteURL
      mediaURL
      imageFile {
        childImageSharp {
          fluid(quality: 90, maxWidth: 960) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }   
  }
`;


const PortfolioHero = ({attributes}) => {

    return (

      <article className={styles.hero}>

        <div className={styles.text_area}>

          <Menu />

          {attributes.website &&
            <a className={styles.website} href={attributes.websiteURL}>
              {attributes.website}
            </a>
          }
                    
          <h1 className={styles.header}>
            {attributes.title}
          </h1>
          <p
              dangerouslySetInnerHTML={{
                __html: attributes.introduction,
            }}
          />

        </div>  

        <BackgroundImage 
          Tag="section"
          className={styles.hero_image}
          fluid={attributes.imageFile.childImageSharp.fluid}
          backgroundColor={`#CAEFFA`}
          >
        </BackgroundImage>

        <ArrowDownIcon />

      </article>        
                
)};

export default PortfolioHero;