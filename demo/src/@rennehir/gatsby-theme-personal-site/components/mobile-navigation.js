/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
    <nav className="mobileNav" sx={{ variant: "Main.mobileNav" }}>
      <div id="menuToggle">
        <input type="checkbox" />


          <span></span>
          <span></span>
          <span></span>


        <ul id="menu">
          {data.allSitePage.nodes.map(page => (
            <Link to={page.path} key={page.id}>
              {page.context.heading}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation