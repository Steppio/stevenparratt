/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { ServiceArticle } from './service-styles.js'

import Image from "./image"
import tw from 'tailwind.macro'
import ButtonLink from "./button-link"

const Service = ({ title, slug, illustration, excerpt }) => {

  const excerpt2 = excerpt.split(" ").splice(0,21).join(" ");

  return (
    <ServiceArticle sx={{ flexBasis: "100%", backgroundColor: "rgba(255, 255, 255, 0.024)", borderRadius: "2px" }}>
      <div className="service-image" sx={{ flexGrow: "1"  }}>
        <Image image={illustration} alt={title} />
      </div>
      <div className="service-detail">
        <Styled.h3 sx={{ color: 'primary' }}>{title}</Styled.h3>
        <Styled.p>{excerpt2}</Styled.p>
        <ButtonLink to={slug} sx={{ m: "0px !important" }}>
          Read more
        </ButtonLink>
      </div>
    </ServiceArticle>
  )
}

export default Service

export const fragment = graphql`
  fragment ServiceSectionFields on Service {
    id
    slug
    title
    excerpt
    illustration {
      ...ImageFragment
    }
  }
`