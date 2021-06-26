import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {removeItemFromFavorits, setDefultLocation } from '../../redux/actions/action'
import { getIconUrl } from '../../utilities'
import './FavoriteForecast.css'

function FavoriteForecast(props) {
    const dispatch = useDispatch()
    const favorite = props.favorite
    const currForecast = favorite.currForecast;
    const localPlace = favorite.localPlace;
    const locationName = useSelector(state => state.locationName);
    const locationState = useSelector(state => state.locationState);

    const removeItem = () => {
        dispatch(removeItemFromFavorits(favorite))
    }

    const goToHomepage = () => {
        dispatch(setDefultLocation(localPlace))
        window.location.href = '#/'
    }
    return (
        <div className="favorit-card">
            <Row className="location head-row">
                <Col lg="6" xs="12">
                    <div className="location-favorits" onClick={goToHomepage}>
                        <div className="curr-country">
                            {localPlace ? localPlace.Country.LocalizedName : locationState}/
                        </div>
                        <div className="curr-city">
                            {localPlace ? localPlace.AdministrativeArea.LocalizedName : locationName}
                        </div>
                         <img src={getIconUrl(currForecast[0].WeatherIcon)}></img> 
                        <div className="curr-tpm">
                            {currForecast ? currForecast[0].Temperature.Metric.Value : '--'}°
                            {currForecast ? currForecast[0].Temperature.Metric.Unit : null}
                        </div>
                    </div>
                    <div>

                    </div>
                </Col>
                <Col lg="6" >
                    <div className="remove-element">
                        <button className="btn-remove" onClick={removeItem}><b>-</b></button> <span>remove</span>
                    </div>
                </Col>
            </Row>
        </div>
    )

}
export default FavoriteForecast