import React, { Component } from "react";
import MyMap from "../map/MyMap";
import "./DisplayCurrentWeather.css";

export default class DisplayCurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.currWeather.location,
      weather: this.props.currWeather.current,
    };
  }
  render() {
    return (
      <div className="air-weather">
        <div className="air-weather-info">
          <h3>{this.state.weather.condition.text}</h3>
        </div>
        <div className="air-map-container">
          <MyMap
            location={this.props.currWeather.location}
            icon={this.props.currWeather.current.condition.icon}
            coords={[
              this.props.currWeather.location.lat,
              this.props.currWeather.location.lon,
            ]}
          />
        </div>
      </div>
    );
  }
}
