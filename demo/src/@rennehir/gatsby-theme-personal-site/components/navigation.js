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
        <AniLink cover bg="#663399" duration={1} to={page.path} key={page.id}>
          {page.context.heading}
        </AniLink>
      ))}
    </nav>
  )
}

export default Navigation
