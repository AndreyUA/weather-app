import React from "react";
import "./Container.css";
import HeaderDaily from "./HeaderDaily";
import BodyDaily from "./BodyDaily";

export default class ContainerDaily extends React.Component {
  render() {
    const dailyWeather = (
      <>
        <HeaderDaily
          lang={this.props.lang}
          langDocument={this.props.langDocument}
        />
        <BodyDaily
          lang={this.props.lang}
          ip={this.props.ip}
          dailyWeather={this.props.dailyWeather}
        />
      </>
    );

    return (
      <div className="container">
        {dailyWeather}

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
