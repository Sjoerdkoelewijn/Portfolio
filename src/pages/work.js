import React from "react";
import Layout from "../components/layout";
import WorkItem from "../components/workitem";
import SEO from "../components/seo";
import Header from "../components/header";
import styles from "../styles/modules/work.module.scss";

const IndexPage = () => (
  <Layout>
    
    <SEO title="Design & Development Portfolio" description="Check out the casestudies my design and development portfolio." />

    <Header classProp="dark" />

     <section className={styles.work}>

      <h1 className={styles.work__title}>
        {`My work`}
      </h1>

      <h2 className={styles.work__subtitle}>
        {`Design & Development Portfolio.`}
      </h2>
      
      <p className={styles.work__text}>
     
      </p>

      <WorkItem />

    </section>
    
  </Layout>
  
)

export default IndexPage;