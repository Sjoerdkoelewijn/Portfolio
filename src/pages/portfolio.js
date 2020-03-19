import React from "react";
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styles from "../styles/modules/portfolio.module.scss";
import BackgroundImage from 'gatsby-background-image';
import Menu from "../components/menu";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {

  const cat = data.prismic.allCategoriess.edges.slice(0,1).pop();
  if (!cat) return null;
  
  return (

    <Layout>
        
      <article className={styles.portfolio}>

        <div className={styles.hero}>  

          <div className={styles.intro_text}>

            <Menu /> 
  
            {RichText.render(cat.node.title)}
            {RichText.render(cat.node.subtitle)}
            {RichText.render(cat.node.excerpt)}
  
          </div>

        </div>

        <div className={[styles.portfolio_inner, styles.portfolio_category].join(' ')}>

          {data.prismic.allPortfolio_items.edges.map(portfolio => {

            let slug = `/portfolio/${portfolio.node._meta.uid}`;

            return (
              <article className={styles.portfolio_block}>
                
                <Link to={slug} className={styles.link}>

                  <BackgroundImage 
                    Tag="section"
                    className={styles.image}
                    fluid={portfolio.node.main_imageSharp.childImageSharp.fluid}
                    backgroundColor={`#f2f2f2`}
                    >
                  </BackgroundImage>
                
                </Link>  

                <Link to={slug} className={styles.link}>
                  {RichText.render(portfolio.node.title)}
                </Link>

                {RichText.render(portfolio.node.subtitle)}

              </article>
            );

          })}

        </div>

      </article>
  
    </Layout>

  );
};

export const query = graphql`
  query getPortfolio {
    prismic {
      allPortfolio_items {
        edges {
          node {
            title
            subtitle
            main_image
            main_imageSharp {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 960) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
            }
            _meta {
              uid
              type
            }
          }
        }
      }
      allCategoriess(uid: "portfolio") {
        edges {
          node {
            title
            subtitle
            excerpt
          }
        }
      }
    }
  }
`;

export default IndexPage;
