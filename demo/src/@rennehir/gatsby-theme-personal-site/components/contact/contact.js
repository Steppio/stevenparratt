import { jsx, Styled } from "theme-ui"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Form from "./form"
import Section from "../section"

import { StyledHeader2 } from '../componentStyle'

const Contact = () => {
	return (
		<Section sx={{ width: '100%' }}>
			<div className="contact_form" sx={{ padding: '0px 20px' }}>
				<StyledHeader2 className="about-header">Contact Me</StyledHeader2>
				<p>Do you have an enquiry you would like to make? Just send me a message from the contact form below and I will get back to you as soon as possible:</p>
				<Form />
			</div>
		</Section>
	)
}

export default Contact