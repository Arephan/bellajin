// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
// nodejs library that concatenates classes
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import React from "react";
import Gallery from "react-photo-gallery";
import TabContainer from "components/TabContainer/TabContainer";
import { Components } from "views/Components/Components.jsx";

import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
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
class GallerySection extends React.Component {
  render() {
    const { classes } = this.props;
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div className={classes.section}>
        <div className={classes.container}>
        <div id="nav-tabs">
            <h3>Our Works</h3>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6} className={classes.container}>
              <CustomTabs
                headerColor="danger"
                tabs={[
                  {
                    tabName: "Women",
                    tabContent: <SectionCarousel images={womenCarouselData} />
                  },
                  {
                    tabName: "Men",
                    tabContent: <SectionCarousel images={menCarouselData} />
                  },
                  {
                    tabName: "Perm",
                    tabContent: <SectionCarousel images={permCarouselData} />
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
        </div>
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(GallerySection);
