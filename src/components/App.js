import React, { Component } from 'react';
import Header from './Header';
import StockInfo from './StockInfo';
import StockForm from './StockForm';

class App extends Component {
	constructor() {
		super();
		this.state = {
			quote: 'MSFT'
		}
	}

	handleQuoteChange = (e) => {
		console.log(e, 'e')
	}

	render() {
		return (
			<div>
				<Header />
				<StockInfo />
				<StockForm 
					handleQuoteChange={this.handleQuoteChange}
				/>
			</div>
		)
	}
}


export default App;