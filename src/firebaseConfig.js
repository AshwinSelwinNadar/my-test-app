import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCQT28pJO5YKUzIo8cT2zMKguO_lgrGQbM",
  authDomain: "my-test-db-3e684.firebaseapp.com",
  databaseURL: "https://my-test-db-3e684-default-rtdb.firebaseio.com",
  projectId: "my-test-db-3e684",
  storageBucket: "my-test-db-3e684.appspot.com",
  messagingSenderId: "995238393650",
  appId: "1:995238393650:web:f00297375efd61570c492b",
  measurementId: "G-Q6883NW46J"
};

let firebaseConfig = firebase.initializeApp(config);

export default firebaseConfig;