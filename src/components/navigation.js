import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import { useResponsiveComponents } from "../contexts/responsive-components"

const Navigation = ({ links }) => {
  // ===========================================================================
  // State
  // ===========================================================================

  const [mobileMenuShowing, setMobileMenuShowing] = useState(false)

  // ===========================================================================
  // Styling
  // ===========================================================================

  let { windowWidth, mobileBreakpoint } = useResponsiveComponents()

  if (windowWidth > mobileBreakpoint && mobileMenuShowing)
    setMobileMenuShowing(false)

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

  let mobileListElementStyle = {
    display: `block`,
    margin: 0,
    width: `100%`,
    height: `50px`,
    borderBottom: `1px solid #dedede`,
    textAlign: `center`,
    lineHeight: `50px`,
  }

  let menuButtonStyle = {
    ...linkStyle,
    border: `none`,
    backgroundColor: `transparent`,
    cursor: `pointer`,
    fontSize: `1.5rem`,
    marginRight: `1rem`,
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

  let renderLink = (linkName, link, isMobile=false) => {
    if (isExternalLink(link)) {
      return (
        <li style={isMobile? mobileListElementStyle : listElementStyle}>
          <a href={link} style={linkStyle}>
            {linkName}
          </a>
        </li>
      )
    } else {
      return (
        <li style={isMobile? mobileListElementStyle : listElementStyle}>
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
    return (
      <button
        onClick={() => setMobileMenuShowing(!mobileMenuShowing)}
        style={menuButtonStyle}
      >
        {mobileMenuShowing ? "×" : "☰"}
      </button>
    )
  }

  let renderMenu = () => {
    return (
      <div
        style={{
          backgroundColor: `#fff`,
          zIndex: 999,
          width: `350px`,
          height: `calc(100vh - 4.3rem)`,
          position: `fixed`,
          right: 0,
          bottom: 0,
          borderLeft: `1px solid #dedede`,
        }}
      >
        <ul style={listStyle}>
          {links.map(([linkName, link]) => {
            return renderLink(linkName, link, true)
          })}
        </ul>
      </div>
    )
  }

  return (
    <>
      {windowWidth < mobileBreakpoint ? renderMenuButton() : renderLinks()}
      {mobileMenuShowing && windowWidth < mobileBreakpoint ? (
        renderMenu()
      ) : (
        <></>
      )}
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
