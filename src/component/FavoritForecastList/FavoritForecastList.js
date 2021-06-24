import React, { Component } from 'react'
import FavoriteForecast from '../FavoriteForecast/FavoriteForecast.js'

class FavoritForecastList extends Component {
    favoriteList = [{
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
    }, {
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
    }, {
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
    }]

    createFavoritsCard = () => {
        if (this.favoriteList.length > 0) {
            return this.favoriteList.map((location) => {
                <FavoriteForecast data={location} />
            })
        }
        return "No items on your list"
    }
    render() {

        return (
            <div>
                {this.createFavoritsCard()}
            </div>
        )
    }
}
export default FavoritForecastList