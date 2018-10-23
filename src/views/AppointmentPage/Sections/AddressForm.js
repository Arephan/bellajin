import Grid from "@material-ui/core/Grid";
import ServiceMenu from "assets/constants/ServiceMenu";
import CheckBoxList from "components/CheckBoxList/CheckBoxList";
import React from "react";

function AddressForm(props) {
  return (
    <React.Fragment>
      <Grid container spacing={24}>
        <Grid item xs={12} md={12}>
          <CheckBoxList
            data={ServiceMenu.ServiceMenu}
            userData={props.newAppointment.serviceMenu}
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
