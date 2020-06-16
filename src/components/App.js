import React from "react";
import { connect } from "react-redux";
import {
  informCoordinatesData,
  weatherFetchData,
  langDocument,
  weatherDailyFetchData,
  currentShow,
} from "../actions/actions";
import "./App.css";

import Loader from "./Loader";
import Container from "./Container";
import ContainerDaily from "./ContainerDaily";

import { apiKey } from "../vars/vars";

class App extends React.Component {
  componentDidMount() {
    //get user's slocation
    this.props.coordinatesData();
  }

  componentDidUpdate(prevProps) {
    //fetch for weather data after receive ip api answer
    if (this.props.coordinates !== prevProps.coordinates) {
      this.props.fetchWeather(
        `https://api.weatherbit.io/v2.0/current?&lat=${this.props.coordinates.coords.latitude}&lon=${this.props.coordinates.coords.longitude}&key=${apiKey}&lang=${this.props.lang}`
      );

      this.props.weatherDailyFetchData(
        `https://api.weatherbit.io/v2.0/forecast/hourly?&lat=${this.props.coordinates.coords.latitude}&lon=${this.props.coordinates.coords.longitude}&key=${apiKey}&hours=25&lang=${this.props.lang}`
      );
    }

    if (this.props.lang !== prevProps.lang) {
      this.props.fetchWeather(
        `https://api.weatherbit.io/v2.0/current?&lat=${this.props.coordinates.coords.latitude}&lon=${this.props.coordinates.coords.longitude}&key=${apiKey}&lang=${this.props.lang}`
      );

      this.props.weatherDailyFetchData(
        `https://api.weatherbit.io/v2.0/forecast/hourly?&lat=${this.props.coordinates.coords.latitude}&lon=${this.props.coordinates.coords.longitude}&key=${apiKey}&hours=25&lang=${this.props.lang}`
      );
    }
  }

  //some api links just for me
  //https://api.weatherbit.io/v2.0/current?&lat={this.state.lat}&lon={this.state.lon}&key=3e5b62ad8da34e2cb55ab71ceae765eb&lang={this.state.language}

  //http://ip-api.com/json
  //api for coordinats

  //https://api.weatherbit.io/v2.0/current?&lat=46.9659&lon=31.9974&key=3e5b62ad8da34e2cb55ab71ceae765eb&lang=ru
  //https://www.weatherbit.io/api/weather-current
  //https://www.weatherbit.io/account/dashboard
  //weather api

  render() {
    const nowShow = this.props.coordinates ? (
      this.props.weather.sunrise ? (
        <Container
          lang={this.props.lang}
          weather={this.props.weather}
          getCorrectedTimeZone={this.props.getCorrectedTimeZone}
          langDocument={this.props.langDocument}
          current={this.props.current}
          dailyWeather={this.props.dailyWeather}
          weatherDailyFetchData={this.props.weatherDailyFetchData}
          currentShow={this.props.currentShow}
        />
      ) : (
        <Loader />
      )
    ) : (
      <Loader />
    );
    const altShow = this.props.coordinates ? (
      this.props.dailyWeather[0] ? (
        <ContainerDaily
          lang={this.props.lang}
          langDocument={this.props.langDocument}
          weather={this.props.weather}
          current={this.props.current}
          dailyWeather={this.props.dailyWeather}
          weatherDailyFetchData={this.props.weatherDailyFetchData}
          currentShow={this.props.currentShow}
        />
      ) : (
        <Loader />
      )
    ) : (
      <Loader />
    );

    return (
      <div className="wrapper">{this.props.current ? nowShow : altShow}</div>
    );
  }
}

//redux function for state
const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    isWeatherError: state.isWeatherError,
    isWeatherLoading: state.isWeatherLoading,
    coordinates: state.coordinates,
    isError: state.isError,
    isLoading: state.isLoading,
    lang: state.lang,
    current: state.current,
    dailyWeather: state.dailyWeather,
  };
};

//redux actions for component
const mapDispatchToProps = (dispatch) => {
  return {
    coordinatesData: (url) => dispatch(informCoordinatesData(url)),
    fetchWeather: (url) => dispatch(weatherFetchData(url)),
    langDocument: (str) => dispatch(langDocument(str)),
    weatherDailyFetchData: (url) => dispatch(weatherDailyFetchData(url)),
    currentShow: (bool) => dispatch(currentShow(bool)),
  };
};

//connect component to redux and export it
export default connect(mapStateToProps, mapDispatchToProps)(App);
