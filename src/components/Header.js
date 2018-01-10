import React from 'react'
import '../app.css'

const Header = (props) => {
	if(props.quote === "") {
		return (
			<div>
			</div>
		)
	} else {
	return (
		<div className="company-name-row">
			<h4 className="company-name">{props.quote.companyName.toUpperCase()}</h4>
		</div>
	)
}
}

export default Header