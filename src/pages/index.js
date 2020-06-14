import React from "react"
import { useStaticQuery} from "gatsby"
import TitleCard from '../components/title-card'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query ProjectsQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  `)

  let renderProjectsTitleCards = () => {
    let first = true
    return (
      data.allMarkdownRemark.nodes.map(node => {
        if (first) {
          first = false
          return <TitleCard frontmatter={node.frontmatter} isFeatured={true}/>
        }
          return <TitleCard frontmatter={node.frontmatter} isFeatured={false}/>
      })
    )
  }
  
  return (
    <Layout>
      <SEO title="Home" />
      
      <h3>Projects</h3>
      {renderProjectsTitleCards()}

    </Layout>
  )
}

export default IndexPage
