import React from "react";
// Nodejs library that concatenates classes
import classNames from "classnames";
// Nodejs library to set properties for components
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// Core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import navPillsStyle from "assets/jss/material-kit-react/components/navPillsStyle.jsx";

class NavPills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    };
  }

  handleChange = (event, active) => {
    this.setState({ active });
  };

  handleChangeIndex = index => {
    this.setState({ active: index });
  };

  render() {
    const {
        classes,
        tabs,
        direction,
        color,
        horizontal,
        alignCenter
      } = this.props,
      flexContainerClasses = classNames({
        [classes.flexContainer]: true,
        [classes.horizontalDisplay]: horizontal !== undefined
      }),
      tabButtons = (
        <Tabs
          centered={alignCenter}
          classes={{
            root: classes.root,
            fixed: classes.fixed,
            flexContainer: flexContainerClasses,
            indicator: classes.displayNone
          }}
          onChange={this.handleChange}
          value={this.state.active}
        >
          {tabs.map((prop, key) => {
            const icon = {};
            if (prop.tabIcon !== undefined) {
              icon.icon = <prop.tabIcon className={classes.tabIcon} />;
            }
            const pillsClasses = classNames({
              [classes.pills]: true,
              [classes.horizontalPills]: horizontal !== undefined,
              [classes.pillsWithIcons]: prop.tabIcon !== undefined
            });
            return (
              <Tab
                key={key}
                label={prop.tabButton}
                {...icon}
                classes={{
                  root: pillsClasses,
                  labelContainer: classes.labelContainer,
                  label: classes.label,
                  selected: classes[color]
                }}
              />
            );
          })}
        </Tabs>
      ),
      tabContent = (
        <div className={classes.contentWrapper}>
          <SwipeableViews
            axis={direction === "rtl" ? "x-reverse" : "x"}
            index={this.state.active}
            onChangeIndex={this.handleChangeIndex}
          >
            {tabs.map((prop, key) => (
              <div className={classes.tabContent} key={key}>
                {prop.tabContent}
              </div>
            ))}
          </SwipeableViews>
        </div>
      );
    return horizontal !== undefined ? (
      <GridContainer>
        <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
        <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
      </GridContainer>
    ) : (
      <div>
        {tabButtons}
        {tabContent}
      </div>
    );
  }
}

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

NavPills.propTypes = {
  active: PropTypes.number,
  // Index of the default active pill
  alignCenter: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ]),
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object
  }),
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.func,
      tabContent: PropTypes.node
    })
  ).isRequired
};

export default withStyles(navPillsStyle)(NavPills);
