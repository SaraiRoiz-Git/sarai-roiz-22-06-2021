import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeItemFromFavorites, setDefultLocation } from '../../redux/actions/action'
import { getIconUrl } from '../../utilities'
import './FavoriteForecast.css'

function FavoriteForecast(props) {

    const dispatch = useDispatch()
    const favorite = props.favorite
    const currForecast = favorite.currForecast;
    const localPlace = favorite.localPlace;


    const removeItem = () => {
        dispatch(removeItemFromFavorites(favorite))
    }

    const goToHomepage = () => {
        dispatch(setDefultLocation(localPlace))
        window.location.href = '#/'
    }

    return (
        <div className="favorit-card">
            <Row className="location head-row">
                <Col lg="6" xs="12">
                    <div className="location-favorites" onClick={goToHomepage}>
                        <div className="curr-country">
                            {localPlace.Country.LocalizedName}/
                        </div>
                        <div className="curr-city">
                            {localPlace.AdministrativeArea.LocalizedName}
                        </div>
                        <img src={getIconUrl(currForecast[0].WeatherIcon)}></img>
                        <div className="curr-tpm">
                            {currForecast ? currForecast[0].Temperature.Metric.Value : '--'}°
                            {currForecast ? currForecast[0].Temperature.Metric.Unit : null}
                        </div>
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