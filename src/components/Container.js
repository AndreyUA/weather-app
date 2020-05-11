import React from "react";
import "./Container.css";
import Header from "./Header";
import Body from "./Body";

export default class Container extends React.Component {
  getCorrectedTimeZone = (arg) => {
    const date = new Date();
    const delta = date.getHours() - date.getUTCHours();
    let correctedTime = "";
    if (+arg[1] + delta >= 10) {
      return (correctedTime = `${+arg.slice(0, 2) + delta}${arg.slice(2)}`);
    } else {
      return (correctedTime = `${arg[0]}${+arg[1] + delta}${arg.slice(2)}`);
    }
  };
  render() {
    return (
      <div className="container">
        <Header
          weather={this.props.weather}
          sunrise={this.getCorrectedTimeZone(this.props.weather.sunrise)}
          sunset={this.getCorrectedTimeZone(this.props.weather.sunset)}
          langDocument={this.props.langDocument}
        />

        <Body weather={this.props.weather} />

        <div className="footer">
          <p className="footer-location">
            {this.props.ip.country}, {this.props.ip.city}. IP:{" "}
            {this.props.ip.query}
          </p>
        </div>
      </div>
    );
  }
}
