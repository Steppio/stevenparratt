import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const StyledHeader1 = styled.h1`
  ${tw`
      text-4xl pt-0 pb-8 font-semibold w-full text-center tracking-wide sm:pt-0 sm:pb-8 lg:pb-12 lg:text-6xl
  `}
`

export const StyledHeader2 = styled.h2`
  ${tw`
      uppercase pt-0 pb-8 font-semibold w-full text-center tracking-wide sm:pt-0 sm:pb-8 lg:pb-12
  `}
  @media only screen and (min-width: 0px) and (max-width: 768px) {
    font-size: 2.25rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 3.25rem;
  }
  font-family: 'Inter';
  font-weight: 100;
`

export const StyledHeader3 = styled.h3`
  ${tw`
      uppercase pt-0 pb-8 font-semibold text-center tracking-wide sm:pt-0 sm:pb-8 lg:pb-12
  `}
  font-family: 'Inter';
  font-size: 2.25rem;
  font-weight: 100;
`

export const StyledHeader4 = styled.h4`
  ${tw`
      text-2xl px-6 pt-0 pb-2 font-semibold w-full text-center tracking-wide sm:pt-0 sm:pb-4 lg:pb-12
  `}
  -webkit-font-smoothing: antialiased!important;
  color: ${({ theme }) => theme.colors['white']}
`

export const StyledHeader5 = styled.h5`
  letter-spacing: 0.05em;
  max-width: 418px;
  text-align: center;
  line-height: 38px;
  margin: 100px auto 0;
  font-weight: 100;
  display: none;
  font-size: 1.20em;  
  //-webkit-font-smoothing: antialiased!important;
  color: ${({ theme }) => theme.colors['white']}
`

export const ContactFormContainer = styled.div`
	${tw`
		w-full max-w-3xl rounded-lg lg:rounded-l-lg
	`}
`

export const InsideHeader = styled.div`
  ${tw`
    pb-8
  `}  
  p {
    ${tw`
      lg:mx-auto
    `}
    max-width: 728px;
  }
  h1 {
    color: ${({ theme }) => theme.colors['white']} ;
    font-weight: 100;
  }
  h2 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media only screen and (min-width: 768px) {
    h2 {
      max-width: 768px;
      margin: 0 auto;
    }
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
