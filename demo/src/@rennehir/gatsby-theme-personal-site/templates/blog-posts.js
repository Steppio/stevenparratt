/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Blog from "../components/sections/blog-section"
import { StyledHeader1, InsideHeader } from "../components/componentStyle"

const BlogPostsTemplate = ({ data: { posts } }) => {
  return (
    <Layout>
      <SEO postMeta={{ title: "Blog" }} />
      <InsideHeader>
        <StyledHeader1>Blog</StyledHeader1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget erat enim. Nulla gravida auctor tortor, eget iaculis turpis tempus et. Aliquam in mollis nisi.</p>
      </InsideHeader>
      <div className="inside-list" sx={{ pb: 4 }}>
        <Blog posts={posts.nodes} />
      </div>
    </Layout>
  )
}

export default BlogPostsTemplate

export const query = graphql`
  query {
    posts: allBlogPost(sort: { fields: [date, title], order: DESC }) {
      nodes {
        id
        slug
        title
        date(formatString: "DD MMM, YYYY")
        excerpt(pruneLength: 140)
        cover {
          ...ImageFragment
        }
      }
    }
  }
`
