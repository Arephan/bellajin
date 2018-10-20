import React from "react";

import { addAppointment } from "firebase/db";
import { firebaseAuth } from "firebase/constants";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

import Logo from "../../assets/img/logo.jpg";
import base from "firebase/constants";
import { Link } from "react-router-dom";
import { ServiceMenu } from "assets/constants/ServiceMenu";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

const steps = ["Service", "Details", "Confirm"];

function getStepContent(step, handleStepperContentValueChange, newAppointment) {
  switch (step) {
    case 0:
      return (
        <AddressForm
          handleStepperContentValueChange={handleStepperContentValueChange}
          newAppointment={newAppointment}
        />
      );
    case 1:
      return (
        <PaymentForm
          handleStepperContentValueChange={handleStepperContentValueChange}
          newAppointment={newAppointment}
        />
      );
    case 2:
      return <Review newAppointment={newAppointment} />;
    default:
      throw new Error("Unknown step");
  }
}

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      newAppointment: {
        serviceMenu: [],
        timeslot: [],
        date: null,
        name: null,
        email: null
      },
      currentUser: props.currentUser
    };
    this.handleStepperContentValueChange = this.handleStepperContentValueChange.bind(
      this
    );
  }

  handleStepperContentValueChange(key, value) {
    this.setState(state => {
      state.newAppointment[key] = value;
    });
  }

  handleNext = () => {
    //TODO: Check if step info has been received
    if (this.handleFormCheck()) {
      this.setState(state => ({
        activeStep: state.activeStep + 1
      }));
    }
  };

  handleFormCheck = () => {
    switch (this.state.activeStep) {
      case 0:
        if (
          !this.state.newAppointment.serviceMenu ||
          !this.state.newAppointment.serviceMenu[0]
        ) {
          alert("Please select service!");
          return false;
        }
        break;
      case 1:
        if (
          !this.state.newAppointment.date ||
          !this.state.newAppointment.name ||
          !this.state.newAppointment.email ||
          !this.state.newAppointment.timeslot
        ) {
          alert("Please Complete All Fields!");
          return false;
        }
    }
    return true;
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

  handleExit = () => {
    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="primary" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              <img src={Logo} height="50" width="100" />
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h2" variant="h4" align="center">
              New Appointment
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                (addAppointment(this.state.newAppointment),
                (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      Thank you for your order.
                    </Typography>
                    <Typography variant="subtitle1">
                      Your order number is #2001539. We have emailed your order
                      confirmation, and will send you an update when your order
                      has shipped.
                    </Typography>
                    <Button
                      onClick={this.handleExit}
                      className={classes.button}
                    >
                      Exit
                    </Button>
                  </React.Fragment>
                ))
              ) : (
                <React.Fragment>
                  {getStepContent(
                    activeStep,
                    this.handleStepperContentValueChange,
                    this.state.newAppointment
                  )}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Checkout);
