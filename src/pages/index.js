import React from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby';
import WorkItem from "../components/workitem";
import Header from "../components/header";
import ServiceItem from "../components/serviceitem";
import FooterCTA from "../components/footercta";
import SEO from "../components/seo";
import styles from "../styles/modules/index.module.scss";
import Anime from 'react-anime';

const IndexPage = ({ data }) => {
  
  const mc = data.wordPress.microcopyOptionsSettings;

  let textAnimeProps = {
    opacity: [0,1],
    translateY: ['20vh', 0],
    easing: 'easeOutElastic(5, .9)',
    duration: 600,
  };

  return(
  
  <Layout>
    
    <SEO title="Home" />

    <Header classProp="white" />

    <section className={styles.intro}>
      <Anime {...textAnimeProps} >
        <h1 className={styles.intro__title}
          dangerouslySetInnerHTML={{
            __html: mc.heroheader,
          }}
        ></h1>
      </Anime>
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
      <p className={styles.intro__text}
          dangerouslySetInnerHTML={{
            __html: mc.worktext,
          }}
        >
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
