import React from 'react'

const StockInfo = (props) => {
	const quote = props.quote 
	return (
		<div>
			<p>{quote.latestPrice} {quote.change} {quote.changePercent}</p> 
			<p>Range {quote.week52Low} - {quote.week52High}</p>
			<p>Open {quote.open}</p>
			<p>Volume {quote.latestVolume}</p>
			<p>Market Cap {quote.marketCap}</p>
			<p>{quote.latestUpdate}</p>
		</div>
	)
}

export default StockInfo