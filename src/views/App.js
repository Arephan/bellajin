import LinearProgress from "@material-ui/core/LinearProgress";
import "assets/scss/material-kit-react.css?v=1.2.0";
import Layout from "components/Layout/Layout.jsx";
import firebase from "firebase";
import { logout } from "firebase/auth.js";
import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Checkout from "views/AppointmentPage/Checkout.js";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";

const history = createBrowserHistory();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: null
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    logout();
    this.setState({ user: null });
  }

  componentDidMount() {
    this.setState({ loading: true });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
      // When data is loaded, set loading to false
      this.setState({ loading: false });
    });
  }

  render() {
    return this.state.loading === true ? (
      <LinearProgress />
    ) : (
      <Router history={history}>
        <div>
          <Layout
            handleLogout={this.handleLogout}
            history={history}
            user={this.state.user}
          >
            <Switch>
              <Route
                exact
                path="/profile-page"
                render={props =>
                  this.state.user ? (
                    <ProfilePage {...props} user={this.state.user} />
                  ) : (
                    <LoginPage {...props} />
                  )
                }
              />
              <Route
                component={LoginPage}
                exact
                path="/login-page"
                render={props =>
                  this.state.user ? (
                    <ProfilePage {...props} user={this.state.user} />
                  ) : (
                    <LoginPage {...props} user={this.state.user} />
                  )
                }
              />
              <Route
                exact
                path="/new-appointment"
                render={props => <Checkout {...props} user={this.state.user} />}
              />
              <Route
                path="/"
                render={props => (
                  <LandingPage {...props} user={this.state.user} />
                )}
              />
            </Switch>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
