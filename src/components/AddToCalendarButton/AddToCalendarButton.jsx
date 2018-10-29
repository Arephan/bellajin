import React from "react";
import AddToCalendar from "react-add-to-calendar";

export default class AddToCalendarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
        title: props.title,
        description: props.description,
        location: props.location,
        startTime: props.date + "T" + props.startTime + ":00-04:00",
        endTime: props.date + "T" + props.endTime + ":00-04:00"
      }
    };
  }
  static displayName = "Example";

  render() {
    return <AddToCalendar event={this.state.event} />;
  }
}
