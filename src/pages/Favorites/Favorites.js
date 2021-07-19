import React from "react";
import { Container } from "react-bootstrap";
import FavoritForecastList from "../../component/FavoritForecastList/FavoritForecastList"
function Favorites() {

    return (
        <div className="background">
            <Container className="favorite-container">
                <h3 className="list-title">My favorite weather forecast places:</h3>
                <FavoritForecastList></FavoritForecastList>
            </Container>
        </div>
    )
}

export default Favorites;