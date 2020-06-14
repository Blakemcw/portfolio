import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const TitleCard = props => {
  // ===========================================================================
  // Props
  // ===========================================================================

  let fm = props.frontmatter
  let isFeatured = props.isFeatured

  // ===========================================================================
  // State
  // ===========================================================================

  const [hovering, setHovering] = useState(false)
  const [windowWidth, updateWindowWidth] = useState(null)

  // ===========================================================================
  // Styling
  // ===========================================================================

  const mobileBreakpoint = 800 // update style for mobile device

  useEffect(
    () => {
      let handleResize = () => updateWindowWidth(window.innerWidth)
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    },
    [] /* Empty array in dependencies so event listener is added only once */
  )

  let titleCardStyle = {
    margin: `1rem 0`,
    width: isFeatured || windowWidth < mobileBreakpoint ? `100%` : `30%`,
  }

  let imageStyle = {
    marginBottom: `.5rem`,
    width: `100%`,
    height: isFeatured ? `350px` : `250px`,
    borderRadius: `1px`,
  }

  let linkStyle = {
    textDecoration: hovering ? `underline` : `none`,
    transition: `all .2s 0s ease`,
    letterSpacing: `-.03rem`,
    fontFamily: `sans-serif`,
    fontWeight: `900`,
    color: `#484848`,
  }

  // ===========================================================================
  // Render
  // ===========================================================================

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={titleCardStyle}
    >
      <Link to={fm.slug} style={linkStyle}>
        <Img
          fluid={fm.featuredImage.childImageSharp.fluid}
          style={imageStyle}
        />
        <div>{fm.title}</div>
      </Link>
    </div>
  )
}

export default TitleCard
