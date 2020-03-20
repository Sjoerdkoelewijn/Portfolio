import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { RichText } from "prismic-reactjs";
import BackgroundImage from 'gatsby-background-image';
import styles from "../styles/modules/index.module.scss";
import Menu from "../components/menu";
import Portfolio from "../components/portfolio";
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
          backgroundColor={`#CAEFFA`}
          >
        </BackgroundImage>

      </article>

      <Portfolio />

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
