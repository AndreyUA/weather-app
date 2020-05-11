import React from "react";
import "./Body.css";

export default function Body(props) {
  const pres = +props.weather.pres / 1.333;

  return (
    <div className="body">
      <h3 className="body-main">Погода сейчас:</h3>
      <div className="body-block">
        <div className="body-block-pic">
          <p className="body-block-descr">
            {props.weather.weather.description}
          </p>
          <img
            className="pic"
            src={`https://www.weatherbit.io/static/img/icons/${props.weather.weather.icon}.png`}
            alt="weather pic"
          />
        </div>
        <div className="body-block-temp">
          <h4 className="temp">
            {props.weather.temp}
            <span>&deg;</span>
          </h4>
          <h5 className="app-temp">
            Ощущается как: {props.weather.app_temp}
            <span>&deg;</span>
          </h5>
        </div>
      </div>
      <div className="body-add-info">
        <div className="body-add-info-block">
          <p className="info-main">Ветер:</p>
          <p className="info-txt">
            {props.weather.wind_cdir_full}, <br />{" "}
            {props.weather.wind_spd.toFixed(2)} <span>м/с</span>
          </p>
        </div>

        <div className="body-add-info-block">
          <p className="info-main">Видимость:</p>
          <p className="info-txt">
            {props.weather.vis.toFixed(2)} <span>км</span>
          </p>
        </div>

        <div className="body-add-info-block">
          <p className="info-main">Облачность:</p>
          <p className="info-txt">
            {props.weather.clouds} <span>%</span>
          </p>
        </div>

        <div className="body-add-info-block">
          <p className="info-main">Давление:</p>
          <p className="info-txt">
            {+pres.toFixed(0)} <span>мм <br/> рт. ст.</span>
          </p>
        </div>

        <div className="body-add-info-block">
          <p className="info-main">
            Относительная <br /> влажность:
          </p>
          <p className="info-txt">
            {props.weather.rh} <span>%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
