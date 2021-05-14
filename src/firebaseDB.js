import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB4BrYz08qiq2OFr5ef1bJRJvbFkiqCCUI",
    authDomain: "my-books-310519.firebaseapp.com",
    projectId: "my-books-310519",
    storageBucket: "my-books-310519.appspot.com",
    messagingSenderId: "688475310544",
    appId: "1:688475310544:web:233e7a668d4b4c131991d5",
};
// Initialize Firebase
const fireBase = firebase.initializeApp(firebaseConfig);
export default fireBase;
