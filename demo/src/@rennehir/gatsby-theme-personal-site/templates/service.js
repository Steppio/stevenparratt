/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"
import Link from "../components/button-link"
import Contact from "../components/contact/contact"
import Blog from "../components/sections/blog-section"
import { StyledHeader1 } from '../components/componentStyle'

const ServiceTemplate = ({ pathContext: { basePaths }, data: { service } }) => {
  const { title, metadescription, slug, excerpt, body, illustration } = service

  return (
    <Layout>    
      <div className="inside-page"> 
        <div className="back-to-services">
          <Link to={basePaths.servicesBasePath}>
            <i className="fas fa-arrow-left"></i>
          </Link>
        </div>
        <StyledHeader1 sx={{ fontWeight: '100' }}>{title}</StyledHeader1>
        <SEO postMeta={{ title: title, description: metadescription, slug, image: illustration.publicURL }} />
        <div id="inside-service-image" sx={{ maxWidth: '400px', margin: '0 auto' }}>
          {illustration && (
            <Image
              image={illustration}
              alt={title}
              sx={{ width: ["100%", "80%", "70%"], mx: "auto" }}
            />
          )}
        </div>
        <div id="inside-service-content" sx={{ maxWidth: '768px', margin: '0 auto' }}>
          <MDXRenderer>{body}</MDXRenderer>
          <Link to={basePaths.servicesBasePath} className="inside-service-back-button" sx={{ mt: 4, color: 'black', my: 'auto' }}>
            Back all services
          </Link>          
        </div> 
        <div id="contactSection" className="contactContainer clearfix">
          <Contact />
        </div>       
      </div>
    </Layout>
  )
}

export default ServiceTemplate

export const query = graphql`
  query($id: String!) {
    service(id: { eq: $id }) {
      title
      metadescription
      slug
      excerpt
      body
      illustration {
        ...ImageFragment
      }
    }
  }
`
