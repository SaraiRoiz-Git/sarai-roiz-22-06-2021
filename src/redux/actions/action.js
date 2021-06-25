import { API_KEY, URL } from '../../constants';
import { AUTOCOMPLITE_PLACES, NOW_FORCAST, FIVE_DAYS_FORECAST, ADD_TO_FAVORITS, REMOVE_FROM_FAVORITS, CHANGE_LOCATION,CLEAR_ERROR, ON_REQUEST_FAILED } from './actionTypes';
import data from "../../app/tmp/Auto";
import fivedays from '../../app/tmp/tmp-5';
import currentW from '../../app/tmp/curr';
/*API actions*/
export const getAutoCompliteData = (input) => dipatch => {
    console.log('in getAutoCompliteData');
    // dipatch({
    //             type: AUTOCOMPLITE_PLACES,
    //             payload: data
    // })
    fetch(`${URL}locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${input}`).
        then(res => res.json()).
        then(data => dipatch({
            type: AUTOCOMPLITE_PLACES,
            payload: data
        })).catch(error=>{dipatch({type: ON_REQUEST_FAILED})})
}

export const getFiveDaysWeatherByLocation = (location) => dipatch => {
//     dipatch({
//         type: FIVE_DAYS_FORECAST,
//         payload: fivedays
// })
    fetch(`${URL}forecasts/v1/daily/5day/${location}?apikey=${API_KEY}&metric=true`)
        .then(res => res.json())
        .then(data => dipatch({
            type: FIVE_DAYS_FORECAST,
            payload: data
        })).catch(error=>{dipatch({type: ON_REQUEST_FAILED})});
};

export const getTodayWeatherByLocation = (location) => dipatch => {
//     dipatch({
//         type: NOW_FORCAST,
//         payload: currentW
// })
     fetch(`${URL}currentconditions/v1/${location}?apikey=${API_KEY}`)
        .then(res => res.json())
       .then(data => dipatch({
           type: NOW_FORCAST,
           payload: data
        })).catch(error=>{
            console.log('error');
            dipatch({type: ON_REQUEST_FAILED})
        });
};

export const addToFavorits = (location) => dipatch => {
   
    return (dipatch({
        type: ADD_TO_FAVORITS,
        payload: location
    }))
}

export const removeItemFromFavorits = (location) => dipatch => {
    return (dipatch({
        type: REMOVE_FROM_FAVORITS,
        payload: location
    }))
}

export const setDefultLocation = (location) => dipatch => {
    console.log('setDefultLocation', location)
    return (dipatch({
        type: CHANGE_LOCATION,
        payload: location
    }))
}

export const clearError  =()=>{
    return function(dispatch){
        console.log('in clearError')
        return dispatch({type: CLEAR_ERROR});
    }
};
