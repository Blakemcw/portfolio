import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { useResponsiveComponents } from "../contexts/responsive-components"

const Navigation = ({ links }) => {
  // ===========================================================================
  // Styling
  // ===========================================================================

  let { windowWidth, mobileBreakpoint } = useResponsiveComponents()

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

  let menuButtonStyle = {
    ...linkStyle,
    fontSize: `1.5rem`,
    marginRight: `1rem`
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

  let renderLinks = () => {
    return (
      <ul style={listStyle}>
        {links.map(([linkName, link]) => {
          return renderLink(linkName, link)
        })}
      </ul>
    )
  }

  let renderMenuButton = () => {
    return(
      <a
        href="#"
        onClick={() => {console.log("clicked")}}
        style={menuButtonStyle}
      >
          &#9776;
      </a>
    )
  }

  return(
    <>
      {windowWidth < mobileBreakpoint ? renderMenuButton() : renderLinks()}
    </>
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
