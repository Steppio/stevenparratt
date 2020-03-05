/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Image from "../image"
import BlobUrl from "../../../assets/blobs/blob-1.svg"

const Hero = ({ greeting, name, subtitle, image }) => {
  return (
    <S.Section sx={{ my: 4 }} bg={BlobUrl}>
      <S.ImageContainer>
        <Image image={image} alt={image.imageAltText} />
      </S.ImageContainer>
      <S.TextContainer>
        <Styled.h1 sx={{ variant: "textStyles.display" }}>
          {greeting} <S.Name>{name}</S.Name>
        </Styled.h1>
        <Styled.h2>{subtitle} dsgdfg</Styled.h2>
      </S.TextContainer>
    </S.Section>
  )
}

export default Hero

export const fragment = graphql`
  fragment HeroFields on HeroYaml {
    id
    greeting
    name
    subtitle
    image {
      ...ImageFragment
    }
    imageAltText
  }
`

const S = {}

S.Section = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-areas:
    "text"
    "image";
  grid-gap: ${props => props.theme.space[1]}px;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-position: 0% 0%;
  background-size: 50%;
  padding: ${props => props.theme.space[3]}px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "text image";
  }
`

S.TextContainer = styled.div`
  grid-area: text;
  align-self: center;
`

S.Name = styled.span`
  border-bottom: 4px solid #639;
`

S.ImageContainer = styled.div`
  grid-area: image;
`
