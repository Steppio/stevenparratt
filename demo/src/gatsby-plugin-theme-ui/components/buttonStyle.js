const buttonStyle = {
  display: 'inline-block',
  boxSizing: 'border-box',
  backgroundColor: 'background',
  padding: '1.05rem 3rem',
  borderRadius: '2px',
  letterSpacing: '0.25em',
  fontWeight: '700',
  margin: '25px 0 0 !important',
  color: 'background',
  textDecoration: 'none',
  textTransform: 'uppercase',
  textAlign: 'center',
  transition: 'all 200ms ease-in-out',
  color: 'secondary',
  border: '2px solid',
  borderColor: 'secondary',
  cursor: 'pointer',
  borderTop: '0px',
  borderBottom: '0px',
  background: 'rgba(255,255,255,0.025)',

  // "@media (max-width: ${({ theme }) => theme.breakpoints[0]})": {
  //   fontSize: '0.75em',
  //   minWidth: '185px',
  //   padding: '15px 10px',
  //   width: '100%',
  // },
  // @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
  //   font-size: 0.75em;
  // }

  ":hover": {
    filter: 'brightness(1)',
    color: 'white',
    borderLeft: '2px solid white',
    borderRight: '2px solid white',
    background: 'secondary',
  },
}

export default buttonStyle