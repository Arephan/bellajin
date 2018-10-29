import { firebaseAuth, ref } from "./constants";

export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, pw) {
  return firebaseAuth()
    .signInWithEmailAndPassword(email, pw)
    .then(userCredential => userCredential)
    .catch(error => {
      alert(error.message);
    });
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}
export function saveUser(email, name, uid) {
  return ref.child(`users/${uid}/info`).set({
    uid,
    email,
    name
  });
}

export function signUpWithEmailAndPass(name, email, password = "123123123123") {
  /*
   * Sign in with email and pass.
   * [START createwithemail]
   */
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      // Save to realtime db for reference
      userCredential.user.updateProfile({
        displayName: name
      });
      saveUser(userCredential.user.email, name, userCredential.user.uid);
      // [END createwithemail]
      sendEmailVerification();
      return true;
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code,
        errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === "auth/weak-password") {
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
    .then(() => {
      /*
       * Email Verification sent!
       * [START_EXCLUDE]
       * alert("Email Verification Sent!");
       * [END_EXCLUDE]
       */
    });
  // [END sendemailverification]
}

export function sendPasswordReset() {
  const email = document.getElementById("email").value;
  if (!email) {
    alert("Enter Email");
  }
  // [START sendpasswordemail]
  firebaseAuth()
    .sendPasswordResetEmail(email)
    .then(() => {
      /*
       * Password Reset Email Sent!
       * [START_EXCLUDE]
       */
      alert("Password Reset Email Sent!");
      // [END_EXCLUDE]
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code,
        errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === "auth/invalid-email") {
        alert(errorMessage);
      } else if (errorCode === "auth/user-not-found") {
        alert(errorMessage);
      }
      // [END_EXCLUDE]
    });
  // [END sendpasswordemail];
}
