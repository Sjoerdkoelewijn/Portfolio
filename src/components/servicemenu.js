import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"

const ServiceMenu = () => {
    const data = useStaticQuery(graphql`
    query getServiceMenu{
        wordPress {
            menuItems(where: {location: SERVICE_NAVIGATION}) {
                nodes {
                    id
                    label
                    url
                }
            }
        }
    }

    `)
    return(

    <div className={`menu__servicenav`}>
                        
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


export default ServiceMenu 