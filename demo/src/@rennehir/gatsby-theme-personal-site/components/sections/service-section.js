/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

import Section from "../section"
import Service from "../service"

const ServiceSection = ({ services }) => {
  return (
    <Section>
      <h2>Services</h2>
      <S.Container className="home-services">
        {services.map(service => (
          <Service {...service} />
        ))}
      </S.Container>
    </Section>
  )
}

export default ServiceSection

const S = {}

S.Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
