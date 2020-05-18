/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import ButtonLink from "../button-link"
import Image from "../image"
import BlobUrl from "../../assets/blobs/blob-1.svg"
import HeroDown from "../../components/sections/hero-down"
import tw from 'tailwind.macro';
import { Doughnut, Diamond, Cross } from '../shapes'
import {
  Section,
  TextContainer,
  Myname,
  Andim,
  Name,
  ImageContainer
} from './hero-styles.js'
import { rotateDown, diamondTurn, down, up, heroText } from "../animation"

import "../layout.css"

const Hero = ({ greeting, name, subtitle, image }) => {
  return (
    <Section className="heroBanner" sx={{ margin: '0 auto' }}>
      <div className="shapes">
        <Doughnut sx={{ animation: `${down} 10s ease-in-out infinite alternate` }}></Doughnut>
        <Cross sx={{ animation: `${rotateDown} 10s ease-in-out infinite alternate` }}></Cross>
        <Diamond sx={{ animation: `${diamondTurn} 10s ease-in-out infinite alternate` }}></Diamond>
      </div>
      <TextContainer className="headerLogo">
        <Styled.h1 sx={{ variant: "textStyledisplay", color: 'white' }}>
          <Myname className="hiMyNameIs">{greeting}</Myname> 
          <Name>
            <span className="hero-s" sx={{ animation: `${heroText} 5000ms ease-in-out infinite alternate` }}>S</span>
            <span className="hero-t" sx={{ animation: `${heroText} 5100ms ease-in-out infinite alternate` }}>t</span>
            <span className="hero-e" sx={{ animation: `${heroText} 5200ms ease-in-out infinite alternate` }}>e</span>
            <span className="hero-v" sx={{ animation: `${heroText} 5300ms ease-in-out infinite alternate` }}>v</span>
            <span className="hero-e2" sx={{ animation: `${heroText} 5400ms ease-in-out infinite alternate` }}>e</span>
            <span className="hero-n" sx={{ animation: `${heroText} 5500ms ease-in-out infinite alternate` }}>n</span>
          </Name>
        </Styled.h1>
        <Andim sx={{ color: 'white' }}>And I'm a <span className="block" sx={{ height: '6px' }}>&nbsp;</span>Web Developer</Andim>
      </TextContainer>
      <ImageContainer>
        <HeroDown />
      </ImageContainer>      
    </Section>
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