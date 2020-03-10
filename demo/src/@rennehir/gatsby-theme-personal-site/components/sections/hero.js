/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import ButtonLink from "../button-link"
import Image from "../image"
import BlobUrl from "../../assets/blobs/blob-1.svg"
import "../layout.css"

const Hero = ({ greeting, name, subtitle, image }) => {
  return (
    <S.Section className="heroBanner" sx={{ }} bg={BlobUrl}>
      <S.ImageContainer>
        <Image sx={{ my: 0, minHeight: '400px' }} image={image} alt={image.imageAltText} />
      </S.ImageContainer>
      <S.TextContainer className="headerLogo">
        <Styled.h1 sx={{ variant: "textStyles.display", color: 'white' }}>
          {greeting} <S.Name>{name}</S.Name>
        </Styled.h1>
        <Styled.h2 sx={{ color: 'white', textAlign: 'center' }}>{subtitle}</Styled.h2>
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
  
  background-repeat: no-repeat;
  background-position: 0% 33%;
  background-size: 50%;
  padding: 120px 0 0 0;
  margin-bottom: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    background-size: 100%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "text image";
    background-position: 0% 0%;
  }
`

S.TextContainer = styled.div`
  grid-area: text;
  align-self: center;
`

S.Name = styled.span`
  border-bottom: 4px solid ${({ theme }) => theme.colors.secondary};
`

S.ImageContainer = styled.div`
  grid-area: image;
`
