import React, { Component } from 'react'

class DailyForecasts extends Component {
    constructor(props) {
        super(props)
        this.data = props.data

    }

    getDataDay = (date) => { 
        console.log("date",new Date(date).getDay)
        return(new Date(date).getDay) }

    render() {
        console.log("data!!",this.data)
        return (
            <div className="daily">
                <div className="day-of-the-week">{this.getDataDay(this.data.Date)}</div>
                <div className="daily-card">
                    <div className="date">s</div>
                    <img className="weather-img" src="" />
                    <div className="temperature">s</div>
                </div>
            </div>

        )
    }
}

export default DailyForecasts
