import React, { Component } from 'react'
import marketApiCalls from '../marketApiCalls'
import * as firebase from 'firebase'
import '../app.css'
import Header from './Header'
import StockInfo from './StockInfo'
import StockForm from './StockForm'


class App extends Component {
	constructor() {
		super()
		this.state = {
			stockData: null,
			selectedQuote: '',
			error: ''
		}
		this.db = firebase.database()
	}

	componentWillMount() {
		this.db.ref().once('value')
			.then((snapshot) => {
				this.setState(() => {
					return {
						stockData: snapshot.val()
					}
				})
			})
	}

	componentDidUpdate() {
		if (this.state.selectedQuote === '' && this.state.stockData !== null) {
			this.setState({selectedQuote: this.state.stockData['MSFT']})
		} 
	}

	handleQuoteChange = (e) => {
		const val = this.state.stockData[e]
		if (val) {
			this.setState({
				selectedQuote: val,
				error: ''
			})	
		} else {
			this.setState({error: 'Please enter a stock symbol from the list below'})
		}
	}


	render() {
		const state = this.state
		return (
			<div className="wrapper">
				<Header quote={state.selectedQuote} />
				<StockInfo quote={state.selectedQuote} />
				<div className="input-form">
					<StockForm 
						handleQuoteChange={this.handleQuoteChange}
					/>
				</div>
				{state.error && <p className="error">{state.error}</p>}
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<div>
					<p>List of available stock quotes:</p>
					<p>AAPL, AME, BIG, BRKA, CVS, F, INFO, JWN, MET, MS, MSFT, PLT, TWX</p>
				</div>
			</div>
		)
	}
}


export default App