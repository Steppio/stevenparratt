/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.stevenparratt.co.uk`,
  },    
  plugins: [
      {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/benefits/*`, `/references/*`,  `/benefits`, `/references`],
      }
    },
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
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-160066070-1',
          // Setting this parameter is optional
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },    
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.stevenparratt.co.uk',
        sitemap: 'https://www.stevenparratt.co.uk/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Inter",
              variants: ["100", "300", "400"],
            }
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "stevenparratt",
      },
    },    
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
