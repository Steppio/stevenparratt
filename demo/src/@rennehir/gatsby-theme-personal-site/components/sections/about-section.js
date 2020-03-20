/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import Slider from "react-slick"

import { useStaticQuery, graphql } from "gatsby"

import Section from "../section"
import Reference from "../reference-link"

import Img from "gatsby-image"

const AboutSection = ({ }) => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 617, height: 800) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Section>
      <Container id="aboutSection" className="constrain_content">
        <div className="about-left">
          <h2>About me</h2>
          <p>Hi my name is Steven Parratt but you can call me Ste. I've been developing webs for
          a long time, and have a huge passion for quality code. I enjoy creating ultra high-perfomant 
          websites with an emphasis on speed and usability.</p>
          <p>I've been coding for 13 years now, and love nothing more than experimenting with cutting-edge
           technology, including learning new languages and weilding new frameworks</p>
          <p>I'm proficient in PHP (including Laravel), JavaScript, HTML, CSS, React, Gatsby, Wordpress and Git. </p>
          <p>When I'm not creating websites I like to create music, and have about 6 billion songs that I haven't got around to finishing.</p>
        </div>
        <div className="about-right">

          <Img fixed={data.file.childImageSharp.fixed} />
        </div>
      </Container>
    </Section>
  )
}

export default AboutSection