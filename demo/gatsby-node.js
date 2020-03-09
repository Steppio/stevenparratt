// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   const result = await graphql(`
//     query {
//       blogPosts: allBlogPost(sort: { fields: [date, title], order: DESC }) {
//         edges {
//           node {
//             id
//             slug
//           }
//           previous {
//             id
//             slug
//             title
//           }
//           next {
//             id
//             slug
//             title
//           }
//         }
//       }
//       portfolioItems: allPortfolioItem(
//         sort: { fields: [publishedDate, title], order: DESC }
//       ) {
//         edges {
//           node {
//             id
//             slug
//           }
//           previous {
//             id
//             slug
//             title
//           }
//           next {
//             id
//             slug
//             title
//           }
//         }
//       }
//       references: allReference(
//         sort: { fields: [publishedDate, name], order: DESC }
//       ) {
//         edges {
//           node {
//             id
//             slug
//           }
//           previous {
//             id
//             slug
//             name
//           }
//           next {
//             id
//             slug
//             name
//           }
//         }
//       }
//       services: allService {
//         edges {
//           node {
//             id
//             slug
//           }
//           previous {
//             id
//             slug
//             title
//           }
//           next {
//             id
//             slug
//             title
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.panic(result.errors)
//   }

//   const { blogPosts, portfolioItems, references, services } = result.data

//   // Create pages for each post
//   blogPosts.edges.forEach(({ node: post, previous, next }) => {
//     const { id, slug } = post

//     createPage({
//       path: slug,
//       component: BlogPostTemplate,
//       context: {
//         id,
//         previous,
//         next,
//         basePaths,
//       },
//     })
//   })

//   // Create pages for each portfolio item
//   portfolioItems.edges.forEach(({ node: item, previous, next }) => {
//     const { id, slug } = item

//     createPage({
//       path: slug,
//       component: PortfolioItemTemplate,
//       context: {
//         id,
//         previous,
//         next,
//         basePaths,
//       },
//     })
//   })

//   // Create pages for each reference
//   references.edges.forEach(({ node: reference, previous, next }) => {
//     const { id, slug } = reference

//     createPage({
//       path: slug,
//       component: ReferenceTemplate,
//       context: {
//         id,
//         previous,
//         next,
//         basePaths,
//       },
//     })
//   })

//   // Create pages for each service
//   services.edges.forEach(({ node: service, previous, next }) => {
//     const { id, slug } = service

//     createPage({
//       path: slug,
//       component: ServiceTemplate,
//       context: {
//         id,
//         previous,
//         next,
//         basePaths,
//       },
//     })
//   })

//   // Create front page
//   createPage({
//     path: "/",
//     component: FrontpageTemplate,
//     context: {
//       heading: "Home",
//       showInNavigation: true,
//       basePaths,
//     },
//   })

//   // Create services index page
//   createPage({
//     path: basePaths.servicesBasePath,
//     component: ServicesTemplate,
//     context: {
//       heading: "Services",
//       showInNavigation: true,
//       basePaths,
//     },
//   })

//   // Create portfolio index page
//   createPage({
//     path: basePaths.portfolioBasePath,
//     component: PortfolioTemplate,
//     context: {
//       heading: "Benefits",
//       showInNavigation: true,
//       basePaths,
//     },
//   })

//   // Create blog index page
//   createPage({
//     path: basePaths.blogBasePath,
//     component: BlogPostsTemplate,
//     context: {
//       heading: "Blog",
//       showInNavigation: true,
//       basePaths,
//     },
//   })

//   // Create references index page
//   createPage({
//     path: basePaths.referencesBasePath,
//     component: ReferencesTemplate,
//     context: {
//       heading: "References",
//       showInNavigation: false,
//       basePaths,
//     },
//   })
// }
