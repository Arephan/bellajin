import React from "react";
import { Route, Redirect } from "react-router-dom";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import Checkout from "views/AppointmentPage/Checkout.js";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
export const indexRoutes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage
  },
  {
    path: "/new-appointment",
    name: "NewAppointment",
    component: Checkout
  },
  {
    path: "/login-page",
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "/profile-page",
    name: "ProfilePage",
    component: ProfilePage
  }
];

export const ProtectedRoute = ({
  component: Component,
  userContext,
  ...rest
}) => (
  <Route
    render={props =>
      userContext.state.currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
    {...rest}
  />
);
