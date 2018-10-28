import React from "react";
// Nodejs library that concatenates classes
import classNames from "classnames";
// Nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Popper from "@material-ui/core/Popper";

// Core components
import Button from "components/CustomButtons/Button.jsx";

import customDropdownStyle from "assets/jss/material-kit-react/components/customDropdownStyle.jsx";

class CustomDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state,
      {
        classes,
        buttonText,
        buttonIcon,
        dropdownList,
        buttonProps,
        dropup,
        dropdownHeader,
        caret,
        hoverColor,
        left,
        rtlActive,
        noLiPadding
      } = this.props,
      caretClasses = classNames({
        [classes.caret]: true,
        [classes.caretActive]: open,
        [classes.caretRTL]: rtlActive
      }),
      dropdownItem = classNames({
        [classes.dropdownItem]: true,
        [classes[`${hoverColor}Hover`]]: true,
        [classes.noLiPadding]: noLiPadding,
        [classes.dropdownItemRTL]: rtlActive
      });
    let icon = null;
    switch (typeof buttonIcon) {
      case "function":
        icon = <this.props.buttonIcon className={classes.buttonIcon} />;
        break;
      case "string":
        icon = (
          <Icon className={classes.buttonIcon}>{this.props.buttonIcon}</Icon>
        );
        break;
      default:
        icon = null;
        break;
    }
    return (
      <div>
        <div>
          <Button
            aria-haspopup="true"
            aria-label="Notifications"
            aria-owns={open ? "menu-list" : null}
            {...buttonProps}
            buttonRef={node => {
              this.anchorEl = node;
            }}
            onClick={this.handleClick}
          >
            {icon}
            {buttonText !== undefined ? buttonText : null}
            {caret ? <b className={caretClasses} /> : null}
          </Button>
        </div>
        <Popper
          anchorEl={this.anchorEl}
          className={classNames({
            [classes.popperClose]: !open,
            [classes.pooperResponsive]: true
          })}
          disablePortal
          open={open}
          placement={
            dropup
              ? left
                ? "top-start"
                : "top"
              : left
                ? "bottom-start"
                : "bottom"
          }
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              id="menu-list"
              in={open}
              style={
                dropup
                  ? { transformOrigin: "0 100% 0" }
                  : { transformOrigin: "0 0 0" }
              }
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList role="menu" className={classes.menuList}>
                    {dropdownHeader !== undefined ? (
                      <MenuItem
                        className={classes.dropdownHeader}
                        onClick={this.handleClose}
                      >
                        {dropdownHeader}
                      </MenuItem>
                    ) : null}
                    {dropdownList.map((prop, key) => {
                      if (prop.divider) {
                        return (
                          <Divider
                            className={classes.dropdownDividerItem}
                            key={key}
                            onClick={this.handleClose}
                          />
                        );
                      }
                      return (
                        <MenuItem
                          className={dropdownItem}
                          key={key}
                          onClick={this.handleClose}
                        >
                          {prop}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};

CustomDropdown.propTypes = {
  buttonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  buttonProps: PropTypes.object,
  buttonText: PropTypes.node,
  caret: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  dropdownHeader: PropTypes.node,
  dropdownList: PropTypes.array,
  dropup: PropTypes.bool,
  hoverColor: PropTypes.oneOf([
    "black",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ]),
  left: PropTypes.bool,
  noLiPadding: PropTypes.bool,
  rtlActive: PropTypes.bool
};

export default withStyles(customDropdownStyle)(CustomDropdown);
