import React, { Component } from 'react'
import './App.css'

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
						type="text"
						value={this.state.quote} 
						onChange={this.onChange} 
						className="input"
					/> 
					<button type="submit" className="submit">Get New Quote</button>
				</form>
		)
	}
}

export default StockForm