import axios from 'axios'
import {
    FETCH_PEOPLE_REQUEST,
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_FAILURE
} from '../types/personDebugTypes'

export const fetchPeople = () => {
    return async (dispatch: any) => {
        dispatch(fetchPeopleRequest())
        setTimeout(() => {
            axios
                .get('http://localhost:5000/debug')
                .then((response: any) => {
                    const people = response.data
                    dispatch(fetchPeopleSuccess(people))
                })
                .catch((error: any) => {
                    dispatch(fetchPeopleFailure(error.message))
                    alert(`Something went wrong.`)
                })
        }, 1000)
    }
}

export const fetchPeopleRequest = () => {
    return {
        type: FETCH_PEOPLE_REQUEST
    }
}

export const fetchPeopleSuccess = (people: any) => {
    return {
        type: FETCH_PEOPLE_SUCCESS,
        payload: people
    }
}

export const fetchPeopleFailure = (error: any) => {
    return {
        type: FETCH_PEOPLE_FAILURE,
        payload: error
    }
}