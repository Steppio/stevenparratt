/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Services from "../components/sections/service-section"
import ButtonLink from "../components/button-link"
import { StyledHeader1, InsideHeader } from "../components/componentStyle"
import SVGtop from "../components/SVGtop"
import SVGbottom from "../components/SVGbottom"
import Contact from "../components/contact/contact"

const ServicesTemplate = ({ data: { services } }) => {
  return (
    <Layout>
      <SEO postMeta={{ title: "Services" }} />
      <InsideHeader>
        <StyledHeader1>Services</StyledHeader1>
        <p>If you have an idea for an online buisness or would like to improve the performance of your current business, check the Services below to find out more, or</p>
      </InsideHeader>
      <SVGbottom /> 
        <div className="inside-list" sx={{ py: '5em', background: "#59E19F" }}>
          <Services services={services.nodes} />
        </div>
      <SVGtop />
      <div id="contactSection" className="contactContainer clearfix">
        <Contact />
      </div>      
    </Layout>
  )
}

export default ServicesTemplate

export const query = graphql`
  query {
    services: allService {
      nodes {
        id
        title
        slug
        excerpt
        illustration {
          ...ImageFragment
        }
      }
    }
  }
`
