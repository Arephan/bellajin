import { base, ref } from "./constants";

export function addAppointment(newAppointment) {
  var immediatelyAvailableReference = base.push("Appointments", {
    data: newAppointment,
    then(err) {
      if (!err) {
      }
    }
  });
  //available immediately, you don't have to wait for the callback to be called
  var generatedKey = immediatelyAvailableReference.key;
  return generatedKey;
}

export function addAppointmentToUser(newAppointment, uid) {
  return ref.child(`users/${uid}/appointments`).push({ newAppointment });
}

export function getUserAppointments(uid) {
  return ref
    .child(`users/${uid}/appointments`)
    .once("value")
    .then(snapshot => {
      var returnArr = [];

      snapshot.forEach(function(childSnapshot) {
        let item = childSnapshot.val();
        returnArr.push(item.newAppointment);
      });
      return returnArr;
    });
}
