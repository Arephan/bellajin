import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TimeSlot from "assets/constants/TimeSlot";
import CheckBoxList from "components/CheckBoxList/CheckBoxList";
import React from "react";
function PaymentForm(props) {
  function handleChange(e) {
    props.handleStepperContentValueChange(e.target.id, e.target.value);
  }
  return (
    <React.Fragment>
      <Grid container spacing={24}>
        <Grid item xs={6} md={6}>
          <TextField
            id="name"
            value={props.newAppointment.name}
            required
            fullWidth
            onChange={handleChange}
            label="Name"
            type="fname"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            id="date"
            value={props.newAppointment.date}
            required
            fullWidth
            onChange={handleChange}
            label="Appointment Date"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item>
          <CheckBoxList
            data={TimeSlot.TimeSlot}
            userData={props.newAppointment.timeslot}
            handleStepperContentValueChange={
              props.handleStepperContentValueChange
            }
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;
