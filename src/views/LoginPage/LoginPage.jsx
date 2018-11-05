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
import { sendPasswordReset } from "firebase/auth.js";
import React from "react";
import { withContext, UserContext } from "contexts/UserContext.jsx";

class LoginPage extends React.Component {
  // We use this to make the card to appear after the page has been rendered
  state = {
    cardAnimaton: "cardHidden"
  };

  componentDidMount() {
    // We add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(() => {
      this.setState({ cardAnimaton: "" });
    }, 700);
  }

  render() {
    const { classes, userContext, ...rest } = this.props;
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
                    <h4>{userContext.state.isSignUp ? "Sign Up" : "Login"}</h4>
                  </CardHeader>
                  {userContext.state.loading ? (
                    <CustomLinearProgress
                      color="info"
                      variant="indeterminate"
                    />
                  ) : null}

                  <CardBody>
                    {userContext.state.isSignUp ? (
                      <CustomInput
                        formControlProps={{
                          fullWidth: true
                        }}
                        id="name"
                        inputProps={{
                          type: "name",
                          onChange: userContext.handleChange,
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

                        onChange: userContext.handleChange,
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
                        onChange: userContext.handleChange,
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
                    {userContext.state.isSignUp ? (
                      <Button
                        color="danger"
                        onClick={userContext.toggleSignUpState}
                        simple
                        size="lg"
                      >
                        Login
                      </Button>
                    ) : (
                      <Button
                        color="danger"
                        onClick={userContext.toggleSignUpState}
                        simple
                        size="lg"
                      >
                        Sign Up
                      </Button>
                    )}
                    <Button
                      color="info"
                      onClick={
                        userContext.state.isSignUp
                          ? userContext.handleSignUp
                          : userContext.handleLogin
                      }
                      simple
                      size="lg"
                    >
                      Submit
                    </Button>
                  </CardFooter>
                  <CardFooter className={classes.cardFooter}>
                    {userContext.state.isSignUp ? null : (
                      <Button
                        color="danger"
                        onClick={userContext.sendPasswordReset}
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

export default withContext(withStyles(loginPageStyle)(LoginPage), UserContext);
