import React from "react"
import PropTypes from "prop-types"

import Grid from "@material-ui/core/Grid"

const Footer = ({ siteAuthor }) => (
  <footer
    style={{
      borderTopStyle: "double",
      borderColor: "#0A2F6C",
      borderWidth: "0.05rem",
      background: `#FFFFFF`,
      bottom: "0",
      width: "100%",
      height: "2.5rem",
    }}
  >
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        padding: `0.7rem 1.0875rem`,
      }}
    >
      <h4 style={{ color: "#0A2F6C", margin: 0 }}>
        © {new Date().getFullYear()} {siteAuthor}, Built with
        {` `}
        <a
          style={{
            color: `#0A2F6C`,
            textDecoration: `none`,
          }}
          href="https://www.gatsbyjs.org"
        >
          Gatsby
        </a>
      </h4>
    </Grid>
  </footer>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
  siteAuthor: `Jin Zou`,
}

export default Footer
