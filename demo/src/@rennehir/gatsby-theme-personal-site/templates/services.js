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
        <p sx={{ margin: '0 auto', padding: '0 1.5rem' }}>With over 15 years experience in the industry, I have a number of services that I can offer my clients. If you are looking to improve your overall user experience and boost traffic to your site, check out my <strong>Performance</strong> service. If you’re looking to start an online shop, check the <strong>E-Commerce</strong> service. Alternatively if you are looking for a completely bespoke solution to a particular problem you’ve discovered, check the <strong>Custom Website Development</strong> service. </p>
        <p sx={{ margin: '0 auto', padding: '0 1.5rem' }}>Alternatively if you would like to ask a question, please don’t hesitate to <a sx={{ fontWeight: 400 }} href="#contactSection">contact me.</a></p>
      </InsideHeader>
      <SVGbottom /> 
        <div className="inside-list" sx={{ py: '5em', background: "white" }}>
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
