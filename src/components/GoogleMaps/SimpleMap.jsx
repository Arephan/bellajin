import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.787561,
      lng: -79.417195
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB8FQ40Fc14Af618qaKApJDJo0dkWNhWbo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={43.787561}
            lng={-79.417195}
            text={"BellaJin"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
