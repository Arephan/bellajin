import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
          <Card carousel>
            <Carousel {...settings}>
              {this.props.images.map(image => {
                return (
                  <div>
                    <img
                      src={image.img}
                      alt="First slide"
                      className="slick-image"
                    />
                    {/* <div className="slick-caption">
                          <h4>
                            <LocationOn className="slick-icons" />
                            Yellowstone National Park, United States
                          </h4>
                        </div> */}
                  </div>
                );
              })}
            </Carousel>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
