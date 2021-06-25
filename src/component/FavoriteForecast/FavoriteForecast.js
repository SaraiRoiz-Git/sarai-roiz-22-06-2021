import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorits, removeItemFromFavorits, setDefultLocation } from '../../redux/actions/action'
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
    // console.log("currForecast", currForecast)
    // console.log("localPlace", localPlace)

    const goToHomepage = () => {
        console.log("goToHomepage")
        dispatch(setDefultLocation(localPlace))
        window.location.href = '#/'
    }
    return (
        <div className="favorit-card">
            <Row className="location head-row">
                <Col lg="6" sm="10">
                    <div className="location-favorits" onClick={goToHomepage}>
                        <div className="curr-country">
                            {localPlace ? localPlace[0].Country.LocalizedName : locationState}/
                             </div>
                        <div className="curr-city">
                            {localPlace ? localPlace[0].AdministrativeArea.LocalizedName : locationName} <b> -  </b> 
                        </div>
                        <div className="curr-tpm">
                            {currForecast ? currForecast[0].Temperature.Metric.Value : '--'}°
                            {currForecast ? currForecast[0].Temperature.Metric.Unit : null}
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className="remove-element">
                        <button className="btn-remove" onClick={removeItem}><b>-</b></button>
                    </div>
                </Col>
            </Row>
        </div>
    )

}
export default FavoriteForecast