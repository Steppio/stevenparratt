import { keyframes } from "@emotion/core"

export const down = keyframes`
  from {
    transform: translate3d(0,0,0);
    transition: text-shadow 1s linear;
    box-shadow: 1px 1px 0px #539a78, 3px 3px 0px #51643c;
  }
  to {
    transform: translate3d(0,50px,0);
    transition: text-shadow 1s linear;
    box-shadow: 4px 4px 0px #539a78, 7px 7px 0px #51643c;
  }
`

export const up = keyframes`
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(0,-50px,0);
  }
`

export const rotateDown = keyframes`
  from {
    transform: rotate(0deg) translate3d(0,0,0);
    transition: text-shadow 1s linear;
  }
  to { 
    transform: rotate(45deg) translate3d(0,75px,0);
    transition: text-shadow 1s linear;
  }  
`

export const diamondTurn = keyframes`
  from {
    transform: rotate(0deg);
  }
  to { 
    transform: rotate(45deg);
  } 
`

export const heroText = keyframes`
  0% {
    text-shadow: 4px 4px 0px #539a78, 7px 7px 0px #51643c;
    color: #59E19F;
  }
  50% {
    text-shadow: 3px 3px 3px #539a78, 5px 5px 0px #51643c;
    color: #77fcbb;
  }
  100% {
    text-shadow: 4px 4px 0px #539a78, 7px 7px 0px #51643c;
    color: #59E19F;
  }
`