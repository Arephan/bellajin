import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import Components from "views/Components/Components.jsx";
import Checkout from "views/AppointmentPage/Checkout.js";
var publicRoutes = [
  { path: "/new-appointment", name: "NewAppointment", component: Checkout },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/", name: "LandingPage", component: LandingPage }
];

var privateRoutes = [
  { path: "/new-appointment", name: "NewAppointment", component: Checkout },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export { privateRoutes, publicRoutes };
