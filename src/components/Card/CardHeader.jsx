import React from "react";
// Nodejs library that concatenates classes
import classNames from "classnames";
// Nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// Core components
import cardHeaderStyle from "assets/jss/material-kit-react/components/cardHeaderStyle.jsx";

function CardHeader({ ...props }) {
  const { classes, className, children, color, plain, ...rest } = props,
    cardHeaderClasses = classNames({
      [classes.cardHeader]: true,
      [classes[`${color}CardHeader`]]: color,
      [classes.cardHeaderPlain]: plain,
      [className]: className !== undefined
    });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["warning", "success", "danger", "info", "primary"]),
  plain: PropTypes.bool
};

export default withStyles(cardHeaderStyle)(CardHeader);
