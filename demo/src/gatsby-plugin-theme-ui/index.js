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
  breakpoints: ["36rem", "52rem", "64rem"],
  colors: {
    text: "#fff",
    heading: "#59E19F",
    background: "#333",
    primary: "#59E19F",
    secondary: "#59E19F",
    muted: "#535159",
    light: "#C6C3C9",
    white: "#fff"
  },
  textStyles,
  fonts: {
    body:
      '"Nunito Sans", sans-serif", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: '"Nunito Sans", sans-serif' ,
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
            li: {
              padding: '10px 0',
              fontSize: '22px',            
            },
            a: {
              ":hover": {
                color: 'secondary'
              },
              display: 'block', 
              borderBottom: 'initial',
              textAlign: 'center',
              maxWidth: '400px',
              margin: '0 auto',
              color: 'background'      
            },
            width: '100%',
            height: '100vh',
            position: 'absolute',
            m: '-67px 0 0 -50px',
            pt: '125px',
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
              transform: 'rotate(45deg) translate(-2px, -1px)',
            },
            ":checked ~ span:nth-last-child(3)": {
              opacity: '0',
              transform: 'rotate(0deg) scale(0.2, 0.2)',
            },
            ":checked ~ span:nth-last-child(2)": {
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
            backgroundColor: 'secondary',
            borderRadius: '3px',
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

      h1: {
        color: "white",
        fontFamily: "heading",
        float: "left",
        width: "300px",
        padding: 3,
        pl: '0',
        margin: '0'
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
      ".heroBanner": {        
        h1: {
          span: {
            fontSize: ['1.35em', '1.75em', '3.5em', '3.5em'],
            color: 'secondary',
            textAlign: 'center',
            ml: ['10px', '10px', '0', '0'],
            fontStyle: 'normal',
            borderBottom: '4px solid white',
          },
          mb: ['25px', '25px', '2em', '2em'],
          textAlign: 'center',
          color: 'white'
        },  
        h2: {
          color: "white",
          textAlign: ['center'],
          mt: ['22px', '22px', '25px', '25px'],
          mb: ['10px', '10px', '1.666rem', '1.666rem'],
        },
        "@media (min-width: 64rem)": {
          "h1": {
            "span": {
              borderBottom: '0px !important',
              fontSize: '3.51em',
              marginRight: '-10px',
              lineHeight: '0.65em',
            },
            textAlign: 'right',
            mb: 0,

          },
          "h2": {
            textAlign: 'right',
            marginTop: '10px',
            textTransform: 'lowercase',
            fontSize: '1.9em',           
          },
          lineHeight: "1.6em",
        },
        "@media (min-width: 1023px) and (max-width: 1260px)": {
          "h1": {
            span: {
              fontSize: '3.5em',
            },
            fontSize: '1.4em',
          },
        },
        "@media (max-width: 1023px)": {
          "h1": {
            "span": {
              fontSize: '2.2em',
              textAlign: 'center',
              marginLeft: '0px',
              display: 'block',
              borderBottom: '0px'              
            },
            fontSize: "1em",
            textAlign: "right",
            m: '20px 0 0', 
            float: 'right'
          },
          "h2": {
            textAlign: 'right',
            marginTop: '0px',
            marginBottom: '10px',
            fontSize: '0.62em',
            clear: 'both'
          },
          "img": {
            padding: '40px 0 20px'
          },
          p: '0'
        },        
      },
      ".about-section": {
        a: {
          ':nth-child(1)': {
            float: 'left',
          },
          ':nth-child(2)': {
            float: 'right',
          },   
          minWidth: '49%',
          p: ['15px 10px', '15px 10px', '1.05rem 3rem', '1.05rem 3rem']
        },
        "@media (max-width: 36rem)": {
          a: {
            minWidth: '100%',
          },
        },
      },
      ".headerLogo": {
        "@media (min-width: 1023px)": {
          pr: '120px',
        },
      },
      "#aboutSection": {
        p: {
          ":last-child": {
            mb: ['0px !important']
          },
        },
      },
      ".home-services, .benefits-page": {
        h3: {
          // "@media (max-width: 36rem)": {
            textAlign: 'center',
          // },
          m: ['20px 0 30px'],
          color: 'secondary'
        },
        p: {
          mb: ['5px'],
        },
        a: {
          m: ['20px 0 30px !important']
        }
      },
      h2: {
        textAlign: ['center', 'center', 'center', 'center'],
        color: 'secondary'
      },

      ".referencesContainer, .blogContainer": {
        "> section": {
          float: 'none',
          clear: 'both'
        },
      },
      ".referencesContainer": {
        ".slick-dots": {
          "li button": {
            ":before": {
              fontSize: '25px',
              color: 'secondary'
            },            
          },
        },
        "article": {
          maxWidth: '600px',
          margin: '0 auto'
        },
      },

      // home services
      ".home-services": {
        "h3": {
          fontSize: '1em',
          color: 'white'
        },
        "img": {
          maxWidth: '325px',
          margin: '0 auto'         
        },
        "p": {
          m: '0 auto',
          textAlign: 'center',
          p: '20px 25px',
          maxWidth: '400px'
        },
        "a": {
          maxWidth: '300px',
          m: '20px auto 30px !important'
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
        a: {
          borderBottom: '1px dashed rgba(255,255,255,0.5)',
        },
        "a:nth-last-of-type(1)": {
           borderBottom: '1px dashed rgba(255,255,255,0)',
        },
      },
      ".blogListing": {
        "p": {
          position: 'absolute',
          transform: 'rotate(-90deg)',
          mb: '0px',
          left: '-45px',
          color: 'secondary',
          top: '59px',
        }, 
        "h3": {
          ml: '46px',
          color: 'white',
          lineHeight: '1.45em',
          mt: '-12px'
        },
        "> div": {
          minHeight: '155px'
        },
      },

      // inside pages
      ".inside-header": {
        h1: {
          color: "secondary"
        },
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
      maxWidth: "container",
      width: "90vw",
    },
    Container: {
      img: {
        width: "100%",
      },
      padding: 0,
      maxWidth: "container",
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
        color: "secondary",
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
