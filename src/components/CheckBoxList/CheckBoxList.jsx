import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

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
      checked: [],
      data: props.data
    };
    this.handleStepperContentValueChange = props.handleStepperContentValueChange.bind(
      this
    );
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle = value => () => {
    const { checked, data } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });

    this.handleStepperContentValueChange(newChecked[0].category, newChecked);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} subheader={<li />}>
        <List>
          {this.state.data.map(value => (
            <li
              key={`${value.serviceCategory}`}
              className={classes.listSection}
            >
              <ul className={classes.ul}>
                <ListItem
                  key={value}
                  role={undefined}
                  dense
                  button
                  onClick={this.handleToggle(value)}
                  className={classes.listItem}
                >
                  <Checkbox
                    checked={this.state.checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText
                    primary={`${value.primary}`}
                    secondary={`${value.secondary}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Comments">
                      {value.tertiary}
                    </IconButton>
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
