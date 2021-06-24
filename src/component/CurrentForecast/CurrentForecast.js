
import React, { Component } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import './CurrentForecast.css'
export class CurrentForecast extends Component {
    localplace = {
        "Version": 1,
        "Key": "215793",
        "Type": "City",
        "Rank": 95,
        "LocalizedName": "Tel-aviv Port",
        "Country": {
            "ID": "IL",
            "LocalizedName": "Israel"
        },
        "AdministrativeArea": {
            "ID": "TA",
            "LocalizedName": "Tel Aviv"
        }
    }
    currForecast =
        {
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
    render() {
        return (
            <Row className="location head-row">
                <Col>
                    <div className="location-head">
                        <div className="curr-country">
                            {this.localplace.Country.LocalizedName}/
                    </div>
                        <div className="curr-city">
                            {this.localplace.AdministrativeArea.LocalizedName}-
                    </div>
                        <div className="curr-tpm">
                            {this.currForecast.Temperature.Metric.Value}°
                         {this.currForecast.Temperature.Metric.Unit}
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <Button>🤍</Button>Add to favorits
                    </div>
                </Col>


            </Row>
        )
    }
}


export default CurrentForecast
