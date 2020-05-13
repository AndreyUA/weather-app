import React from "react";
import "./Body.css";

export default function Body(props) {
  const pres = +props.weather.pres / 1.333;
  const humidityRu = <span>Отн. влажность:</span>;
  const humidityEn = <span>Rel. humidity:</span>;
  const mmPresRu = (
    <span>
      мм <br /> рт. ст.
    </span>
  );
  const mmPresEn = (
    <span>
      <br />
      mmHg
    </span>
  );

  return (
    <div className="body">
      <h3 className="body-main">
        {" "}
        {props.lang.toLowerCase() === "ru"
          ? "Погода сейчас:"
          : "Weather now:"}{" "}
      </h3>
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
            <span>&deg;C</span>
          </h4>
          <h5 className="app-temp">
            {props.lang.toLowerCase() === "ru"
              ? "Ощущается как: "
              : "Feels like: "}
            {props.weather.app_temp}
            <span>&deg;C</span>
          </h5>
        </div>
      </div>
      <div className="body-add-info">
        <div className="body-add-info-block">
          <p className="info-main">
            {props.lang.toLowerCase() === "ru" ? "Ветер:" : "Wind:"}
          </p>
          <p className="info-txt">
            {props.weather.wind_cdir_full}, <br />{" "}
            {props.weather.wind_spd.toFixed(2)}{" "}
            <span>{props.lang.toLowerCase() === "ru" ? "м/с" : "m/s"}</span>
          </p>
        </div>

        <div className="body-add-info-block">
          <p className="info-main">
            {props.lang.toLowerCase() === "ru" ? "Видимость:" : "Visibility:"}
          </p>
          <p className="info-txt">
            {props.weather.vis.toFixed(2)}{" "}
            <span>{props.lang.toLowerCase() === "ru" ? "км" : "km"}</span>
          </p>
        </div>

        <div className="body-add-info-block">
          <p className="info-main">
            {props.lang.toLowerCase() === "ru"
              ? "Облачность:"
              : "Cloud coverage:"}
          </p>
          <p className="info-txt">
            {props.weather.clouds} <span>%</span>
          </p>
        </div>

        <div className="body-add-info-block">
          <p className="info-main">
            {props.lang.toLowerCase() === "ru" ? "Давление:" : "Pressure:"}
          </p>
          <p className="info-txt">
            {+pres.toFixed(0)}{" "}
            {props.lang.toLowerCase() === "ru" ? mmPresRu : mmPresEn}
          </p>
        </div>

        <div className="body-add-info-block">
          <p className="info-main">
            {props.lang.toLowerCase() === "ru" ? humidityRu : humidityEn}
          </p>
          <p className="info-txt">
            {props.weather.rh} <span>%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
