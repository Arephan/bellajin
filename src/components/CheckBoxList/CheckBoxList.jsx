import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import TimeSlot from "assets/constants/TimeSlot";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 300
  },
  listSection: {
    backgroundColor: "inherit"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  }
});

class CheckboxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.userData,
      data: props.data
    };
    this.handleStepperContentValueChange = props.handleStepperContentValueChange.bind(
      this
    );
    this.handleToggle = this.handleToggle.bind(this);
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({ data: props.data, checked: new Array() });
  }

  handleToggle = value => () => {
    const { checked, data } = this.state,
      currentIndex = checked.indexOf(value),
      newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });

    this.handleStepperContentValueChange(
      this.state.data[0].category, // Hacky solution to get sub key of newAppointment
      newChecked
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} subheader={<li />}>
        <List>
          {this.state.data.map(value => (
            <li
              className={classes.listSection}
              key={`${value.serviceCategory}`}
            >
              <ul className={classes.ul}>
                <ListItem
                  button
                  className={classes.listItem}
                  dense
                  key={value}
                  onClick={this.handleToggle(value)}
                  role={undefined}
                >
                  <Checkbox
                    checked={this.state.checked.indexOf(value) !== -1}
                    disableRipple
                    tabIndex={-1}
                  />
                  <ListItemText
                    primary={`${value.primary}`}
                    secondary={value.secondary ? `${value.secondary}` : null}
                  />
                  <ListItemSecondaryAction>
                    {value.tertiary}
                  </ListItemSecondaryAction>
                </ListItem>
              </ul>
            </li>
          ))}
        </List>
      </div>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxList);
