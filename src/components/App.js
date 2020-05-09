import React from 'react';
import { connect } from 'react-redux';
import { informFetchData } from '../actions/actions';

class App extends React.Component {
      componentDidMount() {
          this.props.fetchData(`http://ip-api.com/json`);
      }
    
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
          </>
        );
      }
}

const mapStateToProps = (state) => {
    return {
        ip: state.ip,
        isError: state.isError,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(informFetchData(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
