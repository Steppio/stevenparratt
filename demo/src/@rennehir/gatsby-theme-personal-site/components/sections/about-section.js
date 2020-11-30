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
import Img from 'gatsby-image'

import Navsocial from '../navsocial'

const AboutSection = ({ }) => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me-bw.png" }) {
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
              <p>A web developer from Liverpool, England with 15 years experience. Passionate about <a href="https://gtmetrix.com/reports/stevenparratt.co.uk/o4UuFWY3/" target="_blank">performance</a>, design and e-commerce. Also passionate about Dachshunds... and biscuits.</p>
              <p>Having worked within a number of big tech companies in the past, I'm now freelancing so I can spend more time experimenting with cutting-edge technology, and more time eating <a href="https://www.google.com/search?q=biscuits&sxsrf=ALeKk00yhCNAmoB7xmMcl2Rpskm8DoPKqw:1606732850882&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjbpc2miqrtAhUUT8AKHUw9DY0Q_AUoAXoECAUQAw&cshid=1606732866841312&biw=1881&bih=923" target="_blank">biscuits</a>. </p>
              <p>If you would like to chat about either websites or <a href="https://www.google.com/search?q=daschund&tbm=isch&ved=2ahUKEwiRq4uyiqrtAhUK0oUKHWHwApUQ2-cCegQIABAA&oq=dasc&gs_lcp=CgNpbWcQARgAMgQIIxAnMggIABCxAxCDATICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgQIABBDOgcIABCxAxBDOgUIABCxA1DB4ANY7ugDYIzwA2gAcAB4AIABaogBkQOSAQMyLjKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=SszEX5HeOoqklwTh4IuoCQ&bih=923&biw=1881" target="_blank">Dachshunds</a> please get in touch.</p>
            </ProfileDescription>

            <ProfileButton>
              <ButtonLink to="#contactSection">
                Contact
              </ButtonLink>
            </ProfileButton>

          </ProfileDetail>
        
        </Profile>

        <ProfileImage>
          <Img fixed={data.file.childImageSharp.fixed} alt="Image of Steven Parratt" />
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