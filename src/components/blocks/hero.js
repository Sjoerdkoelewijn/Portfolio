import React from 'react';
import { graphql } from 'gatsby';
import styles from '../../styles/modules/blocks/hero.module.scss';

import Menu from '../menu';
import ArrowDownIcon from '../icons/arrowDownIcon';
import BackgroundImage from 'gatsby-background-image';


export const fragment = graphql`
  fragment CustomHero on WPGraphQL_CustomBlocksHeroBlock {
    attributes {
      title
      introduction
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


const Hero = ({attributes}) => {

    return (

    <article className={styles.hero}>

      <div className={styles.text_area}>

        <Menu />
                  
        <h1>
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

export default Hero;