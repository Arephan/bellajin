/*eslint-disable*/
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import Button from "components/CustomButtons/Button.jsx";
import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CalendarToday } from "@material-ui/icons";
import { firebaseAuth } from "firebase/constants.js";
import { logout } from "firebase/auth.js";
import firebase from "firebase";
function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="book-appointment-tooltip"
          title="Book Appointment"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/new-appointment" className={classes.navLink}>
            <i className={classes.socialIcons + " far fa-calendar"} /> Book
            Appointment
          </Link>
        </Tooltip>
      </ListItem>
      {props.user ? (
        <div className={classes.listItem}>
          <ListItem className={classes.listItem}>
            <Tooltip
              id="myProfile-tooltip"
              title="My Profile"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Link to="/profile-page" className={classes.navLink}>
                <i className={classes.socialIcons + " fas fa-user"} /> My
                Profile
              </Link>
            </Tooltip>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Tooltip
              id="logout-tooltip"
              title="logout"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                onClick={props.handleLogout}
                target="_blank"
                className={classes.navLink}
              >
                <i className={classes.socialIcons + " fas fa-sign-out-alt"} />{" "}
                Logout
              </Button>
            </Tooltip>
          </ListItem>
        </div>
      ) : (
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Book Appointment"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Link to="/login-page" className={classes.navLink}>
              <i className={classes.socialIcons + " fas fa-sign-in-alt"} />{" "}
              Login
            </Link>
          </Tooltip>
        </ListItem>
      )}
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
