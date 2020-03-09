/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import Slider from "react-slick"

import Section from "../section"
import Reference from "../reference-link"

const AboutSection = ({ }) => {

  return (
    <Section>
      <Container id="aboutSection" className="constrain_content">
        <h2>About me</h2>
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
