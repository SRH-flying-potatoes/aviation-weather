import React, { Component } from "react";
import MyMap from "../map/MyMap";

export default class DisplayCurrentWeather extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MyMap
          location={this.props.currWeather.location}
          icon={this.props.currWeather.current.condition.icon}
          coords={[
            this.props.currWeather.location.lat,
            this.props.currWeather.location.lon,
          ]}
        />
      </div>
    );
  }
}
