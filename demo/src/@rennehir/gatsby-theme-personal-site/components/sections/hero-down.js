/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import ButtonLink from "../button-link"
import { Container } from "theme-ui"

const HeroDown = () => {
  return (
  	<Container className="about-section hero-down constrain_content" sx={{ textAlign: "center" }}>
        <ButtonLink to="#serviceSection" className="hero-down-mobile block sm:hidden md:bg-gray-300 lg:bg-gray-600 xl:bg-gray-900 lg: py-1" sx={{ maxWidth: '150px', margin: '25px auto' }}>
          <i class="fas fa-angle-down text-4xl"></i>
        </ButtonLink> 
        <ButtonLink to="#aboutSection" className="hero-down-desktop hero-down-who hidden sm:block lg:inline-block">
          Who?
        </ButtonLink> 
        <ButtonLink to="#contactSection" className="hero-down-desktop hero-down-contact second lg:float-right hidden sm:block lg:inline-block">
          Contact
        </ButtonLink>         
    </Container>
  )
}

export default HeroDown