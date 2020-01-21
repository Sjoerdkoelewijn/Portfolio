import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo";
import Header from "../components/header";
import styles from "../styles/modules/page.module.scss";


export default ({ data }) => {
  
  const page = data.wordPress.pageBy;

  return(

  <Layout>

    <SEO title={page.title} />

    <Header classProp="dark" />

    <section className={styles.text}>
        
        <h1 className={styles.title}>
          {page.title}
        </h1>

        <p className={styles.content}>
          <div
              dangerouslySetInnerHTML={{
                __html: page.content,
            }}
          />
        </p>
        
      </section>


  </Layout>
)}


export const query = graphql`
query getPages($uri: String!) {
  wordPress {
    pageBy(uri: $uri)  {
      id
      title
      content(format: RENDERED)
      }
  }
}

`