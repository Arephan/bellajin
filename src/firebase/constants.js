import firebase from "firebase";
const Rebase = require("re-base");
const config = {
  apiKey: "AIzaSyB8FQ40Fc14Af618qaKApJDJo0dkWNhWbo",
  authDomain: "bellajin-c8de8.firebaseapp.com",
  databaseURL: "https://bellajin-c8de8.firebaseio.com",
  projectId: "bellajin-c8de8",
  storageBucket: "bellajin-c8de8.appspot.com",
  messagingSenderId: "114630698438"
};

export const app = firebase.initializeApp(config);
export const db = firebase.database(app);
export var base = Rebase.createClass(db);
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
