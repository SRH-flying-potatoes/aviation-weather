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
          <div className="air-location-info">
            <p>{`name`}</p>
            <p>{`region`}</p>
            <p>{`country`}</p>
          </div>
          <h3>{this.state.weather.condition.text}</h3>
          <p>{`last_updated`}</p>
          <p>{`temp_c`}</p>
          <p>{`wind_kph`}</p>
          <p>{`wind_degree`}</p>
          <p>{`wind_dir`}</p>
          <p>{`pressure_mb`}</p>
          <p>{`precip_mm`}</p>
          <p>{`vis_km`}</p>
          <p>{`humidity`}</p>
          <p>{`gust_kph`}</p>
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
