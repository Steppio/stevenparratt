import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const Bubble = styled.div`
	&:before {
		content: "";
	    position: absolute;
		top: 3%;
		left: 4%;
		width: 90%;
		height: 90%;
	    border-radius: 100%;
	    background: radial-gradient(circle at top,white,rgba(255,255,255,0.9) 58%);
	    -webkit-filter: blur(5px);
	    filter: blur(4px);
	    z-index: 1001; 
	}
	&:after {
		content: "";
		position: absolute;
		display: none;
		top: 5%;
		left: 10%;
		width: 80%;
		height: 80%;
		border-radius: 100%;
		-webkit-filter: blur(1px);
		filter: blur(1px);
		z-index: 2;
		-webkit-transform: rotateZ(-30deg);
		transform: rotateZ(-30deg); }
		.ball .shadow {
		position: absolute;
		width: 100%;
		height: 100%;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.9) 40%, rgba(255, 255, 255, 0.8) 50%);
		-webkit-transform: rotateX(90deg) translateZ(-160px);
		transform: rotateX(90deg) translateZ(-160px);
		z-index: 1000; 		
	}
	@media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		display: inline-block;
	}
	border-radius: 100%;
	position: absolute;
    opacity: 1;
    z-index: 999; 
	background: radial-gradient(circle at bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.7) 37%,rgba(255,255,255,0.9) 60%,rgba(255,255,255,1) 100%);
`