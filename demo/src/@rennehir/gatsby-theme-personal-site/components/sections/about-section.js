/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import Slider from "react-slick"

import { useStaticQuery, graphql } from "gatsby"

import Section from "../section"
import Reference from "../reference-link"

import Img from "gatsby-image"

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
    <Section>
      <Container id="aboutSection" className="constrain_content">
        <h2>About me</h2>
        <div className="about-left">
          <span className="about-page-1">
            <p>Hi, my name is Steven Parratt and I’m a freelance web developer with <strong>15 years experience in the industry</strong>. I’ve worked for a number of top development companies throughout my career, and during that time I’ve built up a huge amount of experience working across many different platforms. </p>
            <p>I’ve long been fascinated by website performance and delivering the sleekest, fastest possible website experience for the end user, and that’s what I specialise in now - creating <strong>ultra-fast</strong>, <strong>high performance</strong> websites using cutting-edge technology. You can <a href="https://developers.google.com/speed/pagespeed/insights/?url=stevenparratt.co.uk&tab=desktop" target="_blank">check the performance of this website</a> using <a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">Googles PageSpeed Insights</a>.</p>
            <p>Why build a website with last decades tech? Contact me and let’s discuss how we can create your dream site, or click below to find out more.</p>
          </span>
          <span className="about-page-2">
          </span>
        </div>
        <div className="about-right">
          <Img fixed={data.file.childImageSharp.fixed} />
          <Navsocial />
        </div>
      </Container>
    </Section>
  )
}

export default AboutSection