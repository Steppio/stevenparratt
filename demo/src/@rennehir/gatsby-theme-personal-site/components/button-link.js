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
        block mx-4 mt-4 md:inline-block w-full md:max-w-md text-black py-3 px-3 border-b-2 text-center lg:m-0
  `}
  font-family: 'Inter','Helvetica Neue','Helvetica','Arial',sans-serif;
  letter-spacing: 0.11em;
  font-size: 1.25em;
  width: -webkit-fill-available;
  background-color: #fff;
  border-color: #7b7b7b;
`
