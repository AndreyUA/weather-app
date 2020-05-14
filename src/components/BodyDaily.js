import React from "react";
import "./BodyDaily.css";

export default class BodyDaily extends React.Component {
  componentDidMount() {
    console.log(this.props.dailyWeather[1]);
  }

  render() {
    let result = <p>Loadeing...</p>;
    if (this.props.dailyWeather) {
      result = (
        <>
          <div className="daily-block">
            <div className="daily-block-hour">
              <p className="daily-block-hour_main">
                {this.props.dailyWeather[1].timestamp_local.slice(-8, -3)}
              </p>

              <img
                className="daily-pic"
                src={`https://www.weatherbit.io/static/img/icons/${this.props.dailyWeather[1].weather.icon}.png`}
                alt="weather pic"
              />
              <b>
                <p className="daily-block-hour_txt">
                  {this.props.dailyWeather[1].temp.toFixed(0)}
                  <span>&deg;C</span>
                </p>
              </b>
            </div>

            <div className="daily-block-hour">
              <p className="daily-block-hour_main">
                {this.props.dailyWeather[5].timestamp_local.slice(-8, -3)}
              </p>

              <img
                className="daily-pic"
                src={`https://www.weatherbit.io/static/img/icons/${this.props.dailyWeather[5].weather.icon}.png`}
                alt="weather pic"
              />
              <b>
                <p className="daily-block-hour_txt">
                  {this.props.dailyWeather[5].temp.toFixed(0)}
                  <span>&deg;C</span>
                </p>
              </b>
            </div>

            <div className="daily-block-hour">
              <p className="daily-block-hour_main">
                {this.props.dailyWeather[9].timestamp_local.slice(-8, -3)}
              </p>

              <img
                className="daily-pic"
                src={`https://www.weatherbit.io/static/img/icons/${this.props.dailyWeather[9].weather.icon}.png`}
                alt="weather pic"
              />
              <b>
                <p className="daily-block-hour_txt">
                  {this.props.dailyWeather[9].temp.toFixed(0)}
                  <span>&deg;C</span>
                </p>
              </b>
            </div>

            <div className="daily-block-hour">
              <p className="daily-block-hour_main">
                {this.props.dailyWeather[13].timestamp_local.slice(-8, -3)}
              </p>

              <img
                className="daily-pic"
                src={`https://www.weatherbit.io/static/img/icons/${this.props.dailyWeather[13].weather.icon}.png`}
                alt="weather pic"
              />
              <b>
                <p className="daily-block-hour_txt">
                  {this.props.dailyWeather[13].temp.toFixed(0)}
                  <span>&deg;C</span>
                </p>
              </b>
            </div>

            <div className="daily-block-hour">
              <p className="daily-block-hour_main">
                {this.props.dailyWeather[17].timestamp_local.slice(-8, -3)}
              </p>

              <img
                className="daily-pic"
                src={`https://www.weatherbit.io/static/img/icons/${this.props.dailyWeather[17].weather.icon}.png`}
                alt="weather pic"
              />
              <b>
                <p className="daily-block-hour_txt">
                  {this.props.dailyWeather[17].temp.toFixed(0)}
                  <span>&deg;C</span>
                </p>
              </b>
            </div>

            <div className="daily-block-hour">
              <p className="daily-block-hour_main">
                {this.props.dailyWeather[21].timestamp_local.slice(-8, -3)}
              </p>

              <img
                className="daily-pic"
                src={`https://www.weatherbit.io/static/img/icons/${this.props.dailyWeather[21].weather.icon}.png`}
                alt="weather pic"
              />
              <b>
                <p className="daily-block-hour_txt">
                  {this.props.dailyWeather[21].temp.toFixed(0)}
                  <span>&deg;C</span>
                </p>
              </b>
            </div>
          </div>
        </>
      );
    }
    return <>{this.props.dailyWeather ? result : null}</>;
  }
}
