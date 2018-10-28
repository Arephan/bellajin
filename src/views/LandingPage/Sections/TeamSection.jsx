import React from "react";
// Nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// Core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props,
      imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
      );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here is our team</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem className={classes.itemGrid} md={6} sm={12} xs={12}>
                  <img alt="..." className={imageClasses} src={team1} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Gigi Hadid
                  <br />
                  <small className={classes.smallTitle}>Model</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={`${classes.socials} fab fa-twitter`} />
                  </Button>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={`${classes.socials} fab fa-instagram`} />
                  </Button>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={`${classes.socials} fab fa-facebook`} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem md={4} sm={12} xs={12}>
              <Card plain>
                <GridItem className={classes.itemGrid} md={6} sm={12} xs={12}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Christian Louboutin
                  <br />
                  <small className={classes.smallTitle}>Designer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={`${classes.socials} fab fa-twitter`} />
                  </Button>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={`${classes.socials} fab fa-linkedin`} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem className={classes.itemGrid} md={6} sm={12} xs={12}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Kendall Jenner
                  <br />
                  <small className={classes.smallTitle}>Model</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={`${classes.socials} fab fa-twitter`} />
                  </Button>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={`${classes.socials} fab fa-instagram`} />
                  </Button>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={`${classes.socials} fab fa-facebook`} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
