import React from "react"
import { Link } from "gatsby"
import { SiteName } from './componentStyle'

const InsidePageNav = ({}) => {

	const url = typeof window !== 'undefined' ? window.location.href : '';
	const newUrl = url.split("/");

	if(newUrl[3]) {
		var classVisible = 'block'
	}
	else {
		var classVisible = 'hidden'
	}

	return (
		<>
			<SiteName>
				<Link to="/" className={ classVisible }>
					<i class="fas fa-home"></i><h4>Steven<span>Parratt</span>.co.<span>uk</span></h4>
				</Link>
			</SiteName>
		</>
	)
}

export default InsidePageNav