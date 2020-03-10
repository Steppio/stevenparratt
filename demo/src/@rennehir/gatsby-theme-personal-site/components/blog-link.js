/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useState } from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

import Image from "./image"

const BlogLink = ({ title, slug, date, cover }) => {
  const [zoomed, setZoomed] = useState(false)

  return (
    <S.Link
      to={slug}
      sx={{ my: 0 }}
      onMouseEnter={() => setZoomed(true)}
      onMouseLeave={() => setZoomed(false)}
    >
      <S.Container className="blogListing">
        <S.Overlay zoomed={zoomed} />
        <S.Content sx={{  px: 2, py: 2, pl: '0', position: 'relative' }}>
          <Styled.h3>{title}</Styled.h3>
          <p>{ date }</p>
        </S.Content>
      </S.Container>
    </S.Link>
  )
}

export default BlogLink

export const fragment = graphql`
  fragment BlogSectionFields on BlogPost {
    id
    slug
    date(fromNow: true)
    title
    excerpt
    cover {
      ...ImageFragment
    }
  }
`

const S = {}

S.Link = styled(Link)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 100%;
  box-sizing: border-box;
  text-decoration: none;
`

S.Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 800ms ease;
  opacity: ${props => (props.zoomed ? 1 : 0.5)};
`

S.Container = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: flex-end;
`

S.Content = styled.div`
  color: white;
  position: relative;
`

S.BgImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),
    url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 800ms ease;
  /* position: relative; */
  transform: scale(${props => (props.zoomed ? 1 : 1.15)});
`
