import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import "./index.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({loaded: false});
    function handleResponse(response) {
    setWeatherData({
        loaded: true,
        temperature: Math.round(response.data.main.temp),
        city: response.data.name,
        date: "09/01",
        time: "19:33",
        description: response.data.weather[0].description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        feelsLike: Math.round(response.data.main.feels_like)
    });    
    }

    if (weatherData.loaded) {
        return (
        <div className="Weather"> 
        <form className="searchForm">
        <input type="search" placeholder="Take me to..." className="form-control"autoFocus="on" />
        <input type="submit" value="Search" className="btn btn-primary" />
        <input type="submit" value="Current" className="btn btn-info" />
        <input type="submit" value="Get Inspired" className="btn btn-outline-info" />

        </form>
        <div className="row">
         <div className="col-6">
         <h1 className="city"> {weatherData.city} </h1>
         <h2 className="date"> {weatherData.date} | {weatherData.time} </h2>
         <div className="clearfix"> <img src={weatherData.iconUrl} className="float-left" /> </div>
         <h4 className="temperature"> {weatherData.temperature}° C | <span> Feels like {weatherData.feelsLike}° C </span> </h4>
         <h5 className="text-capitalize"> {weatherData.description} </h5>
         </div>
    
         <div className="col-6">
         <h4 className="humidity"> Humidity: {weatherData.humidity}% </h4>
         <h4 className="wind"> Wind: {weatherData.wind} km/h </h4>   
         </div>
        </div>
        </div>
    );
    } else {
        const apiKey= "2dce67821f0e7f4647f02add3197ae70";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return ("Loading...");
    }
}
    