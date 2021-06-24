import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import './FavoriteForecast.css'

class FavoriteForecast extends Component {
    render() {
        console.log("hola");
        const data = this.props.data
        return (
            <div className="favorit-card">
                 <Row className="location head-row">
                <Col>
                    <div className="location-head">
                        <div className="curr-country">
                            {this.localplace.Country.LocalizedName}/
                    </div>
                        <div className="curr-city">
                            {this.localplace.AdministrativeArea.LocalizedName}-
                    </div>
                        <div className="curr-tpm">
                            {this.currForecast.Temperature.Metric.Value}°
                         {this.currForecast.Temperature.Metric.Unit}
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <button>🤍</button>Add to favorits
                    </div>
                </Col>


            </Row>
            </div>
        )
    }
}
export default FavoriteForecast