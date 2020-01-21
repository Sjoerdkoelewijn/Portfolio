import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Header from "../components/header";
import styles from "../styles/modules/contact.module.scss";
import TextareaAutosize from "react-autosize-textarea";

export default ({ data }) => {
  
  const page = data.wordPress.pageBy;

  return(

  <Layout>

    {page.seo.title &&

        <SEO title={page.seo.title} description={page.seo.metaDesc} />

    }

    <Header classProp="dark" />

    
    <article className={styles.content}>


        
        {page.title &&
          <h1 className={styles.title}
          dangerouslySetInnerHTML={{
            __html: page.title,
          }}
          ></h1>
        }



        <div className={styles.content__inner}>

              <div className={styles.messageform}>
                  <h2 className={styles.subtitle}>
                  {`
                  Let's talk.
                  `} 
                  </h2>
     

                  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">  
                  
                      <input type="hidden" name="bot-field" />  <input type="hidden" name="form-name" value="contact" />  

                      <div className="field half first">
                          <label htmlFor="name">Your Name</label>
                          <input placeholder="Enter your name" type="text" name="name" id="name" />
                      </div>

                      <div className="field half">
                          <label htmlFor="email">your Email</label>
                          <input placeholder="Enter your email address" type="text" name="email" id="email" />
                      </div>

                      <div className="field">
                          <label htmlFor="message">Message</label>
                          <TextareaAutosize
                              placeholder="Enter your message here"
                              name="message" 
                              id="message"
                          />
                      </div>

                      <ul className="actions">
                          <li>
                          <button type="submit">Send Message</button>
                          </li>
                      </ul>

                  </form>
              </div>
          

            <div className={styles.info}>
                <h2 className={styles.subtitle}>
                {`
                Contact info.
                `} 
                </h2>

                {page.content &&
                <p className={styles.body}>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: page.content,
                    }}
                    />
                </p>
                }
            </div>  

        </div>

      
        
    </article>


  </Layout>
)}


export const query = graphql`
query getContactPage {
  wordPress {
    pageBy(uri: "contact")  {
      title
      seo {
        metaDesc
        title
      }
      content(format: RENDERED)
      }
  }
}

`