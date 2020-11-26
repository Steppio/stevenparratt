import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const BlogContainer = styled.div`
	${tw`
		 mx-6 lg:mx-auto max-w-4xl
	`}
	h3 {
		max-width: 90%;
	}
	padding: 0 1.5rem;
	margin: 0 auto !important;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;	
`