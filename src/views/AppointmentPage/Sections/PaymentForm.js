import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TimeSlot from "assets/constants/TimeSlot";
import CheckBoxList from "components/CheckBoxList/CheckBoxList";
import React from "react";
import { getAppointmentsOnDate } from "firebase/db";
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
      this.props.handleStepperContentValueChange("timeslot", new Array());
      this.handleOccupiedTimeSlotChange(e.target.value);
    }
  }

  handleOccupiedTimeSlotChange(date) {
    getAppointmentsOnDate(date).then(x => {
      let timeslot = new TimeSlot();
      x.forEach(x => {
        let i = timeslot.findIndex(function(element) {
          return element.primary === x;
        });
        timeslot.splice(i, 1);
      });
      this.setState({ data: timeslot });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12} md={12}>
            <TextField
              id="date"
              value={this.state.newAppointment.date}
              required
              fullWidth
              onChange={this.handleChange}
              label="Appointment Date"
              type="date"
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <CheckBoxList
              data={this.state.data}
              userData={this.props.newAppointment.timeslot}
              handleStepperContentValueChange={
                this.props.handleStepperContentValueChange
              }
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default PaymentForm;
