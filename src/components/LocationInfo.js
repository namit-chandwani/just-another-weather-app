import React from "react";
import "./LocationInfo.css";

class LocationInfo extends React.Component {
  render() {
    return (
      <div className="index-gallery">
        <div className="item-new">
          <img className="rounded-new" src={this.props.image_url} alt="" />
          <p
            className="caption"
            style={{ color: this.props.dark_mode ? "#000000" : "#ffffff" }}
          >
            {this.props.location}
          </p>
        </div>
      </div>
    );
  }
}

export default LocationInfo;
