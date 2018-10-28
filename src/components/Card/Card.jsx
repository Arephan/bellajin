import React from "react";
// Nodejs library that concatenates classes
import classNames from "classnames";
// Nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// Core components
import cardStyle from "assets/jss/material-kit-react/components/cardStyle.jsx";

function Card({ ...props }) {
  const { classes, className, children, plain, carousel, ...rest } = props,
    cardClasses = classNames({
      [classes.card]: true,
      [classes.cardPlain]: plain,
      [classes.cardCarousel]: carousel,
      [className]: className !== undefined
    });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  carousel: PropTypes.bool,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  plain: PropTypes.bool
};

export default withStyles(cardStyle)(Card);
