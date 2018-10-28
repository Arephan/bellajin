import { base, ref } from "./constants";

export function addAppointment(newAppointment) {
  const immediatelyAvailableReference = base.push("Appointments", {
      data: newAppointment,
      then(err) {
        if (!err) {
        }
      }
    }),
    // Available immediately, you don't have to wait for the callback to be called
    generatedKey = immediatelyAvailableReference.key;
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
      const returnArr = [];

      snapshot.forEach(childSnapshot => {
        const item = childSnapshot.val();
        returnArr.push(item.newAppointment);
      });
      return returnArr;
    });
}

export function getAppointmentsOnDate(date) {
  return ref
    .child("Appointments")
    .once("value")
    .then(snapshot => {
      const returnArr = [];

      snapshot.forEach(childSnapshot => {
        const item = childSnapshot.val();
        if (item.date === date) {
          returnArr.push(item.timeslot[0].primary);
        }
      });
      return returnArr;
    });
}
