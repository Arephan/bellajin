import React from "react";
// Nodejs library that concatenates classes
import classNames from "classnames";
// Nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// Core components
import parallaxStyle from "assets/jss/material-kit-react/components/parallaxStyle.jsx";

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    const windowScrollTop = window.pageYOffset / 3;
    this.state = {
      transform: `translate3d(0,${windowScrollTop}px,0)`
    };
    this.resetTransform = this.resetTransform.bind(this);
  }

  componentDidMount() {
    const windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: `translate3d(0,${windowScrollTop}px,0)`
    });
    window.addEventListener("scroll", this.resetTransform);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.resetTransform);
  }

  resetTransform() {
    const windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: `translate3d(0,${windowScrollTop}px,0)`
    });
  }

  render() {
    const {
        classes,
        filter,
        className,
        children,
        style,
        image,
        small
      } = this.props,
      parallaxClasses = classNames({
        [classes.parallax]: true,
        [classes.filter]: filter,
        [classes.small]: small,
        [className]: className !== undefined
      });
    return (
      <div
        className={parallaxClasses}
        ref="parallax"
        style={{
          ...style,
          backgroundImage: `url(${image})`,
          ...this.state
        }}
      >
        {children}
      </div>
    );
  }
}

Parallax.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  filter: PropTypes.bool,
  image: PropTypes.string,
  style: PropTypes.string
};

export default withStyles(parallaxStyle)(Parallax);
