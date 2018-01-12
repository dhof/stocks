import React from 'react'
import '../app.css'

const SymbolList = () => {
	return (
		<div className="symbolList">
			<h4>Available Symbols</h4>
			<div className="symbols">
				<ul className="symbols1">
					<li>AAPL</li>
					<li>AME</li>
					<li>BIG</li>
					<li>BRKA</li>
				</ul>
				<ul className="symbols2">
					<li>CVS</li>
					<li>F</li>
					<li>INFO</li>
					<li>JWN</li>
					<li>MET</li>
				</ul>
				<ul className="symbols3">
					<li>MS</li>
					<li>MSFT</li>
					<li>PLT</li>
					<li>TWX</li>
				</ul>
			</div>
		</div>
	)
}

export default SymbolList