/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const {
    footerYaml: { facebook, twitter, instagram, github, linkedin },
  } = useStaticQuery(graphql`
    query {
      footerYaml {
        facebook
        github
        instagram
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
        backgroundColor: "white",
        color: "black",
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
          <Link to={github} aria-label="Follow me on ">
            <i className="fab fa-github" />
          </Link>
        )}
        {instagram && (
          <Link to={instagram} aria-label="Follow me on Instagram">
            <i className="fab fa-instagram" />
          </Link>
        )}        
        {twitter && (
          <Link to={twitter} aria-label="Follow me on Twitter">
            <i className="fab fa-twitter" />
          </Link>
        )}
      </div>
      <Styled.p sx={{ fontSize: "0.8em !important", color: "background", m: "10px 0 0 0" }}>
        ©{new Date().getFullYear()} |{" "}
        <a
          href="https://www.stevenparratt.co.uk/"
          rel="noopener noreferrer"
          target="_blank"
          sx={{ 
            color: "background", 
            textDecoration: "none",
            m: "0",
            ":hover": { color: "#05382a" },
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
      ":hover": { color: "#05382a" },
      transition: "color 200ms ease-in-out",
    }}
    {...props}
  >
    {children}
  </a>
)
