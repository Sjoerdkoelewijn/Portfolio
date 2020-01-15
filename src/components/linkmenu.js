import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"

const LinkMenu = () => {
    const data = useStaticQuery(graphql`
    query getlinklMenu{
        wordPress {
            menuItems(where: {location: LINKS_MENU}) {
                nodes {
                    label
                    url
                }
            }
        }
    }

    `)
    return(

    <div className={`menu__linksnav`}>
                        
        <nav>        
    
            {data.wordPress.menuItems.nodes.map(node => {

                const wpurl = `https://api.sjoerdkoelewijn.com`
                const onlyPath = node.url.replace(wpurl, ``)

                return (
                    <Link key={node.id} aria-label={node.label} to={`/${onlyPath}/`} className={`menu__sitenav_link ${node.label}`}>
                        <div dangerouslySetInnerHTML={{
                                __html: node.label,
                            }}
                        /> 
                    </Link>
                )
            })}

        </nav>

    </div>
    )
}


export default LinkMenu 