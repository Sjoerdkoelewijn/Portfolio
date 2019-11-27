import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import "../styles/index.scss"

const IndexPage = ({ data }) => (
  <Layout>

    <section className="indexheader">
      <div className="text">
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsAbout.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>   
    </section>

    <div className="showcase">
      <div className="showcase__intro">
        <h2>{data.datoCmsAbout.workIntroTitle}</h2>
        
        <h1>{data.datoCmsAbout.workIntroSubtitle}</h1>
       
        <div
          dangerouslySetInnerHTML={{
            __html: data.datoCmsAbout.workIntroTextNode.childMarkdownRemark.html,
          }}
        />

      </div>

      {data.allDatoCmsWork.edges.map(({ node: work }) => (
        <section key={work.id} className="showcase__item"
          style={{
            background: `${work.color.hex}`,
          }}
        >
          <figure className="showcase__image">
            <Link to={`/works/${work.slug}`}>
              <Img className="desktopimage" fluid={work.desktopImage.fluid} />
            </Link>
          </figure>
          <div className="showcase__text">
            <h2 className="showcase__url">
              {work.url}
            </h2>
            <h1 className="showcase__title">
              {work.title}
            </h1> 
            <Link className="showcase__btn" to={`/works/${work.slug}`}>
              See this case
            </Link>   
          </div>
        </section>
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    datoCmsAbout {
      workIntroTitle
      workIntroSubtitle
      workIntroTextNode {
        childMarkdownRemark {
          html
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }

    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          color {
            hex
          }
          url
          desktopImage {
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
