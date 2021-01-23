import React, {useState} from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import "./Weather.css";
import "./index.css";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({loaded: false});
    function handleResponse(response) {
    setWeatherData({
        loaded: true,
        temperature: Math.round(response.data.main.temp),
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        feelsLike: Math.round(response.data.main.feels_like)
    });    
    }

    function search() {
        const apiKey= "2dce67821f0e7f4647f02add3197ae70";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function searchCity(event) {
        setCity(event.target.value);
    }

    if (weatherData.loaded) {
        return (
        <div className="Weather"> 
        <form className="searchForm" onSubmit={handleSubmit}>
        <input type="search" placeholder="Take me to..." className="form-control"autoFocus="on" onChange={searchCity} />
        <input type="submit" value="Search" className="btn btn-primary" />
        <button type="submit" class="btn btn-info" id="current"> <i className="fas fa-map-marker-alt"></i> Current </button>
        <button type="submit" className="btn btn-outline-info" onClick="window.open('https://www.poetryfoundation.org/poems/poem-of-the-day','_blank'); return false;"> <i
        className="fas fa-brain"></i> Think </button>

        </form>

        <WeatherData data={weatherData}/>
        
        </div>
    );
    } else {
        search();
        return ("Loading...");
    }
}
    