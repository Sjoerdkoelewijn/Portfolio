import React from "react";
import Layout from "../components/layout";
import WorkItem from "../components/workitem";
import SEO from "../components/seo";
import styles from "../styles/modules/index.module.scss";

const IndexPage = () => (
  <Layout>
    
    <SEO title="Work Portfolio" />

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