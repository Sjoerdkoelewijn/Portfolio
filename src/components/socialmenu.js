import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"

const SocialMenu = () => {
    const data = useStaticQuery(graphql`
    query getSocialMenu{
        wordPress {
            menuItems(where: {location: SOCIAL_MENU}) {
                nodes {
                    label
                    url
                }
            }
        }
    }

    `)
    return(

    <div className={`menu__socialnav`}>
                        
        <nav>        
    
            {data.wordPress.menuItems.nodes.map(node => {

                return (
                    <Link key={node.id} aria-label={node.label} to={node.url} className={`menu__sitenav_link ${node.label}`}>
                    </Link>
                )
            })}

        </nav>

    </div>
    )
}


export default SocialMenu 