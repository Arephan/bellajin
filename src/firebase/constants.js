import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB8FQ40Fc14Af618qaKApJDJo0dkWNhWbo",
  authDomain: "bellajin-c8de8.firebaseapp.com",
  databaseURL: "https://bellajin-c8de8.firebaseio.com",
  projectId: "bellajin-c8de8",
  storageBucket: "bellajin-c8de8.appspot.com",
  messagingSenderId: "114630698438"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
