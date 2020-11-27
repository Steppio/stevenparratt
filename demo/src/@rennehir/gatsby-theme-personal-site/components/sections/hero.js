/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import ButtonLink from "../button-link"
import Image from "../image"
import HeroImage from "../../assets/sp6.svg"
import HeroDown from "../../components/sections/hero-down"
import tw from 'tailwind.macro';
import { Bubble } from '../shapes'
import {
  Section,
  TextContainer,
  Myname,
  Andim,
  Name,
  ImageContainer,
  stevenparrattsvg
} from './hero-styles.js'
import { StyledHeader2, StyledHeader3, StyledHeader4, StyledHeader5 } from '../componentStyle'
import { rotateDown, diamondTurn, down, up, heroText } from "../animation"

import "../layout.css"

const Hero = ({ greeting, name, subtitle, image }) => {
  return (
    <Section className="heroBanner" sx={{ margin: '0 auto' }}>
      <div className="shapes">
        <Bubble className="bubble1 fadeIn" sx={{ animation: `${down} 10s ease-in-out infinite alternate` }}></Bubble>
        <Bubble className="bubble2 fadeIn" sx={{ animation: `${rotateDown} 10s ease-in-out infinite alternate` }}></Bubble>
        <Bubble className="bubble3 fadeIn" sx={{ animation: `${diamondTurn} 10s ease-in-out infinite alternate` }}></Bubble>
      </div>
      <div className="image-content">
        <Image image={image} alt={name} className="stevenparrattsvg" /> 
        <TextContainer className="headerLogo">
          <Andim sx={{ color: 'white' }}>Steven Parratt<span className="block" sx={{ height: '6px' }}>&nbsp;</span>Web Developer</Andim>
        </TextContainer>
      </div>
      <ImageContainer className="clearfix">
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