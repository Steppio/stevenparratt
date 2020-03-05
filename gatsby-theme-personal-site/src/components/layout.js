// /** @jsx jsx */
// import { jsx } from "theme-ui"
// import { css, Global } from "@emotion/core"
// import {
//   Layout as StyledLayout,
//   Header,
//   Main,
//   Container,
//   Footer as StyledFooter,
//   ThemeProvider,
// } from "theme-ui"
// import theme from "gatsby-plugin-theme-ui"

// import SEO from "../components/seo"

// import "@fortawesome/fontawesome-free/css/all.css"

// import Navigation from "./navigation"
// import Footer from "./footer.js"

// const Layout = ({ children, ...props }) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <StyledLayout>
//         <Global
//           styles={css`
//             body {
//               margin: 0;
//             }
//           `}
//         />
//         <SEO />
//         <Header>
//           <h1>dsgfkjsdhlgkjdfhlgkjd</h1>
//           <div class="knockout gradientContainer">
//             <svg class="knockout-text-container" width="100%" height="100%">
//               <rect class="knockout-text-bg" width="100%" height="100%" fill="#000" x="0" y="0" fill-opacity="1" mask="url(#knockout-text)"></rect>
//               <mask id="knockout-text">
//                 <rect width="100%" height="100%" fill="#fff" x="0" y="0"></rect>
//                 <text class="animated flipInX" x="50%" y="70%" fill="#000" text-anchor="middle">Bryte</text>
//               </mask>
//             </svg>
//           </div>        
//           <Navigation />
//         </Header>
//         <Main>
//           <Container {...props}>{children}</Container>
//         </Main>
//         <StyledFooter>
//           <Footer />
//         </StyledFooter>
//       </StyledLayout>
//     </ThemeProvider>
//   )
// }

// export default Layout
