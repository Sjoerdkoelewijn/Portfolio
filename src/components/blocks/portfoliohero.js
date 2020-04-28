import React from 'react';
import { graphql, Link } from 'gatsby';
import styles from '../../styles/modules/blocks/portfoliohero.module.scss';

import Menu from '../menu';
import ArrowDownIcon from '../icons/arrowDownIcon';
import Img from 'gatsby-image';

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
          fluid(maxWidth:960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }       
  }
`;


const PortfolioHero = ({attributes}) => {

    return (

      <>

      <article className={styles.hero}>

        <Menu />

        <div className={styles.content_wrap}>

          <div className={styles.text_area}>

            {attributes.website &&
              <a className={styles.website} href={attributes.websiteURL}>
                {attributes.website}
              </a>
            }
                      
            <h1 className={styles.header}>
              {attributes.title}
            </h1>

          </div>

          <div className={styles.image_area}>

            <Img 
              Tag="section"
              className={styles.hero_image}
              fluid={attributes.imageFile.childImageSharp.fluid}
              backgroundColor={`#CAEFFA`}
              >
            </Img>

          </div>   

        </div>               

      </article>

      <ArrowDownIcon />

      <div className={styles.introduction}>
      
        <p className={styles.text_area}
            dangerouslySetInnerHTML={{
              __html: attributes.introduction,
          }}
        />

        <ul className={styles.meta}>
          <li>
            <p>
              <strong>
                Client.
              </strong>
              The city of Elburg
            </p>  
          </li>
          <li>
            <p>
              <strong>
                Role.
              </strong>
              Designer & developer
            </p> 
          </li>
          
          <li className={styles.service_links}>
            {post.relationship.typeOfWork.map(service => {

              return(
              <Link className={styles.service_link} to={service.slug}>
                {service.title}
              </Link>

            )

            })}           
          </li>
          
        </ul>

      </div>

         

      </>        
                
)};

export default PortfolioHero;