export function addToGoogleCal(newAppointment, name) {
  let startTime =
    newAppointment.date +
    "T" +
    newAppointment.timeslot[0].startTime +
    ":00-04:00";
  let endTime =
    newAppointment.date +
    "T" +
    newAppointment.timeslot[0].endTime +
    ":00-04:00";
  let summary =
    newAppointment.serviceMenu[0].primary +
    " " +
    newAppointment.serviceMenu[0].tertiary +
    " " +
    name;

  fetch(
    "https://us-central1-bellajin-c8de8.cloudfunctions.net/addToGoogleCal/?startTime=" +
      startTime +
      "&endTime=" +
      endTime +
      "&summary=" +
      summary
  );
}
