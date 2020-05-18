/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { ServiceContainer } from '../service-styles.js'
import { StyledHeader2 } from '../componentStyle.js'

import Section from "../section"
import Service from "../service"
import tw from 'tailwind.macro'


const ServiceSection = ({ services }) => {
  return (
    <Section>
      <StyledHeader2 className="service-header">Services</StyledHeader2>
      <ServiceContainer className="home-services">
        {services.map(service => (
          <Service {...service} />
        ))}
      </ServiceContainer>
    </Section>
  )
}

export default ServiceSection