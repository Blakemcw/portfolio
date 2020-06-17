import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "./ProjectTemplate.css"

export default function ProjectTemplate({ data }) {
  // ===========================================================================
  // GraphQL Data
  // ===========================================================================
  
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  // ===========================================================================
  // Render
  // ===========================================================================

  return (
    <Layout>
      <div className="project-container">
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
