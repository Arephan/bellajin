import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.css?v=1.2.0";
import { createBrowserHistory } from "history";
import indexRoutes from "routes/index.jsx";
import firebase from "firebase";
var hist = createBrowserHistory();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
    this.handleCurrentUserChange = this.handleCurrentUserChange.bind(this);
  }

  handleCurrentUserChange(user) {
    this.setState({ currentUser: user });
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        this.setState({ currentUser: user });
      } else {
        // No user is signed in.
        this.setState({ currentUser: null });
      }
    });
  }
  render() {
    return (
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route
                path={prop.path}
                key={key}
                component={prop.component}
                handleCurrentUserChange={this.handleCurrentUserChange}
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
