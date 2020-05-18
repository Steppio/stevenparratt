import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const StyledHeader1 = styled.h1`
  ${tw`
      text-6xl pt-0 pb-8 font-semibold w-full text-center tracking-wide sm:pt-0 sm:pb-8 lg:pb-12
  `}
  -webkit-font-smoothing: antialiased!important;
`

export const StyledHeader2 = styled.h2`
  ${tw`
      text-2xl pt-0 pb-8 font-semibold w-full text-center tracking-wide sm:text-3xl sm:pt-0 sm:pb-8 lg:text-4xl lg:pb-12
  `}
  -webkit-font-smoothing: antialiased!important;
`

export const StyledHeader4 = styled.h4`
  ${tw`
      text-2xl px-6 pt-0 pb-2 font-semibold w-full text-center tracking-wide sm:pt-0 sm:pb-4 lg:pb-12
  `}
  -webkit-font-smoothing: antialiased!important;
  color: ${({ theme }) => theme.colors['secondary']}
`

export const ContactFormContainer = styled.div`
	${tw`
		w-full max-w-3xl rounded-lg lg:rounded-l-lg
	`}
	box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
    background-color: rgba(255,255,255,0.1);
`

export const InsideHeader = styled.div`
  ${tw`
    pb-8
  `}  
  p {
    ${tw`
      mx-6 lg:mx-auto
    `}
    max-width: 600px;
  }
  h1 {
    color: ${({ theme }) => theme.colors['secondary']} 
  }
  maxWidth: 728px;
  margin: 100px auto 0;
`

export const BlogInside = styled.div`
  ${tw`
    mx-6 lg:mx-auto
  `}
  p {
    ${tw`
      mt-6
    `}    
  }
  h3 {
    margin-top: 40px;
  }
  strong {
    font-weight: 700
  }
  max-width: 800px;
`

export const SiteName = styled.div`
  h4 {
    span {
      color: ${({theme}) => theme.colors['secondary']}
    }
    text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
    display: inline-block;
    margin-left: 10px;
  }
  text-align: center;
  margin-top: -10px;
  z-index: 1000;
  display: block;
`
