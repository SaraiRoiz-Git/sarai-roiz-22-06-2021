
import React, { Component,useCallback } from 'react'
import { Container } from 'react-bootstrap'
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
    const CloseButton = ({ closeToast }) => (
        <button
            onClick={() => dispatch(clearError())}
        >
            delete
        </button>
    );

    const showError = useCallback(()=> {
        console.log('in show error');
        console.log(error);        
        if (error) {
            toast.error('An error has occurred. Please try again later.');
        }
    }, [error]);

    console.log('error',error)
    showError();
    return (
        <div className="background">
            <Container>
                <Search></Search>
                <ToastContainer position="top-center" hideProgressBar={true} autoClose={false} closeOnClick rtl={false} draggable closeButton={CloseButton} />
                <div className="forecast-container">
                    <CurrentForecast></CurrentForecast>
                    <FiveDaysForcast> </FiveDaysForcast>
                </div>
            </Container>
        </div>
    )
}

export default Home