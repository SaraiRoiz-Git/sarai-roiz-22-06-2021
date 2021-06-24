import React from "react";
import { Container } from "react-bootstrap";
import FavoritForecastList from "../../component/FavoritForecastList/FavoritForecastList" 
function Favorits() {


    return (
        <div className="background">
            <Container>
                <h3>My favorite weather forecast places:</h3>
                <FavoritForecastList></FavoritForecastList>
            </Container>
        </div>
    )


}

export default Favorits;