import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAb8GtrT8WUwTNjpyGwpifXUEC7s9Zgn6o",
    authDomain: "crwn-db-d8899.firebaseapp.com",
    databaseURL: "https://crwn-db-d8899.firebaseio.com",
    projectId: "crwn-db-d8899",
    storageBucket: "crwn-db-d8899.appspot.com",
    messagingSenderId: "741047299472",
    appId: "1:741047299472:web:9f5b88b95b8ef1e69bd715"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;