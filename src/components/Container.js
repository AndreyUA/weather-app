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

  handleCurrentChange = (e) => {
    e.preventDefault();
    this.props.currentShow(!this.props.current);
  };
  render() {
    return (
      <div className="container">
        <Header
          lang={this.props.lang}
          weather={this.props.weather}
          sunrise={this.getCorrectedTimeZone(this.props.weather.sunrise)}
          sunset={this.getCorrectedTimeZone(this.props.weather.sunset)}
          langDocument={this.props.langDocument}
        />
        <Body lang={this.props.lang} weather={this.props.weather} />{" "}
        <div className="footer">
          <a className="switchMenu" onClick={this.handleCurrentChange} href="#">
            {this.props.lang.toLowerCase() === "ru" ? "Почасово" : "Hourly"}
          </a>
          <p className="footer-location">
            {this.props.ip.country}, {this.props.ip.city}. IP:{" "}
            {this.props.ip.query}
          </p>
        </div>
      </div>
    );
  }
}
