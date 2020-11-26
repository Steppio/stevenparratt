import React from "react"
import Layout from "../@rennehir/gatsby-theme-personal-site/components/layout"
import { StyledHeader1, StyledHeader2 } from '../@rennehir/gatsby-theme-personal-site/components/componentStyle.js'

const NotFoundPage = () => {
  return (
    <Layout>
    	<br /><br /><br />
    	<StyledHeader2>Whoops!</StyledHeader2>
    	<StyledHeader2>404 - Page not found</StyledHeader2>
    </Layout>
  )
}

export default NotFoundPage
