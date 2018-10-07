// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
// nodejs library that concatenates classes
import classNames from "classnames";
import Button from "components/CustomButtons/Button.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import React from "react";
import GallerySection from "./Sections/GallerySection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="BellaJin"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Live Your Style!</h1>
                <h4>
                  Thank you for considering us to serve you! We aim to bring out
                  your best self through balanced haircut. If you have a style
                  preference, please feel free to bring photos!
                </h4>
                <br />
                <Button
                  color="success"
                  size="lg"
                  href="https://my.setmore.com/bookingpage/7aa980b7-c4f3-42ff-8e63-4c686ebbcfbc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-calendar-check" />
                  Book Appointment
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GallerySection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
