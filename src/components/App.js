import React, { Component } from 'react';
import Header from './Header';
import StockInfo from './StockInfo';
import StockForm from './StockForm';
import dataList from '../dataList.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: dataList.MSFT,
			error: ''
		}
	}

	handleQuoteChange = (e) => {
		var val = dataList[e];
		if (val) {
			this.setState({data: val})	
		} else {
			this.setState({error: 'Please enter an ID from the list below'})
		}
	}


	render() {
		const state = this.state;
		return (
			<div>
				<Header data={state.data} />
				<StockInfo data={state.data} />
				<StockForm 
					handleQuoteChange={this.handleQuoteChange}
				/>
				{state.error && <p>{state.error}</p>}
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<div>
					<p>AAPL, AME, BIG, BRKA, CVS, F, INFO, IVD, JWN, MET, MS, MSFT, PLT, RND, TWX</p>
				</div>
			</div>
		)
	}
}


export default App;