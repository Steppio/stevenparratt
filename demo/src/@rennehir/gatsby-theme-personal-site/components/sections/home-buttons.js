/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"

import ButtonLink from "../button-link"
import { Container } from "theme-ui"

const HomeButtons = () => {
  return (
  	<Container className="about-section constrain_content" sx={{ textAlign: "center" }}>
        <ButtonLink to="#aboutSection" sx={{ variant: "textStyles.navLink", ml: "0" }}>
          About me
        </ButtonLink>
        <ButtonLink to="#contactSection" sx={{  variant: "textStyles.navLink" }}>
          Contact me
        </ButtonLink> 
    </Container>
  )
}

export default HomeButtons