import React from "react";
import PrimarySearchAppBar from "./components/Navbar";
import DailyWeather from "./components/DailyWeather";
import LocationInfo from "./components/LocationInfo";
import CurrentWeather from "./components/CurrentWeather";
import EntryScreen from "./components/EntryScreen";

const API_KEY = "dae2315ca76a81105d0244c22f6e5f5e";
const API_KEY2 = "16708405-790476c4252083dbf87980c35";
class App extends React.Component {
  state = {
    temp: undefined,
    location: undefined,
    lat: undefined,
    lon: undefined,
    description: undefined,
    icon: undefined,
    feels_like: undefined,
    pressure: undefined,
    humidity: undefined,
    wind_speed: undefined,
    visibility: undefined,
    error: false,
    daily_info: undefined,
    image_url: undefined,
    social_message: undefined,
    dark_mode: true,
  };

  timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = month + " " + date;
    return time;
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.value;
    const api_call1 = await fetch(
      // `https://api.openweathermap.org/data/2.5/onecall?lat=28.65195&lon=77.23149&appid=${API_KEY}&units=metric`
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data1 = await api_call1.json();
    // console.log(data1);
    if (data1.cod === 200) {
      this.setState({
        temp: data1.main.temp,
        location: data1.name + ", " + data1.sys.country,
        lat: data1.coord.lat,
        lon: data1.coord.lon,
        description: data1.weather[0].description,
        icon: data1.weather[0].icon,
        feels_like: data1.main.feels_like,
        pressure: data1.main.pressure,
        humidity: data1.main.humidity,
        wind_speed: data1.wind.speed,
        visibility: data1.visibility,
        error: false,
      });
      const loc = data1.name;
      // console.log(
      //   this.state.temp,
      //   this.state.location,
      //   this.state.lat,
      //   this.state.lon,
      //   this.state.description,
      //   this.state.feels_like,
      //   this.state.pressure,
      //   this.state.humidity,
      //   this.state.wind_speed,
      //   this.state.visibility
      // );

      const api_call2 = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&appid=${API_KEY}&units=metric`
      );
      const data2 = await api_call2.json();
      var daily_list = [];
      // console.log(data2);
      for (let i = 1; i < 7; i++) {
        daily_list.push({
          date: this.timeConverter(data2.daily[i].dt),
          min: data2.daily[i].temp.min,
          max: data2.daily[i].temp.max,
          humidity: data2.daily[i].humidity,
          pressure: data2.daily[i].pressure,
          wind_spd: data2.daily[i].wind_speed,
          desc: data2.daily[i].weather[0].description,
          icon: data2.daily[i].weather[0].icon,
        });
        // console.log(this.timeConverter(data2.daily[i].dt));
      }
      // console.log(daily_list);
      this.setState({
        daily_info: daily_list,
        social_message: `Current Weather in ${this.state.location} is ${this.state.temp} deg C. For a live weather update visit www.google.com`,
      });
      // console.log(this.state.social_message);

      // console.log(this.state.daily_info);

      const api_call3 = await fetch(
        `https://pixabay.com/api/?key=${API_KEY2}&q=${loc}&image_type=photo&pretty=true`
      );
      const data3 = await api_call3.json();
      // console.log(data3.hits.length);
      this.setState({
        image_url:
          data3.hits.length !== 0
            ? data3.hits[0].webformatURL
            : "https://cdn.pixabay.com/photo/2020/05/19/18/40/konzentrationslager-5192114_1280.jpg",
      });
    } else {
      console.log("Errors!");
      this.setState({
        error: true,
      });
    }
  };

  clickHandler = () => {
    if (this.state.temp) {
      window.open(
        "https://twitter.com/intent/tweet?text=" + this.state.social_message
      );
    }
  };

  functionRedirect = () => {
    if (this.state.dark_mode) {
      console.log("Dark Mode Active!", this.state.dark_mode);
    } else {
      console.log("XXXX :Dark Mode Deactive!", this.state.dark_mode);
    }
  };

  darkClickHandler = () => {
    this.setState({ dark_mode: !this.state.dark_mode });
    this.functionRedirect();
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.dark_mode ? "#ccf381" : "#3C1A5B",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <PrimarySearchAppBar
          getWeather={this.getWeather}
          clickHandler={this.clickHandler}
          darkClickHandler={this.darkClickHandler}
        />
        {this.state.daily_info ? (
          <div>
            <table style={{ width: "100%" }}>
              <td style={{ verticalAlign: "middle" }}>
                <CurrentWeather
                  info={{
                    temp: this.state.temp,
                    description: this.state.description,
                    feels_like: this.state.feels_like,
                    pressure: this.state.pressure,
                    humidity: this.state.humidity,
                    wind_speed: this.state.wind_speed,
                    visibility: this.state.visibility,
                    icon: this.state.icon,
                  }}
                  dark_mode={this.state.dark_mode}
                />
              </td>
              <td>
                <LocationInfo
                  location={this.state.location}
                  image_url={this.state.image_url}
                  dark_mode={this.state.dark_mode}
                />
              </td>
            </table>
            <DailyWeather
              daily_info={this.state.daily_info}
              dark_mode={this.state.dark_mode}
            />
          </div>
        ) : (
          <EntryScreen
            error={this.state.error}
            dark_mode={this.state.dark_mode}
          />
        )}
      </div>
    );
  }
}
export default App;
