import React, {useState} from "react";
import WeatherForecastCards from "./WeatherForecastCards";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    function showForecast(response) {
    setForecast(response.data);
    setLoaded(true);
    }

    if(loaded && props.city === forecast.city.name) {
        return (
        <div className="forecast row"> 
        <WeatherForecastCards data={forecast.list[1]}/>  
        <WeatherForecastCards data={forecast.list[2]}/>  
        <WeatherForecastCards data={forecast.list[3]}/>  
        <WeatherForecastCards data={forecast.list[4]}/>  
        <WeatherForecastCards data={forecast.list[5]}/>  
        </div>
        );
    } else {
    const apiKey= "2dce67821f0e7f4647f02add3197ae70";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
    return null;
    }
    
}