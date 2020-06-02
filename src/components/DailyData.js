import React from "react";
import "./DailyData.css";

class DailyData extends React.Component {
  render() {
    console.log(this.props.dark_mode);
    const mystyle = {
      listStyleType: "none",
      color: this.props.dark_mode ? "rgba(0, 0, 0, 0.54)" : "#ffffff",
    };
    return (
      <div>
        <ul style={mystyle}>
          <li>
            Max. Temp :{" "}
            <span className="values">{this.props.info.max} &#176;C</span>
          </li>
          <li>
            Min. Temp :{" "}
            <span className="values">{this.props.info.min} &#176;C</span>
          </li>
          <li>
            Humidity :{" "}
            <span className="values">{this.props.info.humidity}%</span>
          </li>
          <li>
            Pressure :{" "}
            <span className="values">{this.props.info.pressure} mb</span>
          </li>
          <li>
            Wind Speed :{" "}
            <span className="values">{this.props.info.wind_spd} km/hr</span>
          </li>
          <li>
            Description : <span className="values">{this.props.info.desc}</span>
          </li>
        </ul>
      </div>
    );
  }
}
export default DailyData;
