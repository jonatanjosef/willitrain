import React from "react";

const Weather = props => (
    <div>
        {props.city && props.country && <p className="content-right-weather__key">Location: {props.city}, {props.country}</p>}
        {props.temperature && <p className="content-right-weather__key">Temperature: {props.temperature} °C</p>}
        {props.humidity && <p className="content-right-weather__key">Humidity: {props.humidity}%</p>}
        {props.description && <p className="content-right-weather__key">Conditions: {props.description}</p>}
        {props.error && <p className="content-right-weather__key">{props.error}</p>}
    </div>
)

export default Weather;
