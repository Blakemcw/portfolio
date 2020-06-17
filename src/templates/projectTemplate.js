import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function ProjectTemplate({ data }) {
  // ===========================================================================
  // GraphQL Data
  // ===========================================================================
  
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  // ===========================================================================
  // Styling
  // ===========================================================================

  let contentStyle = {
    color: `#484848`,
    textDecoration: `none`,
    maxWidth: `900px`,
    margin: `0 auto`
  }

  // ===========================================================================
  // Render
  // ===========================================================================

  return (
    <Layout>
      <div className="project-container" style={contentStyle}>
        <div className="project">
          <h1>{frontmatter.title}</h1>
          <h6>{frontmatter.startDate} - {frontmatter.endDate}</h6>
          <div
            className="project-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        startDate(formatString: "MMMM DD, YYYY")
        endDate(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
