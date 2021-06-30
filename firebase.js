import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBdbWJ2lbdYpPEPv0tkOWCJ-ZRjmjhRLvA",
    authDomain: "linkedin-50daa.firebaseapp.com",
    projectId: "linkedin-50daa",
    storageBucket: "linkedin-50daa.appspot.com",
    messagingSenderId: "745143700117",
    appId: "1:745143700117:web:1024046c1caa8fed47299c",
    measurementId: "G-P4F85YJDZH"
};

if (!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
