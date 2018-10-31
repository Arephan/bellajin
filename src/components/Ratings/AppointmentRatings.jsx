import { changeUserAppointmentRating } from "firebase/db.js";
import React from "react";
import Rating from "react-rating";

export default class AppointmentRatings extends Rating {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating || 0
    };
  }
  render() {
    return (
      <Rating
        initialRating={this.state.rating}
        onClick={value => {
          changeUserAppointmentRating(
            this.props.uid,
            this.props.appointmentID,
            value
          ).then(res => {
            res ? this.setState({ rating: value }) : null;
          });
        }}
      />
    );
  }
}
