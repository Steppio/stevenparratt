/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Navsocial from './navsocial'

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
          <Navsocial />
          {data.allSitePage.nodes.map(page => (
            <AniLink className={page.context.heading.toLowerCase() + '-nav'} bg="#59E19F" hex="#59E19F" duration={0.75} to={page.path} key={page.id}>
              {page.context.heading}
            </AniLink>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation