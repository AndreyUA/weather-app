import React from "react";
import "./BodyDaily.css";

export default class BodyDaily extends React.Component {
    componentDidMount() {
        console.log(this.props.dailyWeather[0]);
    }

  render() {
      let result = <p>Loadeing...</p>;
      if (this.props.dailyWeather) {
        result = (
            <>
              <div className="daily-block">
                <div className="daily-block-hour">
        <p>{this.props.dailyWeather[0].timestamp_local}</p>
                </div>
                <div className="daily-block-hour">2</div>
                <div className="daily-block-hour">3</div>
                <div className="daily-block-hour">4</div>
                <div className="daily-block-hour">5</div>
                <div className="daily-block-hour">6</div>
              </div>
            </>
          );
      } 
    
    //const data = this.props.dailyWeather[0].timestamp_local;

    //const asd = <h1>{this.props.dailyWeather[8].weather.description}</h1>;
    //{this.props.dailyWeather ? <p>hello</p> : null}
    return (
        <>
        {this.props.dailyWeather ? result : null}
        </>
    );
  }
}
