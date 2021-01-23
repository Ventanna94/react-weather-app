import react from "react";

export default function DisplayDate(props) {
    let day = props.date.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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