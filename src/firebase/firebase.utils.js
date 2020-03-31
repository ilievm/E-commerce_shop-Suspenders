// import
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// copy config
const config = {
    apiKey: "AIzaSyDUVdPmzyXGTxqWiXfjS85ISaUkaz_EP34",
    authDomain: "ecom-site-db-d50d4.firebaseapp.com",
    databaseURL: "https://ecom-site-db-d50d4.firebaseio.com",
    projectId: "ecom-site-db-d50d4",
    storageBucket: "ecom-site-db-d50d4.appspot.com",
    messagingSenderId: "427538300162",
    appId: "1:427538300162:web:b0aba61a848ee876e7961b",
    measurementId: "G-JVS2Q2K7PG"
};
// initialize
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle= () => auth.signInWithPopup(provider);

export default firebase;