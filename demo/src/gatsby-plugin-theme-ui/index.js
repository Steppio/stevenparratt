import commonUtilityClasses from "./commonUtilityClasses"
import textStyles from "./textStyles"

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
  space: [0, 8, 16, 32, 64, 96, 128, 256],
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
              display: 'block', 
              borderBottom: 'initial',
            },
            width: '100%',
            height: '100vh',
            position: 'absolute',
            m: '-67px 0 0 -50px',
            pt: '125px',
            pl: '0.5em',
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
            background: 'white',
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
        display: ['block', 'block', 'block', 'none']
      },      
      background: "rgb(2,0,36)",
      background: "linear-gradient(180deg, rgba(2,0,36,0.75) 0%, rgba(68,68,68,0.75) 0%, rgba(51,51,51,0.75) 100%)",
      fontWeight: "bold",
      margin: 0,
      position: 'fixed',    
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
        display: ['none', 'none', 'none', 'flex'],
        margin: "auto",
        width: "container",
        padding: "0px",
        maxWidth: '560px',
        float: 'right',
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
          background: "#333",
          color: "white",
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
            color: 'white',
            textAlign: 'center',
            ml: ['10px', '10px', '0', '0'],
            fontStyle: 'normal',
          },
          mb: ['25px', '25px', '2em', '2em'],
          textAlign: 'center',
          color: 'secondary'
        },  
        h2: {
          color: "secondary",
          textAlign: ['center', 'center', 'left', 'left'],
          mt: ['22px', '22px', '25px', '25px'],
          mb: ['10px', '10px', '1.666rem', '1.666rem'],
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
      "#aboutSection": {
        p: {
          ":last-child": {
            mb: ['0px !important']
          },
        },
      },
      ".home-services, .benefits-page": {
        h3: {
          "@media (max-width: 36rem)": {
            textAlign: 'center',
          },
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
      },

      ".referencesContainer, .blogContainer": {
        "> section": {
          float: 'none',
          clear: 'both'
        },
      },

      //blog
      ".blogContainer": {
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
      },
      ".inside-list > section": {
        pt: 0
      },

      // Contact
      ".contact_form": {
        maxWidth: '600px',
        margin: '0 auto'
      },
      ".constrain_content": {
        maxWidth: '600px',
        m: '0 auto'
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
      variant: "textStyles.quote",
      position: "relative",
      padding: 0,
      margin: 0,
      marginBottom: 3,
      boxSizing: "border-box",
      width: "75%", // Leave space for the quotes
      "::before, ::after": {
        variant: "textStyles.fontAwesome",
        position: "absolute",
        top: "0",
        color: "light",
        display: "block",
        zIndex: -1,
        margin: 1,
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
