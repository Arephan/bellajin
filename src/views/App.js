import "assets/scss/material-kit-react.css?v=1.2.0";
import { firebaseAuth } from "firebase/constants.js";
import { createBrowserHistory } from "history";
import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import Checkout from "views/AppointmentPage/Checkout.js";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
const PrivateRoute = ({ component: ProfilePage, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      firebaseAuth().currentUser ? (
        <ProfilePage {...props} />
      ) : (
        <Redirect to="/login-page" />
      )
    }
  />
);
var hist = createBrowserHistory();
class App extends React.Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login-page" component={LoginPage} />
          <Route exact path="/new-appointment" component={Checkout} />
          <PrivateRoute exact path="/profile-page" component={ProfilePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
