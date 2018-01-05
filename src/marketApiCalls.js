import axios from 'axios'
import * as firebase from 'firebase'
import { firebaseConfig } from './config/config'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.database()


// IEX Trading API call
	axios.get('https://api.iextrading.com/1.0/stock/market/batch', {
		params: {
			symbols: 'AAPL, AME, BIG, BRK.A, CVS, F, INFO, JWN, MET, MS, MSFT, PLT, TWX',
			types: 'quote',
			filter: 'companyName, open, latestPrice, change, changePercent, week52Low, week52High, latestVolume, marketCap, latestUpdate'
		}
	})
	.then(
		response => response.data,
		error => console.log('fetch error', error)
	)
	.then(
		data => db.ref().set({
			AAPL: data.AAPL.quote,
			AME: data.AME.quote,
			BIG: data.BIG.quote,
			BRKA: data['BRK.A'].quote,
			CVS: data.CVS.quote,
			F: data.F.quote,
			INFO: data.INFO.quote,
			JWN: data.JWN.quote,
			MET: data.MET.quote,
			MS: data.MS.quote,
			MSFT: data.MSFT.quote,
			PLT: data.PLT.quote,
			TWX: data.TWX.quote,
		})
	)

