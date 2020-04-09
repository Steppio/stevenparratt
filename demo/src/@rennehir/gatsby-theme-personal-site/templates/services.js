/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Services from "../components/sections/service-section"
import ButtonLink from "../components/button-link"

const ServicesTemplate = ({ data: { services } }) => {
  return (
    <Layout>
      <SEO postMeta={{ title: "Services" }} />
      <div className="inside-header" sx={{ pb: 4 }}>
        <Styled.h1>Services</Styled.h1>
        <p sx={{ pt: 2, maxWidth: '728px', margin: '0 auto' }}>
          If you have an idea for an online buisness or would like to improve the performance of your current business, check the Services below to find out more, or
        </p>
      </div>
      <div className="inside-list" sx={{ pb: 4 }}>
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
