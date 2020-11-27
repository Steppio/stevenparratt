/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import Slider from "react-slick"
import React from 'react'
import { 
  AboutContainer, 
  Profile,
  ProfileImage,
  ProfileDetail,
  ProfileCircle,
  SocialBits,
  ProfileMobileImg,
  ProfileButton,
  ProfileDescription
} from './about-styles'
import { StyledHeader2, StyledHeader3 } from '../componentStyle'

import { useStaticQuery, graphql } from "gatsby"

import Section from "../section"
import Reference from "../reference-link"
import ButtonLink from "../button-link"
// import Img from "gatsby-image"
import Image from "../image"

import Navsocial from '../navsocial'

const AboutSection = ({ }) => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 317, height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <AboutContainer>        

        <StyledHeader2 className="about-header">About</StyledHeader2>

        <Profile id="profile">

          <ProfileDetail>
            
            <ProfileDescription>
              <p>A web developer from Liverpool, England with 15 years experience. Passionate about performance, design and e-commerce. Also passionate about Dachshunds... and biscuits.</p>
              <p>Having worked within a number of big tech companies in the past, I'm now freelancing so I can spend more time experimenting with cutting-edge technology, and more time eating biscuits. </p>
              <p>If you would like to chat about either websites or Dachshunds please get in touch.</p>
            </ProfileDescription>

            <ProfileButton>
              <ButtonLink to="#contactSection">
                Contact
              </ButtonLink>
            </ProfileButton>

          </ProfileDetail>
        
        </Profile>
        


        <ProfileImage>
          <img src="me-bw.png" />
        </ProfileImage>
      </AboutContainer>
      
      <div className="profileTop">
        <SocialBits>
          <a className="link" href="https://www.facebook.com/StevenParrattWeb" target="_blank"><i className="fab fa-facebook" /></a>
          <a className="link" href="https://www.linkedin.com/in/steven-parratt-a0aa42a0/" target="_blank"><i className="fab fa-linkedin" /></a>
          <a className="link last" href="https://github.com/Steppio"  target="_blank"><i className="fab fa-github" /></a>
          <a className="link last" href="https://www.instagram.com/stevenparrattweb/"  target="_blank"><i className="fab fa-instagram" /></a>
          <a className="link last" href="https://twitter.com/ParrattSteven"  target="_blank"><i className="fab fa-twitter" /></a>
        </SocialBits>
      </div>      
    </>
  )
}

export default AboutSection