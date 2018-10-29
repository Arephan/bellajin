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
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import {
  login,
  sendPasswordReset,
  signUpWithEmailAndPass
} from "firebase/auth.js";
import React from "react";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // We use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: null,
      name: null,
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
    // We add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(() => {
      this.setState({ cardAnimaton: "" });
    }, 700);

    if (this.props.history.location.from === "/new-appointment") {
      this.setState({
        newAppointment: this.props.history.location.state.newAppointment,
        email: this.props.history.location.state.newAppointment.email
      });
    }
  }

  handleChange(event) {
    const rJSON = {},
      id = event.target.id;
    rJSON[id] = event.target.value;
    this.setState(rJSON);
  }

  handleLogin() {
    if (!this.state.email || !this.state.password) {
      alert("Please fill all fields");
      return;
    } else {
      login(this.state.email, this.state.password).then(() => {
        if (this.props.history.location.from === "/new-appointment") {
          this.props.history.push({
            pathname: "/new-appointment",
            from: "/login-page",
            state: { newAppointment: this.state.newAppointment }
          });
        } else {
          this.props.history.push("/profile-page");
        }
      });
    }
  }

  async handleSignUp() {
    if (!this.state.email || !this.state.password || !this.state.name) {
      alert("Please complete form");
      return;
    }
    const resp = await signUpWithEmailAndPass(
      this.state.name,
      this.state.email,
      this.state.password
    );
    this.setState({ loading: true });

    if (resp) {
      this.setState({ loading: false });
      this.props.history.push("/profile-page");
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: `url(${image})`,
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
                      color="info"
                      variant="indeterminate"
                    />
                  ) : null}

                  <CardBody>
                    {this.state.isSignUp ? (
                      <CustomInput
                        formControlProps={{
                          fullWidth: true
                        }}
                        id="name"
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
                        labelText="Name"
                      />
                    ) : null}
                    <CustomInput
                      formControlProps={{
                        fullWidth: true
                      }}
                      id="email"
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
                      labelText="Email"
                    />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true
                      }}
                      id="password"
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
                      labelText="Password"
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    {this.state.isSignUp ? (
                      <Button
                        color="danger"
                        onClick={() => this.setState({ isSignUp: false })}
                        simple
                        size="lg"
                      >
                        Login
                      </Button>
                    ) : (
                      <Button
                        color="danger"
                        onClick={() => this.setState({ isSignUp: true })}
                        simple
                        size="lg"
                      >
                        Sign Up
                      </Button>
                    )}
                    <Button
                      color="info"
                      onClick={
                        this.state.isSignUp
                          ? this.handleSignUp
                          : this.handleLogin
                      }
                      simple
                      size="lg"
                    >
                      Submit
                    </Button>
                  </CardFooter>
                  <CardFooter className={classes.cardFooter}>
                    {this.state.isSignUp ? null : (
                      <Button
                        color="danger"
                        onClick={sendPasswordReset}
                        simple
                        size="sm"
                      >
                        Change Password
                      </Button>
                    )}
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
