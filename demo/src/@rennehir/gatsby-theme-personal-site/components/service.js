/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { ServiceArticle } from './service-styles.js'

import Image from "./image"
import tw from 'tailwind.macro'
import ButtonLink from "./button-link"

const Service = ({ title, slug, illustration, excerpt }) => {

	const excerpt2 = excerpt.split("-");

	return (
		<ServiceArticle sx={{ flexBasis: "100%", backgroundColor: "rgba(255, 255, 255, 0.024)", borderRadius: "0px" }}>
			<Styled.h3 sx={{ color: 'white' }}>{title}</Styled.h3>
			<div className="service-track-container">
				<div className="service-track">
					<div className="service-image track-image clearfix" sx={{ flexGrow: "1"  }}>
						<Image image={illustration} alt={title} />
					</div>
					<div className="service-detail track-content clearfix">
						<Styled.p>{excerpt}</Styled.p>
					</div>
				</div>
			</div>
			<div className="service-detail">
				<ButtonLink to={slug}>
					Read more...
				</ButtonLink>      
			</div>
		</ServiceArticle>
	)
}

export default Service

export const fragment = graphql`
	fragment ServiceSectionFields2 on Service {
		id
		slug
		title
		excerpt
		illustration {
			...ImageFragment
		}
	}
`