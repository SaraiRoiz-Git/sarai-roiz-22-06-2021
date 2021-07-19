import { API_KEY, URL } from '../../constants';
import { AUTOCOMPLITE_PLACES, NOW_FORCAST, FIVE_DAYS_FORECAST, ADD_TO_FAVORITS, REMOVE_FROM_FAVORITS, CHANGE_LOCATION, CLEAR_ERROR, ON_REQUEST_FAILED } from './actionTypes';

export const getAutoCompliteData = (input) => dipatch => {
    fetch(`${URL}locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${input}`).
        then(res => res.json()).
        then(data => dipatch({
            type: AUTOCOMPLITE_PLACES,
            payload: data
        })).catch(error => { dipatch({ type: ON_REQUEST_FAILED }) })
}

export const getFiveDaysWeatherByLocation = (location) => dipatch => {
    fetch(`${URL}forecasts/v1/daily/5day/${location}?apikey=${API_KEY}&metric=true`)
        .then(res => res.json())
        .then(data => dipatch({
            type: FIVE_DAYS_FORECAST,
            payload: data
        })).catch(error => { dipatch({ type: ON_REQUEST_FAILED }) });
};

export const getTodayWeatherByLocation = (location) => dipatch => {
    fetch(`${URL}currentconditions/v1/${location}?apikey=${API_KEY}`)
        .then(res => res.json())
        .then(data => dipatch({
            type: NOW_FORCAST,
            payload: data
        })).catch(error => {
            dipatch({ type: ON_REQUEST_FAILED })
        });
};

export const addToFavorites = (location) => dipatch => {
    return (dipatch({
        type: ADD_TO_FAVORITS,
        payload: location
    }))
}

export const removeItemFromFavorites = (location) => dipatch => {
    return (dipatch({
        type: REMOVE_FROM_FAVORITS,
        payload: location
    }))
}

export const setDefultLocation = (location) => dipatch => {
    return (dipatch({
        type: CHANGE_LOCATION,
        payload: location
    }))
}

export const clearError = () => dispatch => {
    console.log('in nclear error')
    return (dispatch({ type: CLEAR_ERROR }));
}
