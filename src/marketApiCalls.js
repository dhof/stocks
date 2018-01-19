import axios from 'axios'
import * as firebase from 'firebase'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_DOMAIN,
	databaseURL: process.env.REACT_APP_DB_URL,
	projectId: process.env.REACT_APP_PROJ_ID,
	storageBucket: process.env.REACT_APP_BUCKET,
	messagingSenderId: process.env.REACT_APP_SENDER_ID
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.database()

// Log into Firebase account
firebase.auth().signInWithEmailAndPassword(process.env.REACT_APP_FIREBASE_USER, process.env.REACT_APP_FIREBASE_PASS)
.catch(function(error) {
  console.log(error.code, error.message)
})


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

