/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const {
    footerYaml: { facebook, twitter, github, linkedin },
  } = useStaticQuery(graphql`
    query {
      footerYaml {
        facebook
        github
        linkedin
        twitter
      }
    }
  `)
  return (
    <div
      sx={{
        p: 3,
        width: "100%",
        backgroundColor: "primary",
        color: "white",
        textAlign: "center",
      }}
    >
      <div>
        {facebook && (
          <Link to={facebook} aria-label="Follow me on Facebook">
            <i className="fab fa-facebook" />
          </Link>
        )}
        {linkedin && (
          <Link to={linkedin} aria-label="Follow me on LinkedIn">
            <i className="fab fa-linkedin" />
          </Link>
        )}
        {github && (
          <Link to={github} aria-label="Follow me on GitHub">
            <i className="fab fa-github" />
          </Link>
        )}
        {twitter && (
          <Link to={twitter} aria-label="Follow me on Twitter">
            <i className="fab fa-twitter" />
          </Link>
        )}
      </div>
      <Styled.p sx={{ fontSize: "1.15em !important", color: "background", m: "10px 0 0 0" }}>
        ©{new Date().getFullYear()} |{" "}
        <a
          href="https://renne.tech"
          rel="noopener noreferrer"
          target="_blank"
          sx={{ 
            color: "background", 
            textDecoration: "none",
            m: "0",
            ":hover": { color: "white" },
            transition: "color 200ms ease-in-out",            
          }}
        >
          Steven Parratt
        </a>
      </Styled.p>
    </div>
  )
}

export default Footer

const Link = ({ to, children, ...props }) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      fontSize: 5,
      color: "background",
      mx: 2,
      ":hover": { color: "white" },
      transition: "color 200ms ease-in-out",
    }}
    {...props}
  >
    {children}
  </a>
)
