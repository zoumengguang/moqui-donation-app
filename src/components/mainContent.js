import React from "react"
import PropTypes from "prop-types"

const MainContent = ({ children }) => (
  <div>
    <main>{children}</main>
  </div>
)

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainContent
