import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Favorite from "@material-ui/icons/Favorite";
import Palette from "@material-ui/icons/Palette";
import work5 from "assets/img/examples/clem-onojegaw.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import profile from "assets/img/faces/christian.jpg";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
// nodejs library that concatenates classes
import classNames from "classnames";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import { firebaseAuth, base } from "firebase/constants";
import SimpleTable from "components/SimpleTable/SimpleTable";
import { getUserAppointments } from "firebase/db";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";

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
    let resp = await getUserAppointments(this.state.currentUser.uid);
    if (resp) {
      this.setState({ userAppointments: resp, loading: false });
    }
  }

  componentDidMount() {
    this.getAppointments();
  }

  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
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
                        variant="indeterminate"
                        color="info"
                      />
                    ) : (
                      <SimpleTable data={this.state.userAppointments} />
                    )}
                  </div>
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
