import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
      marginBottom: `1.45rem`,
      borderBottom: `solid #dedede 1px`,
      position: `fixed`,
      height: `4.3rem`,
      width: `100%`,
      top: 0,
      zIndex: 999
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexDirection: `row`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#484848`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
      <div style={{
        marginLeft: `auto`,
        justifySelf: `flex-end`
        }}>
        <Navigation />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
