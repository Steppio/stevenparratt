/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "@rennehir/gatsby-theme-personal-site",
      options: {
        siteTitle: "Steven Parratt - Freelance Web Developer - Liverpool, England",
        siteDescription:
          "Freelance Web Developer based in Liverpool, England. I specialise in high performance website development and e-commerce solutions.",
        siteUrl: "https://stevenparratt.co.uk",
        // Set your page's content's base paths
        blogBasePath: "/blog", // default: /blog
        portfolioBasePath: "/benefits", // default: /portfolio
        referencesBasePath: "/references", // default: /references
        servicesBasePath: "/services", // default: /services
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-160066070-1",
      },
    },    
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter\:100,300,400,900`,
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/content/assets/`,
        }
      }
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
          endpoint: `https://stevenparratt.us19.list-manage.com/subscribe/post?u=3096cb9893133c1cf1688eccf&amp;id=e0a18b0fb4`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }, 
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Steven Parratt - Freelance Web Developer - Liverpool, England`,
        short_name: `StevenParratt.co.uk`,
        start_url: `/`,
        icon: `${__dirname}/src/images/SPlogo.png`,
        display: `standalone`,
      },
    },       
  ],
}
