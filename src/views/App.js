import "assets/scss/material-kit-react.css?v=1.2.0";
import Footer from "components/Footer/Footer.jsx";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { createBrowserHistory } from "history";
import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import Checkout from "views/AppointmentPage/Checkout.js";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LinearProgress from "@material-ui/core/LinearProgress";
import Logo from "assets/img/logo.jpg";
import { logout } from "firebase/auth.js";

var hist = createBrowserHistory();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: null,
      headerFooterVisible: true
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.headerFooterVisibilityOff = this.headerFooterVisibilityOff.bind(this);
    this.headerFooterVisibilityOn = this.headerFooterVisibilityOn.bind(this);
  }

  headerFooterVisibilityOff() {
    this.setState({ headerFooterVisible: false });
  }

  headerFooterVisibilityOn() {
    this.setState({ headerFooterVisible: true });
  }

  handleLogout() {
    logout();
    this.setState({ user: null });
  }

  componentDidMount() {
    this.setState({ loading: true, headerFooterVisible: true });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
      //when data is loaded, set loading to false
      this.setState({ loading: false });
    });

    firebase
      .auth()
      .getRedirectResult()
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        //Set the state user variable
        this.setState({ user });
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  }

  render() {
    return this.state.loading === true ? (
      <LinearProgress />
    ) : (
      <Router history={hist}>
        <div>
          {this.state.headerFooterVisible ? (
            <Header
              fixed
              color="danger"
              brand={
                <Link to="/">
                  <img src={Logo} height="50" width="100" />
                </Link>
              }
              rightLinks={
                <HeaderLinks
                  user={this.state.user}
                  history={hist}
                  handleLogout={this.handleLogout}
                />
              }
            />
          ) : null}
          <Switch>
            <Route
              exact
              path="/profile-page"
              render={props =>
                this.state.user
                  ? (this.headerFooterVisibilityOn(),
                    <ProfilePage {...props} user={this.state.user} />)
                  : (this.headerFooterVisibilityOff(), <LoginPage {...props} />)
              }
            />
            <Route
              exact
              path="/login-page"
              component={LoginPage}
              render={props => (
                this.headerFooterVisibilityOff(),
                <LoginPage {...props} user={this.state.user} />
              )}
            />
            <Route
              exact
              path="/new-appointment"
              render={props => (
                this.headerFooterVisibilityOff(),
                <Checkout {...props} user={this.state.user} />
              )}
            />
            <Route
              exact
              path="/"
              render={props => (
                this.headerFooterVisibilityOn(),
                <LandingPage {...props} user={this.state.user} />
              )}
            />
          </Switch>
          {this.state.headerFooterVisible ? <Footer /> : null}
        </div>
      </Router>
    );
  }
}

export default App;
