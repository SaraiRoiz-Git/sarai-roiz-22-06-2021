import React, { Component, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getFiveDaysWeatherByLocation } from '../../redux/actions/action';
import DailyForecasts from '../DailyForecasts/DailyForecasts'
import './FiveDaysForcast.css'
function FiveDaysForcast() {
    const dispatch = useDispatch();
    const location = useSelector(state => state.location);
    const localPlace = useSelector(state => state.currLocation);
    const fiveDaysForecast = useSelector(state => state.fiveDaysForcast)

    useEffect(() => {
        console.log('in fivedays useeFFEFT')
        let locationKey = localPlace ? localPlace[0].Key : location;
       // console.log("location",location)
       // console.log("localPlace",localPlace)
         dispatch(getFiveDaysWeatherByLocation(locationKey))
    }, []);
    // console.log("localPlace", fiveDaysForecast)
    // console.log("fiveDaysForecast", fiveDaysForecast)

    const createDalyCard = () => {
        return (fiveDaysForecast ? fiveDaysForecast.DailyForecasts.map(obj => <DailyForecasts data={obj} />) : null)
    }

    const cards = createDalyCard()
    return (
        <div>
            <h3 className="head-line">{fiveDaysForecast ? fiveDaysForecast.Headline.Text : null}</h3>
            <div className="five-days-row">
                {cards}
            </div>

        </div>
    )

}

export default FiveDaysForcast;
