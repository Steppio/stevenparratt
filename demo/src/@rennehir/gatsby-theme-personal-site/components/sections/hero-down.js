/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import ButtonLink from "../button-link"
import { Container } from "theme-ui"

const HeroDown = () => {
  return (
  	<Container className="about-section hero-down constrain_content animated delay-2s fadeIn" sx={{ textAlign: "center" }}>
        <ButtonLink to="#aboutSection" sx={{  variant: "textStyles.navLink" }}>
			<i class="fas fa-caret-down"></i>
        </ButtonLink> 
    </Container>
  )
}

export default HeroDown