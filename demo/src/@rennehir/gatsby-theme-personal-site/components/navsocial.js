// /** @jsx jsx */
// import { jsx, Styled } from "theme-ui"
// import { useStaticQuery, graphql } from "gatsby"

// const Navsocial = () => {
//   	const data = useStaticQuery(graphql`
// 		query {
// 			footerYaml {
// 				facebook
// 				github
// 				linkedin
// 				twitter
// 			}
// 		}
//   	`)

// 	return (
// 		<div
// 			sx={{
// 				p: 3,
// 				width: "100%",
// 				backgroundColor: "primary",
// 				color: "white",
// 				textAlign: "center",
// 			}}
// 		>
// 	      	<div>
// 		        {data.footerYaml.facebook && (
// 					<Link to={data.footerYaml.facebook} aria-label="Follow me on Facebook">
// 						<i className="fab fa-facebook" />
// 					</Link>
// 		        )}
// 		        {data.footerYaml.linkedin && (
// 					<Link to={data.footerYaml.linkedin} aria-label="Follow me on LinkedIn">
// 						<i className="fab fa-linkedin" />
// 					</Link>
// 		        )}
// 		        {data.footerYaml.github && (
// 					<Link to={data.footerYaml.github} aria-label="Follow me on GitHub">
// 						<i className="fab fa-github" />
// 					</Link>
// 		        )}
// 		        {data.footerYaml.twitter && (
// 					<Link to={data.footerYaml.twitter} aria-label="Follow me on Twitter">
// 						<i className="fab fa-twitter" />
// 					</Link>
// 		        )}
// 	      	</div>

//     	</div>
//   	)	
// }

// export default Navsocial

// const Link = ({ to, children, ...props }) => (
//   <a
//     href={to}
//     target="_blank"
//     rel="noopener noreferrer"
//     sx={{
//       fontSize: 5,
//       color: "background",
//       mx: 2,
//       ":hover": { color: "white" },
//       transition: "color 200ms ease-in-out",
//     }}
//     {...props}
//   >
//     {children}
//   </a>
// )