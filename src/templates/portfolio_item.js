import React from "react";
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import BackgroundImage from 'gatsby-background-image';
import htmlSerializer from "../utils/htmlSerializer";
import LinkResolver from "../utils/linkResolver";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Menu from "../components/menu";
import styles from "../styles/modules/portfolio.module.scss";


const PortfolioItem = ({ data }) => {

  const doc = data.prismic.portfolio_item;
	if (!doc) return null;

  return (

    <Layout>

      <article className={styles.hero}>

        <div className={styles.text_area}>
          
          <Menu />

          {doc.website &&
            <a className={styles.website} href={doc.url.url}>
              {doc.website}
            </a>
          }

          <h1 className={styles.header}>
            <RichText render={doc.subtitle} htmlSerializer={htmlSerializer} />
          </h1>

          {RichText.render(doc.excerpt)}

          <div className={styles.meta}>
            <ul>
              <li>
                <strong>Client.</strong>{doc.client}
              </li>
              <li>
                <strong>Role.</strong>{doc.role}
              </li>

                {doc.type &&

                  <li className={styles.service_links}>

                      <strong>Type.</strong>

                      {doc.type.map(doc => {

                        return (
                          <Link to={LinkResolver(doc.service._meta)} className={styles.service_link}>

                            <RichText render={doc.service.title} htmlSerializer={htmlSerializer} />

                          </Link>
                        );

                      })}
                    
                  </li>

                }

            </ul>
          </div>

        </div>

        <BackgroundImage 
          Tag="section"
          className={styles.hero_image}
          fluid={doc.main_imageSharp.childImageSharp.fluid}
          backgroundColor={`#9CDEF2`}
          >
        </BackgroundImage>

      </article>

      <article className={styles.main_content}>
        
        <div className={styles.text_area}>
          {RichText.render(doc.introduction_title)}
          {RichText.render(doc.introduction_subtitle)}
          {RichText.render(doc.introduction_text)}
        </div>

          {doc.introduction_images ? (

            <div className={styles.image_area}>
              {doc.introduction_images.map(img => {
                return (

                  <>

                  {img.introduction_imageSharp &&
                    
                    <Img
                    className={styles.introduction_image} 
                    fluid={img.introduction_imageSharp.childImageSharp.fluid} 
                  
                    />

                  }
                  
                  </>
                )
              })}
            </div>
            
          ) : (

            <p className={styles.text_area}>
              More information coming soon.
            </p>

          )}

          {doc.body && 
          
            <div className={styles.additional_info}>

              {doc.body.map(slice => {

                switch(slice.type) {
                  case 'text_section': return slice.fields.map(text => { 
                    return (
                    <div className={styles.text_area}>
                      {RichText.render(text.text_block_title)}
                      {RichText.render(text.text_block_subtitle)}
                      {RichText.render(text.text_block_text)}
                    </div>
                    )
                  })
                  case 'quote': return slice.fields.map(quote => {
                    return (
                      <div className={styles.quote_area}>
                        {quote.quote_text}
                      </div>
                    )
                  })  
                }
              })}
            
            </div>

          }

      </article>      

    </Layout>

  );
};

export const query = graphql`
  query getPortfolioItem($uid: String!) {
    prismic {
      portfolio_item(uid: $uid, lang: "en-us") {
        title
        excerpt
        subtitle
        website
        url {
          ... on PRISMIC__ExternalLink {
            _linkType
            url
          }
        }  
        client
        role
        type {
          service {
            ... on PRISMIC_Services_item {
              title
              _meta {
                uid
              }
            }
          }
        }
        introduction_subtitle
        introduction_text
        introduction_title
        introduction_images {
          introduction_image 
          introduction_imageSharp{
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }          
        }
        main_image
        main_imageSharp {
            childImageSharp {
              fluid(quality: 100, maxWidth: 960) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
        }
        body {
          ... on PRISMIC_Portfolio_itemBodyText_section {
            type
            label
            fields {
              text_block_subtitle
              text_block_text
              text_block_title
            }
          }
          ... on PRISMIC_Portfolio_itemBodyQuote {
            type
            label
            fields {
              quote_text
            }
          }
        }
      }
    }
  }
`;

export default PortfolioItem;