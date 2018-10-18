import { base } from "./constants";
import { Link } from "react-router-dom";
import { React } from "react";

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
}
