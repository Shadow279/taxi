import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.33,
      lng: -121.88
    },
    zoom: 7
  };

  render() {
    // let center = this.defaultProps.center;
    const { viewList } = this.props;
    let taxi = viewList && viewList.length > 0 ? viewList[0] : "";
    // center.lat = taxi.latitude;
    // center.lng = taxi.longitude;
    // this.setState({ center });

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        {taxi ? (
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={taxi.latitude}
              lng={taxi.longitude}
              text="My Taxi Location"
            />
          </GoogleMapReact>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SimpleMap;
