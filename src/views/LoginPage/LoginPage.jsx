import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import image from "assets/img/bg7.jpg";
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import {
  login,
  saveUser,
  sendEmailVerification,
  signUpWithEmailAndPass
} from "firebase/auth.js";
import { firebaseAuth } from "firebase/constants";
import React from "react";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import { addAppointmentToUser, addAppointment } from "firebase/db";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: null,
      password: null,
      isSignUp: false,
      loading: false,
      newAppointment: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
    let locationState = this.props.history.location.state;
    if (locationState) {
      if (locationState.from === "/new-appointment") {
        this.setState({
          isSignUp: true,
          newAppointment: locationState.newAppointment
        });
      }
    }
  }
  handleChange(event) {
    let rJSON = {};
    let id = event.target.id;
    rJSON[id] = event.target.value;
    this.setState(rJSON);
  }

  handleLogin() {
    login(this.state.email, this.state.password);
    this.props.history.push("/profile-page");
  }

  async handleSignUp() {
    let resp = await signUpWithEmailAndPass();
    this.setState({ loading: true });

    if (resp) {
      if (this.state.newAppointment) {
        addAppointment(this.state.newAppointment);
        addAppointmentToUser(
          this.state.newAppointment,
          firebaseAuth().currentUser.uid
        );
      }
      this.props.history.push("/profile-page");
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[this.state.cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="danger" className={classes.cardHeader}>
                    <h4>{this.state.isSignUp ? "Sign Up" : "Login"}</h4>
                  </CardHeader>
                  {this.state.loading ? (
                    <CustomLinearProgress
                      variant="indeterminate"
                      color="info"
                    />
                  ) : null}
                  <CardBody>
                    {this.state.isSignUp ? (
                      <CustomInput
                        labelText="Name"
                        id="name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "name",
                          onChange: this.handleChange,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                person
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                    ) : null}
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",

                        onChange: this.handleChange,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              email
                            </Icon>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        onChange: this.handleChange,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    {this.state.isSignUp ? (
                      <Button
                        simple
                        color="danger"
                        size="lg"
                        onClick={() => this.setState({ isSignUp: false })}
                      >
                        Login
                      </Button>
                    ) : (
                      <Button
                        simple
                        color="danger"
                        size="lg"
                        onClick={() => this.setState({ isSignUp: true })}
                      >
                        Sign Up
                      </Button>
                    )}
                    <Button
                      simple
                      color="info"
                      size="lg"
                      onClick={
                        this.state.isSignUp
                          ? this.handleSignUp
                          : this.handleLogin
                      }
                    >
                      Submit
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
