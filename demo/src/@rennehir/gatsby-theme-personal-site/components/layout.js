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

import "@fortawesome/fontawesome-free/css/all.css"

import Navigation from "./navigation"
import Footer from "./footer.js"

const Layout = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <Global
          styles={css`
            body {
              margin: 0;
            }
          `}
        />
        <SEO />
        <Header>
          <Container sx={{
            maxWidth: '1200'
          }}>
            <h1>StevenParratt.co.uk</h1>     
            <Navigation />
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

export default Layout
