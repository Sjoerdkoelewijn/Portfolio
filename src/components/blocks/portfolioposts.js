import React from 'react';
import { graphql } from 'gatsby';
import styles from '../../styles/modules/blocks/portfolioposts.module.scss';
import PortfolioItems from '../portfolioItems';
import Menu from '../menu';
import { Location } from '@reach/router';

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

      <Location>

      {({ location }) =>

        <article className={styles.portfolio}>
          
          <div className={styles.intro_text}>

            {location.pathname === '/portfolio/' &&

              <div className={styles.menu_wrap}>

                <Menu />

              </div>
                           
            }  
                    
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
      
      }          

      </Location>      
                
)};

export default PortfolioPosts;