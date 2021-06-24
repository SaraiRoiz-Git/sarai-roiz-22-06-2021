import { ADD_TO_FAVORITS, AUTOCOMPLITE_PLACES, CHANGE_LOCATION, NOW_FORCAST, FIVE_DAYS_FORECAST, REMOVE_FROM_FAVORITS } from '../actions/actionTypes';
import { CITY, TLV } from '../../constants';

const initialState = {
  location: TLV,
  locationName: CITY,
  favoriteList: []
};

const weatherData = (state = initialState, action) => {
  switch (action.type) {
    case AUTOCOMPLITE_PLACES:
      return {
        ...state,
        currLocation: action.payload
      };

    case NOW_FORCAST:
      return {
        ...state,
        currForecast: action.payload
      };

    case FIVE_DAYS_FORECAST:
      return {
        ...state,
        fiveDaysForcast: action.payload
      };

    case CHANGE_LOCATION:
      return {
        ...state,
        location: action.payload
      };

    case ADD_TO_FAVORITS:
      console.log("action",action)
      console.log("state",state)
      if (!state.favoriteList.find(obj => obj.localPlace.LocalizedName == action.payload.localPlace.LocalizedName)) {
        state.favoriteList.push(action.payload)
      }
      console.log("action",action)
        console.log("state",state)
        return {
          ...state
        }
      ;

    case REMOVE_FROM_FAVORITS:
      const list = state.favoriteList.filter(obj => obj.localPlace.LocalizedName != action.payload.localPlace.LocalizedName)
      return {
        ...state,
        favoriteList: list
      };
    default:
      return state;
  }
}

export default weatherData