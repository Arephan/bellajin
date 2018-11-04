import LinearProgress from "@material-ui/core/LinearProgress";
import "assets/scss/material-kit-react.css?v=1.2.0";
import Layout from "components/Layout/Layout.jsx";
import { UserContext, withContext } from "contexts/UserContext.jsx";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import indexRoutes from "routes/index.jsx";

class App extends React.Component {
  render() {
    const { userContext } = this.props;
    return userContext.state.loading === true ? (
      <LinearProgress />
    ) : (
      <Router history={userContext.state.history}>
        <Layout>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return (
                <Route
                  exact
                  path={prop.path}
                  key={key}
                  component={prop.component}
                />
              );
            })}
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default withContext(App, UserContext);
