import styled from '@emotion/styled'
import tw from 'tailwind.macro'

// Homepage service container
export const ServiceContainer = styled.div`
  ${tw`
    mx-4
  `}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

// Homepage service cards
export const ServiceArticle = styled.article`
	display: flex;
	flex-direction: row;
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 100%;
	box-sizing: border-box;
	max-width: 728px;
	background-color: #333 !important;
	border: 3px solid white;
	border-radius: 10px !important;
	border-bottom-color: white;
	border-right-color: white;
	border-top-color: #44a978;
	border-left-color: #44a978;
	@media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    ${tw`
      mx-4
    `}
		max-width: 350px;
		flex-direction: column;
		padding-top: 40px;
		padding-bottom: 60px;
	}

  :last-of-type {
    margin-bottom: 0px !important;
  }

  ${tw`
      p-6 sm:py-10 mb-0 my-2
  `}

  .service-image img {   
  	${tw`
  		mb-0
  	`}
    opacity: 0.4;
    filter: grayscale(60%); 	
    @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		max-height: 245px;
		width: 145%;
		max-width: 325px;
		margin: 0 auto;
		position: relative; 
  }
	@media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    	right: 30px;
    	float: left;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    	min-height: 240px;
    	right: 0px;
    }
  }

  .service-detail {
		@media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
			${tw`
				mx-10		
			`}
	  }
  }

  .service-detail h3 {
	${tw`
		mt-8 sm:mt-3 lg:mt-8
	`}  	
    font-size: 1.5em;
    text-align: left;
    color: #59E19F;
  }
  .service-detail p {
  	${tw`
  		mt-3 mb-4 leading-relaxed
  	`}
	@media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
  		margin-right: 25px;
  	}
  	@media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
  		max-width: 400px;
  	}
    color: #ededed !important;
  }
  .service-detail a {
  	@media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
  		max-width: 250px;
  	}
    background: rgba(255,255,255,0.1);
    text-align: center;
    letter-spacing: 0.05em;
    max-width: 332px;
    width: 100%;
    color: #59E19F;
    float: left;    
  }

  .service-image {
  	${tw`
  		mt-3 mb-0 sm:my-0 sm:mx-4 lg:mx-0
  	`}
  	@media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		min-width: 265px;
  	}
    overflow: hidden;
  }

  @media (max-width: 46rem) {
    flex-direction: column;
  }

  @media (min-width: 425px) and (max-width: 730px) {
		h3 {
			text-align: center !important;
			margin-top: 0px;
		}
		p {
			text-align: left;
			max-width: 329px;
			margin: 15px auto 25px;  		
		}
		a {
			margin: 0 auto !important;
			float: none !important;
		}
	}
`
