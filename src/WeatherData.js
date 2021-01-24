import React from "react";
import DisplayDate from "./DisplayDate";
import WeatherIcon from "./WeatherIcon";



export default function WeatherData(props) {
    return (
        <div className="row">
         <div className="col-6">
         <h1 className="city"> {props.data.city} </h1>
         <h2 className="date"> <DisplayDate date={props.data.date} /> </h2>
         <div className="clearfix">
         <div className="float-left">     
         <WeatherIcon code={props.data.icon}/>
         </div>
         </div>
         <h4 className="temperature"> <i className="fas fa-thermometer-half"></i> {props.data.temperature}° C | <span> Feels like {props.data.feelsLike}° C </span> </h4>
         <h5 className="text-capitalize"> {props.data.description} </h5>
         </div>
        
         <div className="col-6">
         <h4 className="humidity"> <i className="fas fa-tint"></i> Humidity: {props.data.humidity}% </h4>
         <h4 className="wind"> <i className="fas fa-wind"></i> Wind: {props.data.wind} km/h </h4>
         <img src="img/undraw_before_dawn_bqrj.png" />
         </div>
        </div>);
}