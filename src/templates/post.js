import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BackgroundImage from 'gatsby-background-image';
import styles from "../styles/modules/portfolio.module.scss";
import ParagraphBlock from "../components/blocks/paragraph";
import HeadingBlock from "../components/blocks/heading";
import ImageBlock from "../components/blocks/image";
import QuoteBlock from "../components/blocks/quote";
import ArrowDownIcon from "../components/icons/arrowDownIcon";
import Menu from "../components/menu";


export const query = graphql`
  query getPost($id: ID!) {
    wordPress {
      postBy(id: $id) {
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
                  fluid(quality: 90, maxWidth: 960) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          ...CoreHeadingBlock
          ...CoreParagraphBlock
          ...CoreImageBlock
          ...CoreQuoteBlock
        }
      }
    }
  }
`;

const Post = ({ data }) => {
  const post = data.wordPress.postBy;
  const blocks = post.blocks;
  
  return (

    <Layout>

        <article className={styles.portfolio}>
             
          {blocks.map(block => {

            const typeName = block.__typename;

            if (typeName === 'WPGraphQL_CustomBlocksPortfolioheroBlock')

              return (

                <article className={styles.hero}>

                  <div className={styles.text_area}>

                    <Menu />

                    {block.attributes.website &&
                      <a className={styles.website} href={block.attributes.websiteURL}>
                        {block.attributes.website}
                      </a>
                    }
                              
                    <h1 className={styles.header}>
                      {block.attributes.title}
                    </h1>
                    <p
                        dangerouslySetInnerHTML={{
                          __html: block.attributes.introduction,
                      }}
                    />

                  </div>  

                  <BackgroundImage 
                    Tag="section"
                    className={styles.hero_image}
                    fluid={block.attributes.imageFile.childImageSharp.fluid}
                    backgroundColor={`#CAEFFA`}
                    >
                  </BackgroundImage>

                  <ArrowDownIcon />

                </article>
                
              ) 

        else 
                 
            switch (typeName) {
              case 'WPGraphQL_CoreHeadingBlock' :
                return <span className={styles.CoreHeadingBlock}><HeadingBlock key={block.id} {...block} /></span>;

              case 'WPGraphQL_CoreParagraphBlock':
                return <span className={styles.CoreParagraphBlock}><ParagraphBlock key={block.id} {...block} /></span>;

              case 'WPGraphQL_CoreImageBlock':
                return <span className={styles.CoreImageBlock}><ImageBlock key={block.id} {...block} /></span>;

              case 'WPGraphQL_CoreQuoteBlock':
                return <span className={styles.CoreQuoteBlock}><QuoteBlock key={block.id} {...block} /></span>;    
                  
              default :
                return null;  
            }

          })}

        </article>  

    </Layout>
  
  )
};

export default Post;