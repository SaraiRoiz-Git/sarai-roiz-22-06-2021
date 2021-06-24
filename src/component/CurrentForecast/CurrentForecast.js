
import React, { useCallback, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'
import './CurrentForecast.css'
import {
    getCurrentWeather,
    getFiveDaysWeatherByLocation,
    getTodayWeatherByLocation
}
    from "../../redux/actions/action";

function CurrentForecast() {
    const dispatch = useDispatch();
    const location = useSelector(state => state.location);
    const localPlace = useSelector(state => state.currLocation);
    const currForecast = useSelector(state => state.currForecast)[0];

    useEffect(() => {
        let locationKey = localPlace ? localPlace.Key : location;
        dispatch(getTodayWeatherByLocation(locationKey));
    }, []);

    console.log("ddddddd", currForecast)
    return (
        <Row className="location head-row">
            <Col>
                <div className="location-head">
                    <div className="curr-country">
                        {localPlace ? localPlace.Country.LocalizedName : null}/
                    </div>
                    <div className="curr-city">
                        {localPlace ? localPlace.AdministrativeArea.LocalizedName : null}-
                    </div>
                    <div className="curr-tpm">
                        {currForecast ? currForecast.Temperature.Metric.Value : "--"}°
                         {currForecast ? currForecast.Temperature.Metric.Unit : ""}
                    </div>
                </div>
            </Col>
            <Col>
                <div>
                    <Button>🤍</Button>Add to favorits
                    </div>
            </Col>


        </Row>
    )

}


export default CurrentForecast
