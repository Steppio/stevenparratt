/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Services from "../components/sections/service-section"

const ServicesTemplate = ({ data: { services } }) => {
  return (
    <Layout>
      <SEO postMeta={{ title: "Services" }} />
      <div className="inside-header">
        <Styled.h1>Services</Styled.h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra, leo sit amet viverra sagittis, mi tellus pulvinar nunc, sit amet faucibus tortor quam vulputate velit. </p>
      </div>
      <div className="inside-list">
        <Services services={services.nodes} />
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
