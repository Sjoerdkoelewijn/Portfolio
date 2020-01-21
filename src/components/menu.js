import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import CloseIcon from '../images/close-icon.svg';
import SocialMenu from './socialmenu'

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

        <div className={`menu__wrap`}>

            <div className={`menu__wrap_inner`}>

                <nav className={`menu__sitenav`}>
            
                    {data.wordPress.menuItems.nodes.map(node => {

                        const wpurl = `https://api.sjoerdkoelewijn.com`
                        const onlyPath = node.url.replace(wpurl, ``)

                        return (
                            <Link key={node.id} aria-label={node.label} to={`/${onlyPath}/`} className={`menu__sitenav_link`}>
                                {node.label}
                            </Link>
                        )
                    })}

                </nav>

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

            </div>

            <div className={`menu__closebtn`} role="button" aria-label="close" onClick={callback} tabIndex="0" onKeyDown={callback}>
                <span>Close</span>
                <img className={`menu__closebtn_icon`} src={CloseIcon} alt="Close menu" />
            </div>

        </div>

    </div>

    )
}


export default OverlayMenu 