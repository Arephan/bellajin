import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Gallery from "react-photo-gallery";
import women1 from "assets/img/women/women1.jpg";
import women2 from "assets/img/women/women2.jpg";
import women3 from "assets/img/women/women3.jpg";
import women4 from "assets/img/women/women4.jpg";
import women5 from "assets/img/women/women5.jpg";
import women6 from "assets/img/women/women6.jpg";
import men1 from "assets/img/men/men1.jpg";
import men2 from "assets/img/men/men2.jpg";
import men3 from "assets/img/men/men3.jpg";
import men4 from "assets/img/men/men4.jpg";
import men5 from "assets/img/men/men5.jpg";

import perm1 from "assets/img/perm/perm1.jpg";
import perm2 from "assets/img/perm/perm2.jpg";
import perm3 from "assets/img/perm/perm3.jpg";
import perm4 from "assets/img/perm/perm4.jpg";
import perm5 from "assets/img/perm/perm5.jpg";
import perm6 from "assets/img/perm/perm6.jpg";
import SectionCarousel from "views/LandingPage/Sections/SectionCarousel";
import SingleLineGridList from "components/GridList/SingleLineGridList";
const womenCarouselData = [
  {
    img: women1
  },
  {
    img: women2
  },
  {
    img: women3
  },
  {
    img: women4
  },
  {
    img: women5
  },
  {
    img: women6
  }
];
const menCarouselData = [
  {
    img: men1
  },
  {
    img: men2
  },
  {
    img: men3
  },
  {
    img: men4
  },
  {
    img: men5
  }

];
const permCarouselData = [
  {
    img: perm1
  },
  {
    img: perm2
  },
  {
    img: perm3
  },
  {
    img: perm4
  },
  {
    img: perm5
  },
  {
    img: perm6
  }
];
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="Ladies" />
            <Tab label="Men" />
            <Tab label="Perm" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <SectionCarousel images={womenCarouselData} />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <TabContainer>
              <SectionCarousel images={menCarouselData} />
            </TabContainer>
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <TabContainer>
              <SectionCarousel images={permCarouselData} />
            </TabContainer>
          </TabContainer>
        )}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
