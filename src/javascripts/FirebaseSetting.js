import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY, // required
	authDomain: process.env.REACT_APP_AUTH_DOMAIN, // required
	databaseURL: process.env.REACT_APP_DATABESE_URL, // required
	projectId: process.env.REACT_APP_PROJECT_ID, // required
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET, // required
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID // optional
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);