// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import profile from "assets/img/faces/christian.jpg";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
// Nodejs library that concatenates classes
import classNames from "classnames";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import SimpleTable from "components/SimpleTable/SimpleTable";
import { firebaseAuth } from "firebase/constants";
import { getUserAppointments } from "firebase/db";
import React from "react";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: firebaseAuth().currentUser,
      userAppointments: [],
      loading: true
    };
  }

  async getAppointments() {
    const resp = await getUserAppointments(this.state.currentUser.uid);
    if (resp) {
      this.setState({ userAppointments: resp, loading: false });
    }
  }

  componentDidMount() {
    this.getAppointments();
  }

  render() {
    const { classes, ...rest } = this.props,
      imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
      ),
      navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem md={6} sm={12} xs={12}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>
                        {this.state.currentUser.displayName}
                      </h3>
                      <h6>My Appointments</h6>
                    </div>
                    {this.state.loading ? (
                      <CustomLinearProgress
                        color="info"
                        variant="indeterminate"
                      />
                    ) : (
                      <SimpleTable data={this.state.userAppointments} />
                    )}
                  </div>
                  <div id="messages" />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
