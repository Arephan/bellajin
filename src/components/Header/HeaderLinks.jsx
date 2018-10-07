/*eslint-disable*/
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import Button from "components/CustomButtons/Button.jsx";
import React from "react";
import { FaCalendarCheck, FaHandHoldingUsd } from "react-icons/fa";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="https://my.setmore.com/bookingpage/7aa980b7-c4f3-42ff-8e63-4c686ebbcfbc"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <FaCalendarCheck className={classes.icons} /> Book Appointment
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://my.setmore.com/bookingpage/7aa980b7-c4f3-42ff-8e63-4c686ebbcfbc/services"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <FaHandHoldingUsd className={classes.icons} /> Service & Pricing
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/bellajinhair"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/bellajinhair"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
