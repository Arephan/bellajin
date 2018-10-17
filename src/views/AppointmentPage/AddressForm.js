import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxList from "components/CheckBoxList/CheckBoxList";
import ServiceMenu from "assets/constants/ServiceMenu";
import Moment from "moment";
import Kronos from "react-kronos";

function AddressForm(props) {
  return (
    <React.Fragment>
      <Grid container spacing={24}>
        <Typography variant="h6" gutterBottom>
          Pick Service
        </Typography>
        <Grid item>
          <CheckBoxList
            data={ServiceMenu.ServiceMenu}
            handleStepperContentValueChange={
              props.handleStepperContentValueChange
            }
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;
