import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import Checkout from "views/AppointmentPage/Checkout.js";

const indexRoutes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/new-appointment", name: "NewAppointment", component: Checkout },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage }
];

export default indexRoutes;
