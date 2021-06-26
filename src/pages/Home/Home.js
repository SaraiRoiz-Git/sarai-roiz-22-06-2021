
import React, { Component, useCallback } from 'react'
import { Container, Modal } from 'react-bootstrap'
import CurrentForecast from '../../component/CurrentForecast/CurrentForecast'
import FiveDaysForcast from '../../component/FiveDaysForcast/FiveDaysForcast'
import Search from '../../component/Search/Search'
import './Home.css'
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux'
import { clearError } from '../../redux/actions/action'

function Home() {

    const dispatch = useDispatch()
    const error = useSelector(state => state.error);

    const handleClose = () => {
        console.log('in handleClose')
        dispatch(clearError())
    }

    return (
        <div className="background">
            <Container className="home-container">
                <Search></Search>
                <Modal show={error} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>An error has occurred. Please try again later.</p>
                    </Modal.Body>
                </Modal>

                <div className="forecast-container">
                    <CurrentForecast></CurrentForecast>
                    <FiveDaysForcast> </FiveDaysForcast>
                </div>
            </Container>
        </div>
    )
}

export default Home