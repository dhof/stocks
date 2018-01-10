import React from 'react'
import '../app.css'

const StockInfo = (props) => {
	const quote = props.quote 
	if(props.quote === "") {
		return (
			<div>
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
				<p className="last-updated">As of {quote.latestUpdate}</p>
			</div>
		</div>
	)
	}
}

export default StockInfo