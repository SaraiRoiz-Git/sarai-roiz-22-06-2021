import { ADD_TO_FAVORITS, AUTOCOMPLITE_PLACES, CHANGE_LOCATION, NOW_FORCAST, FIVE_DAYS_FORCAST, REMOVE_FROM_FAVORITS } from '../actions/actionTypes';
import { TLV } from '../../constants';

const initialState = {
  location: { TLV },
  favorites: []
};

const weatherData = (state = initialState, action) => {
  switch (action.type) {
    case AUTOCOMPLITE_PLACES:
      return {
        ...state,
        locations: action.payload
      };

    case NOW_FORCAST:
      return {
        ...state,
        "daily-forcast": action.payload
      };

    case FIVE_DAYS_FORCAST:
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

    case FIVE_DAYS_FORCAST:
      return {
        ...state,
        fiveDaysForcast: action.payload
      };

    default:
      return state;
  }
}

export default weatherData