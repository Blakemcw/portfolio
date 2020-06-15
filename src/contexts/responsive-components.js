import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

let responsiveComponentsContext = React.createContext({})

const ResponsiveComponents = ({ children }) => {
  // ===========================================================================
  // State
  // ===========================================================================

  const [windowWidth, updateWindowWidth] = useState(null)

  // ===========================================================================
  // Switching to/from Mobile View
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

  // ===========================================================================
  // Render
  // ===========================================================================

  return (
    <responsiveComponentsContext.Provider
      value={{ windowWidth, mobileBreakpoint }}
    >
      {children}
    </responsiveComponentsContext.Provider>
  )
}

export const useResponsiveComponents = () => {
  const { windowWidth, mobileBreakpoint } = React.useContext(
    responsiveComponentsContext
  )

  return { windowWidth, mobileBreakpoint }
}

ResponsiveComponents.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ResponsiveComponents
