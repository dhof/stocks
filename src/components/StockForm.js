import React, { Component } from 'react'
import '../app.css'

class StockForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			quote: ''
		}
	}

	onChange = (e) => {
		const quote = e.target.value
		this.setState (() => ({ quote })) 
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.props.handleQuoteChange(this.state.quote.toUpperCase())
		this.setState(() => ({
			quote: ''
		}))
	}

	render() {
		return (
				<form onSubmit={this.onSubmit}>
					<input 
						value={this.state.quote} 
						onChange={this.onChange} 
						placeholder="Enter Quote ID" 
						className="input"
					/> 
					<button className="submitButton">Get New Quote</button>
				</form>
		)
	}
}

export default StockForm