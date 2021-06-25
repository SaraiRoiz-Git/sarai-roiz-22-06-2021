import { ADD_TO_FAVORITS, AUTOCOMPLITE_PLACES, CHANGE_LOCATION, NOW_FORCAST, FIVE_DAYS_FORECAST, REMOVE_FROM_FAVORITS, ON_REQUEST_FAILED, CLEAR_ERROR } from '../actions/actionTypes';
import { CITY, COUNTRY, LOCAL_PLAECE, TLV } from '../../constants';

const initialState = {
  // location: TLV,
  // locationName: CITY,
  // locationState: COUNTRY,
  favoriteList: [],
  localPlace:LOCAL_PLAECE
};

const weatherData = (state = initialState, action) => {
  switch (action.type) {
    case AUTOCOMPLITE_PLACES:
      console.log('action', action)
      return {
        ...state,
        locationsList: action.payload
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
      console.log('in CHANGE_LOCATION')
      console.log(action.payload)

      return {
        ...state,
        localPlace: action.payload
      };

    case ADD_TO_FAVORITS:
      console.log("action", action)
      console.log("state", state)
      if (!state.favoriteList.find(obj => obj.localPlace.LocalizedName == action.payload.localPlace.LocalizedName)) {
        state.favoriteList.push(action.payload)
      }
      // console.log("action", action)
      // console.log("state", state)
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

    case ON_REQUEST_FAILED:
      return {
        ...state,
        error: true
      };

      case CLEAR_ERROR:
        return {
          ...state,
          error: false
        };

    default:
      return state;
  }
}

export default weatherData