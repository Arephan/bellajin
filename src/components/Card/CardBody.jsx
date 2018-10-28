import React from "react";
// Nodejs library that concatenates classes
import classNames from "classnames";
// Nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// Core components
import cardBodyStyle from "assets/jss/material-kit-react/components/cardBodyStyle.jsx";

function CardBody({ ...props }) {
  const { classes, className, children, ...rest } = props,
    cardBodyClasses = classNames({
      [classes.cardBody]: true,
      [className]: className !== undefined
    });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(cardBodyStyle)(CardBody);
