import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather"> 
        <form>
        <input type="search" placeholder="Type a city" className="form-control"/>
        <input type="submit" value="Search" className="btn btn-primary" />
        </form>
        <h2> Milan </h2>
        <h4> 06/01 | 11:00 </h4>
        <h4> Fog </h4>
        <div className="row">
            <div className="col-6"> 
            <img src="https://ssl.gstatic.com/onebox/weather/64/fog.png" /> 
            5°C
            </div>
            <div className="col-6">
             <h4> Humidity: 90% </h4>
             <h4> Wind: 12 km/h </h4>   
            </div>

        </div>
        </div>
    );
}