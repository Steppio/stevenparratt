/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"

import ButtonLink from "../button-link"
import { Container } from "theme-ui"

const HomeButtons = () => {
  return (
  	<Container className="about-section constrain_content animated delay-2s fadeIn" sx={{ textAlign: "center" }}>
        <ButtonLink to="#contactSection" sx={{  variant: "textStyles.navLink", mt: '80px' }}>
          Contact me
        </ButtonLink> 
    </Container>
  )
}

export default HomeButtons