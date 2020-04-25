import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "../styles/modules/portfolio.module.scss";
import BackgroundImage from 'gatsby-background-image';

const PortfolioItems = () => {
    const data = useStaticQuery(graphql`
    query getPortfolioItems {
        wordPress {
            portfolio_items {
                edges {
                    node {
                        slug
                        title
                        blocks {
                            ... on WPGraphQL_CustomBlocksPortfolioheroBlock {
                                attributes {
                                    websiteURL
                                    website
                                    title
                                    mediaURL
                                    imageFile {
                                        childImageSharp {
                                        fluid(quality: 90, maxWidth: 960) {
                                            ...GatsbyImageSharpFluid_withWebp
                                        }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } 
        }
    }

    `)

    return (

        <div className={styles.portfolio_inner}>
        
            {data.wordPress.portfolio_items.edges.map(item => {

                return (
        
                    <article className={styles.portfolio_block}>

                        {item.node.blocks.map(block => {

                            const typeName = block.__typename;

                            if (typeName === 'WPGraphQL_CustomBlocksPortfolioheroBlock')

                            return (     
                                
                                <>

                                    <Link to={item.node.slug} className={styles.link}>

                                        <BackgroundImage 
                                            Tag="section"
                                            className={styles.image}
                                            fluid={block.attributes.imageFile.childImageSharp.fluid}
                                            backgroundColor={`#f2f2f2`}
                                            >
                                        </BackgroundImage>

                                    </Link> 

                                    <Link to={item.node.slug} className={styles.link}>

                                        <h1
                                        dangerouslySetInnerHTML={{
                                            __html: item.node.title,
                                        }}
                                        />

                                    </Link>

                                    <h2
                                        dangerouslySetInnerHTML={{
                                            __html: block.attributes.title,
                                        }}
                                    />

                                </>

                            )

                        })}                        
                        
                    </article>
        
                )
        
            })} 

        </div>

    )

};

export default PortfolioItems;



