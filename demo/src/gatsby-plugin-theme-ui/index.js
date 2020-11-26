import commonUtilityClasses from "./commonUtilityClasses"
import textStyles from "./textStyles"
import contactForm from "./contactForm"
import buttonStyle from './components/buttonStyle'
import benefitsPage from './pages/benefits'
import insideService from './pages/inside-services'

/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  breakpoints: ["640px", "767px", "1024px", "1280px"],
  colors: {
    text: "#fff",
    heading: "#59E19F",
    background: "#000",
    primary: "#59E19F",
    secondary: "#59E19F",
    muted: "#535159",
    light: "#C6C3C9",
    white: "#fff"
  },
  textStyles,
  fonts: {
    body:
      '"Inter", sans-serif", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: '"Inter", sans-serif' ,
    fontAwesome: "FontAwesome",
  },
  sizes: {
    container: 1280,
  },
  space: [0, 8, 16, 32, 64, 120, 128, 256, 180],
  styles: {
    root: {
      ...commonUtilityClasses,
      background: "background",
    },
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      lineHeight: "text",
    },
    Header: {
      '.mobileNav': {
        '#menuToggle': {
          a: {
            ':hover': {
              color: 'secondary'
            },
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          },
          '#menu': {
            "div > div": {
              position: 'absolute',
              right: '0',
              top: '60px'
            },
            li: {
              padding: '10px 0',
              fontSize: '22px',            
            },
            a: {
              ":hover": {
                color: '#05382a'
              },
              fontSize: '2.25em',
              display: 'block', 
              borderBottom: 'initial',
              textAlign: 'center',
              maxWidth: '290px',
              margin: '0 auto',
              color: 'background'      
            },
            "> a:nth-of-type(3)": {
              display: 'none',
            },
            width: '100%',
            height: '100vh',
            position: 'absolute',
            m: '-67px 0 0 -50px',
            pt: '60px',
            pl: '0.5em',
            backgroundColor: 'white',
            listStyleType: 'none',
            fontSmoothing: 'antialiased',
            transformOrigin: '0% 0%',
            transform: 'translate(-100%, 0)',
            transition: 'transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0)',          
          },  
          ".menuBorder": {
            span: {
              background: 'secondary',
            },
          },       
          input: {
            ":checked ~ span": {
              opacity: '1',
              backgroundColor: 'black',
              transform: 'rotate(45deg) translate(-2px, -1px)',
            },
            ":checked ~ span:nth-of-type(2)": {
              opacity: '0',
              transform: 'rotate(0deg) scale(0.2, 0.2)',
            },
            ":checked ~ span:nth-of-type(3)": {
              transform: 'rotate(-45deg) translate(0, -1px)',
            },
            ":checked ~ ul": {
              transform: 'none !important',
            },
            display: 'block',
            width: '40px',
            height: '32px',
            position: 'absolute',
            top: '-7px',
            left: '-5px',
            cursor: 'pointer',
            opacity: '0',
            zIndex: '2',
            touchCallout: 'none'
          },          
          span: {
            ":first-child": {
              transformOrigin: '0% 0%',
            },
            ":nth-last-child(2)": {
              transformOrigin: '0% 100%',
            },
            display: 'block',
            width: '33px',
            height: '4px',
            mb: '5px',
            position: 'relative',
            backgroundColor: '#adadad',
            zIndex: '1',
            transformOrigin: '4px 0px',
            transition: 'transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease',
          },
          display: 'block',
          position: 'relative',
          top: '40px',
          left: '1em',
          zIndex: '1',
          userSelect: 'none',
        },
        display: ['block', 'block', 'block', 'block']
      },      
      "> div": {
        maxWidth: '100%'
      },
      background: "transparent",
      // background: "linear-gradient(180deg, rgba(2,0,36,0.75) 0%, rgba(68,68,68,0.75) 0%, rgba(51,51,51,0.75) 100%)",
      fontWeight: "bold",
      margin: 0,
      position: 'fixed', 
      width: '100%',
      zIndex: '1000',

      h1: {
        color: "white",
        fontFamily: "heading",
        float: "left",
        width: "300px",
        padding: 3,
        pl: '0',
        margin: '0'
      },
      p: {
        fontSize: "1.25em",
        fontWeight: "100",
        lineHeight: "1.75em",
        marginBottom: "55px",
      },
      nav: {
        display: ['none', 'none', 'none', 'none'],
        margin: "auto",
        width: "100%",
        padding: "0px",
        pr: '0',
        justifyContent: "space-between",
        ul: {
          backgroundColor: 'secondary',
        },
        a: {
          padding: "33px",
          color: "white",
          textDecoration: "none",
          fontWeight: '100',
          letterSpacing: '0.2em',
          fontSize: '1.25em',
          margin: '0 5px',
          fontFamily: "heading",
        },
        "a:hover": {
          background: "rgba(0,0,0,0.025)",
          color: "secondary",
          borderBottom: "5px dashed",
          borderColor: "white"       
        },
        "a:last-child": {
          background: "muted"
        },
        "a[aria-current='page']": {
          borderBottom: "5px dashed",
          borderColor: "secondary",
          background: "muted",
          color: "white"
        },
        "a[aria-current='page']:hover": {
          borderColor: "white",
        },
      },
    },
    Main: {
      "#aboutSection, #contactSection, #serviceSection, .blogContainer, .referencesContainer": {
        py: ['5em', '', '', '', '']
      },
      ".service-header": {
        color: 'background'
      },
      ".about-header": {
        color: 'white'
      },
      ".green-bg": {
        background: '#59E19F'
      },
      h3: {
        fontSize: ['1.25em', '', '', '', ''],
      },      
      ".heroBanner": {        
        h1: {
          span: {
            color: 'secondary',
            fontStyle: 'normal',
          },
          color: 'white'
        },  
        h2: {
          color: "white",
        }, 
        
      },
      "#aboutSection": {
        ".about-left": {
          a: {
            color: '#000',
            fontWeight: '700',
            textDecoration: 'none',
            fontStyle: 'oblique'
          }
        },      
      },
      "#serviceSection": {
        background: "#fff"
      },
      "p": {
        "strong": {
          color: "#000",
          color: "#333",
          fontWeight: "600"
        },
      },
      ".home-services, .benefits-page": {
        h3: {
          // "@media (max-width: 36rem)": {
          // },
          m: ['20px 0 30px'],
          color: 'white'
        },
      },
      h2: {
        textAlign: ['center', 'center', 'center', 'center']
      },

      ".referencesContainer, .blogContainer": {
        "> section": {
          float: 'none',
          clear: 'both'
        },
      },
      ".referencesContainer": {
        ".slick-dots": {
          py: ['30px', '30px', '30px', '30px'],
          "li button": {
            ":before": {
              fontSize: '25px',
              color: 'background'
            },            
          },
        },
        "h4": {
          color: 'background',
          fontWeight: '500'
        },
        "article": {
          maxWidth: '610px',
          margin: '0 auto'
        },
      },

      //benefits page
      ".benefits-list": {
        ...benefitsPage
      },

      //services inside page
      ".inside-page": {
        ...insideService
      },

      p: {
        mb: "15px"
      },

      //blog
      ".blogContainer": {
        "> section > a": {
          margin: '0 auto !important',
          float: 'none',
          display: 'block',
          maxWidth: '300px',          
        },
        h3: {
          mb: 0,
        },
      },

      // inside pages
      ".inside-header": {
        textAlign: 'center',
        pt: 5,
      },
      ".inside-list": {
        h2: {
          display: 'none'
        },
        "> section": {
          float: 'initial',
        },
      },
      ".inside-list > section": {
        pt: 0
      },

      // Contact
      ...contactForm,

      // button Styles
      ".buttonStyles": {
        ...buttonStyle,
      },
      margin: "0 auto",
      width: "100%"
    },
    Container: {
      img: {
        width: "100%",
      },
      padding: 0,
      maxWidth: "100%"
    },
    a: {
      variant: "textStyles.body",
      color: "primary",
    },
    img: {
      maxWidth: "100%",
    },
    blockquote: {
      position: "relative",
      padding: 0,
      margin: 0,
      color: 'background',
      textAlign: 'center',
      marginBottom: 3,
      boxSizing: "border-box",
      width: "100%", // Leave space for the quotes
      "h4": {
        color: 'secondary',
      },
      "::before, ::after": {
        variant: "textStyles.fontAwesome",
        position: "absolute",
        top: "0",
        display: "block",
        zIndex: -1,
        margin: 1,
        display: ['none', 'none', 'block', 'block']
      },
      "::before": {
        content: '"\f10d"',
        fontSize: 8,
        left: "-58px",
        top: "-66px",
        "@media (min-width: 36rem)": {
          top: "initial",
          left: "initial",
          right: "100%",
          marginRight: 2,
          fontSize: 6,
        },
      },
      "::after": {
        "@media (min-width: 36rem)": {
          content: '"\f10e"',
          left: "100%",
          marginLeft: 2,
          fontSize: 6,
        },
      },
    },
  },
}
