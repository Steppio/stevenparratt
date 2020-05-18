import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const AboutContainer = styled.div`
	${tw`
		max-w-4xl flex items-center h-auto flex-wrap mx-auto lg:my-0
	`}
`

export const Profile = styled.div`
	${tw`
		w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white mx-6 lg:mx-0
	`}
	background-color: rgba(255, 255, 255, 0.1);
`

export const ProfileImage = styled.div`
	${tw`
		w-full lg:w-2/5
	`}

	img {
		${tw`
			rounded-none lg:rounded-lg shadow-2xl hidden lg:block
		`}
	}
`

export const ProfileDetail = styled.div`
	${tw`
		p-4 md:p-12 text-center lg:text-left
	`}	

	.profileTop .socialbits {
		${tw`
			mt-6 pt-3 pb-5 hidden md:flex lg:pb-0 w-4/5 lg:w-full mx-auto flex-wrap items-center
		`}
		margin-top: 3px;
		width: 105px;
		@media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
			width: 125px;
		}
	    float: right;
	}
	.profileTop .socialbits a svg {
		max-width: 35px;
	}

	.profileTop {
	}

	h1 {
		${tw`
			font-bold pt-4 lg:pt-8 lg:pt-0 tracking-wider float-left
		`}
		font-size: 1.5em;
		@media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
			${tw`
				text-3xl
			`}
		}
		color: ${({ theme }) => theme.colors['secondary']}
	}

	svg {
		${tw`
			h-6 fill-current text-teal-700 pr-4
		`}
		color: ${({ theme }) => theme.colors['secondary']}
	}

	a.last svg {
		padding-right: 0px;
	}

	.p1 {
		${tw`
			pt-4 text-base flex items-start justify-start md:items-center md:justify-start lg:justify-start
		`}
	}

	.p2 {
		${tw`
			pt-2 flex items-start justify-start md:items-center md:justify-start lg:justify-start
		`}
	}
`

export const ProfileButton = styled.div`
	${tw`
		pt-2 pb-2
	`}
	a {
		margin: 0px;
	}	
`

export const ProfileDescription = styled.div`
	${tw`
		pt-2 text-sm text-left
	`}

	a {
		color: ${({ theme }) => theme.colors['secondary']}
	}
`

export const ProfileMobileImg = styled.div`
	${tw`
		mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 opacity-25 
	`}
	 clear: both;
	 border-color: ${({ theme }) => theme.colors['secondary']};
	 width: 100%;
`

export const ProfileCircle = styled.div`
	${tw`
		block hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center
	`}
`