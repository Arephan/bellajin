import React, { Component } from "react";
import { base, firebaseAuth } from "firebase/constants.js";
import firebase from "firebase";
// first we will make a new context
export const UserContext = React.createContext();

// Then create a provider Component
export class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAppointments: [],
      currentUser: null,
      isUploading: false,
      progress: null,
      open: false,
      loading: true,
      selectedAppointmentID: null // For rating clicks and reviews
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateAppointmentRating = this.updateAppointmentRating.bind(this);
    this.updateAppointmentReview = this.updateAppointmentReview.bind(this);
  }

  handleClickOpen = appointmentID => {
    this.setState({ open: true });
    this.setState({ selectedAppointmentID: appointmentID });
  };

  handleClose = (reviewText = null) => {
    if (reviewText) {
      this.updateAppointmentReview(
        this.state.selectedAppointmentID,
        reviewText
      );
    }
    this.setState({ open: false });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ loading: true });
      if (user) {
        this.setState({ currentUser: user });
        base.syncState(`users/${user.uid}/appointments`, {
          context: this,
          state: "userAppointments",
          asArray: true
        });
      }

      this.setState({ loading: false });
    });

    this.setState({ loading: false });
  }

  updateAppointmentRating(appointmentID, newRating) {
    return base.update(
      `users/${
        this.state.currentUser.uid
      }/appointments/${appointmentID}/newAppointment`,
      {
        data: { rating: newRating }
      }
    );
  }

  updateAppointmentReview(appointmentID, newReview) {
    return base.update(
      `users/${this.state.currentUser.uid}/appointments/${appointmentID}`,
      {
        data: { review: newReview },
        then(err) {
          console.log(err);
        }
      }
    );
  }

  // BEGIN FILE UPLOADER
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
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
  // END FILE UPLOADER

  render() {
    const { children } = this.props;
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          updateAppointmentRating: this.updateAppointmentRating,
          updateReview: this.updateReview,
          handleUploadStart: this.handleUploadStart,
          handleUploadSuccess: this.handleUploadSuccess,
          handleUploadError: this.handleUploadError,
          handleProgress: this.handleProgress,
          handleClickOpen: this.handleClickOpen,
          handleClose: this.handleClose
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

/*eslint-disable */
export function withContext(WrappedComponent, context) {
	return class extends React.Component {
		render() {
			console.log(this);
			return (
				<UserContext.Consumer>
					{userContext => {
						console.log(this, arguments, userContext);
						return <WrappedComponent userContext={{ ...userContext }} />;
					}}
				</UserContext.Consumer>
			);
		}
	};
}

export const UserContextConsumer = UserContext.Consumer;
