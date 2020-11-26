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
	flex-direction: column;
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 100%;
	box-sizing: border-box;
	max-width: 728px;
	background-color: #000 !important;
  h3 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 60px;
    font-weight: 100;
    font-size: 1.8em;    
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 100%;
  }
  @media (min-width: 0px) and (max-width: 768px) {
    .service-image {
      width: 100%;
      max-width: initial !important;
    }
    .service-detail p {
      margin: 0 !important;
      padding: 0 20px 20px;
      max-width: 100% !important;
    }
    .service-detail a {
      margin-bottom: 20px;
    }
    max-width: 500px; 
  }
  @media (min-width: 768px) {
    h3 {
      font-size: 2em;
      padding-bottom: 10px;
    }
    .service-track {
      max-height: 245px;
      position: absolute;
      height: 400px;
    }
    .service-track-container {
      height: 255px;
    } 
    .service-track .service-image, .service-track .service-detail {
      width: 50%;
    }   
    .service-track .service-image {
      float: left;
    }
    .service-track .service-detail {
      float: right;
    }
    .service-detail.track-content p {
      padding: 0px;
    }
  }
  @media (min-width: 768px) and (max-width: 1178px) {
    .service-track-container {
      margin-top: 20px;
    }
    .service-detail {
      text-align: center;
    }
    .service-detail a {
      text-align: center;
      margin-top: 0px;
      margin-bottom: 20px;
    }    
    .service-detail.track-content p {
      text-align: left;
    }
    .service-track {
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
    }
    .service-track {
      // width: 602px;    
    }    
  }
	@media (min-width: 1179px) {
    &:hover {
      h3 {
        color: rgba(239, 255, 247, 1);
      }
      .service-detail a {
        transform: scale(1.025);
      }
      .service-track {
        animation: slide-in 0.5s forwards;
        -webkit-animation: slide-in 0.5s forwards;    
      }
    }    
    h3 {
      font-size: 1.8em;
      padding-bottom: 10px;
    }    
    .service-image img {
      // right: 30px;
    }
    ${tw`
      mx-4
    `}
    .service-track {
      width: 610px;    
    }     
		max-width: 350px;
		flex-direction: column;
		padding-top: 40px;
		padding-bottom: 60px;
	}

  @keyframes slide-in {
      100% { transform: translateX(-50%); }
  }

  @-webkit-keyframes slide-in {
      100% { -webkit-transform: translateX(-50%); }
  }
      
  @keyframes slide-out {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0%); }
  }

  @-webkit-keyframes slide-out {
      0% { -webkit-transform: translateX(-50%); }
      100% { -webkit-transform: translateX(0%); }
  }

  .slide-in {
      animation: slide-in 0.5s forwards;
      -webkit-animation: slide-in 0.5s forwards;
  }

  .slide-out {
      animation: slide-out 0.5s forwards;
      -webkit-animation: slide-out 0.5s forwards;
  }

  .service-track-container {
    position: relative;
    overflow: hidden;
  }
  .service-track {
    ${tw`
      clearfix
    `}

    top: 0px;
    animation: slide-out 0.5s forwards;
    -webkit-animation: slide-out 0.5s forwards;        
  }

  .service-track .service-image {
    max-width: 302px;
  }
  .service-track .service-detail p {
    max-width: 300px;
    margin-top: 30px;
  } 
  .service-detail a {
    transition: all .2s ease-in-out;
  }      

  ${tw`
      p-6 sm:py-10 mb-0 my-2
  `}

  .service-image img {   
  	${tw`
  		mb-0
  	`}
    @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		max-height: 245px;
		width: 100% !important;
		max-width: 302px;
		margin: 0 auto;
		position: relative; 
  }
	@media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    	float: left;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    	min-height: 240px;
    	right: 0px;
    }
  }

  .service-detail h3 {
	${tw`
		mt-8 sm:mt-3 lg:mt-8
	`}  	
    font-size: 1.5em;
    text-align: left;
    color: #fff;

  }
  .service-detail p {
  	${tw`
  		mt-3 mb-4 leading-relaxed
  	`}
  .service-detail a {
    background: rgba(255,255,255,1);
    text-align: center;
    letter-spacing: 0.05em;
    max-width: 332px;
    width: 100%;
    color: #000;
    float: left;
    margin-top: 40px;
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
