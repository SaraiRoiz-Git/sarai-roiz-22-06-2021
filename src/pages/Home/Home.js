
import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import CurrentForecast from '../../component/CurrentForecast/CurrentForecast'
import FiveDaysForcast from '../../component/FiveDaysForcast/FiveDaysForcast'
import Search from '../../component/Search/Search'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="background">
             <Container>
                <Search></Search>
                <div className="forecast-container">
                    <CurrentForecast></CurrentForecast>
                    <FiveDaysForcast> </FiveDaysForcast>
                </div>
            </Container>
            </div>
        )
    }
}

export default Home