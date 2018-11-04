// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
// Nodejs library that concatenates classes
import classNames from "classnames";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import FormDialog from "components/FormDialog/FormDialog.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import SimpleTable from "components/SimpleTable/SimpleTable";
import firebase from "firebase";
import React from "react";
import FileUploader from "react-firebase-file-uploader";
import emptyAvatar from "assets/img/faces/emptyAvatar.jpg";
import { withContext, UserContext } from "contexts/UserContext.jsx";
import LinearProgress from "@material-ui/core/LinearProgress";
class ProfilePage extends React.Component {
  render() {
    const { userContext, classes, ...rest } = this.props,
      imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
      );
    return (
      <div>
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              {userContext.state.isUploading && (
                <CustomLinearProgress color="info" variant="indeterminate" />
              )}
              <GridContainer justify="center">
                <GridItem md={12} sm={12} xs={12}>
                  <div className={classes.profile}>
                    <div>
                      <label>
                        <FileUploader
                          hidden
                          accept="image/*"
                          storageRef={firebase.storage().ref("images")}
                          onUploadStart={userContext.handleUploadStart}
                          onUploadError={userContext.handleUploadError}
                          onUploadSuccess={userContext.handleUploadSuccess}
                          onProgress={userContext.handleProgress}
                          maxWidth={400}
                          maxHeight={400}
                        />
                        <img
                          src={
                            userContext.state.currentUser
                              ? userContext.state.currentUser.photoURL
                              : emptyAvatar
                          }
                          alt="..."
                          className={imageClasses}
                        />
                      </label>
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>
                        {userContext.state.currentUser &&
                          userContext.state.currentUser.displayName}
                      </h3>
                      <h6>My Appointments</h6>
                    </div>
                    {userContext.state.loading ? (
                      <LinearProgress />
                    ) : (
                      <SimpleTable />
                    )}
                  </div>
                  <FormDialog />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withContext(
  withStyles(profilePageStyle)(ProfilePage),
  UserContext
);
