import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AddToCalendarButton from "components/AddToCalendarButton/AddToCalendarButton.jsx";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  }
});

let id = 0;
function createData(date, timeslot, startTime, endTime, serviceType, cost) {
  id += 1;

  let addToCalButton = (
    <AddToCalendarButton
      title="BellaJin Hair Appointment"
      description={serviceType + " " + cost}
      location="5931 Yonge St, North York, M2M 3V7"
      date={date}
      startTime={startTime}
      endTime={endTime}
    />
  );
  return { id, date, timeslot, serviceType, cost, addToCalButton };
}

function SimpleTable(props) {
  const { classes } = props,
    data = props.data.map(x =>
      createData(
        x.date,
        x.timeslot[0].primary,
        x.timeslot[0].startTime,
        x.timeslot[0].endTime,
        x.serviceMenu[0].primary,
        x.serviceMenu[0].tertiary
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
            <TableCell>Add to Calendar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell numeric>{row.timeslot}</TableCell>
              <TableCell numeric>{row.serviceType}</TableCell>
              <TableCell numeric>{row.cost}</TableCell>
              <TableCell>{row.addToCalButton}</TableCell>
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
