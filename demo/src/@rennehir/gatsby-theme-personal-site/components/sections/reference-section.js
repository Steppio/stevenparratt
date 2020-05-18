/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Section from "../section"
import Reference from "../reference-link"
import { StyledHeader2 } from '../componentStyle'

const ReferenceSection = ({ title, references, basePath }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4000,
  }

  return (
    <Section sx={{ float: 'none' }} className="green-bg">
      <StyledHeader2 className="service-header">References</StyledHeader2>
      <Slider {...settings}>
        {references.map(ref => (
          <Reference key={ref.id} {...ref} />
        ))}
      </Slider>
      {/* <Link to={basePath}>See all</Link> */}
    </Section>
  )
}

export default ReferenceSection
