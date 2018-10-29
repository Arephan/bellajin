import firebase from "firebase";
import { addMsgTokenToUser } from "firebase/db";
const database = require("firebase/database"),
  Rebase = require("re-base"),
  config = {
    apiKey: "AIzaSyB8FQ40Fc14Af618qaKApJDJo0dkWNhWbo",
    authDomain: "bellajin-c8de8.firebaseapp.com",
    databaseURL: "https://bellajin-c8de8.firebaseio.com",
    projectId: "bellajin-c8de8",
    storageBucket: "bellajin-c8de8.appspot.com",
    messagingSenderId: "114630698438"
  },
  app = firebase.initializeApp(config),
  db = firebase.database(app);
if (firebase.messaging.isSupported()) {
  var messaging = app.messaging();

  messaging.usePublicVapidKey(
    "BMoDP5FXujC2EeQWhVq_QmG-jYdDl1KimtjdBneFPiYviq7HXkA7_fkEwMotI8tn19xl2TCgq3D1f14LjC2-wEc"
  );

  messaging
    .requestPermission()
    .then(function() {
      console.log("ok permission");
      return messaging.getToken();
    })
    .then(function(token) {
      console.log("get token");
      console.log(token);
      addMsgTokenToUser(token, firebaseAuth().currentUser.uid);
    })
    .catch(function(err) {
      console.log("Permission denied", err);
    });

  messaging.onTokenRefresh(function() {
    messaging
      .getToken()
      .then(function(refreshedToken) {
        console.log("Token refreshed.");
        console.log(refreshedToken);
        addMsgTokenToUser(refreshedToken, firebaseAuth().currentUser);
      })
      .catch(function(err) {
        console.log("Unable to retrieve refreshed token ", err);
      });
  });

  messaging.onMessage(function(payload) {
    console.log("onMessage: ", payload);
    var message = document.getElementById("message").innerHTML;
    message = message + "<div>" + JSON.stringify(payload) + "</div>";

    document.getElementById("message").innerHTML = message;
  });
}
export var base = Rebase.createClass(db);
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
