import { ref, firebaseAuth } from "./constants";

export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, pw) {
  return firebaseAuth()
    .signInWithEmailAndPassword(email, pw)
    .catch(function(error) {
      alert(error.message);
    });
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveUser(user) {
  return ref
    .child(`users/${user.email}/info`)
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

export function handleSignUp(email, password) {
  firebaseAuth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      return error;
    })
    .then(result => {
      return result;
    });
  login(email, password);
}
