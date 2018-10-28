import React from "react";
// React plugin that creates slider
import Nouislider from "react-nouislider";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// Core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import Paginations from "components/Pagination/Pagination.jsx";
import Badge from "components/Badge/Badge.jsx";

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";

class SectionBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }

  handleToggle(value) {
    const { checked } = this.state,
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
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Basic Elements</h2>
          </div>
          <div id="buttons">
            <div className={classes.title}>
              <h3>
                Buttons
                <br />
                <small>Pick your style</small>
              </h3>
            </div>
            <GridContainer justify="center">
              <GridItem md={8} sm={12} xs={12}>
                <Button color="primary">Default</Button>
                <Button color="primary" round>
                  round
                </Button>
                <Button color="primary" round>
                  <Favorite className={classes.icons} /> with icon
                </Button>
                <Button justIcon round color="primary">
                  <Favorite className={classes.icons} />
                </Button>
                <Button color="primary" simple>
                  simple
                </Button>
              </GridItem>
            </GridContainer>
            <div className={classes.title}>
              <h3>
                <small>Pick your size</small>
              </h3>
            </div>
            <GridContainer justify="center">
              <GridItem md={8} sm={12} xs={12}>
                <Button color="primary" size="sm">
                  Small
                </Button>
                <Button color="primary">Regular</Button>
                <Button color="primary" size="lg">
                  Large
                </Button>
              </GridItem>
            </GridContainer>
            <div className={classes.title}>
              <h3>
                <small>Pick your color</small>
              </h3>
            </div>
            <GridContainer justify="center">
              <GridItem md={8} sm={12} xs={12}>
                <Button>Default</Button>
                <Button color="primary">Primary</Button>
                <Button color="info">Info</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="danger">Danger</Button>
                <Button color="rose">Rose</Button>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.space50} />
          <div id="inputs">
            <div className={classes.title}>
              <h3>Inputs</h3>
            </div>
            <GridContainer>
              <GridItem lg={3} md={4} sm={4} xs={12}>
                <CustomInput
                  formControlProps={{
                    fullWidth: true
                  }}
                  id="regular"
                  inputProps={{
                    placeholder: "Regular"
                  }}
                />
              </GridItem>
              <GridItem lg={3} md={4} sm={4} xs={12}>
                <CustomInput
                  formControlProps={{
                    fullWidth: true
                  }}
                  id="float"
                  labelText="With floating label"
                />
              </GridItem>
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  formControlProps={{
                    fullWidth: true
                  }}
                  id="success"
                  labelText="Success input"
                  success
                />
              </GridItem>
              <GridItem lg={3} md={4} sm={4} xs={12}>
                <CustomInput
                  error
                  formControlProps={{
                    fullWidth: true
                  }}
                  id="error"
                  labelText="Error input"
                />
              </GridItem>
              <GridItem lg={3} md={4} sm={4} xs={12}>
                <CustomInput
                  formControlProps={{
                    fullWidth: true
                  }}
                  id="material"
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <People />
                      </InputAdornment>
                    )
                  }}
                  labelText="With material Icons"
                />
              </GridItem>
              <GridItem lg={3} md={4} sm={4} xs={12}>
                <CustomInput
                  formControlProps={{
                    fullWidth: true
                  }}
                  id="font-awesome"
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <i className="fas fa-users" />
                      </InputAdornment>
                    )
                  }}
                  labelText="With Font Awesome Icons"
                />
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.space70} />
          <div id="checkRadios">
            <GridContainer>
              <GridItem lg={3} md={4} sm={6} xs={12}>
                <div className={classes.title}>
                  <h3>Checkboxes</h3>
                </div>
                <div
                  className={`${classes.checkboxAndRadio} ${
                    classes.checkboxAndRadioHorizontal
                  }`}
                >
                  <FormControlLabel
                    classes={{ label: classes.label }}
                    control={
                      <Checkbox
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        classes={{ checked: classes.checked }}
                        icon={<Check className={classes.uncheckedIcon} />}
                        onClick={() => this.handleToggle(21)}
                        tabIndex={-1}
                      />
                    }
                    label="Unchecked"
                  />
                </div>
                <div
                  className={`${classes.checkboxAndRadio} ${
                    classes.checkboxAndRadioHorizontal
                  }`}
                >
                  <FormControlLabel
                    classes={{ label: classes.label }}
                    control={
                      <Checkbox
                        checked={this.state.checked.indexOf(22) !== -1}
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        classes={{ checked: classes.checked }}
                        icon={<Check className={classes.uncheckedIcon} />}
                        onClick={() => this.handleToggle(22)}
                        tabIndex={-1}
                      />
                    }
                    label="Checked"
                  />
                </div>
                <div
                  className={`${classes.checkboxAndRadio} ${
                    classes.checkboxAndRadioHorizontal
                  }`}
                >
                  <FormControlLabel
                    classes={{
                      label: classes.label,
                      disabled: classes.disabledCheckboxAndRadio
                    }}
                    control={
                      <Checkbox
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        classes={{ checked: classes.checked }}
                        icon={<Check className={classes.uncheckedIcon} />}
                        tabIndex={-1}
                      />
                    }
                    disabled
                    label="Disabled Unchecked"
                  />
                </div>
                <div
                  className={`${classes.checkboxAndRadio} ${
                    classes.checkboxAndRadioHorizontal
                  }`}
                >
                  <FormControlLabel
                    classes={{
                      label: classes.label,
                      disabled: classes.disabledCheckboxAndRadio
                    }}
                    control={
                      <Checkbox
                        checked={this.state.checked.indexOf(24) !== -1}
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        classes={{ checked: classes.checked }}
                        icon={<Check className={classes.uncheckedIcon} />}
                        tabIndex={-1}
                      />
                    }
                    disabled
                    label="Disabled Checked"
                  />
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <div className={classes.title}>
                  <h3>Radio Buttons</h3>
                </div>
                <div
                  className={`${classes.checkboxAndRadio} ${
                    classes.checkboxAndRadioHorizontal
                  }`}
                >
                  <FormControlLabel
                    classes={{
                      label: classes.label
                    }}
                    control={
                      <Radio
                        aria-label="A"
                        checked={this.state.selectedEnabled === "a"}
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                        classes={{
                          checked: classes.radio
                        }}
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        name="radio button enabled"
                        onChange={this.handleChangeEnabled}
                        value="a"
                      />
                    }
                    label="First Radio"
                  />
                </div>
                <div
                  className={`${classes.checkboxAndRadio} ${
                    classes.checkboxAndRadioHorizontal
                  }`}
                >
                  <FormControlLabel
                    classes={{
                      label: classes.label
                    }}
                    control={
                      <Radio
                        aria-label="B"
                        checked={this.state.selectedEnabled === "b"}
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                        classes={{
                          checked: classes.radio
                        }}
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        name="radio button enabled"
                        onChange={this.handleChangeEnabled}
                        value="b"
                      />
                    }
                    label="Second Radio"
                  />
                </div>
                <div
                  className={`${classes.checkboxAndRadio} ${
                    classes.checkboxAndRadioHorizontal
                  }`}
                >
                  <FormControlLabel
                    classes={{
                      label: classes.label
                    }}
                    control={
                      <Radio
                        aria-label="B"
                        checked={false}
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                        classes={{
                          checked: classes.radio,
                          disabled: classes.disabledCheckboxAndRadio
                        }}
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        name="radio button disabled"
                        value="a"
                      />
                    }
                    disabled
                    label="Disabled Unchecked Radio"
                  />
                </div>
                <div
                  className={`${classes.checkboxAndRadio} ${
                    classes.checkboxAndRadioHorizontal
                  }`}
                >
                  <FormControlLabel
                    classes={{ label: classes.label }}
                    control={
                      <Radio
                        aria-label="B"
                        checked
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                        classes={{
                          checked: classes.radio,
                          disabled: classes.disabledCheckboxAndRadio
                        }}
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        name="radio button disabled"
                        value="b"
                      />
                    }
                    disabled
                    label="Disabled Checked Radio"
                  />
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <div className={classes.title}>
                  <h3>Toggle Buttons</h3>
                </div>
                <div>
                  <FormControlLabel
                    classes={{
                      label: classes.label
                    }}
                    control={
                      <Switch
                        checked={this.state.checkedA}
                        classes={{
                          switchBase: classes.switchBase,
                          checked: classes.switchChecked,
                          icon: classes.switchIcon,
                          iconChecked: classes.switchIconChecked,
                          bar: classes.switchBar
                        }}
                        onChange={this.handleChange("checkedA")}
                        value="checkedA"
                      />
                    }
                    label="Toggle is on"
                  />
                </div>
                <div>
                  <FormControlLabel
                    classes={{
                      label: classes.label
                    }}
                    control={
                      <Switch
                        checked={this.state.checkedB}
                        classes={{
                          switchBase: classes.switchBase,
                          checked: classes.switchChecked,
                          icon: classes.switchIcon,
                          iconChecked: classes.switchIconChecked,
                          bar: classes.switchBar
                        }}
                        onChange={this.handleChange("checkedB")}
                        value="checkedB"
                      />
                    }
                    label="Toggle is off"
                  />
                </div>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.space70} />
          <div id="progress">
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.title}>
                  <h3>Progress Bars</h3>
                </div>
                <CustomLinearProgress
                  color="primary"
                  value={30}
                  variant="determinate"
                />
                <CustomLinearProgress
                  color="info"
                  value={60}
                  variant="determinate"
                />
                <CustomLinearProgress
                  color="success"
                  style={{ width: "35%", display: "inline-block" }}
                  value={100}
                  variant="determinate"
                />
                <CustomLinearProgress
                  color="warning"
                  style={{ width: "20%", display: "inline-block" }}
                  value={100}
                  variant="determinate"
                />
                <CustomLinearProgress
                  color="danger"
                  style={{ width: "45%", display: "inline-block" }}
                  value={25}
                  variant="determinate"
                />
              </GridItem>
              <GridItem md={6} sm={12} xs={12}>
                <div className={classes.title}>
                  <h3>Pagination</h3>
                </div>
                <Paginations
                  pages={[
                    { text: 1 },
                    { text: "..." },
                    { text: 5 },
                    { text: 6 },
                    { active: true, text: 7 },
                    { text: 8 },
                    { text: 9 },
                    { text: "..." },
                    { text: 12 }
                  ]}
                />
                <Paginations
                  color="info"
                  pages={[
                    { text: "PREV" },
                    { text: 1 },
                    { text: 2 },
                    { active: true, text: 3 },
                    { text: 4 },
                    { text: 5 },
                    { text: "NEXT" }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
          <div id="sliders">
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.title}>
                  <h3>Sliders</h3>
                </div>
                <Nouislider
                  connect={[true, false]}
                  range={{ min: 0, max: 100 }}
                  start={[40]}
                  step={1}
                />
                <br />
                <div className="slider slider-info">
                  <Nouislider
                    connect={[false, true, false]}
                    range={{ min: 0, max: 100 }}
                    start={[20, 60]}
                    step={1}
                  />
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.title}>
                  <h3>Badges</h3>
                </div>
                <Badge>default</Badge>
                <Badge color="primary">primary</Badge>
                <Badge color="info">info</Badge>
                <Badge color="success">success</Badge>
                <Badge color="warning">warning</Badge>
                <Badge color="danger">danger</Badge>
                <Badge color="rose">rose</Badge>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionBasics);
