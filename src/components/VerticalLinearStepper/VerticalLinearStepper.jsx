import React from "react";
import { base } from "firebase/constants";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import ReactTimeslotCalendar from "react-timeslot-calendar";
import CheckBoxList from "./CheckBoxList";

import Datetime from "react-datetime";
import { GridContainer } from "components/Grid/GridContainer.jsx";
import { GridItem } from "components/Grid/GridItem.jsx";
import { InputLabel } from "@material-ui/core/InputLabel";
import { FormControl } from "@material-ui/core/FormControl";
const ServiceMenu = require("../../assets/constants/ServiceMenu").ServiceMenu;
const styles = theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  }
});

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent(step, handleStepperContentValueChange) {
  switch (step) {
    case 0:
      return (
        <CheckBoxList
          handleStepperContentValueChange={handleStepperContentValueChange}
          data={ServiceMenu}
        />
      );
    case 1:
      return (
        <Paper>
          <Datetime inputProps={{ placeholder: "Datetime Picker Here" }} />;
        </Paper>
      );
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return "Unknown step";
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    appointments: [],
    newAppointment: {}
  };
  componentDidMount() {
    base.syncState(`appointments`, {
      context: this,
      state: "appointments",
      asArray: true
    });
  }
  addItem(newAppointment) {
    this.setState({
      appointments: this.state.appointments.concat([newAppointment]) //updates Firebase and the local state
    });
  }

  handleStepperContentValueChange(key, value) {
    this.setState(state => {
      state.newAppointment[key] = value;
    });
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    this.handleStepperContentValueChange = this.handleStepperContentValueChange.bind(
      this
    );

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>
                    {getStepContent(
                      index,
                      this.handleStepperContentValueChange
                    )}
                  </Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(VerticalLinearStepper);
