import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withContext, UserContext } from "contexts/UserContext.jsx";

class FormDialog extends React.Component {
  render() {
    const { userContext } = this.props;
    return (
      <div>
        <Dialog
          open={userContext.state.open}
          onClose={userContext.handleClose}
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
              id="selectedAppointmentReviewText"
              value={userContext.state.selectedAppointmentReviewText}
              label="Description"
              type="text"
              fullWidth
              onChange={userContext.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={userContext.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={userContext.handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withContext(FormDialog, UserContext);
