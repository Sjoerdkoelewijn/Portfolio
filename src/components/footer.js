import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import styles from '../styles/modules/footer.module.scss';
import ServiceMenu from './servicemenu';
import LinkMenu from './linkmenu';

const Footer = () => {

  const data = useStaticQuery(graphql`
    query getFooterCTAContent{
        wordPress {
            microcopyOptionsSettings {
              footertext
            }
        }

      }
    `)
 
  return(

    <footer className={styles.footer}>

      <div className={styles.footer__top}>

        <div className={styles.footer__top_contact}>
          <h4 className={styles.footer__top_title}>
            Contact.
          </h4>
          <div className={styles.footer__top_contact_info}>
            <div
                dangerouslySetInnerHTML={{
                __html: data.wordPress.microcopyOptionsSettings.footertext,
                }}
            />
          </div>
        </div>

        <div className={styles.footer__top_services}>
          <h4 className={styles.footer__top_title}>
            Services.
          </h4>
          <ServiceMenu />          
        </div>

        <div className={styles.footer__top_links}>
          <h4 className={styles.footer__top_title}>
            Links.
          </h4>
          <LinkMenu />
        </div>

      </div>

            
        
    </footer>
  )
}

export default Footer