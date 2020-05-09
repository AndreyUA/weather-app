import React from "react";
import { connect } from "react-redux";
import { informFetchData, weatherFetchData } from "../actions/actions";

class App extends React.Component {
  componentDidMount() {
    //fetch for ip data
    this.props.fetchData(`http://ip-api.com/json`);
  }

  componentDidUpdate(prevProps) {
    //fetch for weather data after receive ip api answer
    if (this.props.ip !== prevProps.ip) {
      this.props.fetchWeather(
        `https://api.weatherbit.io/v2.0/current?&lat=${this.props.ip.lat}&lon=${this.props.ip.lon}&key=3e5b62ad8da34e2cb55ab71ceae765eb&lang=ru`
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
    return (
      <>
        <p className="txt">{this.props.ip.countryCode}</p>
        <p className="txt">{this.props.weather.timezone}</p>
      </>
    );
  }
}

//redux function for state
const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    ip: state.ip,
    isError: state.isError,
    isLoading: state.isLoading,
  };
};

//redux actions for component
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(informFetchData(url)),
    fetchWeather: (url) => dispatch(weatherFetchData(url)),
  };
};

//connect component to redux and export it
export default connect(mapStateToProps, mapDispatchToProps)(App);
