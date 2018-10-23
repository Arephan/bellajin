import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Logo from "../../assets/img/logo.jpg";
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";
import { Link } from "react-router-dom";

import { handleSignUp, login, logout } from "firebase/auth.js";
import { firebaseAuth } from "firebase/constants";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: null,
      password: null
    };

    if (this.props.history.location.state) {
      this.setState({
        newAppointment: this.props.history.location.state.newAppointment
      });
    } // incase user was directed while creating new appointment. There is no way to know email before hand.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = login.bind(this);
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  handleChange(event) {
    let rJSON = {};
    let id = event.target.id;
    rJSON[id] = event.target.value;
    this.setState(rJSON);
  }

  handleSubmit(event) {
    this.login(this.state.email, this.state.password);

    if (this.state.newAppointment) {
      // This user was redirected from new-appointment page because of no account
      this.setState({ newAppointment: { email: this.state.email } });
      // TODO: add appointment to both user tree and and appointments tree
    }

    this.props.history.push("/profile-page");

    event.preventDefault();
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
                    <h4>Login</h4>
                  </CardHeader>

                  <CardBody>
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
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      onClick={this.handleSubmit}
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
