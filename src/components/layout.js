import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import ResponsiveComponents from "../contexts/responsive-components"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ResponsiveComponents>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `5.4rem auto 0 auto`,
          maxWidth: 1200,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: "1rem",
          }}
        >
          © {new Date().getFullYear()}
        </footer>
      </div>
    </ResponsiveComponents>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
