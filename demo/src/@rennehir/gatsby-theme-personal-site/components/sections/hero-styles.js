import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const Section = styled.section`
  ${tw`
      py-12
  `}
  display: block;
  margin-bottom: 0px;
  position: relative;
  height: 90vh;

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    background-size: 100%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: 85vh;
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
    top: 45%;
  }
  position: absolute;
  top: 50%;
  left: 0%;
  right: 0;
  transform: translate(0%, -50%);
  -webkit-transform: translate(0%, -50%);
`

export const Myname = styled.div`
  ${tw`
      text-4xl
  `}
  font-family: 'Dancing Script';
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
      text-4xl
  `}
  font-family: 'Dancing Script';
  text-shadow: 2px 2px 4px #0000008f;
  margin-top: 20px;
  transform: rotate(-5deg);
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    font-size: 3.25em;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 3.25rem;
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
  position: absolute;
  bottom: 10px;
  width: 100%;
  grid-area: buttons;
`