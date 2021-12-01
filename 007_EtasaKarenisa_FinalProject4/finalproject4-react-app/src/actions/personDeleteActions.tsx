import axios from 'axios'
import {
    DELETE_PEOPLE_REQUEST,
    DELETE_PEOPLE_SUCCESS,
    DELETE_PEOPLE_FAILURE
} from '../types/personDeleteTypes'

export const deletePeople = (key: any) => {
    return (dispatch: any) => {
        dispatch(deletePeopleRequest())
        axios.delete(
            `http://localhost:5000/keys/${key}`
        )
            .then((response: any) => {
                const people = response.data
                dispatch(deletePeopleSuccess(people))
            })
            .catch((error: any) => {
                dispatch(deletePeopleFailure(error.message))
                alert(`Something went wrong.`)
            })
    }
}

export const deletePeopleRequest = () => {
    return {
        type: DELETE_PEOPLE_REQUEST
    }
}

export const deletePeopleSuccess = (people: any) => {
    return {
        type: DELETE_PEOPLE_SUCCESS,
        payload: people
    }
}

export const deletePeopleFailure = (error: any) => {
    return {
        type: DELETE_PEOPLE_FAILURE,
        payload: error
    }
}