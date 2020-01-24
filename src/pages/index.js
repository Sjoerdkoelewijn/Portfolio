import React, { useState } from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby';
import WorkItem from "../components/workitem";
import ServiceItem from "../components/serviceitem";
import FooterCTA from "../components/footercta";
import SEO from "../components/seo";
import styles from "../styles/modules/index.module.scss";
import Anime from 'react-anime';
import Burger from '../components/burger';
import Hire from '../components/hirebtn';
import BackgroundImage from 'gatsby-background-image';
import OverlayMenu from '../components/menu';

const IndexPage = ({ data }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const mc = data.wordPress.microcopyOptionsSettings;

    return(
  
  <Layout>
    
    <SEO title="Home" />

    <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />

    <div className={styles.hero}>

      <article className={styles.hero__intro}>

        <Anime 
          opacity={[0,1]} 
          translateX={['-20vw', 0]}
          easing='easeOutElastic(5, .9)'
          duration={600}
          delay={400} 
        >

          <Burger handleOverlayMenu={handleOverlayMenu} />

        </Anime>

        <Anime 
          opacity={[0,1]} 
          translateX={['20vw', 0]}
          easing='easeOutElastic(5, .9)'
          duration={600}
          delay={400} 
        > 

          <Hire />

        </Anime>

        

        <Anime 
          opacity={[0,1]} 
          translateY={['20vh', 0]}
          easing='easeOutElastic(5, .9)'
          duration={600} 
          >
          <h1 className={styles.intro__title}
            dangerouslySetInnerHTML={{
              __html: mc.herotitle,
            }}
          ></h1>
        </Anime>

        <Anime 
          opacity={[0,1]} 
          translateY={['20vh', 0]}
          easing='easeOutElastic(5, .9)'
          duration={600}
          delay={400} 
          >
          <p className={styles.intro__text}
            dangerouslySetInnerHTML={{
              __html: mc.heroheader,
            }}
          ></p>
        </Anime>

        <Anime 
          opacity={[0,1]} 
          translateY={['20vh', 0]}
          easing='easeOutElastic(5, .9)'
          duration={600}
          delay={800} 
          >
            
          <a href="#work" className={styles.intro__cta}>
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 8.74224e-08L5 14.17L1.41 10.59L0 12L6 18L12 12L10.59 10.59L7 14.17L7 0L5 8.74224e-08Z" fill="#FE5862"/>
            </svg>

            <div dangerouslySetInnerHTML={{
                __html: mc.herocta,
              }} 
            />          
          </a>

        </Anime>

      </article>

      {data.wordPress.pageBy.featuredImage &&
          
        <div className={styles.hero__image_wrap}>

          <BackgroundImage
            Tag="section"
            className={styles.hero__image} 
            fluid={data.wordPress.pageBy.featuredImage.imageFile.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          >
          </BackgroundImage>

        </div>

      }

    </div>

    <article name="work" className={styles.work}>

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


    </article>

    <article className={styles.service}>

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

    </article>  
    
  </Layout>
  
)}

export const query = graphql`
query getIndexMicrocopy {
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
      herotitle
      heroheader
      herocta
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
