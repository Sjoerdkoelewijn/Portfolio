import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styles from "../styles/modules/index.module.scss";

import ParagraphBlock from "../components/blocks/paragraph";
import HeadingBlock from "../components/blocks/heading";
import ImageBlock from "../components/blocks/image";
import QuoteBlock from "../components/blocks/quote";

import NoImageHero from "../components/blocks/noimagehero";
import PortfolioPosts from "../components/blocks/portfolioposts";
import ServicesPosts from "../components/blocks/servicesposts";
import Hero from "../components/blocks/hero";
import PortfolioHero from "../components/blocks/portfoliohero";

const IndexPage = ({ data }) => {
  
  return (

    <Layout>
          
          <article className={styles.page}>
             
            {data.wordPress.pageBy.blocks.map(block => {
   
              const typeName = block.__typename;
  
              switch (typeName) {
                case 'WPGraphQL_CustomBlocksPortfolioheroBlock' :
                  return <span className={styles.CustomPortfolioHero}><PortfolioHero key={block.id} {...block} /></span>;
  
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

export const query = graphql`
  query getIndex {
    wordPress {
      pageBy(uri: "home") {
        blocks {
          __typename
          ...CustomPortfolioHero
          ...CustomHero
          ...CustomServicesPosts
          ...CustomPortfolioPosts
          ...CustomNoImageHero
          ...CoreHeadingBlock
          ...CoreParagraphBlock
          ...CoreImageBlock
          ...CoreQuoteBlock
        }
      }
    }
   
  }
`;

export default IndexPage;
