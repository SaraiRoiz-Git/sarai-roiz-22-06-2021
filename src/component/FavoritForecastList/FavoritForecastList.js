import React from 'react'
import { useSelector } from 'react-redux';
import FavoriteForecast from '../FavoriteForecast/FavoriteForecast.js'

function FavoritForecastList() {
  const favoriteList = useSelector(state => state.favoriteList);
  const createFavoritsCard = () => {
    if (favoriteList.length > 0) {
      return favoriteList.map((location) => {
        return <FavoriteForecast favorite={location} />
      })
    }
    return "No items on your list"
  }

  return (
    <div className="list">
      {createFavoritsCard()}
    </div>
  )
}

export default FavoritForecastList