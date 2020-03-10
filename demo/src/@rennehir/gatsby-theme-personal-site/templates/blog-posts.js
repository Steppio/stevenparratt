/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Blog from "../components/sections/blog-section"

const BlogPostsTemplate = ({ data: { posts } }) => {
  return (
    <Layout>
      <SEO postMeta={{ title: "Blog" }} />
      <div className="inside-header" sx={{ pb: 4 }}>
        <Styled.h1>Blog</Styled.h1>
        <p sx={{ pt: 2, maxWidth: '600px', margin: '0 auto' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget erat enim. Nulla gravida auctor tortor, eget iaculis turpis tempus et. Aliquam in mollis nisi.</p>
      </div>
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
