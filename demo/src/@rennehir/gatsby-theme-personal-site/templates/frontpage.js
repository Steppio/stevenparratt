/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/sections/hero"
import Blog from "../components/sections/blog-section"
// import Portfolio from "../components/sections/portfolio-section"
import About from "../components/sections/about-section"
import References from "../components/sections/reference-section"
import Services from "../components/sections/service-section"
import Contact from "../components/contact/contact"
import HomeButtons from "../components/sections/home-buttons"

import SVGtop from "../components/SVGtop"
import SVGbottom from "../components/SVGbottom"

const FrontpageTemplate = ({ data, pageContext }) => {
  const { hero, posts, portfolio, references, services } = data
  const {
    basePaths: { blogBasePath, portfolioBasePath, referencesBasePath },
  } = pageContext

  return (
    <Layout>
      <Hero {...hero} />
      
      <SVGbottom /> 
      <div id="serviceSection" className="blogContainer clearfix">
        <Services services={services.nodes} />
      </div>
      <SVGtop />
      <div id="aboutSection" className="blogContainer clearfix">
        <About />
      </div>
      <SVGbottom />
        <div className="referencesContainer clearfix" sx={{ background: "#fff", paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <References
            title="References"
            references={references.nodes}
            basePath={referencesBasePath}
          />
        </div>
      <SVGtop />
      <div id="contactSection" className="contactContainer clearfix">
        <Contact />
      </div>
      <SVGbottom /> 
      <div className="blogContainer clearfix" sx={{ background: "#fff" }}>
        <Blog
          title="Latest from the blog"
          posts={posts.nodes}
          basePath={blogBasePath}
        />
      </div>      
    </Layout>
  )
}

export default FrontpageTemplate

export const query = graphql`
  query {
    hero: heroYaml {
      ...HeroFields
    }
    posts: allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 3) {
      nodes {
        ...BlogSectionFields
      }
    }
    portfolio: allPortfolioItem(
      sort: { fields: [publishedDate, title], order: DESC }
      limit: 3
    ) {
      nodes {
        ...PortfolioSectionFields
      }
    }
    references: allReference(
      sort: { fields: [publishedDate, name], order: DESC }
      limit: 3
    ) {
      nodes {
        ...ReferenceSectionFields
      }
    }
    services: allService {
      nodes {
        ...ServiceSectionFields
      }
    }
  }
`
