import React from "react";
import "./CurrentWeather.css";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "20%",
    marginRight: "auto",
    // width: "60%",
    // border: `1px solid ${theme.palette.divider}`,
    // borderRadius: theme.shape.borderRadius,
    // backgroundColor: "#c1ffb8",
    // color: theme.palette.text.secondary,
    "& svg": {
      margin: theme.spacing(1.5),
    },
    "& hr": {
      margin: theme.spacing(0, 0.5),
    },
  },
}));

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function CurrentWeather(props) {
  const classes = useStyles();

  return (
    <div style={{ color: props.dark_mode ? "#5E703B" : "#ffffff" }}>
      <Grid container alignItems="center" className={classes.root}>
        <div className="index-gallery">
          <div className="item">
            <img
              className="icon"
              src={`http://openweathermap.org/img/wn/${props.info.icon}@2x.png`}
            ></img>
            <p class="desc">{capitalize(props.info.description)}</p>
          </div>
        </div>

        {/* <h1>{props.info.description}</h1>
        <br />
        <img
          className="icon"
          src={`http://openweathermap.org/img/wn/${props.info.icon}@2x.png`}
        ></img> */}
        <Divider orientation="vertical" flexItem />
        <div>
          <span className="temp-title">{props.info.temp}&#176;C</span>
          <Divider light />

          <ul style={{ listStyleType: "none" }}>
            <li>
              Feels like :{" "}
              <span className="values">{props.info.feels_like}&#176;C</span>
            </li>
            <li>
              Pressure :{" "}
              <span className="values">{props.info.pressure} mb</span>
            </li>
            <li>
              Humidity : <span className="values">{props.info.humidity}%</span>
            </li>
            <li>
              Wind Speed :{" "}
              <span className="values">{props.info.wind_speed} km/hr</span>
            </li>
            <li>
              Visibility :{" "}
              <span className="values">{props.info.visibility / 1000} km</span>
            </li>
          </ul>
        </div>
      </Grid>
    </div>
  );
}

export default CurrentWeather;
