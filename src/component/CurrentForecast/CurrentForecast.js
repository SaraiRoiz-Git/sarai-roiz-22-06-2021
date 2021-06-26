
import React, { useCallback, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'
import './CurrentForecast.css'
import {
    addToFavorits,
    getAutoCompliteData,
    getTodayWeatherByLocation,
}
    from "../../redux/actions/action";

function CurrentForecast() {
    const dispatch = useDispatch();
    const location = useSelector(state => state.location);
    const locationName = useSelector(state => state.locationName);
    const locationState = useSelector(state => state.locationState);
    const localPlace = useSelector(state => state.localPlace);
    const currForecast = useSelector(state => state.currForecast);
    const favoriteList = useSelector(state => state.favoriteList);
    const [isInFavorits,setIsInFavorits]= useState(false);

    useEffect(() => {
        if(favoriteList.find((obj) => obj.localPlace.LocalizedName == localPlace.AdministrativeArea.LocalizedName)){
            setIsInFavorits(true)
        }
        let locationKey = localPlace ? localPlace.Key : location;
        dispatch(getAutoCompliteData(locationName));
        dispatch(getTodayWeatherByLocation(locationKey));


    }, []);

    const addToFavoritsList = () => {
        setIsInFavorits(true)
        dispatch(addToFavorits({ localPlace: localPlace, currForecast: currForecast }))
    }
    console.log("favoriteList",favoriteList)
    return (
        <Row className="location head-row">
            <Col>
                <div className="location-head">
                    <div className="curr-country">
                        {localPlace ? localPlace.Country.LocalizedName : locationState},
                    </div>
                    <div></div>
                    <div className="curr-city">
                        {localPlace ? localPlace.AdministrativeArea.LocalizedName : locationName}-
                    </div>
                    <div className="curr-tpm">
                        {currForecast ? currForecast[0].Temperature.Metric.Value : "--"}°
                        {currForecast ? currForecast[0].Temperature.Metric.Unit : ""}
                    </div>
                </div>
            </Col>
            <Col className="add-to-favorits" lg="6" sm="12">
                <div>
                    <button disabled={isInFavorits} onClick={addToFavoritsList}>🤍</button>
                    <span className="btn-task">
                        {isInFavorits ? "Added to favorits" : "Add to favorits"}
                    </span>
                </div>
            </Col>
        </Row>
    )

}


export default CurrentForecast
