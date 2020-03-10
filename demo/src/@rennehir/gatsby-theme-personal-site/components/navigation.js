import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      allSitePage(filter: { context: { showInNavigation: { eq: true } } }) {
        nodes {
          id
          path
          context {
            heading
            showInNavigation
          }
        }
      }
    }
  `)

  return (
    <nav>
      {data.allSitePage.nodes.map(page => (
        <AniLink paintDrip bg="#333" hex="#333" duration={0.6} to={page.path} key={page.id}>
          {page.context.heading}
        </AniLink>
      ))}
    </nav>
  )
}

export default Navigation
