import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Grid from "@material-ui/core/Grid"
import icon from "../images/app-logo.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#FFFFFF`,
    }}
  >
    <Grid
      container
      alignItems="center"
      style={{
        padding: `0.9rem 0.9rem`,
      }}
    >
      <img
        style={{
          height: "auto",
          width: "6%",
          margin: "0rem 0rem",
        }}
        src={icon}
        alt="Application Icon"
      />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#0a2f6c`,
            textDecoration: `none`,
            marginLeft: "1rem",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Grid>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `MK Donation Page`,
}

export default Header
