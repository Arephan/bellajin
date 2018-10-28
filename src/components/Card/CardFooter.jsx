import React from "react";
// Nodejs library that concatenates classes
import classNames from "classnames";
// Nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// Core components
import cardFooterStyle from "assets/jss/material-kit-react/components/cardFooterStyle.jsx";

function CardFooter({ ...props }) {
  const { classes, className, children, ...rest } = props,
    cardFooterClasses = classNames({
      [classes.cardFooter]: true,
      [className]: className !== undefined
    });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(cardFooterStyle)(CardFooter);
