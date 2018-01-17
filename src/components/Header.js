import React from 'react'
import './App.css'

const Header = (props) => {
	return (
		<div className="company-name-row">
			<h4 className="company-name">{props.quote.companyName}</h4>
		</div>
	)
}

export default Header