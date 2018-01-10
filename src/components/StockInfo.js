import React from 'react'
import '../app.css'

const StockInfo = (props) => {
	const quote = props.quote 

	const convertTimestamp = (timestamp) => {
		let date = new Date(timestamp*1000)
		let hours = date.getHours()
		let minutes = "0" + date.getMinutes()
		let seconds = "0" + date.getSeconds()
		if (hours === 0) {
			hours = 12
			return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + ' AM'
		} else if (hours < 12) {
			hours = "0" + hours
			return hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + ' AM'
		} else {
			hours === 12 ? hours = "0" + 12 : hours = "0" + (hours - 12)
			return hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + ' PM'
		}
	}

	if(props.quote === "") {
		return (
			<div>
				{/* Loading Data */}
			</div>
		)
	} else {
	return (
		<div>
			<div className="quote-row">
				<p className="latest-price">{quote.latestPrice.toFixed(2)}</p>
				<p className={quote.change < 0 ? "change-neg" : "change-pos"}>{quote.change.toFixed(2)} ( {(quote.changePercent * 100).toFixed(2)}%)</p>
			</div>
			<div className="quote-row">
				<p className="tag">Range</p>
				<p className="value">{quote.week52Low.toFixed(2)} - {quote.week52High.toFixed(2)}</p>
			</div>
			<div className="quote-row">
				<p className="tag">Open</p>
				<p className="value">{quote.open.toFixed(2)}</p>
			</div>
			<div className="quote-row">
				<p className="tag">Volume</p>
				<p className="value">{(quote.latestVolume / 1000000).toFixed(1)}M</p>
			</div>
			<div className="quote-row">
				<p className="tag">Market Cap</p>
				<p className="value">{(quote.marketCap / 1000000000).toFixed(1)}B</p>
			</div>
			<div className="quote-row">
				<p className="last-updated">As of {convertTimestamp(quote.latestUpdate)}</p>
			</div>
		</div>
	)
	}
}

export default StockInfo