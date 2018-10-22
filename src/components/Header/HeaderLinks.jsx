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
      {firebaseAuth().currentUser ? (
        <ListItem className={classes.listItem}>
          <Tooltip
            id="logout-tooltip"
            title="logout"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              onClick={logout()}
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fas fa-sign-out"} /> Logout
            </Button>
          </Tooltip>
        </ListItem>
      ) : (
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Book Appointment"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Link to="/login-page" className={classes.navLink}>
              <i className={classes.socialIcons + " fas fa-sign-in-alt"} /> Login
            </Link>
          </Tooltip>
        </ListItem>
      )}
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
