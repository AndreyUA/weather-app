import React from "react";
import "./Container.css";
import "./ContainerDaily.css";
import HeaderDaily from "./HeaderDaily";
import BodyDaily from "./BodyDaily";

export default class ContainerDaily extends React.Component {
  handleCurrentChange = (e) => {
    e.preventDefault();
    this.props.currentShow(!this.props.current);
  };

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
          <a className="switchMenu" onClick={this.handleCurrentChange} href="#">
            {this.props.lang.toLowerCase() === "ru" ? "Сейчас" : "Now"}
          </a>
          <p className="footer-location">
            {this.props.weather.country_code}, {this.props.weather.city_name}.
          </p>
        </div>
      </div>
    );
  }
}
