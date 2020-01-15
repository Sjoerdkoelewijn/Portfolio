import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "../styles/modules/footercta.module.scss";
import Img from "gatsby-image";

const FooterCTA = () => {
    const data = useStaticQuery(graphql`
    query getAboutImage{
        wordPress {
            pageBy(uri: "about")  {
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
            }   
            microcopyOptionsSettings {
                quoteone
                quotesubtitle
                ctagetintouch
                ctaletstalk
            }
        }

      }
    `)

    const mc = data.wordPress.microcopyOptionsSettings;

    return (
        <article className={styles.footer__cta}>
            
            {data.wordPress.pageBy.featuredImage &&
      
                <Img className={styles.featured__image} fluid={data.wordPress.pageBy.featuredImage.imageFile.childImageSharp.fluid} alt="alt text" />

            }

            <div className={styles.footer__cta_quote}>
                <div
                    dangerouslySetInnerHTML={{
                    __html: mc.quoteone,
                    }}
                />
            </div>

            <div className={styles.footer__cta_salesquestion}>
                <div
                    dangerouslySetInnerHTML={{
                    __html: mc.quotesubtitle,
                    }}
                />
            </div>

            <Link to="/contact/" className={styles.footer__cta_button} >
                <div
                    dangerouslySetInnerHTML={{
                    __html: mc.ctagetintouch,
                    }}
                />
            </Link>          
          
        </article>
    )
  }

export default FooterCTA