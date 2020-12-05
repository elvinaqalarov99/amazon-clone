import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdhDHfaXBGm5fzIMNpHFZBDUp8v-QEJUQ",
  authDomain: "clone-20f03.firebaseapp.com",
  databaseURL: "https://clone-20f03.firebaseio.com",
  projectId: "clone-20f03",
  storageBucket: "clone-20f03.appspot.com",
  messagingSenderId: "44073112360",
  appId: "1:44073112360:web:186faaf08338537abd361d",
  measurementId: "G-VF0K4QZPBW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
