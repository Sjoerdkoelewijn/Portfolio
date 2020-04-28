import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import styles from "../styles/modules/portfolio.module.scss";

import ParagraphBlock from "../components/blocks/paragraph";
import HeadingBlock from "../components/blocks/heading";
import ImageBlock from "../components/blocks/image";
import QuoteBlock from "../components/blocks/quote";

import NoImageHero from "../components/blocks/noimagehero";
import PortfolioPosts from "../components/blocks/portfolioposts";
import ServicesPosts from "../components/blocks/servicesposts";
import Hero from "../components/blocks/hero";

import Menu from '../components/menu';
import ArrowDownIcon from '../components/icons/arrowDownIcon';
import LinkIcon from '../components/icons/linkIcon';
import Img from 'gatsby-image';

export const query = graphql`
  query getPortfolioItem($id: ID!) {
    wordPress {
      portfolio_itemBy(id: $id) {
        id
        title
        blocks {
          __typename
          ... on WPGraphQL_CustomBlocksPortfolioheroBlock {
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
          ...CustomHero
          ...CustomServicesPosts
          ...CustomPortfolioPosts
          ...CustomNoImageHero
          ...CoreHeadingBlock
          ...CoreParagraphBlock
          ...CoreImageBlock
          ...CoreQuoteBlock
        }
        relationship {
          typeOfWork {
            ... on WPGraphQL_Service {
              id
              slug
              title
            }
          }
        }
      }
    }
  }
`;

const PortfolioItem = ({ data }) => {
  const post = data.wordPress.portfolio_itemBy;
  const blocks = post.blocks;
  
  return (

    <Layout>

      <article className={styles.portfolio}>
             
        {blocks.map(block => {

          const typeName = block.__typename;

          switch (typeName) {
            case 'WPGraphQL_CustomBlocksPortfolioheroBlock' :
              return (
                <>

                  <article className={styles.hero}>

                    <Menu />

                    <div className={styles.content_wrap}>

                      <div className={styles.text_area}>

                        {block.attributes.website &&
                          <a className={styles.website} href={block.attributes.websiteURL}>
                            <LinkIcon /> {block.attributes.website}
                          </a>
                        }
                                  
                        <h1 className={styles.header}>
                          {block.attributes.title}
                        </h1>

                      </div>

                      <div className={styles.hero_image_area}>

                        <Img 
                          Tag="section"
                          className={styles.hero_image}
                          fluid={block.attributes.imageFile.childImageSharp.fluid}
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
                          __html: block.attributes.introduction,
                      }}
                    />

                    <ul className={styles.meta}>
                      
                      <li className={styles.service_links}>
                        
                        {post.relationship.typeOfWork.map(service => {

                          return(
                          <Link className={styles.service_link} to={`/services/${service.slug}`}>
                            {service.title}
                          </Link>

                        )

                        })}           
                      </li>
                      
                    </ul>

                  </div>

                </>

              );

            case 'WPGraphQL_CustomBlocksHeroBlock' :
              return <span className={styles.CustomHero}><Hero key={block.id} {...block} /></span>;

            case 'WPGraphQL_CustomBlocksServicesPostsBlock' :
              return <span className={styles.CustomServicesPosts}><ServicesPosts key={block.id} {...block} /></span>;

            case 'WPGraphQL_CustomBlocksPortfolioPostsBlock' :
              return <span className={styles.CustomPortfolioPosts}><PortfolioPosts key={block.id} {...block} /></span>;

            case 'WPGraphQL_CustomBlocksNoimageheroBlock' :
              return <span className={styles.CustomPortfolioPosts}><NoImageHero key={block.id} {...block} /></span>;

            case 'WPGraphQL_CoreHeadingBlock' :
              return <span className={styles.CoreHeadingBlock}><HeadingBlock key={block.id} {...block} /></span>;

            case 'WPGraphQL_CoreParagraphBlock':
              return <span className={styles.CoreParagraphBlock}><ParagraphBlock key={block.id} {...block} /></span>;

            case 'WPGraphQL_CoreImageBlock':
              return <span className={styles.CoreImageBlock}><ImageBlock key={block.id} {...block} /></span>;

            case 'WPGraphQL_CoreQuoteBlock':
              return <span className={styles.CoreQuoteBlock}><QuoteBlock key={block.id} {...block} /></span>;    
                
            default :
              return 'No content yet';  
          }     

        })}  
   
      </article>   

    </Layout>
  
  )
};

export default PortfolioItem;