import React from 'react';
import { graphql } from 'gatsby';
import styles from '../../styles/modules/blocks/portfolioposts.module.scss';
import PortfolioItems from '../portfolioItems';

export const fragment = graphql`
  fragment CustomPortfolioPosts on WPGraphQL_CustomBlocksPortfolioPostsBlock {
    attributes {
      title
      subtitle
      introduction      
    }    
  }
`;


const PortfolioPosts = ({attributes}) => {

    return (

      <article className={styles.portfolio}>
        
        <div className={styles.intro_text}>
                  
          <h1>
            {attributes.title}
          </h1>
          
          <h2
              dangerouslySetInnerHTML={{
                __html: attributes.subtitle,
            }}
          />

          <p
              dangerouslySetInnerHTML={{
                __html: attributes.introduction,
            }}
          />

        </div>

        <PortfolioItems />   

      </article>
        
                
)};

export default PortfolioPosts;