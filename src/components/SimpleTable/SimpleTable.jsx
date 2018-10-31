import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import React from "react";
import AppointmentRatings from "components/Ratings/AppointmentRatings.jsx";
import { firebaseAuth } from "firebase/constants.js";
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

let id = 0;
function createData(date, timeslot, serviceType, cost, rating, appointmentID) {
  id += 1;
  let appointmentRatings = (
    <AppointmentRatings
      rating={rating}
      appointmentID={appointmentID}
      uid={firebaseAuth().currentUser.uid}
    />
  );
  return { id, date, timeslot, serviceType, cost, appointmentRatings };
}

function SimpleTable(props) {
  const { classes } = props,
    data = props.data.map(x =>
      createData(
        x.date,
        x.timeslot[0].primary,
        x.serviceMenu[0].primary,
        x.serviceMenu[0].tertiary,
        x.rating || 0,
        x.key
      )
    );

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Service</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.timeslot}</TableCell>
              <TableCell>{row.serviceType}</TableCell>
              <TableCell>{row.cost}</TableCell>
              <TableCell>{row.appointmentRatings}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
