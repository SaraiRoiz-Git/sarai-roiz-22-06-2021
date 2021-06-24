import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToFavorits, removeItemFromFavorits } from '../../redux/actions/action'
import { getIconUrl } from '../../utilities'
import './FavoriteForecast.css'

function FavoriteForecast(props) {
    const dispatch = useDispatch()
    const favorite = props.favorite
    const currForecast = favorite.currForecast;
    const localPlace = favorite.localPlace;

    const removeItem = () => {
        dispatch(removeItemFromFavorits(favorite))
    }
    console.log("currForecast", currForecast)
    console.log("localPlace", localPlace)
    return (
        <div className="favorit-card">
            <Row className="location head-row">
                <Col>
                    <div className="location-head">
                        <div className="curr-country">
                            {localPlace ? localPlace[0].Country.LocalizedName : null}/
                    </div>
                        <div className="curr-city">
                            {localPlace ? localPlace[0].AdministrativeArea.LocalizedName : null}
                        </div>
                        <img className="weather-img" src={getIconUrl(currForecast.WeatherIcon)} />
                        <div className="curr-tpm">
                            {currForecast ? currForecast[0].Temperature.Metric.Value : '--'}°
                            {currForecast ? currForecast[0].Temperature.Metric.Unit : null}
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <button onClick={removeItem}>-</button>remove
                    </div>
                </Col>
            </Row>
        </div>
    )

}
export default FavoriteForecast