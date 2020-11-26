import React from "react"
import validator from 'email-validator'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Link from "gatsby-link"
import styled from "@emotion/styled"
import { ContactFormContainer } from '../componentStyle'
import tw from 'tailwind.macro';

import ButtonLink from "../button-link"

class ContactForm extends React.Component {
  render() {
    const showEmailError = this.emailNode && !this.props.emailIsValid
    return (
    	<ContactFormContainer>
			<form
				onChange={this.props.onChange}
				onSubmit={this.props.onSubmit}
				className='shadow-md mb-0'
				id="myForm"
			>

				<div class="mb-4">
					<label class="text-left color-white text-gray-200 block text-sm mb-2" for="Name">Name *</label>
					<input required name='Name' ref={node => (this.nameNode = node)} className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" placeholder="Name" />
				</div>
				<div class="mb-4">
					<label class="block text-left color-white text-gray-200 text-sm mb-2" for="email">Email *</label>
					<input ref={node => (this.emailNode = node)} className={`${showEmailError ? 'shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pv2 ba b--light-red' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}`} id="email" name="email" type="email" placeholder="Email" />
				</div>
				<div class="mb-4">
					<label class="block text-left color-white text-gray-200 text-sm mb-2" for="Message">Message *</label>
					<textarea id="Message" required name='Message' placeholder='Message' className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
		              ref={node => (this.messageNode = node)}
		            ></textarea>
				</div>
				<p>
					<label class="container">I'm happy to be contacted
						<input type="checkbox" />
						<span class="checkmark"></span>
					</label>
				</p>

				<div id="errorMessages"></div>
								
				<div class="flex items-center justify-between">
			        <S.Button>Submit</S.Button>
				</div>

	      	</form>
      </ContactFormContainer>
    )
  }
}

export default class Form extends React.Component {

	state = {
		name: '',
		email: '',
		message: '',
		earlyAccess: false,
		emailIsValid: false,
		// submitted: false
	}

	validateEmail = () => {
		console.log(this.state.email);

		this.setState({emailIsValid: validator.validate(this.state.email)})
	}

	updateValues = (e) => {
		// e.preventDefault()
		if(e.target.type == 'checkbox') {
			this.setState({[e.target.name]: e.target.checked})
		}
		else {
			this.setState({[e.target.name]: e.target.value})
			this.validateEmail()
		}
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const { name, email, message, earlyAccess } = this.state

		var listFields = {
			MMERGE1: name,
			MMERGE2: email,
			MMERGE4: message,
			MMERGE5: earlyAccess,
		}		

		const hideMe = document.getElementsByClassName('contact_form');

		hideMe[0].children[0].style.display = "block";
		hideMe[0].children[1].style.display = "none";

		const mc = addToMailchimp(email, listFields).then(data => {
	      var response = data;
	      if( response.result === 'error' ) {
	      	this.setState({submitted: false})
	      	this.showErrors(response);
	      }
	      else {
	      	this.setState({submitted: true})
	      }
	    })
	    .catch(() => {})

	}

	showErrors(e) {
		const myForm = document.getElementById("errorMessages"); 
		var errorDiv = document.createElement("div");
		var errorContent = document.createTextNode('There has been an error submitting your email address. You may already be subscribed to this list.');
		errorDiv.appendChild(errorContent);  
		console.log(errorDiv);
		myForm.appendChild(errorContent);
	}

  	render() {
    	const { emailIsValid, submitted } = this.state

		return (
			<div className='center'>
				{submitted
				? 	<div className="response">
						<p>Thank you, your details have been saved.</p>
					</div>
				: <ContactForm
				onChange={this.updateValues}
				onSubmit={this.handleSubmit}
				emailIsValid={emailIsValid}
				/>
				}
			</div>
		)
	}
}


const S = {}

S.Button = styled.button`
	${tw`
		block mx-4 mt-4 mx-auto md:inline-block w-full md:max-w-md text-white py-3 px-3 text-center uppercase
	`}
	width: -webkit-fill-available;
	background-color: #fff;
	color: black;
	font-family: 'Inter','Helvetica Neue','Helvetica','Arial',sans-serif;
	border-color: #7b7b7b;  	
`