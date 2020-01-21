import React from "react";
import Layout from "../components/layout";
import ServiceItem from "../components/serviceitem";
import SEO from "../components/seo";
import Header from "../components/header";
import styles from "../styles/modules/index.module.scss";

const IndexPage = () => (
  <Layout>
    
    <SEO title="Services" description="Find out what I can do for you." />

    <Header classProp="dark" />

     <section className={styles.work}>

      <h1 className={styles.work__title}>
        {`Services`}
      </h1>

      <h2 className={styles.work__subtitle}>
        {`This is what I can do for you.`}
      </h2>
      
      <p className={styles.work__text}>
     
      </p>

      <ServiceItem />


    </section>
    
  </Layout>
  
)

export default IndexPage;