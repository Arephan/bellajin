// NOTE: Yet to be implemented
import firebase from "firebase";
import { addMsgTokenToUser } from "firebase/db";
import { firebaseAuth } from "firebase/constants.js";
export function initMessaging() {
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
}
