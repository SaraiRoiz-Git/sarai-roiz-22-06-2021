import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import DailyForecasts from '../DailyForecasts/DailyForecasts'
import './FiveDaysForcast.css'
class FiveDaysForcast extends Component {
    fiveDaysForecast = {

        "Headline": {
            "EffectiveDate": "2021-06-26T08:00:00+03:00",
            "EffectiveEpochDate": 1624683600,
            "Severity": 4,
            "Text": "Pleasant this weekend",
            "Category": "mild",
            "EndDate": null,
            "EndEpochDate": null,
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
        },
        "DailyForecasts": [
            {
                "Date": "2021-06-24T07:00:00+03:00",
                "EpochDate": 1624507200,
                "Temperature": {
                    "Minimum": {
                        "Value": 24.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 29.5,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 1,
                    "IconPhrase": "Sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 33,
                    "IconPhrase": "Clear",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
            },
            {
                "Date": "2021-06-25T07:00:00+03:00",
                "EpochDate": 1624593600,
                "Temperature": {
                    "Minimum": {
                        "Value": 25.1,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 30.7,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 1,
                    "IconPhrase": "Sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 33,
                    "IconPhrase": "Clear",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
            },
            {
                "Date": "2021-06-26T07:00:00+03:00",
                "EpochDate": 1624680000,
                "Temperature": {
                    "Minimum": {
                        "Value": 25.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 30.8,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 1,
                    "IconPhrase": "Sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 33,
                    "IconPhrase": "Clear",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
            },
            {
                "Date": "2021-06-27T07:00:00+03:00",
                "EpochDate": 1624766400,
                "Temperature": {
                    "Minimum": {
                        "Value": 25.8,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 30.5,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 1,
                    "IconPhrase": "Sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 33,
                    "IconPhrase": "Clear",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
            },
            {
                "Date": "2021-06-28T07:00:00+03:00",
                "EpochDate": 1624852800,
                "Temperature": {
                    "Minimum": {
                        "Value": 26.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 31.1,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 1,
                    "IconPhrase": "Sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 33,
                    "IconPhrase": "Clear",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
            }
        ]
    }

    createDalyCard = () => {
        return (this.fiveDaysForecast.DailyForecasts.map(obj => <DailyForecasts data={obj} />))
    }

    render() {
        const cards = this.createDalyCard()
        console.log("card", cards);
        return (
            <div>
                <h3>{this.fiveDaysForecast.Headline.Text}</h3>
                <div className="five-days-row">
                    {cards}
                </div>

            </div>
        )
    }
}

export default FiveDaysForcast;
