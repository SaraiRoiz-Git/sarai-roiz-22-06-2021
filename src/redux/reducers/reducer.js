import { ADD_TO_FAVORITS, AUTOCOMPLITE_PLACES, CHANGE_LOCATION, NOW_FORCAST, FIVE_DAYS_FORECAST, REMOVE_FROM_FAVORITS } from '../actions/actionTypes';
import { CITY, TLV } from '../../constants';

const initialState = {
  location: TLV ,
  locationName: CITY ,
  favorites: []
};

const weatherData = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case AUTOCOMPLITE_PLACES:
      return {
        ...state,
        locations: action.payload
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
      return {
        ...state,
        fiveDaysForcast: action.payload
      };

    case REMOVE_FROM_FAVORITS:
      return {
        ...state,
        fiveDaysForcast: action.payload
      };
    default:
      return state;
  }
}

export default weatherData