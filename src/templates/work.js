import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import "../styles/work.scss"

export default ({ data }) => (
  <Layout>
    <article>
      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      
      <section className="hero" style={{
        background: `${data.datoCmsWork.color.hex}`,
      }}>

      <div className="hero__text">
        <a className="hero__url" href={`https://${data.datoCmsWork.url}`}>
          {data.datoCmsWork.url}
        </a>
        <h1 className="hero__title">
          {data.datoCmsWork.title}
        </h1>
        <p className="hero__excerpt">
          <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsWork.excerptNode.childMarkdownRemark.html,
          }}
        />
          
        </p>

      </div>

      <div className="hero__image">
        <Img className="mobileimage" fluid={data.datoCmsWork.mobileImage.fluid} />
      </div>

      </section>

    </article>
  </Layout>
)

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      slug
      color {
        hex
      }
      url
      excerptNode {
        childMarkdownRemark {
          html
        }
      }
      mobileImage {
        fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
