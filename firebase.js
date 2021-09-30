import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDODgjCbxlioxLpba2ev38Z9ztSX7Lo6t0",
  authDomain: "next-linkedin-34f99.firebaseapp.com",
  projectId: "next-linkedin-34f99",
  storageBucket: "next-linkedin-34f99.appspot.com",
  messagingSenderId: "788364234992",
  appId: "1:788364234992:web:89e023a5c132c1ff083235",
  measurementId: "G-KXPBY0T6XX",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
