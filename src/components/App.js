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
		switch(e) {
			case 'AAPL':
				this.setState(() => ({ data: dataList.AAPL }))
				break;
			case 'AME':
				this.setState(() => ({ data: dataList.AME }))
				break;
			case 'BIG':
				this.setState(() => ({ data: dataList.BIG }))
				break;
			case 'BRKA':
				this.setState(() => ({ data: dataList.BRKA }))
				break;
			case 'CVS':
				this.setState(() => ({ data: dataList.CVS }))
				break;
			case 'F':
				this.setState(() => ({ data: dataList.F }))
				break;
			case 'INFO':
				this.setState(() => ({ data: dataList.INFO }))
				break;
			case 'IVD':
				this.setState(() => ({ data: dataList.IVD }))
				break;
			case 'JWN':
				this.setState(() => ({ data: dataList.JWN }))
				break;
			case 'MET':
				this.setState(() => ({ data: dataList.MET }))
				break;
			case 'MS':
				this.setState(() => ({ data: dataList.MS }))
				break;
			case 'MSFT':
				this.setState(() => ({ data: dataList.MSFT }))
				break;
			case 'PLT':
				this.setState(() => ({ data: dataList.PLT }))
				break;
			case 'RND':
				this.setState(() => ({ data: dataList.RND }))
				break;
			case 'TWX':
				this.setState(() => ({ data: dataList.TWX }))
				break; 
			default:
				this.setState(() => ({ error: 'Please enter an ID from the list below' }))
		}
		console.log(e, 'handleQuoteChange')
	}

	render() {
		console.log(dataList)
		return (
			<div>
				<Header data={this.state.data} />
				<StockInfo data={this.state.data} />
				<StockForm 
					handleQuoteChange={this.handleQuoteChange}
				/>
				{this.state.error && <p>{this.state.error}</p>}
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