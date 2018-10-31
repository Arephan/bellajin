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
import FileUploader from "react-firebase-file-uploader";
import React from "react";
import firebase from "firebase";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: firebaseAuth().currentUser,
      userAppointments: [],
      loading: true,
      isUploading: false,
      progress: 0,
      photoURL: firebaseAuth().currentUser.photoURL || profile
    };
  }

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images/" + this.state.currentUser.uid)
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({ photoURL: url });
        this.state.currentUser
          .updateProfile({
            photoURL: url
          })
          .then(function() {
            // Update successful.
          })
          .catch(function(error) {
            // An error happened.
          });
      });
  };

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
              {this.state.isUploading && (
                <CustomLinearProgress color="info" variant="indeterminate" />
              )}
              <GridContainer justify="center">
                <GridItem md={6} sm={12} xs={12}>
                  <div className={classes.profile}>
                    <div>
                      <label>
                        <FileUploader
                          hidden
                          accept="image/*"
                          storageRef={firebase.storage().ref("images")}
                          onUploadStart={this.handleUploadStart}
                          onUploadError={this.handleUploadError}
                          onUploadSuccess={this.handleUploadSuccess}
                          onProgress={this.handleProgress}
                        />
                        <img
                          src={this.state.photoURL}
                          alt="..."
                          className={imageClasses}
                        />
                      </label>
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
