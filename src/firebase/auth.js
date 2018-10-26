import { ref, firebaseAuth } from "./constants";

export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, pw) {
  return firebaseAuth()
    .signInWithEmailAndPassword(email, pw)
    .then(userCredential => {
      return userCredential;
    })
    .catch(function(error) {
      alert(error.message);
    });
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}
export function saveUser(email, name, uid) {
  return ref.child(`users/${uid}/info`).set({
    uid: uid,
    email: email,
    name: name
  });
}

export function signUpWithEmailAndPass() {
  // Sign in with email and pass.
  // [START createwithemail]
  return firebaseAuth()
    .createUserWithEmailAndPassword(
      document.getElementById("email").value,
      document.getElementById("password").value
    )
    .then(userCredential => {
      // Save to realtime db for reference
      userCredential.user.updateProfile({
        displayName: document.getElementById("name").value
      });
      saveUser(
        userCredential.user.email,
        document.getElementById("name").value,
        userCredential.user.uid
      );
      // [END createwithemail]
      sendEmailVerification();
      return true;
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      // [END_EXCLUDE]
      return false;
    });
}

export function sendEmailVerification() {
  // [START sendemailverification]
  firebaseAuth()
    .currentUser.sendEmailVerification()
    .then(function() {
      // Email Verification sent!
      // [START_EXCLUDE]
      // alert("Email Verification Sent!");
      // [END_EXCLUDE]
    });
  // [END sendemailverification]
}

export function sendPasswordReset() {
  var email = document.getElementById("email").value;
  if (!email) {
    alert("Enter Email");
  }
  // [START sendpasswordemail]
  firebaseAuth()
    .sendPasswordResetEmail(email)
    .then(function() {
      // Password Reset Email Sent!
      // [START_EXCLUDE]
      alert("Password Reset Email Sent!");
      // [END_EXCLUDE]
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == "auth/invalid-email") {
        alert(errorMessage);
      } else if (errorCode == "auth/user-not-found") {
        alert(errorMessage);
      }
      // [END_EXCLUDE]
    });
  // [END sendpasswordemail];
}
