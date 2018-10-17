import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Kronos from "react-kronos";
import Moment from "moment";
function PaymentForm(props) {
  let minDate = Moment()
    .subtract(2, "weeks")
    .toDate();
  let maxDate = Moment()
    .add(2, "weeks")
    .toDate();

  let minTime = Moment()
    .subtract(4, "hours")
    .toDate();
  let maxTime = Moment()
    .add(4, "hours")
    .toDate();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Pick Date & Time
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Kronos
            date={Moment().toISOString()}
            onChangeDateTime={props.handleStepperContentValueChange}
            min={minDate}
            max={maxDate}
            placeholder={"This is the placeholder"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Kronos
            time={Moment().toISOString()}
            format={"HH:mm"}
            onChangeDateTime={props.handleStepperContentValueChange}
            min={minDate}
            minTime={minTime}
            max={maxDate}
            maxTime={maxTime}
            placeholder={"Another one"}
            options={{ format: { hour: "HH:mm" } }}
            hideOutsideDateTimes
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;
