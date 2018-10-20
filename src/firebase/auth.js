import { ref, firebaseAuth } from "./constants";

export function auth(email, pw) {
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, pw)
    .then(saveUser);
}

export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveUser(user) {
  return ref
    .child(`users/${user.uid}/info`)
    .set({
      email: user.email
    })
    .then(() => user);
}

export function signInAnonymously() {
  firebaseAuth()
    .signInAnonymously()
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === "auth/operation-not-allowed") {
        alert("You must enable Anonymous auth in the Firebase Console.");
      } else {
        console.error(error);
      }
      // [END_EXCLUDE]
    });
  // [END authanon]
}
