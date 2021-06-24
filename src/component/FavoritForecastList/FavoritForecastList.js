import React, { Component } from 'react'
import FavoriteForecast from '../FavoriteForecast/FavoriteForecast.js'

class FavoritForecastList extends Component {
    favoriteList = [{
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
      },{
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
      },{
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
      }]

    createFavoritsCard = () => {
        if (this.favoriteList.length > 0) {
            return this.favoriteList.map((location) => {
                return <FavoriteForecast list={location} />
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