import React from "react";
// Nodejs library to set properties for components
import PropTypes from "prop-types";
// Nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import customInputStyle from "assets/jss/material-kit-react/components/customInputStyle.jsx";

function CustomInput({ ...props }) {
  const {
      classes,
      formControlProps,
      labelText,
      id,
      labelProps,
      inputProps,
      error,
      white,
      inputRootCustomClasses,
      success
    } = props,
    labelClasses = classNames({
      [` ${classes.labelRootError}`]: error,
      [` ${classes.labelRootSuccess}`]: success && !error
    }),
    underlineClasses = classNames({
      [classes.underlineError]: error,
      [classes.underlineSuccess]: success && !error,
      [classes.underline]: true,
      [classes.whiteUnderline]: white
    }),
    marginTop = classNames({
      [inputRootCustomClasses]: inputRootCustomClasses !== undefined
    }),
    inputClasses = classNames({
      [classes.input]: true,
      [classes.whiteInput]: white
    });
  let formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={`${classes.labelRoot} ${labelClasses}`}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses
        }}
        id={id}
        {...inputProps}
      />
    </FormControl>
  );
}

CustomInput.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.bool,
  formControlProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  labelProps: PropTypes.object,
  labelText: PropTypes.node,
  success: PropTypes.bool,
  white: PropTypes.bool
};

export default withStyles(customInputStyle)(CustomInput);
