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
  font-size: 1.25em;
  margin: 25px 0 0 !important;
  filter: brightness(1.15);

  color: ${({ theme }) => theme.colors["background"]};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  transition: all 200ms ease-in-out;
  color: ${({ theme }) => theme.colors["secondary"]};
  border: 3px solid ${({ theme }) => theme.colors["secondary"]};

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    font-size: 0.95em;
    min-width: 185px;
    padding: 15px 10px;

  }

  :hover {
    filter: brightness(1);
    color: ${({ theme }) => theme.colors["white"]};
    border: 3px solid ${({ theme }) => theme.colors["white"]};
  }
`
