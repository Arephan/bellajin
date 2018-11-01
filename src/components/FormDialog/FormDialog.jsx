import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewText: null
    };
    this.handleFormClose = this.handleFormClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ reviewText: nextProps.reviewText });
  }

  handleFormClose() {
    this.props.handleClose({ appointmentReview: this.state.reviewText });
  }

  handleChange(event) {
    const rJSON = {},
      id = event.target.id;
    rJSON[id] = event.target.value;
    this.setState(rJSON);
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Describe Your Experience
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              How could we serve you better?
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="reviewText"
              value={this.state.reviewText}
              label="Description"
              type="text"
              fullWidth
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleFormClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleFormClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
