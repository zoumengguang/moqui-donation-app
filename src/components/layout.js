/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import MainContent from "./mainContent"

import { Grid, makeStyles } from "@material-ui/core"

import "./layout.css"

const Layout = ({ children }) => {
  //const classes = useStyles()

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
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContent children={children} />
      <Footer siteAuthor={data.site.siteMetadata.author} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

/* const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
})) */

export default Layout
