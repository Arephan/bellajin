import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing.unit * 2
  }
});

function Review(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h6">
        Order summary
      </Typography>
      <List disablePadding>
        {props.newAppointment.serviceMenu.map(product => (
          <ListItem className={classes.listItem} key={product.primary}>
            <ListItemText
              primary={product.primary}
              secondary={product.secondary}
            />
            <Typography variant="body2">{product.tertiary}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $
            {props.newAppointment.serviceMenu.length === 1
              ? props.newAppointment.serviceMenu[0].tertiary.slice(1) // Cannot calculate total with dollar symbol
              : props.newAppointment.serviceMenu.reduce(
                  (a, b) =>
                    parseInt(a.tertiary.slice(1)) +
                    parseInt(b.tertiary.slice(1))
                )}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Date
          </Typography>
          <Typography gutterBottom>{props.newAppointment.date}</Typography>
        </Grid>
        <Grid container direction="column" item sm={6} xs={12}>
          <Typography className={classes.title} gutterBottom variant="h6">
            Time
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>
                {props.newAppointment.timeslot[0].primary}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);
