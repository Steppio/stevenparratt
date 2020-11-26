import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const Section = styled.section`
  ${tw`
      py-12
  `}
  display: block;
  margin-bottom: 0px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    background-size: 100%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
  } 

  .constrain_content {
    @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
      max-width: 560px;
    }
    max-width: 768px;
    margin: 0 auto;
  }

  .hero-down-who {
    @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
      float: left;
    }
  }
`

export const stevenparrattsvg = styled.div`
  ${tw`
      max-w-sm
  `}  
`

export const TextContainer = styled.div`
  ${tw`
      mx-auto mt-0
  `}
  h1 {
    ${tw`
      text-center text-2xl
    `}
  }
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    
  }
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    h2 {
      text-align: left;
      font-size: 1em;
    } 
    margin-top: 0px;
    position: absolute;
  }
  margin-top: 20px;
  bottom: 95px;
  right: 130px;
  transform: translate(0%, -50%);
  -webkit-transform: translate(0%, -50%);
`

export const Myname = styled.div`
  ${tw`
      text-4xl
  `}
  text-shadow: 2px 2px 4px #0000008f;
  transform: rotate(-5deg);
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    font-size: 2.5em;
  }    
  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 3.25rem;
  }  
  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {

  }
`

export const Andim = styled.h2`
  ${tw`
      text-4xl clearfix
  `}
  text-align: left;
  font-weight: 100;
  font-size: 1.2em;
  letter-spacing: 0.1em;
  line-height: 1.25em;
  margin-top: 0px;  
  text-shadow: 2px 2px 4px #0000008f;
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    font-size: 1.5em;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 1.5rem;
  }
`

export const Name = styled.span`
  ${tw`
      text-8xl
  `}
  margin-top: 5px;
  font-family: 'Fredoka One';
  transform: rotate(-5deg);
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    font-size: 6em;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 7em;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-top: -22px;
  }
`

export const ImageContainer = styled.div`
  ${tw`
    lg:pt-20
  `}
  .hero-down-desktop {
    @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
      display: block
    }
    @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
      display: inline-block
    }
    margin: 0 auto 20px;
    display: none;
  }
  .hero-down-mobile {
    display: block;
    @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
      display: none;
    }
  }
  bottom: 10px;
  width: 100%;
  grid-area: buttons;
`