import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import styles from "../styles/modules/footer.module.scss";
import SocialMenu from "./socialMenu";
import LinksMenu from "./linksMenu";
import { Location } from '@reach/router';

const Footer = () => {
    const data = useStaticQuery(graphql`
    query getFooter{
        wordPress {
            microcopySettings {
                mcCTATitle
                mcCTASubtitle
                mcCTABtn
                mcContact
                mcServices
            }
            menuItems(where: {location: SERVICE_NAVIGATION}) {
                nodes {
                    url
                    label
                }
            }  
        }
    }

    `)

    const mc = data.wordPress.microcopySettings

    return (
    
        <Location>

        {({ location }) =>

            <>

                {location.pathname !== '/contact' &&

                    <article class={styles.cta}>

                        <h2>
                            {mc.mcCTATitle}
                        </h2>
                        
                        <p>
                            {mc.mcCTASubtitle}
                        </p>

                        <Link aria-label="Contact me" className={styles.cta_btn} to="/contact">
                            {mc.mcCTABtn}
                        </Link>

                    </article>
                
                }

            <article class={styles.footer}>

                <div className={styles.contact}>

                    <h2>
                        {mc.mcContact}
                    </h2>

                    <p>
                        Sjoerd Koelewijn
                        <br />
                        Design & Development
                        <br />
                        George Gershwinlaan 458
                        <br />
                        1082MT Amsterdam
                    </p>
                    <p>
                        +31 (0)641 53 72 44
                        <br /> 
                        hello@sjoerdkoelewijn.com
                    </p>
                    <p>
                        KvK: 76343529
                        <br />
                        VAT: NL003077108B86
                    </p>

                </div>

                <div className={styles.services_wrap}>

                    <div className={styles.services}>

                        <h2>
                            {mc.mcServices}
                        </h2>

                        {data.wordPress.menuItems.nodes.map(node => {

                        const wpurl = `https://api.sjoerdkoelewijn.com`
                        const onlyPath = node.url.replace(wpurl, ``)

                            return (
                                
                                <Link key={node.id} aria-label={node.label} to={`/${onlyPath}/`} className={styles.service_link}>
                                    {node.label}
                                </Link>

                                
                            )
                        })}

                        

                    </div>

                    <div className={styles.soco_wrap}>

                        <div className={styles.social}>
                            
                            <SocialMenu />

                        </div>

                        <div className={styles.copyright}>
                            <p>
                                
                                © 2019 - {new Date().getFullYear()} Sjoerd Koelewijn Design & Development.                            
                                
                            </p>    
                        </div>

                        <LinksMenu />
                    
                    </div>

                    

                </div>

            </article>

            </>

        }

    </Location>    

    )
}


export default Footer 