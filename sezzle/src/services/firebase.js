import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCB2wrfnwslBT2WZvdjX7vDdX3U-bycbdc",
    authDomain: "sezzle-challenge-72060.firebaseapp.com",
    databaseURL: "https://sezzle-challenge-72060.firebaseio.com",
    projectId: "sezzle-challenge-72060",
    storageBucket: "sezzle-challenge-72060.appspot.com",
    messagingSenderId: "955199557126",
    appId: "1:955199557126:web:c4de4b567d44a9555c3d87",
    measurementId: "G-S1D84P3JTE"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;