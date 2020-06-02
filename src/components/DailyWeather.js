import React from "react";
import DailyData from "./DailyData";
import "./DailyWeather.css";

class DailyWeather extends React.Component {
  render() {
    return (
      <div className="accordion center-obj">
        <input
          type="radio"
          name="select"
          className={
            this.props.dark_mode ? "accordion-select" : "accordion-select2"
          }
          defaultChecked
        />
        <div
          className={
            this.props.dark_mode ? "accordion-title" : "accordion-title2"
          }
        >
          <span className="title-date">{this.props.daily_info[0].date}</span>
          <img
            className="center-icon"
            src={`http://openweathermap.org/img/wn/${this.props.daily_info[0].icon}@2x.png`}
          ></img>
        </div>
        <div
          className={
            this.props.dark_mode ? "accordion-content" : "accordion-content2"
          }
        >
          <DailyData
            info={this.props.daily_info[0]}
            dark_mode={this.props.dark_mode}
          />
        </div>

        <input
          type="radio"
          name="select"
          className={
            this.props.dark_mode ? "accordion-select" : "accordion-select2"
          }
        />
        <div
          className={
            this.props.dark_mode ? "accordion-title" : "accordion-title2"
          }
        >
          <span className="title-date">{this.props.daily_info[1].date}</span>
          <img
            className="center-icon"
            src={`http://openweathermap.org/img/wn/${this.props.daily_info[1].icon}@2x.png`}
          ></img>
        </div>
        <div
          className={
            this.props.dark_mode ? "accordion-content" : "accordion-content2"
          }
        >
          <DailyData
            info={this.props.daily_info[1]}
            dark_mode={this.props.dark_mode}
          />
        </div>

        <input
          type="radio"
          name="select"
          className={
            this.props.dark_mode ? "accordion-select" : "accordion-select2"
          }
        />
        <div
          className={
            this.props.dark_mode ? "accordion-title" : "accordion-title2"
          }
        >
          <span className="title-date">{this.props.daily_info[2].date}</span>
          <img
            className="center-icon"
            src={`http://openweathermap.org/img/wn/${this.props.daily_info[2].icon}@2x.png`}
          ></img>
        </div>
        <div
          className={
            this.props.dark_mode ? "accordion-content" : "accordion-content2"
          }
        >
          <DailyData
            info={this.props.daily_info[2]}
            dark_mode={this.props.dark_mode}
          />
        </div>

        <input
          type="radio"
          name="select"
          className={
            this.props.dark_mode ? "accordion-select" : "accordion-select2"
          }
        />
        <div
          className={
            this.props.dark_mode ? "accordion-title" : "accordion-title2"
          }
        >
          <span className="title-date">{this.props.daily_info[3].date}</span>
          <img
            className="center-icon"
            src={`http://openweathermap.org/img/wn/${this.props.daily_info[3].icon}@2x.png`}
          ></img>
        </div>
        <div
          className={
            this.props.dark_mode ? "accordion-content" : "accordion-content2"
          }
        >
          <DailyData
            info={this.props.daily_info[3]}
            dark_mode={this.props.dark_mode}
          />
        </div>

        <input
          type="radio"
          name="select"
          className={
            this.props.dark_mode ? "accordion-select" : "accordion-select2"
          }
        />
        <div
          className={
            this.props.dark_mode ? "accordion-title" : "accordion-title2"
          }
        >
          <span className="title-date">{this.props.daily_info[4].date}</span>
          <img
            className="center-icon"
            src={`http://openweathermap.org/img/wn/${this.props.daily_info[4].icon}@2x.png`}
          ></img>
        </div>
        <div
          className={
            this.props.dark_mode ? "accordion-content" : "accordion-content2"
          }
        >
          <DailyData
            info={this.props.daily_info[4]}
            dark_mode={this.props.dark_mode}
          />
        </div>

        <input
          type="radio"
          name="select"
          className={
            this.props.dark_mode ? "accordion-select" : "accordion-select2"
          }
        />
        <div
          className={
            this.props.dark_mode ? "accordion-title" : "accordion-title2"
          }
        >
          <span className="title-date">{this.props.daily_info[5].date}</span>
          <img
            className="center-icon"
            src={`http://openweathermap.org/img/wn/${this.props.daily_info[5].icon}@2x.png`}
          ></img>
        </div>
        <div
          className={
            this.props.dark_mode ? "accordion-content" : "accordion-content2"
          }
        >
          <DailyData
            info={this.props.daily_info[5]}
            dark_mode={this.props.dark_mode}
          />
        </div>
      </div>
    );
  }
}

export default DailyWeather;
