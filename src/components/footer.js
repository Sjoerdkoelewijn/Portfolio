import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import styles from '../styles/modules/footer.module.scss';
import LogoIcon from '../images/logo-icon.svg';
import SocialMenu from './socialmenu';
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
          <h4>
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
          <h4>
            Services.
          </h4>
          <ServiceMenu />          
        </div>

        <div className={styles.footer__top_links}>
          <h4>
            Links.
          </h4>
          <LinkMenu />
        </div>

      </div>

      <div className={styles.footer__bottom}>
        <div className={styles.footer__logo}>
          <img className={styles.footer__logo_icon}
          src={LogoIcon} 
          alt="Logo" />
          <div className={styles.footer__logo_text}>
            <div className={styles.footer__logo_title}>
              Sjoerd Koelewijn
            </div>
            <div className={styles.footer__logo_subtitle}>
              Design & Development
            </div>
          </div>
        </div>
        <div className={`footer__social`}>

          <SocialMenu />

        </div>
        
      </div>      
        
    </footer>
  )
}

export default Footer