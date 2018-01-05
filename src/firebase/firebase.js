// import * as firebase from 'firebase'
// import { firebaseConfig as config } from '../config/config'

  // Initialize Firebase
// firebase.initializeApp(config)
// const db = firebase.database()

  // db.ref('expenses')
  // 	.once('value')
  // 	.then((snapshot) => {
  // 		const expenses = []
  // 		snapshot.forEach((expense) => {
  // 			expenses.push({
  // 				id: expense.key,
  // 				...expense.val()
  // 			})
  // 		})
  // 		console.log(expenses)
  // 	})

  // db.ref('expenses').push({
  // 	note: 'food',
  // 	description: 'bought vegetables',
  // 	amount: 10,
  // 	createdAt: Date.now()
  // })
  // db.ref('expenses').push({
		// note: 'games',
  // 	description: 'bought board games',
  // 	amount: 25,
  // 	createdAt: Date.now()
  // })
  // db.ref('expenses').push({
		//  note: 'gas',
  // 	description: 'bought gas',
  // 	amount: 40,
  // 	createdAt: Date.now()
  // })


 //  const onValueChange = db.ref('expenses').on('value', (snapshot) => {
	// 	const expenses = []
 //  		snapshot.forEach((expense) => {
 //  			expenses.push({
 //  				id: expense.key,
 //  				...expense.val()
 //  			})
 //  		})
 //  		console.log(expenses)
	// })

	// db.ref('expenses').push({
	// 	 note: 'rent',
 //  	description: 'jan rent',
 //  	amount: 550,
 //  	createdAt: Date.now()
 //  })



// db.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle'
// })

