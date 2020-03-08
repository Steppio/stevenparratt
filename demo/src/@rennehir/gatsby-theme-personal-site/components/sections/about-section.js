/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import Slider from "react-slick"

import Section from "../section"
import Reference from "../reference-link"

const AboutSection = ({ }) => {

  return (
    <Section>
      <Container sx={{
      maxWidth: '600px',
      m: '80px auto 0',
      pt: '80px',
      borderTop: '5px dashed white'
    }}>
        <h1 sx={{
          textAlign: 'center',
          fontSize: '3.5em !important',
          color: 'secondary !important',
          fontStyle: 'normal !important'
        }}>About me</h1>
        <br />
        <p>Hi my name is Steven Parratt but you can call me Ste. I've been developing webs for
        a long time, and have a huge passion for quality code. I enjoy creating ultra high-perfomant 
        websites with an emphasis on speed and usability.</p>
        <p>I've been coding for 13 years now, and love nothing more than experimenting with cutting-edge
         technology, including learning new languages and weilding new frameworks</p>
        <p>I'm proficient in PHP (including Laravel), JavaScript, HTML, CSS, React, Gatsby, Wordpress and Git. </p>
        <p>When I'm not creating websites I like to create music, and have about 6 billion songs that I haven't got around to finishing.</p>
      </Container>
    </Section>
  )
}

export default AboutSection
