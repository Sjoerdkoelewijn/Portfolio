import React from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby';
import SEO from "../components/seo";
import Header from "../components/header";
import ServiceItem from "../components/serviceitem";
import Tweets from "../components/tweets";
import FooterCTA from "../components/footercta";
import styles from "../styles/modules/about.module.scss";
import Img from "gatsby-image";
import Anime from 'react-anime';

export default ({ data }) => {
  
  const page = data.wordPress.pageBy;

  let textAnimeProps = {
    opacity: [0,1],
    translateY: ['20vh', 0],
    easing: 'easeOutElastic(5, .9)',
    duration: 600,
  };

  return(

  <Layout>

    {page.seo.title &&

      <SEO title={page.seo.title} description={page.seo.metaDesc} />

    }

    <Header classProp="dark" />

    <div class={styles.featured__image_wrap}>

      {page.featuredImage &&
      
        <Img className={styles.featured__image} fluid={page.featuredImage.imageFile.childImageSharp.fluid} alt="alt text" />

      }

    </div>
    
    <Anime {...textAnimeProps} >
      <section className={styles.content}>
          
          {page.title &&
            <h1 className={styles.title}
            dangerouslySetInnerHTML={{
              __html: page.title,
            }}
            ></h1>
          }

          {page.content &&
            <p className={styles.body}>
              <div
                  dangerouslySetInnerHTML={{
                    __html: page.content,
                }}
              />
            </p>
          }
          
      </section>
    </Anime>

    <section className={styles.service}>

        <h2 className={styles.intro__title}>
          {`What can I do for you?`}
        </h2>
        <p className={styles.intro__text}>
          {`
          I’m an all-round web professional with a lot of experience.
          I specialize in creating high-quality, bespoke websites. From first concept sketches to finished products.
          `}
        </p>

        <ServiceItem />

    </section>  

    <Tweets />

    <FooterCTA />

  </Layout>
)}


export const query = graphql`
query getAboutPage {
  wordPress {
    pageBy(uri: "about")  {
      title
      seo {
        metaDesc
        title
      }
      featuredImage {
        altText
        sourceUrl
        imageFile {
          childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
              }
          }
        }
      }
      content(format: RENDERED)
      }
  }
}

`