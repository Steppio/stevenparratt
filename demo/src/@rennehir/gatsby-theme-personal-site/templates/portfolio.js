/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Portfolio from "../components/sections/portfolio-section"

const PortfolioTemplate = ({ data: { items } }) => {
  return (
    <Layout>
      <SEO postMeta={{ title: "Portfolio" }} />
      <div className="inside-header">
        <Styled.h1>Benefits</Styled.h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra, leo sit amet viverra sagittis, mi tellus pulvinar nunc, sit amet faucibus tortor quam vulputate velit. </p>
      </div>
      <div className="inside-list">
        <Portfolio items={items.nodes} />
      </div>
    </Layout>
  )
}

export default PortfolioTemplate

export const query = graphql`
  query {
    items: allPortfolioItem(
      sort: { fields: [publishedDate, title], order: DESC }
    ) {
      nodes {
        id
        slug
        title
        excerpt
        screenshot {
          ...ImageFragment
        }
      }
    }
  }
`
