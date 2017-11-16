import React, { Component } from 'react';

class StockForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			quote: ''
		}
	}

	onChange = (e) => {
		const quote = e.target.value;
		this.setState (() => ({ quote })); 
		console.log(this.state.quote)
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.handleQuoteChange(this.state.quote);
		this.setState(() => ({
			quote: ''
		}));
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input 
					value={this.state.quote} 
					onChange={this.onChange} 
					placeholder="Enter Quote ID" /> 
				<button>StockForm</button>
			</form>
		)
	}
}

export default StockForm;