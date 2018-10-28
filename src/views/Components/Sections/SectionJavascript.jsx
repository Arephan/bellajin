import React from "react";
// React plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
// Core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class SectionJavascript extends React.Component {
  anchorElLeft = null;

  anchorElTop = null;

  anchorElBottom = null;

  anchorElRight = null;

  constructor(props) {
    super(props);
    this.state = {
      classicModal: false,
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false
    };
  }

  handleClickOpen(modal) {
    const x = [];
    x[modal] = true;
    this.setState(x);
  }

  handleClose(modal) {
    const x = [];
    x[modal] = false;
    this.setState(x);
  }

  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }

  handleClickButton(state) {
    this.setState({
      [state]: true
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Javascript components</h2>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Modal</h3>
              </div>
              <GridContainer>
                <GridItem lg={4} md={6} sm={12} xs={12}>
                  <Button
                    block
                    color="primary"
                    onClick={() => this.handleClickOpen("classicModal")}
                  >
                    <LibraryBooks className={classes.icon} />
                    Classic
                  </Button>
                  <Dialog
                    aria-describedby="classic-modal-slide-description"
                    aria-labelledby="classic-modal-slide-title"
                    classes={{
                      root: classes.center,
                      paper: classes.modal
                    }}
                    keepMounted
                    onClose={() => this.handleClose("classicModal")}
                    open={this.state.classicModal}
                    TransitionComponent={Transition}
                  >
                    <DialogTitle
                      className={classes.modalHeader}
                      disableTypography
                      id="classic-modal-slide-title"
                    >
                      <IconButton
                        aria-label="Close"
                        className={classes.modalCloseButton}
                        color="inherit"
                        key="close"
                        onClick={() => this.handleClose("classicModal")}
                      >
                        <Close className={classes.modalClose} />
                      </IconButton>
                      <h4 className={classes.modalTitle}>Modal title</h4>
                    </DialogTitle>
                    <DialogContent
                      className={classes.modalBody}
                      id="classic-modal-slide-description"
                    >
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean. A
                        small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth. Even the all-powerful
                        Pointing has no control about the blind texts it is an
                        almost unorthographic life One day however a small line
                        of blind text by the name of Lorem Ipsum decided to
                        leave for the far World of Grammar.
                      </p>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button color="transparent" simple>
                        Nice Button
                      </Button>
                      <Button
                        color="danger"
                        onClick={() => this.handleClose("classicModal")}
                        simple
                      >
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </GridItem>
              </GridContainer>
              <GridItem md={12} sm={12} xs={12}>
                <div className={classes.title}>
                  <h3>Datetime Picker</h3>
                </div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <InputLabel className={classes.label}>
                      Datetime Picker
                    </InputLabel>
                    <br />
                    <FormControl fullWidth>
                      <Datetime
                        inputProps={{ placeholder: "Datetime Picker Here" }}
                      />
                    </FormControl>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridItem>
            <GridItem md={6} sm={12} xs={12}>
              <div className={classes.title}>
                <h3>Popovers</h3>
              </div>
              <Button
                buttonRef={node => {
                  this.anchorElLeft = node;
                }}
                onClick={() => this.handleClickButton("openLeft")}
              >
                On left
              </Button>
              <Popover
                anchorEl={this.anchorElLeft}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "left"
                }}
                anchorReference="anchorEl"
                classes={{
                  paper: classes.popover
                }}
                onClose={() => this.handleClosePopover("openLeft")}
                open={this.state.openLeft}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "right"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on left</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElTop = node;
                }}
                onClick={() => this.handleClickButton("openTop")}
              >
                On top
              </Button>
              <Popover
                anchorEl={this.anchorElTop}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
                anchorReference="anchorEl"
                classes={{
                  paper: classes.popover
                }}
                onClose={() => this.handleClosePopover("openTop")}
                open={this.state.openTop}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on top</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElBottom = node;
                }}
                onClick={() => this.handleClickButton("openBottom")}
              >
                On bottom
              </Button>
              <Popover
                anchorEl={this.anchorElBottom}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                anchorReference="anchorEl"
                classes={{
                  paper: classes.popover
                }}
                onClose={() => this.handleClosePopover("openBottom")}
                open={this.state.openBottom}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on bottom</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElRight = node;
                }}
                onClick={() => this.handleClickButton("openRight")}
              >
                On right
              </Button>
              <Popover
                anchorEl={this.anchorElRight}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "right"
                }}
                anchorReference="anchorEl"
                classes={{
                  paper: classes.popover
                }}
                onClose={() => this.handleClosePopover("openRight")}
                open={this.state.openRight}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "left"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on right</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <br />
              <br />
              <div className={classes.title}>
                <h3>Tooltips</h3>
              </div>
              <Tooltip
                classes={{ tooltip: classes.tooltip }}
                id="tooltip-left"
                placement="left"
                title="Tooltip on left"
              >
                <Button>On left</Button>
              </Tooltip>
              <Tooltip
                classes={{ tooltip: classes.tooltip }}
                id="tooltip-top"
                placement="top"
                title="Tooltip on top"
              >
                <Button>On top</Button>
              </Tooltip>
              <Tooltip
                classes={{ tooltip: classes.tooltip }}
                id="tooltip-bottom"
                placement="bottom"
                title="Tooltip on bottom"
              >
                <Button>On bottom</Button>
              </Tooltip>
              <Tooltip
                classes={{ tooltip: classes.tooltip }}
                id="tooltip-right"
                placement="right"
                title="Tooltip on right"
              >
                <Button>On right</Button>
              </Tooltip>
            </GridItem>
          </GridContainer>
          <div className={classes.title}>
            <h3>Carousel</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(javascriptStyles)(SectionJavascript);
