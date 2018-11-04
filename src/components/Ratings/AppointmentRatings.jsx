import React from "react";
import Rating from "react-rating";

class AppointmentRatings extends Rating {
  render() {
    const { appointmentID, rating, handleClickOpen } = this.props;
    return (
      <Rating
        initialRating={rating}
        onClick={value => {
          this.props.updateAppointmentRating(appointmentID, value).then(() => {
            handleClickOpen(appointmentID);
          });
        }}
      />
    );
  }
}

export default AppointmentRatings;
