import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import Logo from "../../assets/img/logo.jpg";
import AddressForm from "./Sections/AddressForm";
import PaymentForm from "./Sections/PaymentForm";
import Review from "./Sections/Review";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import { addAppointment, addAppointmentToUser } from "firebase/db";
import { signUpWithEmailAndPass } from "firebase/auth.js";
import { Link } from "react-router-dom";
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
  }),
  steps = ["Service", "When", "Confirm"];

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
        name: null,
        email: null,
        date: null
      }
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
    if (this.handleFormCheck()) {
      this.setState(state => ({
        activeStep: state.activeStep + 1
      }));
    }
  };

  handleFormCheck = () => {
    switch (this.state.activeStep) {
      case 0:
        if (!this.state.newAppointment.serviceMenu[0]) {
          alert("Please select service!");
          return false;
        }
        break;
      case 1:
        if (this.props.user) {
          if (
            !this.state.newAppointment.date ||
            !this.state.newAppointment.timeslot[0]
          ) {
            alert("Please Complete All Fields!");
            return false;
          }
        } else {
          if (
            !this.state.newAppointment.name ||
            !this.state.newAppointment.email
          ) {
            alert("Please Complete All Fields!");
            return false;
          } else {
            signUpWithEmailAndPass(
              this.state.newAppointment.name,
              this.state.newAppointment.email
            ).then(result => {
              console.log(result);
            });
            return true;
          }
        }

        break;
    }
    return true;
  };

  handleBack = () => {
    if (this.state.activeStep === 1) {
      this.setState(state => {
        state.newAppointment.timeslot = new Array();
      });
    }
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
    const { classes } = this.props,
      { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="primary" className={classes.appBar}>
          <Toolbar>
            <Link to="/">
              <img src={Logo} height="50" width="100" />
            </Link>
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
                (addAppointmentToUser(
                  this.state.newAppointment,
                  this.props.user.uid
                ),
                addAppointment(this.state.newAppointment),
                this.props.history.push("/profile-page"))
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
                        className={classes.button}
                        onClick={this.handleBack}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      className={classes.button}
                      color="primary"
                      onClick={this.handleNext}
                      variant="contained"
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
