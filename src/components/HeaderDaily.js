import React from "react";
import "./HeaderDaily.css";

export default class Header extends React.Component {
  handleLangChange = (e) => {
    e.preventDefault();
    this.props.langDocument(e.target.textContent.toLowerCase());
  };

  //нужно разобраться с запросом. почему-то начало запрашивать английский json
  //и еще нужно разобраться с подсветкой языка
  //а дальше только адаптивную версию и готово

  render() {
    return (
      <div className="header-daily">
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
