import React from "react"
import validator from 'email-validator'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Link from "gatsby-link"

class ContactForm extends React.Component {
  render() {
    const showEmailError = this.emailNode && !this.props.emailIsValid
    return (
    	<div class="contactForm">
			<form
				onChange={this.props.onChange}
				onSubmit={this.props.onSubmit}
				className='flex justify-around items-center'
			>

		        <label className='mr3'>
		            <input type='text' name='name' placeholder='name' className='name'
		              ref={node => (this.nameNode = node)}
		            />
		        </label>

		        <label className='mr3'>
		            <input type='text' name='email' placeholder='email' className={`${showEmailError ? 'pv2 ba b--light-red' : ''}`}
		              ref={node => (this.emailNode = node)}
		            />
		        </label>

		        <label className='mr3'>
		            <input type='text' name='company' placeholder='company' className='uni'
		              ref={node => (this.uniNode = node)}
		            />
		        </label>

		        <label className='mr3'>
		            <input type='text' name='message' placeholder='message' className={`${showEmailError ? 'pv2 ba b--light-red' : ''}`}
		              ref={node => (this.messageNode = node)}
		            />
		        </label>

				<p>
					<span class="wpcf7-form-control-wrap agree-30">
						<span class="wpcf7-form-control wpcf7-checkbox wpcf7-validates-as-required">
							<span class="wpcf7-list-item first last">
								<input type="checkbox" name="earlyAccess" />
								<span class="wpcf7-list-item-label">I'm happy to be contacted</span>
							</span>
						</span>
					</span>
				</p>

		        <button className='wpcf7-form-control wpcf7-submit'>
		        	Message me
		        </button>
	      	</form>
      </div>
    )
  }
}

export default class Form extends React.Component {

	state = {
		name: '',
		email: '',
		company: '',
		message: '',
		earlyAccess: false,
		emailIsValid: false,
		// submitted: false
	}

	validateEmail = () => {
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
		const { name, email, company, message, earlyAccess } = this.state

		var listFields = {
			MMERGE1: name,
			MMERGE2: email,
			MMERGE3: company,
			MMERGE4: message,
			MMERGE5: earlyAccess,
		}		

		const mc = addToMailchimp(email, listFields).then(data => {
	      var response = data;
	      console.log(data)
	    })
	    .catch(() => {})

		this.setState({submitted: true})
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