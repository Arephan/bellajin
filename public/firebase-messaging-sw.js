importScripts("https://www.gstatic.com/firebasejs/5.5.6/firebase.js");
importScripts("https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB8FQ40Fc14Af618qaKApJDJo0dkWNhWbo",
  authDomain: "bellajin-c8de8.firebaseapp.com",
  databaseURL: "https://bellajin-c8de8.firebaseio.com",
  projectId: "bellajin-c8de8",
  storageBucket: "bellajin-c8de8.appspot.com",
  messagingSenderId: "114630698438"
};

firebase.initializeApp(config);

if (firebase.messaging.isSupported()) {
  var messaging = firebase.messaging();

  messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
      "[firebase-messaging-sw.js] Received background message ",
      payload
    );
    // Customize notification here
    var notificationTitle = "Background Message Title";
    var notificationOptions = {
      body: "Background Message body.",
      icon: "/firebase-logo.png"
    };

    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });
}
/*
To Send Via Curl: 

curl -X POST -H "Authorization: key=AAAAGrCFpcY:APA91bHqtnNHD4j8QW0jRWOdwRL_YxWouY_8r8AmJ_aX3KNi9mkE-2v8rVvelgBlb44NPRot90Pj6k8T4a9TuqsVwEaaKg9Ezq-kXRkAExNirklAFYPf4gVvrOt5H-47RbmNpH8Qt772" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "Portugal vs. Denmark",
    "body": "5 to 1",
    "icon": "firebase-logo.png",
    "click_action": "http://localhost:8081"
  },
  "to": "eR8Iw61rP10:APA91bG2Le_mdY34mbVnJum-hNze7nrQlnuyRQpiG6kPPGZfIQmh7LsVj6laK3JDnLgOJPjusa4WrnpQAR7jbeS9H8kNYHN59bFKtTbjJMmlmlZDHV0uXgAWvdXqlY2UkMc8dpwmCWSf"
}' "https://fcm.googleapis.com/fcm/send"
  */
