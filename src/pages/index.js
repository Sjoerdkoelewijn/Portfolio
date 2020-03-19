import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { RichText } from "prismic-reactjs";
import BackgroundImage from 'gatsby-background-image';
import styles from "../styles/modules/index.module.scss";
import portfolioStyles from "../styles/modules/portfolio.module.scss";
import Menu from "../components/menu";
import ServicesOverview from "../components/services";

const IndexPage = ({ data }) => {

  const hero = data.prismic.allHomes.edges.slice(0,1).pop();
  if (!hero) return null;
  
  const cat = data.prismic.allCategoriess.edges.slice(0,1).pop();
  if (!cat) return null;

  return (
    <Layout>
      <article className={styles.hero}>

        <div className={styles.text_area}>
          <Menu />
          {RichText.render(hero.node.intro_title)}
          {RichText.render(hero.node.intro_excerpt)}
        </div>

        <BackgroundImage 
          Tag="section"
          className={styles.hero_image}
          fluid={hero.node.intro_imageSharp.childImageSharp.fluid}
          backgroundColor={`#9CDEF2`}
          >
        </BackgroundImage>

      </article>

      <article className={portfolioStyles.portfolio}>

        <div className={portfolioStyles.intro_text}>  

          {RichText.render(cat.node.title)}
          {RichText.render(cat.node.subtitle)}
          {RichText.render(cat.node.excerpt)}

        </div>

        <div className={portfolioStyles.portfolio_inner}>

          {data.prismic.allPortfolio_items.edges.map(portfolio => {

            let slug = `/portfolio/${portfolio.node._meta.uid}`;

            return (
              <article className={portfolioStyles.portfolio_block}>
                
                <Link to={slug} className={portfolioStyles.link}>

                  <BackgroundImage 
                    Tag="section"
                    className={portfolioStyles.image}
                    fluid={portfolio.node.main_imageSharp.childImageSharp.fluid}
                    backgroundColor={`#f2f2f2`}
                    >
                  </BackgroundImage>
                
                </Link>  

                <Link to={slug} className={portfolioStyles.link}>
                  {RichText.render(portfolio.node.title)}
                </Link>

                {RichText.render(portfolio.node.subtitle)}

              </article>
            );

          })}

        </div>

      </article>


      <article className={styles.services}>

        <ServicesOverview />

      </article>

    </Layout>
  );
};

export const query = graphql`
  query getIndex {
    prismic {
      allHomes {
        edges {
          node {
            intro_excerpt
            intro_title
            intro_image
            intro_imageSharp {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 960) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
            }
          }
        }
      }
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
