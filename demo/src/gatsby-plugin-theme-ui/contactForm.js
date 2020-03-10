import checkBox from './components/checkBox'

const contactForm = {
	".contactContainer > section": {
		width: '100%'
	},
	".contact_form": {
		"form": {
			textAlign: 'center'
		},
		"input, textarea": {
		  width: '100%',
		  mb: 2,
		  p: 1,
		  textTransform: 'capitalize'
		},
		'textarea': {
			height: '150px'
		},
		maxWidth: '600px',
		margin: '0 auto',
		pb: 5
	},
	".constrain_content": {
		maxWidth: '600px',
		m: '0 auto'
	},
	".wpcf7-list-item": {
		...checkBox,
	}
}

export default contactForm