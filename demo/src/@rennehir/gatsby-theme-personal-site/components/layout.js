/** @jsx jsx */
import { jsx } from "theme-ui"
import { css, Global } from "@emotion/core"
import {
  Layout as StyledLayout,
  Header,
  Main,
  Container,
  Footer as StyledFooter,
  ThemeProvider,
} from "theme-ui"
import theme from "gatsby-plugin-theme-ui"
import SEO from "../components/seo"
import Navigation from "./navigation"
import MobileNavigation from "./mobile-navigation"
import InsidePageNav from './inside-page-nav' 
import Footer from "./footer.js"

import "@fortawesome/fontawesome-free/css/all.css"
import "./layout.css"

const Layout = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <Global
          styles={css`
            body {
              margin: 0;
              background: black;
            }
          `}
        />
        <SEO />
        <Header>
          <Container sx={{
            maxWidth: '1200'
          }}>  
            <Navigation />
            <MobileNavigation />
          </Container>
        </Header>
        <Main>
          <Container {...props}>{children}</Container>
        </Main>
        <StyledFooter>
          <Footer />
        </StyledFooter>
      </StyledLayout>
    </ThemeProvider>
  )
}

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default Layout
