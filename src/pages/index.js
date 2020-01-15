import React from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby';
import WorkItem from "../components/workitem";
import ServiceItem from "../components/serviceitem";
import FooterCTA from "../components/footercta";
import SEO from "../components/seo";
import styles from "../styles/modules/index.module.scss";

const IndexPage = ({ data }) => {
  
  const mc = data.wordPress.microcopyOptionsSettings;

  return(
  
  <Layout>
    
    <SEO title="Home" />

    <section className={styles.intro}>
      <h1 className={styles.intro__title}
        dangerouslySetInnerHTML={{
          __html: mc.heroheader,
        }}
      ></h1>
    </section>

    <section className={styles.work}>

      <h1 className={styles.intro__title}
        dangerouslySetInnerHTML={{
          __html: mc.worktitle,
        }}
      ></h1>
      <h2 className={styles.intro__subtitle}>
        <div
          dangerouslySetInnerHTML={{
            __html: mc.worksubtitle,
          }}
        />
      </h2>
      <p className={styles.intro__text}>
        <div
          dangerouslySetInnerHTML={{
            __html: mc.worktext,
          }}
        />
      </p>

      <WorkItem />


    </section>

    <section className={styles.service}>

        <h1 className={styles.intro__title}
          dangerouslySetInnerHTML={{
            __html: mc.servicetitle,
          }}
        ></h1>
        <h2 className={styles.intro__subtitle}
          dangerouslySetInnerHTML={{
            __html: mc.worksubtitle,
          }}
        ></h2>        
        <p className={styles.intro__text}>
          <div
            dangerouslySetInnerHTML={{
              __html: mc.servicetext,
            }}
          />
        </p>

        <ServiceItem />

        <FooterCTA />

    </section>  
    
  </Layout>
  
)}

export const query = graphql`
query getIndexMicrocopy {
  wordPress {
    microcopyOptionsSettings {
      heroheader
      worksubtitle
      worktext
      worktitle
      servicesubtitle
      servicetext
      servicetitle
    }
  }
}


`

export default IndexPage;
