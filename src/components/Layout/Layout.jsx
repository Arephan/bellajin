import Footer from "components/Footer/Footer.jsx";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.jpg";
import { withContext, UserContext } from "contexts/UserContext.jsx";

class Layout extends React.Component {
  render() {
    const { userContext } = this.props;
    if (
      userContext.state.history.location.pathname === "/new-appointment" ||
      userContext.state.history.location.pathname === "/login-page"
    ) {
      return <div>{this.props.children}</div>; // For cleaner checkout process
    }
    return (
      <div>
        <Header
          brand={
            <Link to="/">
              <img src={Logo} alt={"BellaJin"} height="50" width="100" />
            </Link>
          }
          color="danger"
          fixed
          rightLinks={
            <HeaderLinks
              handleLogout={userContext.handleLogout}
              user={userContext.state.currentUser}
            />
          }
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withContext(Layout, UserContext);
