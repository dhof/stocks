import React, { Component } from 'react'
import marketApiCalls from '../marketApiCalls'
import * as firebase from 'firebase'
import './App.css'
import Header from './Header'
import StockInfo from './StockInfo'
import StockForm from './StockForm'
import SymbolList from './SymbolList'

// Log into Firebase account
firebase.auth().signInWithEmailAndPassword(process.env.REACT_APP_FIREBASE_USER, process.env.REACT_APP_FIREBASE_PASS)
.catch(function(error) {
  console.log(error.code, error.message)
})


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
			this.setState({error: 'Enter a symbol from the list below'})
		}
	}


	render() {

		const state = this.state
		return (
			<div>
				<Header quote={state.selectedQuote} />
				<StockInfo quote={state.selectedQuote} />
				<div className="input-form">
					<StockForm 
						handleQuoteChange={this.handleQuoteChange}
					/>
				</div>
					{state.error && <p className="error">{state.error}</p>}
				<SymbolList />
			</div>
		)
	}
}


export default App