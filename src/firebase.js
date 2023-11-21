import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCdRXVJoXj4T3ex7gpe0JDNnReu8SAjw_4",
    authDomain: "linkedin-clone-yt2-272c9.firebaseapp.com",
    projectId: "linkedin-clone-yt2-272c9",
    storageBucket: "linkedin-clone-yt2-272c9.appspot.com",
    messagingSenderId: "1056451944354",
    appId: "1:1056451944354:web:30653da09856cbc3331cfb",
    measurementId: "G-31BPT3KZ6H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export default{ db, auth };
