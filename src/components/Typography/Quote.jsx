import React from "react";
// Nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// Core components
import typographyStyle from "assets/jss/material-kit-react/components/typographyStyle.jsx";

function Quote({ ...props }) {
  const { classes, text, author } = props;
  return (
    <blockquote className={`${classes.defaultFontStyle} ${classes.quote}`}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
}

Quote.propTypes = {
  author: PropTypes.node,
  classes: PropTypes.object.isRequired,
  text: PropTypes.node
};

export default withStyles(typographyStyle)(Quote);
