import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { deletePeople } from "../actions/personDeleteActions";
import { fetchPeople } from "../actions/personDebugActions";
import Header from "./Header"

let Loading = styled.div`
    font-size: 50px;
    font-weight: thin;
    opacity: 0.5;
    text-align: center;
    margin-top:200px;
    margin-bottom:200px
`

let Confirm = styled.div`
    font-size: 30px;
    font-weight: thin;
    opacity: 0.7;
    text-align: center;
    margin-top:200px
`

function PersonDelete({ personData, fetchPeople }: any) {
    const key = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = { button: 1 }

    const handleSubmit = () => {
        if (state.button === 1) {
            dispatch(deletePeople(key.key))
            alert(`Successfully deleted data.`)
            navigate('/')
        }
        if (state.button === 2) {
            navigate('/')
        }
    }

    useEffect(() => {
        fetchPeople()
    }, [])

    return personData.loading ? (
        <>
                        <Loading>
                <span className="icon">
                    <i className="fas fa-circle-notch fa-spin"></i>
                </span>
            </Loading>
        </>
    ) : personData.error ? (
        <h2>{personData.error}</h2>
    ) : (
        <>
            <Header title="Delete Confirmation"></Header>
            <form onSubmit={handleSubmit}>
                <div className="field " style={{ textAlign: 'center' }}>
                    <Confirm>Are you sure you want to delete user '{key.firstName} {key.lastName}'?</Confirm>
                    <div className="control">
                        <button className="button is-danger " onClick={() => (state.button = 1)}>Submit</button>
                        <span style={{ margin: '5px' }}></span>
                        <button className="button is-danger is-light" onClick={() => (state.button = 2)}>Cancel</button>
                    </div>
                </div>

            </form>

        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        personData: state.personDebug
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchPeople: () => dispatch(fetchPeople())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonDelete)