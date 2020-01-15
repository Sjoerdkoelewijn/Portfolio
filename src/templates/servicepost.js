import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../styles/modules/work.module.scss";


export default ({ data }) => {
  
  const service = data.wordPress.serviceBy;

  return(

  <Layout>
    <section className={styles.header}>
      <div className={styles.header__text}>
        
        <h1 className={styles.header__text_title}>
          {service.title}
        </h1>

        {service.excerpt &&

        <p className={styles.header__text_excerpt}>
          <div
              dangerouslySetInnerHTML={{
                __html: service.excerpt,
            }}
          />
        </p>

        }
        
      </div>

    </section>


  </Layout>
)}


export const query = graphql`
query getServicePost($slug: String!) {
  wordPress {
    serviceBy(slug: $slug)  {
      title
      excerpt      
    }
  }
}

`