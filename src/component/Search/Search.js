import React, { Component, useCallback, useState } from 'react'
import { Form, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAutoCompliteData, getTodayWeatherByLocation, setDefultLocation, getFiveDaysWeatherByLocation } from '../../redux/actions/action'
import _ from 'lodash';
import './Search.css'
function Search() {
    const dispatch = useDispatch()
    let locationsList = useSelector(state => state.locationsList);
    let [isShowAutoCompleteOptions, setIsShowAutoCompleteOptions] = useState(false);


    const sendToAutoCompleate = (e) => {
        console.log('in on change');
        setIsShowAutoCompleteOptions(true);
        const value = e.target.value;
        dispatch(getAutoCompliteData(value));
    }

    const autoComplete = useCallback(
        _.debounce(sendToAutoCompleate, 300, [])
        , []);

    console.log("locationsList", locationsList)
    const changeLocalPlace = (e) => {
        console.log("objIndex",e.target.name)
        console.log("obj",locationsList[e.target.name])
        setIsShowAutoCompleteOptions(false);
        dispatch(setDefultLocation(locationsList[e.target.name])) ;
        dispatch(getTodayWeatherByLocation(locationsList[e.target.name].Key));
        dispatch(getFiveDaysWeatherByLocation(locationsList[e.target.name].Key));
        locationsList = [];

    }
    const createList = () => {
        if (locationsList && isShowAutoCompleteOptions) {
            return(locationsList.map((obj, key) => {
                console.log("obj",obj)
                return (
                    <ListGroup.Item className="list-group-location"
                        action key={obj.Key} name={key}
                        onClick={(e)=>changeLocalPlace(e)}
                    >{obj.LocalizedName}, {obj.Country.LocalizedName}
                    </ListGroup.Item>
                )
            }))
        }
    }

    return (
        <Form.Group>
            <Form.Control className="city-search"
                type="text"
                placeholder="Search for location"
                onChange={autoComplete} />
            <ListGroup className="search-items">
                {createList()}
            </ListGroup>
        </Form.Group>
    )

}

export default Search