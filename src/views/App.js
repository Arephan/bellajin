import LinearProgress from "@material-ui/core/LinearProgress";
import Layout from "components/Layout/Layout.jsx";
import { UserContext, withContext } from "contexts/UserContext.jsx";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import Checkout from "views/AppointmentPage/Checkout.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
class App extends React.Component {
  render() {
    const { userContext } = this.props;

    return userContext.state.loading === true ? (
      <LinearProgress />
    ) : (
      <Router history={userContext.state.history}>
        <Layout>
          <Switch>
            <Route
              exact
              path="/profile-page"
              render={props =>
                userContext.state.currentUser ? (
                  <ProfilePage {...props} />
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
                userContext.state.currentUser ? (
                  <ProfilePage {...props} />
                ) : (
                  <LoginPage {...props} />
                )
              }
            />
            <Route
              exact
              path="/new-appointment"
              render={props => <Checkout {...props} />}
            />
            <Route path="/" render={props => <LandingPage {...props} />} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default withContext(App, UserContext);
