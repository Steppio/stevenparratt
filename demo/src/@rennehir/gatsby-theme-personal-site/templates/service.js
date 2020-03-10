/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"
import Link from "../components/button-link"
import Contact from "../components/contact/contact"

const ServiceTemplate = ({ pathContext: { basePaths }, data: { service } }) => {
  const { title, slug, excerpt, body, illustration } = service

  return (
    <Layout>    
      <div className="inside-page"> 
        <SEO postMeta={{ title: title, description: excerpt, slug, image: illustration.publicURL }} />
        {illustration && (
          <Image
            image={illustration}
            alt={title}
            sx={{ width: ["100%", "80%", "70%"], mx: "auto" }}
          />
        )}
        <Styled.h1>{title}</Styled.h1>
        <MDXRenderer>{body}</MDXRenderer>
        <Link to={basePaths.servicesBasePath} sx={{ mt: 4 }}>
          Back all services
        </Link>   
        <div className="contactContainer">
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
      slug
      excerpt
      body
      illustration {
        ...ImageFragment
      }
    }
  }
`
