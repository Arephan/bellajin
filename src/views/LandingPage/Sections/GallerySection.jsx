// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Favorite from "@material-ui/icons/Favorite";
import Palette from "@material-ui/icons/Palette";
import men1 from "assets/img/men/men1.jpg";
import men2 from "assets/img/men/men2.jpg";
import men4 from "assets/img/men/men4.jpg";
import men5 from "assets/img/men/men5.jpg";
import men7 from "assets/img/men/men7.jpg";
import men8 from "assets/img/men/men8.jpg";
import men9 from "assets/img/men/men9.jpg";
import perm1 from "assets/img/perm/perm1.jpg";
import perm2 from "assets/img/perm/perm2.jpg";
import perm3 from "assets/img/perm/perm3.jpg";
import perm4 from "assets/img/perm/perm4.jpg";
import women1 from "assets/img/women/women1.jpg";
import women2 from "assets/img/women/women2.jpg";
import women4 from "assets/img/women/women4.jpg";
import women5 from "assets/img/women/women5.jpg";
import women7 from "assets/img/women/women7.jpg";
import women9 from "assets/img/women/women9.jpg";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
// nodejs library that concatenates classes
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import React from "react";

class GallerySection extends React.Component {
  render() {
    const { classes } = this.props;
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Ladies",
                    tabIcon: Camera,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={women1}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={women2}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={women4}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={women5}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={women7}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={women9}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Men",
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={men1}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={men2}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={men4}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={men5}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={men7}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={men8}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={men9}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Perm",
                    tabIcon: Favorite,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={perm1}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={perm2}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={perm3}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={perm4}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(GallerySection);
