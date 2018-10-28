// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import Card from "components/Card/Card.jsx";
// Core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import React from "react";
// React component for creating beautiful carousel
import Carousel from "react-slick";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props,
      settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
          <Card carousel>
            <Carousel {...settings}>
              {this.props.images.map(image => (
                <div>
                  <img
                    alt="First slide"
                    className="slick-image"
                    src={image.img}
                  />
                  {/* <div className="slick-caption">
                          <h4>
                            <LocationOn className="slick-icons" />
                            Yellowstone National Park, United States
                          </h4>
                        </div> */}
                </div>
              ))}
            </Carousel>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
