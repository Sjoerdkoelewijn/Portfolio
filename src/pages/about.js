import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { RichText, Date} from "prismic-reactjs";
import styles from "../styles/modules/about.module.scss";
import Menu from "../components/menu";
import BackgroundImage from 'gatsby-background-image';

const AboutPage = ({ data }) => {

  const doc = data.prismic.about;
	if (!doc) return null;
  
  return (
    <Layout>

      <article className={styles.hero}>

        <div className={styles.text_area}>
          <Menu />
          {RichText.render(doc.title)}
          {RichText.render(doc.intro)}
        </div>

        <BackgroundImage 
          Tag="section"
          className={styles.hero_image}
          fluid={doc.imageSharp.childImageSharp.fluid}
          backgroundColor={`#9CDEF2`}
          >
        </BackgroundImage>

      </article>

      <article className={styles.jobs_skills_wrap}>

        <div className={styles.skills}>
        
          {doc.body.map(slice => {

            if (slice.type === 'skills')

            return slice.fields.map(skill => {

              return (
                <div className={styles.skill} >
                  {RichText.render(skill.skill_title)}
                  {RichText.render(skill.skill_text)}
                </div>
              )

            });
            
          })}

        </div>

        <div className={styles.jobs}>

          <h1 className={styles.mobileHeader}>Work Experience</h1>
          
          {doc.body.map(slice => {

            if (slice.type === 'job_timeline')

            return slice.fields.map(function (job, index) {

              const startDate = Date(job.start_date);
              const formattedStartDate = Intl.DateTimeFormat('en-US',{
                year: 'numeric',
                month: 'long'
              }).format(startDate);

              const endDate = Date(job.end_date);
              const formattedEndDate = Intl.DateTimeFormat('en-US',{
                year: 'numeric',
                month: 'long'
              }).format(endDate);

              let realDate = (index === 0) ? 'Present' : formattedEndDate; 

              return (
                <div className={styles.job}>

                  <h3 className={styles.title}>
                    {job.job_title}
                  </h3>
                  <div className={styles.date}>
                    {formattedStartDate} - {realDate}
                  </div>
                  <div className={styles.company_city}>
                    {job.company} | {job.city}
                  </div>

                </div>
              )

            });
            
          })}

        </div>        

      </article>  

    </Layout>
  );
};

export const query = graphql`
  query getAbout {
    prismic {
      about(uid: "about", lang: "en-us") {
        title
        intro
        image
          imageSharp {
              childImageSharp {
                fluid(quality: 100, maxWidth: 960) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
          }
        body {
          ... on PRISMIC_AboutBodySkills {
            type
            fields {
              skill_text
              skill_title
            }
          }
          ... on PRISMIC_AboutBodyJob_timeline {
            fields {
              city
              company
              end_date
              job_title
              start_date
            }
            type
          }
        }
      }
    }
  }
`;

export default AboutPage;
