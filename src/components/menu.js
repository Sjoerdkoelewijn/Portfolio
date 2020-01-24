import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import CloseIcon from '../images/close-icon.svg';
import SocialMenu from './socialmenu';
import Anime, {anime} from 'react-anime';

const OverlayMenu = ({ menuOpen, callback }) => {
    const data = useStaticQuery(graphql`
    query getMenu{
        wordPress {
            menuItems(where: {location: MAIN_NAVIGATION}) {
                nodes {
                    label
                    url
                }
            }
            microcopyOptionsSettings {
                menutext  
            }
        }
    }

    `)
    return(

    <div className={`menu__bg ${menuOpen}`}>

        <Anime 
        opacity={[0,1]}
        translateY={['-100vh', 0]}
        easing='linear'
        duration={200}
        >  
        
            <div className={`menu__wrap`}>

                <div className={`menu__wrap_inner`}>

                    <nav className={`menu__sitenav`}>

                        <Anime 
                        opacity={[0,1]}
                        translateX={['20vw', 0]}
                        easing='easeOutElastic(5, .5)'
                        duration={400}
                        delay= {anime.stagger(300)}                                
                        >  
                
                        {data.wordPress.menuItems.nodes.map(node => {

                            const wpurl = `https://api.sjoerdkoelewijn.com`
                            const onlyPath = node.url.replace(wpurl, ``)

                            return (
                                
                                    <Link key={node.id} aria-label={node.label} to={`/${onlyPath}/`} className={`menu__sitenav_link`}>
                                        {node.label}
                                    </Link>

                                
                            )
                        })}

                    </Anime>  

                    </nav>

                    <Anime 
                        opacity={[0,1]}
                        translateX={['100vw', 0]}
                        easing='easeOutElastic(5, 1.5)'
                        duration={400}
                        delay= {1200}
                        > 

                        <div className={`menu__right`}>
                            
                            <p className={`menu__right_text`}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data.wordPress.microcopyOptionsSettings.menutext,
                                    }}
                                />
                            </p>

                            <SocialMenu />
                        
                        </div>

                    </Anime>

                </div>

                
                <div className={`menu__closebtn`} role="button" aria-label="close" onClick={callback} tabIndex="0" onKeyDown={callback}>
                    <span>Close</span>
                    <img className={`menu__closebtn_icon`} src={CloseIcon} alt="Close menu" />
                </div>

               

            </div>

        </Anime>

    </div>

    

    )
}


export default OverlayMenu 