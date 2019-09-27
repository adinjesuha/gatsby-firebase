import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: process.env.GATSBY_FIREBASE_APIKEY,
  authDomain: "gatsby-firebase-redux.firebaseapp.com",
  databaseURL: "https://gatsby-firebase-redux.firebaseio.com",
  projectId: "gatsby-firebase-redux",
  storageBucket: "gatsby-firebase-redux.appspot.com",
  messagingSenderId: "799298956135",
  appId: "1:799298956135:web:177d7ebfac8937b9961dc2",
  measurementId: "G-PKD77CVQJ8",
}

firebase.initializeApp(config)

export const db = firebase.firestore()

export default firebase
