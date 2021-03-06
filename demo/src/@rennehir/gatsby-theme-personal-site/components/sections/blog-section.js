/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"
import { BlogContainer } from "./blog-styles"
import { StyledHeader2 } from '../componentStyle.js'

import Section from "../section"
import BlogLink from "../blog-link"
import Link from "../button-link"

const BlogSection = ({ title, posts, basePath }) => {
  return (
    <Section>
      <BlogContainer className="blog-frontpage-container">
        <StyledHeader2 className="about-header blog-frontpage-header" sx={{ color: "black" }}>Blog</StyledHeader2>
        {posts.map(post => (
          <BlogLink key={post.id} {...post} />
        ))}
        {basePath && <Link sx={{ marginLeft: '0', marginRight: '0' }} className="black-button" to={basePath}>Read all</Link>}
      </BlogContainer>
    </Section>
  )
}

export default BlogSection