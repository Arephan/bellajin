import React from "react";
// Nodejs library to set properties for components
import PropTypes from "prop-types";
// Nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

// Core components

import buttonStyle from "assets/jss/material-kit-react/components/buttonStyle.jsx";

function RegularButton({ ...props }) {
  const {
      classes,
      color,
      round,
      children,
      fullWidth,
      disabled,
      simple,
      size,
      block,
      link,
      justIcon,
      className,
      ...rest
    } = props,
    btnClasses = classNames({
      [classes.button]: true,
      [classes[size]]: size,
      [classes[color]]: color,
      [classes.round]: round,
      [classes.fullWidth]: fullWidth,
      [classes.disabled]: disabled,
      [classes.simple]: simple,
      [classes.block]: block,
      [classes.link]: link,
      [classes.justIcon]: justIcon,
      [className]: className
    });
  return (
    <Button {...rest} className={btnClasses}>
      {children}
    </Button>
  );
}

RegularButton.propTypes = {
  block: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "facebook",
    "twitter",
    "google",
    "github",
    "transparent"
  ]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  justIcon: PropTypes.bool,
  link: PropTypes.bool,
  round: PropTypes.bool,
  simple: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"])
};

export default withStyles(buttonStyle)(RegularButton);
