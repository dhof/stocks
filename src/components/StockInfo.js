import React from 'react';

const StockInfo = (props) => {
	console.log(props.data)
	const quote = props.data; 
	return (
		<div>
			<p>{quote.LastPrice} {quote.Change} {quote.ChangePercent}</p> 
			<p>Range {quote.Low} - {quote.High}</p>
			<p>Open {quote.Open}</p>
			<p>Volume {quote.Volume}</p>
			<p>Market Cap {quote.MarketCap}</p>
			<p>{Date.now()}</p>
		</div>
	)
}

export default StockInfo;