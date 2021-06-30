import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFiveDaysWeatherByLocation } from '../../redux/actions/action';
import DailyForecasts from '../DailyForecasts/DailyForecasts'
import './FiveDaysForcast.css'

function FiveDaysForcast() {
    const dispatch = useDispatch();
    const localPlace = useSelector(state => state.localPlace);
    const fiveDaysForecast = useSelector(state => state.fiveDaysForcast)

    useEffect(() => {
        let locationKey = localPlace.Key;
        dispatch(getFiveDaysWeatherByLocation(locationKey))
    }, []);

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
