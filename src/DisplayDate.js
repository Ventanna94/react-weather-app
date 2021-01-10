import react from "react";

export default function DisplayDate(props) {
    let day = props.date.getDate();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let month = months[props.date.getMonth()];
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`; 
    } 
    return ( <div> {day} {month} | {hours}:{minutes} </div>);
}