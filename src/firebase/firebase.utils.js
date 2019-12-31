import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAq3nJCiH3R44N8aoZ9Ypew2_oDnaXh-zw",
    authDomain: "crown-clothing-db-3403c.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-3403c.firebaseio.com",
    projectId: "crown-clothing-db-3403c",
    storageBucket: "crown-clothing-db-3403c.appspot.com",
    messagingSenderId: "650049337055",
    appId: "1:650049337055:web:d087865e1a10cecb7d1b6a",
    measurementId: "G-RFFVCVGTHK"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;