import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const Doughnut = styled.div`
	position: absolute;
    height: 130px;
    width: 130px;
    background-color: transparent;
    border: ${({ theme }) => theme.colors['primary']};
    border-style: solid;
    box-shadow: 4px 4px 0px #539a78, 7px 7px 0px #51643c;
    border-radius: 9999px;
    top: 365px;
    left: -65px;
    opacity: 0.4;
    border-width: 20px;
    @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    	top: 460px;
    	opacity: 0.5;
    	border-width: 30px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    	border-width: 35px;
    	height: 170px;
    	width: 170px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
	    left: -75px;
	    height: 185px;
	    width: 185px;
	    top: 400px;
	    border-width: 40px;
	}
`

export const Star = styled.div`
	&:before {
		border-bottom: 80px solid ${({ theme }) => theme.colors['primary']};;
		border-left: 30px solid transparent;
		border-right: 30px solid transparent;
		position: absolute;
		height: 0;
		width: 0;
		top: -45px;
		left: -65px;
		display: block;
		content: '';
		transform: rotate(-35deg);		
	}
	:after {
		position: absolute;
		display: block;
		color: red;
		top: 3px;
		left: -105px;
		width: 0px;
		height: 0px;
		border-right: 100px solid transparent;
		border-bottom: 70px solid ${({ theme }) => theme.colors['primary']};
		border-left: 100px solid transparent;
		transform: rotate(-70deg);
		content: '';		
	}
	margin: 50px 0;
	position: absolute;
	display: block;
	color: ${({ theme }) => theme.colors['primary']};
	width: 0px;
	height: 0px;
	right: 50px;
	border-right: 100px solid transparent;
	border-bottom: 70px solid ${({ theme }) => theme.colors['primary']};
	border-left: 100px solid transparent;
	transform: rotate(35deg);	
`

export const Diamond = styled.div`
	&:after {
		content: '';
		position: absolute;
		left: -25px;
    	top: 29px;
		width: 0;
		height: 0;
		border: 25px solid transparent;
		border-top-color: rgba(89,225,159,0.3);
		@media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
			border: 45px solid transparent;
			border-top-color: rgba(89,225,159,0.3);
			left: -45px;
			top: 48px;			
		}
	}
    width: 0;
    height: 0;
    position: absolute;
    top: 51px;
    right: 50px;
    border: 25px solid transparent;
    border-bottom-color: rgba(89,225,159,0.3);
    @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		border: 45px solid transparent;
		border-bottom-color: rgba(89,225,159,0.3);
		top: 5px;
	}
`

export const Cross = styled.div`
	&:after {
		background: #fff9;
		content: "";
		height: 15px;
		left: -22px;
		position: absolute;
		top: 20px;
		width: 60px;
		@media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
			top: 40px;
			width: 100px;
			height: 20px;
			left: -40px;
		}
		@media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
			height: 35px;
			top: 55px;
			width: 150px;
			left: -59px;
		}
	}
	@media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		width: 20px;
		height: 100px;
		right: 25px;
		opacity: 0.4;
		bottom: 13rem;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		width: 35px;
		height: 150px;
	}
	opacity: 0.2;
	width: 15px;
	height: 60px;	
	background: #fff9;
	position: absolute;
	right: 10px;
	bottom: 3rem;
	
`