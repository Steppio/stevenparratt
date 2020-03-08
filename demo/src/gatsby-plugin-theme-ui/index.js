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
    // secondary: "#4E7",
    secondary: "#59E19F",
    muted: "#535159",
    light: "#C6C3C9",
    white: "#fff"
  },
  textStyles,
  fonts: {
    body:
      '"Spartan", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: '"Spartan", Roboto, Helvetica, sans-serif',
    fontAwesome: "FontAwesome",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  sizes: {
    container: 1280,
  },
  space: [0, 8, 16, 32, 64, 128, 256],
  styles: {
    root: {
      ...commonUtilityClasses,
      background: "background",
    },
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      fontSize: 1,
      lineHeight: "text",
    },
    Header: {
      ":hover": {
        // background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(68,68,68,1) 0%, rgba(51,51,51,1) 100%)",
      },
      '.mobileNav': {
        '#menuToggle': {
          a: {
            ':hover': {
              color: 'secondary'
            },
            textDecoration: 'none',
            color: '#232323',
            transition: 'color 0.3s ease'
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
            m: '-100px 0 0 -50px',
            p: '50px',
            pt: '125px',
            background: '#ededed',
            listStyleType: 'none',
            fontSmoothing: 'antialiased',
            transformOrigin: '0% 0%',
            transform: 'translate(-100%, 0)',
            transition: 'transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0)',          
          },          
          input: {
            ":checked ~ span": {
              opacity: '1',
              transform: 'rotate(45deg) translate(-2px, -1px)',
              background: '#232323',
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
            background: 'secondary',
            borderRadius: '3px',
            zIndex: '1',
            transformOrigin: '4px 0px',
            transition: 'transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease',
          },
          display: 'block',
          position: 'relative',
          top: '50px',
          left: '50px',
          zIndex: '1',
          userSelect: 'none',
        },
        display: ['block', 'block', 'block', 'none']
      },      
      // backgroundColor: "secondary",
      background: "rgb(2,0,36)",
      background: "linear-gradient(180deg, rgba(2,0,36,0.75) 0%, rgba(68,68,68,0.75) 0%, rgba(51,51,51,0.75) 100%)",
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
        display: ['none', 'none', 'none', 'flex'],
        margin: "auto",
        width: "container",
        padding: "0px",
        maxWidth: '560px',
        float: 'right',
        pr: '0',
        justifyContent: "space-between",
        a: {
          padding: "33px",
          color: "secondary",
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
      h1: {
        span: {
          fontSize: ['1.75em', '1.75em', '3.5em', '3.5em'],
          color: 'white',
          ml: ['10px', '10px', '0', '0'],
          fontStyle: 'normal',
        },
        fontStyle: 'oblique',
        fontSize: ['1.75em', '1.75em', '2.25em', '2.75em'],
        mb: ['0', '2em'],
        color: 'secondary'
      },  
      h2: {
        fontSize: ['1.75em', '1.75em', '2.25em', '2.75em'],
        color: "secondary",
        textAlign: ['center', 'center', 'left', 'left'],
        mt: ['15px', '15px', '25px', '25px'],
        mb: ['20px', '20px', '1.666rem', '1.666rem'],
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
    p: {
      variant: "textStyles.body",
      fontSize: "1.55em",
      lineHeight: "1.6em"
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
