import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  handleLangChange = (e) => {
    e.preventDefault();
    this.props.langDocument(e.target.textContent.toLowerCase());
  };

  render() {
    return (
      <div className="header">
        <div className="header-info">
          <p className="header-info-txt">
            {this.props.lang.toLowerCase() === "ru" ? "Восход: " : "Sunrise: "}
            {this.props.weather.sunrise ? this.props.sunrise : "00:00"},
            {this.props.lang.toLowerCase() === "ru" ? " заход: " : " sunset: "}
            {this.props.weather.sunset ? this.props.sunset : "00:00"}
          </p>
        </div>
        <div className="header-language">
          <a
            onClick={this.handleLangChange}
            href="#"
            className={
              this.props.lang === "ru"
                ? "header-language-point language-active"
                : "header-language-point"
            }
          >
            RU
          </a>
          <a
            onClick={this.handleLangChange}
            href="#"
            className={
              this.props.lang === "en"
                ? "header-language-point language-active"
                : "header-language-point"
            }
          >
            EN
          </a>
        </div>
      </div>
    );
  }
}
