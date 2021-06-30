import React from 'react'
import moment from 'moment';
import { getIconUrl } from '../../utilities.js'
import './DailyForecasts.css'

function DailyForecasts(props) {

    const getDay = (fullDate) => {
        const day = moment(fullDate).format('dddd');
        return day
    }

    const getDate = (fullDate) => {
        const date = moment(fullDate).format('L');
        return date
    }

    const data = props.data;

    if (data) {
        return (
            <div className="daily">
                <div className="day-of-the-week">{getDay(data.Date)}</div>
                <div className="date">({getDate(data.Date)})</div>
                <div className="daily-card">
                    <img className="weather-img" src={getIconUrl(data.Day.Icon)} />
                    <div className="temperature">
                        {data.Temperature.Minimum.Value}°{data.Temperature.Minimum.Unit} - {data.Temperature.Maximum.Value}°{data.Temperature.Minimum.Unit}
                    </div>
                </div>
            </div>
        )
    }
    return
}

export default DailyForecasts
