import React from 'react';
import './Result.css'

const Result = (props) => {
    const { city, date, sunrise, sunset, temp, wind, pressure, err } = props.weather

let content = null;

if(!err && city) {

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
    const tempFormat = Math.round(temp);
    const cityName = city.charAt(0).toUpperCase() + city.slice(1);

    content = (
        <React.Fragment>
            <h3><em>{cityName}</em></h3>
            <h4>Dzień i godzina: {date}</h4>
            <h4>Temperatura: {tempFormat}&#176;C</h4>
            <h4>Wschód słońca: {sunriseTime}</h4>
            <h4>Zachód słońca: {sunsetTime}</h4>
            <h4>Siła wiatru: {wind} m/s</h4>
            <h4>Ciśnienie: {pressure} hPa</h4>
        </React.Fragment>
    )
}

    return (
<div className="result">
    {err ? `Nie mamy w bazie ${city}` : content}
</div>
    )
}

export default Result