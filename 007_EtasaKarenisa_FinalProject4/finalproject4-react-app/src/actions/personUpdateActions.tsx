import axios from 'axios'
import {
    UPDATE_PEOPLE_REQUEST,
    UPDATE_PEOPLE_SUCCESS,
    UPDATE_PEOPLE_FAILURE
} from '../types/personUpdateTypes'

export const updatePeople = (newInput: any, key: any) => {
    return (dispatch: any) => {
        dispatch(updatePeopleRequest())
        axios.put(
            `http://localhost:5000/keys/${key}`, {
            firstName: newInput.firstName,
            lastName: newInput.lastName,
            key: newInput.key
        }
        )
            .then((response: any) => {
                const people = response.data
                dispatch(updatePeopleSuccess(people))
                alert(`Successfully edited data.`)
            })
            .catch((error: any) => {
                dispatch(updatePeopleFailure(error.message))
                // alert(`Invalid input or 'Key' is duplicate.`)
            })
    }
}

export const updatePeopleRequest = () => {
    return {
        type: UPDATE_PEOPLE_REQUEST
    }
}

export const updatePeopleSuccess = (people: any) => {
    return {
        type: UPDATE_PEOPLE_SUCCESS,
        payload: people
    }
}

export const updatePeopleFailure = (error: any) => {
    return {
        type: UPDATE_PEOPLE_FAILURE,
        payload: error
    }
}