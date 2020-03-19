import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { RichText, Date} from "prismic-reactjs";
import styles from "../styles/modules/contact.module.scss";
import Menu from "../components/menu";
import ServicesOverview from "../components/services";
import TextareaAutosize from "react-autosize-textarea";

const ContactPage = ({ data }) => {

  const doc = data.prismic.contact;
	if (!doc) return null;
  
  return (
    <Layout>

      <article className={styles.hero}>

      <Menu />

        <div className={styles.hero_inner}>
          
          
          
          <div className={styles.form}>

          {RichText.render(doc.title)}

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

          <div className={styles.text_area}>
                       
            {RichText.render(doc.subtitle)}
            {RichText.render(doc.intro)}

            <a className={styles.email_link} href="mailto:hello@sjoerdkoelewijn.com">
              hello@sjoerdkoelewijn.com
            </a>
            
          </div>         

        </div>

      </article>  

      <article className={styles.services}>

        <ServicesOverview />

      </article>   

    </Layout>
  );
};

export const query = graphql`
  query getContact {
    prismic {
      contact(uid: "contact", lang: "en-us") {
        button_text
        input_label_email
        input_label_message
        input_label_name
        input_placeholder_email
        input_placeholder_message
        input_placeholder_name
        intro
        quote
        subtitle
        title
      }
    }
  }
`;

export default ContactPage;
