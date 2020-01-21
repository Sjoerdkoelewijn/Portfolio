import React from "react"
import { graphql } from "gatsby"
import FooterCTA from "../components/footercta";
import Layout from "../components/layout"
import Img from "gatsby-image";
import Header from "../components/header";
import styles from "../styles/modules/work.module.scss";

export default ({ data }) => {
  
  const post = data.wordPress.workBy;

  return(

  <Layout>

    <Header classProp="white" />

    <section className={styles.header}>
      
      <div className={styles.header__text}>
        
        {post.work_fields.name &&
          <a className={styles.header__text_link} href={post.work_fields.url}>
            {post.work_fields.name}
          </a>
        } 

        <h1 className={styles.header__text_title}>
          {post.title}
        </h1>

        {post.excerpt &&

        <p className={styles.header__text_excerpt}>
          <div
              dangerouslySetInnerHTML={{
                __html: post.excerpt,
            }}
          />
        </p>

        }
        
      </div>
      <div className={styles.header__image_wrap}>
        <div className={styles.header__image_border}>
          <Img className={styles.header__image} fluid={post.work_fields.phoneImage.imageFile.childImageSharp.fluid} alt={post.work_fields.phoneImage.altText} />
        </div>  
      </div>  
    </section>

    <div className={styles.bodytext}>

      {post.work_fields.name &&
        <section className={styles.bodytext__project}>
          <h2 className={styles.bodytext__title}>
            The Project
          </h2>
          <h3 className={styles.bodytext__subtitle}>
            These are the project goals.
          </h3>
          <p className={styles.bodytext__paragraph}>
            <div
                dangerouslySetInnerHTML={{
                  __html: post.work_fields.bodytext.project,
              }}
            />
          </p>
        </section>
      }

      {post.work_fields.desktopImage && 
        <Img className={styles.desktop__image} fluid={post.work_fields.desktopImage.imageFile.childImageSharp.fluid} alt={post.work_fields.desktopImage.altText} />

      }


      {post.work_fields.bodytext.process && 
        <section className={styles.bodytext__process}>
          <h2 className={styles.bodytext__title}>
          Process
          </h2>
          <h3 className={styles.bodytext__subtitle}>
            Process and scope
          </h3>
          <p className={styles.bodytext__paragraph}>

            <div
                dangerouslySetInnerHTML={{
                  __html: post.work_fields.bodytext.process,
              }}
            />
        
          </p>
        </section>
      }

      

      {post.work_fields.bodytext.design && 
        <section className={styles.bodytext__design}>
          <h1 className={styles.bodytext__title}>
            The Design
          </h1>
          <h2 className={styles.bodytext__subtitle}>
            Who was this website made for
          </h2>
          <p className={styles.bodytext__paragraph}>
            <div
                dangerouslySetInnerHTML={{
                  __html: post.work_fields.bodytext.design,
              }}
            />
          </p>
        </section>
      }

      

      {post.work_fields.bodytext.designImage && 
        <Img className={styles.desktop__image} fluid={post.work_fields.bodytext.designImage.imageFile.childImageSharp.fluid} alt={post.work_fields.bodytext.designImage.altText} />
      }
      
      {post.work_fields.bodytext.development && 
        <section className={styles.bodytext__development}>
          <h1 className={styles.bodytext__title}>
            Development
          </h1>
          <h2 className={styles.bodytext__subtitle}>
            What technique or stack was used
          </h2>
          <p className={styles.bodytext__paragraph}>
            <div
                dangerouslySetInnerHTML={{
                  __html: post.work_fields.bodytext.development,
              }}
            />
          </p>
        </section>
      }

      

      {post.work_fields.bodytext.learningsQuote && 
        <div className={styles.bodytext__learning_quote}>
        <div
            dangerouslySetInnerHTML={{
              __html: post.work_fields.bodytext.learningsQuote,
            }}
          />
        </div>
      }     

      {post.work_fields.bodytext.learnings && 
        <section className={styles.bodytext__learnings}>
          <h1 className={styles.bodytext__title}>
            Learnings
          </h1>
          <h2 className={styles.bodytext__subtitle}>
            What could have gone better
          </h2>
          <p className={styles.bodytext__paragraph}>
            <div
                dangerouslySetInnerHTML={{
                  __html: post.work_fields.bodytext.learnings,
              }}
            />
          </p>
        </section>
      }

      

    </div>

    <FooterCTA />

  </Layout>
)}


export const query = graphql`
query getPost($slug: String!) {
  wordPress {
    workBy(slug: $slug)  {
      title
      excerpt
      work_fields {
        name
        url
        phoneImage {
            altText
            sourceUrl 
            imageFile {
              childImageSharp {
                  fluid(maxWidth: 800, quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
            }
          }
        bodytext {
          design
          development
          fieldGroupName
          learnings
          learningsQuote
          process
          project
          designImage {
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
        }  

        desktopImage {
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
      }
    }
  }
}

`