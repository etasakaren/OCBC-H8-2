import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import logo from '../logo.svg';
import '../App.css';
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

function PersonDetails({ personData, fetchPeople }: any) {
    const key = useParams()
    const navigate = useNavigate()

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
            <Header title="Information Details"></Header>
            <form style={{ width: '500px', margin: ' 0 auto' }}>
                <div className="card">
                    <div className="card-image">
                        <figure className="image ">
                            <img src={logo} className="App-logo" alt="logo" />

                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <div className="field" >
                                    <label className="label">Key</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input disabled className='input is-link' value={key.key}></input>
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-key"></i>
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field" >
                                    <label className="label">First Name</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input disabled className='input is-link' value={key.firstName}></input>
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field" >
                                    <label className="label">Last Name</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input disabled className='input is-link' value={key.lastName}></input>
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </div>
                                </div></div>
                        </div>
                        <div className="content">
                            <button className="button is-link" onClick={() => navigate('/')}>Go Back</button>

                        </div>
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
)(PersonDetails)