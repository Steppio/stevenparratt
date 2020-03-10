/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import styled from "@emotion/styled"

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
  --bg-color: ${({ theme }) => theme.colors["white"]};
  display: inline-block;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors["background"]};
  padding: 1.05rem 3rem;
  border-radius: 2px;
  letter-spacing: 0.25em;
  font-weight: 700;
  margin: 25px 0 0 !important;

  color: ${({ theme }) => theme.colors["background"]};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  transition: all 200ms ease-in-out;
  color: ${({ theme }) => theme.colors["secondary"]};
  border: 2px solid ${({ theme }) => theme.colors["secondary"]};
  border-top: 0px;
  border-bottom: 0px;
  background: rgba(255,255,255,0.025);

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    font-size: 0.75em;
    min-width: 185px;
    padding: 15px 10px;
    width: 100%;  

  }
  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 0.75em;
  }

  :hover {
    filter: brightness(1);
    color: ${({ theme }) => theme.colors["white"]};
    border-left: 2px solid ${({ theme }) => theme.colors["white"]};
    border-right: 2px solid ${({ theme }) => theme.colors["white"]};
    background: ${({ theme }) => theme.colors["secondary"]};
  }
`
