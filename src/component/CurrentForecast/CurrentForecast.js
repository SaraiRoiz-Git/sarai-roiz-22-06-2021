
import React, { useCallback, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'
import './CurrentForecast.css'
import {
    addToFavorits,
    getAutoCompliteData,
    getCurrentWeather,
    getFiveDaysWeatherByLocation,
    getTodayWeatherByLocation,
    setDefultLocation
}
    from "../../redux/actions/action";

function CurrentForecast() {
    const dispatch = useDispatch();
    const location = useSelector(state => state.location);
    const locationName = useSelector(state => state.locationName);
    const locationState = useSelector(state => state.locationState);
    const localPlace = useSelector(state => state.localPlace);
    const currForecast = useSelector(state => state.currForecast);

    useEffect(() => {
       // console.log("localPlace", localPlace)
        console.log("location", location)
        console.log("locationName", locationName)
        let locationKey = localPlace ? localPlace.Key : location;
        let localName = localPlace ? localPlace.LocalizedName : locationName;
        console.log("locationKey", locationKey)
        console.log("localName", localName)
        dispatch(getAutoCompliteData(locationName));
        //dispatch(setDefultLocation(locationKey));
        dispatch(getTodayWeatherByLocation(locationKey));

        
    }, []);

    const addToFavoritsList = () => {
        dispatch(addToFavorits({ localPlace: localPlace, currForecast: currForecast }))
    }
    
    console.log("localPlace", localPlace)
     console.log('currForecast!!', currForecast)
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
            <Col  className="add-to-favorits" lg="6"  sm="12">
                <div>
                    <button onClick={addToFavoritsList}>🤍</button>
                    <span className="btn-task">Add to favorits
                        </span>
                    </div>
            </Col>


        </Row>
    )

}


export default CurrentForecast
