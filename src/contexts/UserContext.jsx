import firebase from "firebase";
import { base } from "firebase/constants.js";
import React, { Component } from "react";
import { login, logout } from "firebase/auth.js";
import { signUpWithEmailAndPass, sendPasswordReset } from "firebase/auth.js";
import { createBrowserHistory } from "history";
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
      selectedAppointmentID: null, // For rating clicks and reviews
      selectedAppointmentReviewText: null,
      history: createBrowserHistory(), // So that it reminds user of past edit on dialog load
      email: null,
      name: null,
      password: null,
      isSignUp: false,
      newAppointment: null
    };

    this.toggleSignUpState = this.toggleSignUpState.bind(this);
    this.sendPasswordReset = sendPasswordReset.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateAppointmentRating = this.updateAppointmentRating.bind(this);
    this.updateAppointmentReview = this.updateAppointmentReview.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleSignUpState() {
    this.state.isSignUp
      ? this.setState({ isSignUp: false })
      : this.setState({ isSignUp: true });
  }

  async handleSignUp() {
    if (!this.state.email || !this.state.password || !this.state.name) {
      alert("Please complete form");
      return;
    }

    this.setState({ loading: true });
    const resp = await signUpWithEmailAndPass(
      this.state.name,
      this.state.email,
      this.state.password
    );

    if (resp) {
      this.setState({ loading: false });
      this.props.history.push("/profile-page");
    }
  }
  handleLogin() {
    if (!this.state.email || !this.state.password) {
      alert("Please fill all fields");
      return;
    } else {
      login(this.state.email, this.state.password).then(() => {
        if (this.state.history.location.from === "/new-appointment") {
          this.state.history.push({
            pathname: "/new-appointment",
            from: "/login-page",
            state: { newAppointment: this.state.newAppointment }
          });
        } else {
          this.state.history.push("/profile-page");
        }
      });
    }
  }
  handleClickOpen = appointmentID => {
    let selectedAppointment = this.state.userAppointments.find(appointment => {
      return appointment.key === appointmentID;
    });
    this.setState({
      selectedAppointmentID: appointmentID,
      selectedAppointmentReviewText: selectedAppointment.review,
      open: true
    });
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

  handleLogout() {
    logout();
    this.setState({ user: null });
  }

  componentDidMount() {
    this.setState({ loading: true });
    firebase.auth().onAuthStateChanged(user => {
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
  handleChange(event) {
    const rJSON = {},
      id = event.target.id;
    rJSON[id] = event.target.value;
    this.setState(rJSON);
  }

  updateAppointmentReview() {
    return base.update(
      `users/${this.state.currentUser.uid}/appointments/${
        this.state.selectedAppointmentID
      }`,
      {
        data: { review: this.state.selectedAppointmentReviewText }
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
          handleClose: this.handleClose,
          handleChange: this.handleChange,
          handleLogout: this.handleLogout,
          handleSignUp: this.handleSignUp,
          handleLogin: this.handleLogin,
          sendPasswordReset: this.sendPasswordReset,
          toggleSignUpState: this.toggleSignUpState
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
						return <WrappedComponent {...this.props} userContext={{ ...userContext }} />;
					}}
				</UserContext.Consumer>
			);
		}
	};
}

export const UserContextConsumer = UserContext.Consumer;
