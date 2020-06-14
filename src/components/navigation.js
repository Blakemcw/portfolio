import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navigation = ({ links }) => {
  // ===========================================================================
  // Styling
  // ===========================================================================

  let listStyle = {
    textDecoration: `none`,
    margin: `0`,
  }

  let listElementStyle = {
    display: `inline-block`,
    margin: `0 0 0 .7rem`,
    padding: `0`,
  }

  let linkStyle = {
    fontFamily: `sans-serif`,
    textDecoration: `none`,
    color: `#484848`,
  }

  // ===========================================================================
  // Helper Functions
  // ===========================================================================

  let isExternalLink = link => {
    if (link[0] === "/") {
      return false
    } else {
      return true
    }
  }

  // ===========================================================================
  // Render
  // ===========================================================================

  let renderLink = (linkName, link) => {
    if (isExternalLink(link)) {
      return (
        <li style={listElementStyle}>
          <a href={link} style={linkStyle}>
            {linkName}
          </a>
        </li>
      )
    } else {
      return (
        <li style={listElementStyle}>
          <Link to={link} style={linkStyle}>
            {linkName}
          </Link>
        </li>
      )
    }
  }

  return (
    <ul style={listStyle}>
      {links.map(([linkName, link]) => {
        return renderLink(linkName, link)
      })}
    </ul>
  )
}

// ===========================================================================
// Prop Types
// ===========================================================================

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
}

Navigation.defaultProps = {
  links: [
    ["Home", "/"],
    ["LinkedIn", "https://www.linkedin.com/in/blake-mcwilliam/"],
    ["Github", "https://github.com/Blakemcw"],
  ],
}

export default Navigation
