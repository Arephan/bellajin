importScripts("https://www.gstatic.com/firebasejs/5.2.0/firebase.js");
importScripts("https://www.gstatic.com/firebasejs/5.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.2.0/firebase-messaging.js");

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
