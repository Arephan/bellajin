import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
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
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import SectionCarousel from "views/LandingPage/Sections/SectionCarousel";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
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
class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Our Customers</h2>
            <h5 className={classes.description}>
              We serve men, women, and all specialized requests. If you have
              something in mind, please feel free to bring pictures!
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea title="Women" description="$20 and up" vertical>
                <SectionCarousel images={womenCarouselData} />
              </InfoArea>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea title="Men" description="$15 and up" vertical>
                <SectionCarousel images={menCarouselData} />
              </InfoArea>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Specialized"
                description="Perms, colors, straigtening and more"
                vertical
              >
                <SectionCarousel images={permCarouselData} />
              </InfoArea>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
