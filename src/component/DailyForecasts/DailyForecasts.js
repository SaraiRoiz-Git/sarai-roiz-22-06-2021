import React, { Component } from 'react'
import moment from 'moment';
import { getIconUrl } from '../../utilities.js'
import './DailyForecasts.css'
class DailyForecasts extends Component {
    constructor(props) {
        super(props)
    }

    getDay = (fullDate) => {
        const date = moment(fullDate).format('dddd');
        return date
    }

    getDate = (fullDate) => {
        const date = moment(fullDate).format('L');
        return date
    }


    render() {
        const data = this.props.data;
        return (
            <div className="daily">
                <div className="day-of-the-week">{this.getDay(data.Date)}</div>
                <div className="date">({this.getDate(data.Date)})</div>
                <div className="daily-card">
                    <img className="weather-img" src={getIconUrl(data.Day.Icon)} />
                    <div className="temperature">
                        {data.Temperature.Minimum.Value}°{data.Temperature.Minimum.Unit} - {data.Temperature.Maximum.Value}°{data.Temperature.Minimum.Unit}
                    </div>
                </div>
            </div>

        )
    }
}

export default DailyForecasts
