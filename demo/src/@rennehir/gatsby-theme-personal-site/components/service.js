/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Image from "./image"
import ButtonLink from "./button-link"

const Service = ({ title, slug, illustration, excerpt }) => {
  return (
    <S.Article sx={{ my: 3, flexBasis: "100%", backgroundColor: "rgba(255, 255, 255, 0.024)", borderRadius: "2px" }}>
      <div sx={{ flexGrow: "1", padding: "0 2em" }}>
        <Image image={illustration} alt={title} sx={{ minHeight: ['initial', 'initial', '425px', '425px'] }} />
      </div>
      <div sx={{ padding: "4em 0 0 2em" }}>
        <Styled.h3 sx={{ color: 'primary' }}>{title}</Styled.h3>
        <Styled.p>{excerpt}</Styled.p>
        <ButtonLink to={slug} sx={{ mt: "auto", mr: "auto" }}>
          Read more
        </ButtonLink>
      </div>
    </S.Article>
  )
}

export default Service

export const fragment = graphql`
  fragment ServiceSectionFields on Service {
    id
    slug
    title
    excerpt
    illustration {
      ...ImageFragment
    }
  }
`

const S = {}

S.Article = styled.article`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100%;
  box-sizing: border-box;
  max-width: ${({ theme }) => theme.sizes.container * 0.6}px;
`
