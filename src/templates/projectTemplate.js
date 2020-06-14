import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function ProjectTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="project-container">
        <div className="project">
          <h1>{frontmatter.title}</h1>
          <h6>{frontmatter.date}</h6>
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
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
