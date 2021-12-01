import axios from 'axios'
import {
    UPDATE_PEOPLE_REQUEST,
    UPDATE_PEOPLE_SUCCESS,
    UPDATE_PEOPLE_FAILURE
} from '../types/personUpdateTypes'

export const updatePeople = (newInput: any, key: any) => {
    return async (dispatch: any) => {
        dispatch(updatePeopleRequest())
        await axios.put(
            `http://localhost:5000/keys/${key}`, {
            firstName: newInput.firstName,
            lastName: newInput.lastName,
            key: newInput.key
        }
        )
            .then((response: any) => {
                const people = response.data
                dispatch(updatePeopleSuccess(people))
            })
            .catch((error: any) => {
                dispatch(updatePeopleFailure(error.message))
                alert(`Something went wrong.`)
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