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
  background-color: var(--bg-color);
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
  border: 5px dashed rgba(255,255,255,0);

  :hover {
    filter: brightness(1);
    color: ${({ theme }) => theme.colors["secondary"]};
    border: 5px solid ${({ theme }) => theme.colors["secondary"]};
  }
`
