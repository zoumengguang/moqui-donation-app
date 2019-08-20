import React from "react"
/* import { Link } from "gatsby" */
// import makeStyle from "@material-ui/core"

import Layout from "../components/layout"
import DonationForm from "../components/donationForm"
import Splash from "../components/splash"
import SEO from "../components/seo"

const IndexPage = () => {
  //const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <Splash />
      <DonationForm />
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

/* const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
})) */

export default IndexPage
