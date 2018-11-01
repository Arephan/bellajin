import React from "react";
// Nodejs library to set properties for components
import PropTypes from "prop-types";
// Nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import infoStyle from "assets/jss/material-kit-react/components/infoStyle.jsx";

function InfoArea({ ...props }) {
  const { classes, title, description, iconColor, vertical } = props,
    iconWrapper = classNames({
      [classes.iconWrapper]: true,
      [classes[iconColor]]: true,
      [classes.iconWrapperVertical]: vertical
    }),
    iconClasses = classNames({
      [classes.icon]: true,
      [classes.iconVertical]: vertical
    });
  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>{props.children}</div>
      <h4 className={classes.title}>{title}</h4>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  classes: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  title: PropTypes.string.isRequired,
  vertical: PropTypes.bool
};

export default withStyles(infoStyle)(InfoArea);
