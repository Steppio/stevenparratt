/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from 'tailwind.macro';

const ButtonLink = ({ children, to, ...props }) => {
  return (
    <S.Link {...props} to={to}>
      {children}
    </S.Link>
  )
}

export default ButtonLink

const S = {}

S.Link = styled(Link)`
  ${tw`
        block mx-4 mt-4 md:inline-block w-full md:max-w-md text-white py-3 px-3 border-b-4 rounded text-center
  `}
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
      max-width: 250px;
      min-width: 200px;
  }
  width: -webkit-fill-available;
  background-color: #59E19F;
  border-color: #3e9a6d;
`
