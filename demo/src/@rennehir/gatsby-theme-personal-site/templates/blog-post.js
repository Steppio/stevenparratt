/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import CustomLink from "../components/button-link"
import tw from 'tailwind.macro'
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"
import { StyledHeader2, InsideHeader, BlogInside } from "../components/componentStyle"

const BlogPostTemplate = ({
  pathContext: { previous, next },
  data: { post },
}) => {
  const { title, slug, date, excerpt, body, cover } = post

  return (
    <Layout sx={{ mb: 4 }}>
      <div className="back-to-services">
        <CustomLink to="/blog">
          <i className="fas fa-arrow-left"></i>
        </CustomLink>
      </div>       
      <SEO postMeta={{ title: title, description: excerpt, slug }} isBlogPost />   
      <InsideHeader>
        <StyledHeader2>{title}</StyledHeader2>        
        <Styled.p sx={{ color: "white", textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>Published on {date}</Styled.p>
      </InsideHeader>
      <BlogInside sx={{ mb: 4 }}>
        {cover && (
          <Image
            image={cover}
            sx={{
              maxHeight: "35vh",
              position: "relative",
              maxWidth: '1280px',
              margin: '0 auto'
            }}
          />
        )}
        <div className="blog-content">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </BlogInside>
      <div className="olderBlogs">
        <S.LinkContainer sx={{ fontSize: 3 }}>
          {previous && (
            <S.LinkContent sx={{ gridArea: "newer" }}>
              <Styled.p>Newer post:</Styled.p>
              <Link to={previous.slug}>{previous.title}</Link>
            </S.LinkContent>
          )}
          {next && (
            <S.LinkContent sx={{ gridArea: "older" }}>
              <Styled.p>Older post:</Styled.p>
              <Link to={next.slug}>{next.title}</Link>
            </S.LinkContent>
          )}
        </S.LinkContainer>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: String!) {
    post: blogPost(id: { eq: $id }) {
      id
      title
      slug
      date(formatString: "MMMM DD, YYYY")
      excerpt
      body
      cover {
        ...ImageFragment
      }
    }
  }
`

const S = {}

S.LinkContainer = styled.div`
  ${tw`
    mx-6 lg:mx-auto
  `}
  p {
    color: ${({ theme }) => theme.colors['secondary']}
  }
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "older newer";
  grid-gap: ${({ theme }) => theme.space[3]}px;
`

S.LinkContent = styled.div``
