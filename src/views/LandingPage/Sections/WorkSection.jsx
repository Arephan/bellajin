// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import SimpleMap from "components/GoogleMaps/SimpleMap.jsx";
// @material-ui/icons
// Core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import React from "react";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={12}>
            <h2 className={classes.title}>Contact us</h2>
            <h4 className={classes.description}>
              Address: 5931 Yonge St, Toronto, M2M 3V7 <br /> Phone:
              416-224-9311
            </h4>
            <form>
              <GridContainer>
                <GridItem md={12} sm={12} xs={12}>
                  <SimpleMap />
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
