import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TimeSlot from "assets/constants/TimeSlot";
import CheckBoxList from "components/CheckBoxList/CheckBoxList";
import React from "react";
import { getAppointmentsOnDate } from "firebase/db";
import { firebaseAuth } from "firebase/constants";
class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newAppointment: props.newAppointment,
      data: TimeSlot()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOccupiedTimeSlotChange = this.handleOccupiedTimeSlotChange.bind(
      this
    );
  }

  componentDidMount() {
    if (this.state.newAppointment.date) {
      this.handleOccupiedTimeSlotChange(this.state.newAppointment.date);
    }
  }

  handleChange(e) {
    this.props.handleStepperContentValueChange(e.target.id, e.target.value);

    if (e.target.id === "date") {
      // Reset user's selected timeslot
      this.props.handleStepperContentValueChange("timeslot", []);
      this.handleOccupiedTimeSlotChange(e.target.value);
    }
  }

  handleOccupiedTimeSlotChange(date) {
    getAppointmentsOnDate(date).then(x => {
      const timeslot = new TimeSlot();
      x.forEach(x => {
        const i = timeslot.findIndex(element => element.primary === x);
        timeslot.splice(i, 1);
      });
      this.setState({ data: timeslot });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          {firebaseAuth().currentUser ? null : (
            <Grid container>
              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  InputLabelProps={{
                    shrink: true
                  }}
                  label="Name"
                  onChange={this.handleChange}
                  required
                  type="fname"
                  value={this.state.newAppointment.name}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  InputLabelProps={{
                    shrink: true
                  }}
                  label="Email"
                  onChange={this.handleChange}
                  required
                  type="email"
                  value={this.state.newAppointment.email}
                />
              </Grid>
            </Grid>
          )}
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              id="date"
              InputLabelProps={{
                shrink: true
              }}
              label="Appointment Date"
              onChange={this.handleChange}
              required
              type="date"
              value={this.state.newAppointment.date}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <CheckBoxList
              data={this.state.data}
              handleStepperContentValueChange={
                this.props.handleStepperContentValueChange
              }
              userData={this.props.newAppointment.timeslot}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default PaymentForm;
