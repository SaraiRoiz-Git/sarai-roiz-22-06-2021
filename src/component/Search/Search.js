import React, { Component, useCallback, useState, useEffect } from 'react'
import { Form, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAutoCompliteData, getTodayWeatherByLocation, setDefultLocation, getFiveDaysWeatherByLocation } from '../../redux/actions/action'
import './Search.css'
function Search() {
    const dispatch = useDispatch()
    let locationsList = useSelector(state => state.locationsList);
    const [isShowAutoCompleteOptions, setIsShowAutoCompleteOptions] = useState(false);
    const [searchValue, setSearchValue] = useState(null);
    const [searchTimeout, setSearchTimeout] = useState(null);

    useEffect(() => {
        if (searchTimeout) {
          clearTimeout(searchTimeout);
        }

        setSearchTimeout(
          setTimeout(() => {
            sendToAutoCompleate();
          }, 1000),
        );

        return () => clearTimeout(searchTimeout);
      }, [searchValue]);
    


    const sendToAutoCompleate = () => {
        console.log('searchValue')
        console.log(searchValue)
        if (searchValue) {
            setIsShowAutoCompleteOptions(true);
            //const value = e.target.value;
            dispatch(getAutoCompliteData(searchValue));
        } else {
            setIsShowAutoCompleteOptions(false);
        }
    }

    const functionOnSearchChange = (e) => {
        setSearchValue(e.target.value);

    }

    const autoComplete = (value) => {
        sendToAutoCompleate(value);
    }
       

    // const autoComplete = useCallback(
    //     _.debounce(sendToAutoCompleate, 300, []), []);

    const changeLocalPlace = (e) => {
        setIsShowAutoCompleteOptions(false);
        setSearchValue("")
        dispatch(setDefultLocation(locationsList[e.target.name])) ;
        dispatch(getTodayWeatherByLocation(locationsList[e.target.name].Key));
        dispatch(getFiveDaysWeatherByLocation(locationsList[e.target.name].Key));
        locationsList = [];

    }
    const createList = () => {
        if (locationsList && isShowAutoCompleteOptions) {
            return(locationsList.map((obj, key) => {
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
                value={searchValue}
                onChange={functionOnSearchChange} />
            <ListGroup className="search-items">
                {createList()}
            </ListGroup>
        </Form.Group>
    )

}

export default Search