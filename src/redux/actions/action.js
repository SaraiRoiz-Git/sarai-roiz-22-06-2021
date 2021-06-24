import { API_KEY, URL } from '../../constants';
import {AUTOCOMPLITE_PLACES,NOW_FORCAST, FIVE_DAYS_FORECAST } from './actionTypes';

/*API actions*/
export const getAutoCompliteData = (input) => dipatch=> {
    fetch(`${URL}locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${input}`).
        then(res => res.json()).
        then(data => dipatch({
            type: AUTOCOMPLITE_PLACES,
            payload: data
        }))
}

export const getFiveDaysWeatherByLocation = (location) => dipatch => {
    fetch(`${URL}forecasts/v1/daily/5day/${location}?apikey=${API_KEY}?metric=true`)
        .then(res => res.json())
        .then(data => dipatch({
            type: FIVE_DAYS_FORECAST,
            payload: data
        })).catch();
};

export const getTodayWeatherByLocation = (location) => dipatch => {
    fetch(`${URL}currentconditions/v1/${location}?apikey=${API_KEY}`)
        .then(res => res.json())
        .then(data => dipatch({
            type: NOW_FORCAST,
            payload: data
        })).catch();
};