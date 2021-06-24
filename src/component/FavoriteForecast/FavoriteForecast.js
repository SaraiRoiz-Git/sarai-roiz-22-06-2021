import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { getIconUrl } from '../../utilities'
import './FavoriteForecast.css'

class FavoriteForecast extends Component {
    render() {

        const localplace = this.props.list
        const currForecast = {
            "LocalObservationDateTime": "2021-06-23T10:30:00+03:00",
            "EpochTime": 1624433400,
            "WeatherText": "Mostly sunny",
            "WeatherIcon": 2,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": true,
            "Temperature": {
                "Metric": {
                    "Value": 28.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 83.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
        }
        console.log(currForecast);
        return (
            <div className="favorit-card">
                <Row className="location head-row">
                    <Col>
                        <div className="location-head">
                            <div className="curr-country">
                                {localplace.Country.LocalizedName}/
                    </div>
                            <div className="curr-city">
                                {localplace.AdministrativeArea.LocalizedName}
                            </div>
                            <img className="weather-img" src={getIconUrl(currForecast.WeatherIcon)} />
                            <div className="curr-tpm">
                                {currForecast.Temperature.Metric.Value}°
                         {currForecast.Temperature.Metric.Unit}
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <button>-</button>remove
                    </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default FavoriteForecast