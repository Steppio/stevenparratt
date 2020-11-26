import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const AboutContainer = styled.div`
	${tw`
		max-w-4xl flex items-center h-auto flex-wrap mx-auto lg:my-0
	`}
	padding: 0 1.5rem;
`

export const Profile = styled.div`
	${tw`
		w-full lg:w-3/5 bg-black mx-6 lg:mx-0 text-white lg:pr-20
	`}
	@media only screen and (max-width: 1024px) {
		max-width: 500px;
		margin: 0 auto;
	}
`

export const ProfileImage = styled.div`
	${tw`
		w-full lg:w-2/5
	`}

	img {
		${tw`
			hidden lg:block
		`}
	}
`

export const ProfileDetail = styled.div`
	${tw`
		text-center lg:text-left p-0
	`}	

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
		color: ${({ theme }) => theme.colors['white']}
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

export const SocialBits = styled.div`
	${tw`
		pb-5 hidden md:flex lg:pb-0 w-4/5 lg:w-full mx-auto flex-wrap items-center
	`}
	&:hover {
		
	}
	a {
		color: white !important;
		margin: 0 29px 0px;
	}
	a svg {
		font-size: 2em;
		transform: scale(1.5);
	}
	a svg {
		max-width: 35px;
	}
	margin-top: 80px;
	width: 105px;
	@media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		width: 250px;
	}
`

export const ProfileButton = styled.div`
	${tw`
		pt-8 pb-2
	`}
	a {
		margin: 0px;
	}	
`

export const ProfileDescription = styled.div`
	${tw`
		pt-2 text-sm text-left leading-6
	`}

	a {
		color: ${({ theme }) => theme.colors['white']};
		font-weight: 600;
	}
`

export const ProfileMobileImg = styled.div`
	${tw`
		mx-auto lg:mx-0 w-4/5 pt-3
	`}
	 clear: both;
	 border-color: ${({ theme }) => theme.colors['black']};
	 width: 100%;
`

export const ProfileCircle = styled.div`
	${tw`
		block hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center
	`}
`