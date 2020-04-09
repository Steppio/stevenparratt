/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Image from "./image"
import ButtonLink from "./button-link"

const Service = ({ title, slug, illustration, excerpt }) => {

  const excerpt2 = excerpt.split(" ").splice(0,21).join(" ");

  return (
    <S.Article sx={{ my: 3, flexBasis: "100%", backgroundColor: "rgba(255, 255, 255, 0.024)", borderRadius: "2px" }}>
      <div className="service-image" sx={{ flexGrow: "1"  }}>
        <Image image={illustration} alt={title} sx={{ minHeight: ['initial', 'initial', '425px', '425px'] }} />
      </div>
      <div className="service-detail">
        <Styled.h3 sx={{ color: 'primary' }}>{title}</Styled.h3>
        <Styled.p>{excerpt2}</Styled.p>
        <ButtonLink to={slug} sx={{ m: "0px !important" }}>
          Read more
        </ButtonLink>
      </div>
    </S.Article>
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

const S = {}

S.Article = styled.article`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100%;
  box-sizing: border-box;
  max-width: 728px;

  .service-detail h3 {
    font-size: 1.25em;
    text-align: left;
  }
  .service-detail p {
    max-width: 400px;
    text-align: left;
    margin-left: 0px;
    padding: 20px 2.5em 2em 0;
  }
  .service-detail a {
    background: rgba(255,255,255,0.1);
    color: #59E19F;
    width: 100%;
    float: left;    
  }

  @media (max-width: 46rem) {
    flex-direction: column;

    > div {
      padding: 40px;
    }

  }

  @media (min-width: 64rem) {

    .service-image {
      max-width: 280px;
      padding: 0 0.5em 0 2em;
    }

    .service-detail {
      padding: 2em 0 0.5em 2em;
    }

  }
`
