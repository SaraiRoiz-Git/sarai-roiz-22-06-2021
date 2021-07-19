
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import './CurrentForecast.css'
import {
    addToFavorites,
    getTodayWeatherByLocation,
} from "../../redux/actions/action";

function CurrentForecast() {
    const dispatch = useDispatch();
    const localPlace = useSelector(state => state.localPlace);
    const currForecast = useSelector(state => state.currForecast);
    const favoriteList = useSelector(state => state.favoriteList);
    const [isInFavorites, setIsInFavorites] = useState(false);

    useEffect(() => {
        if (favoriteList.find((obj) => obj.localPlace.LocalizedName == localPlace.AdministrativeArea.LocalizedName)) {
            setIsInFavorites(true)
        } else {
            setIsInFavorites(false)
        }
        let locationKey = localPlace.Key;
        dispatch(getTodayWeatherByLocation(locationKey));
    }, [localPlace]);


    const addToFavoritesList = () => {
        setIsInFavorites(true)
        dispatch(addToFavorites({ localPlace: localPlace, currForecast: currForecast }))
    }

    return (
        <Row className="location head-row">
            <Col>
                <div className="location-head">
                    <div className="curr-country">
                        {localPlace.Country.LocalizedName},
                    </div>
                    <div className="curr-city">
                        {localPlace.AdministrativeArea.LocalizedName}-
                    </div>
                    <div className="curr-tpm">
                        {currForecast ? currForecast[0].Temperature.Metric.Value : "--"}°
                        {currForecast ? currForecast[0].Temperature.Metric.Unit : ""}
                    </div>
                </div>
            </Col>

            <Col className="add-to-favorites" lg="6" sm="12">
                <div>
                    <button disabled={isInFavorites} onClick={addToFavoritesList}>🤍</button>
                    <span className="btn-task">
                        {isInFavorites ? "Added to favorites" : "Add to favorites"}
                    </span>
                </div>
            </Col>
        </Row>
    )
}

export default CurrentForecast
