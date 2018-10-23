import Footer from "components/Footer/Footer.jsx";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.jpg";

class Layout extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    if (this.props.history.location.pathname == "/new-appointment") {
      return <div>{this.props.children}</div>; // For cleaner checkout process
    } else {
      return (
        <div>
          <Header
            fixed
            color="danger"
            brand={
              <Link to="/">
                <img src={Logo} height="50" width="100" />
              </Link>
            }
            rightLinks={<HeaderLinks currentUser={this.props.authed} />}
            {...rest}
          />
          {this.props.children}
          <Footer />
        </div>
      );
    }
  }
}

export default Layout;
