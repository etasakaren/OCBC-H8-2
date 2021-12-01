import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { updatePeople } from "../actions/personUpdateActions";
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

function PersonEdit({ personData, fetchPeople }: any) {
    const key = useParams()
    const [newKey, setNewKey] = useState(key.key)
    const [newFirstName, setNewFirstName] = useState(key.firstName)
    const [newLastName, setNewLastName] = useState(key.lastName)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isValidKey, setIsValidKey] = useState(true)
    const [isValidFirstName, setIsValidFirstName] = useState(true)
    const [isValidLastName, setIsValidLastName] = useState(true)
    const [errorKey, setErrorKey] = useState('')
    const [errorFirstName, setErrorFirstName] = useState('')
    const [errorLastName, setErrorLastName] = useState('')
    const state = { button: 1 }
    const [onValidKey, setOnValidKey] = useState(true)
    const [onValidFirstName, setOnValidFirstName] = useState(true)
    const [onValidLastName, setOnValidLastName] = useState(true)


    useEffect(() => {
        fetchPeople()
    }, [])

    const handleSubmit = (e: any) => {
        if (state.button === 1) {
            dispatch(updatePeople({
                firstName: newFirstName,
                lastName: newLastName,
                key: newKey
            }, newKey))
            e.target.reset()
            setNewKey('')
            setNewFirstName('')
            setNewLastName('')
            alert(`Successfully edited data.`)
            navigate('/');
        }
        if (state.button === 2) {
            navigate('/');
        }
    }

    const onChangeFirstName = (e: any) => {
        const reg = /^[a-zA-Z\b]+$/
        setNewFirstName(e.target.value)
        if (e.target.value === '') {
            setErrorFirstName('First name is empty.')
            setIsValidFirstName(false)
            setOnValidFirstName(false)
        } else if (!reg.test(e.target.value)) {
            setErrorFirstName(`First name can only be alphabets.`)
            setIsValidFirstName(false)
            setOnValidFirstName(false)
        } else if (e.target.value !== '' && reg.test(e.target.value)) {
            setErrorFirstName('')
            setIsValidFirstName(true)
            setOnValidFirstName(true)
        }
    }

    const onChangeLastName = (e: any) => {
        const reg = /^[a-zA-Z\b]+$/
        setNewLastName(e.target.value)
        if (e.target.value === '') {
            setErrorLastName('Last name is empty.')
            setIsValidLastName(false)
            setOnValidLastName(false)
        } else if (!reg.test(e.target.value)) {
            setErrorLastName(`Last name can only be alphabets.`)
            setIsValidLastName(false)
            setOnValidLastName(false)
        } else if (e.target.value !== '' && reg.test(e.target.value)) {
            setErrorLastName('')
            setIsValidLastName(true)
            setOnValidLastName(true)
        }
    }

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
            <Header title="Edit Person Information"></Header>
            <form onSubmit={handleSubmit} style={{ width: '500px', margin: ' 0 auto' }}>
                <div className="field" >
                    <label className="label">Key</label>
                    <div className="control has-icons-left has-icons-right">
                        <input disabled className='input is-info' type="text" placeholder={key.key} defaultValue={key.key} name="key" maxLength={4} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-key"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-lock"></i>
                        </span>
                    </div>
                    <p className="help is-info">Key cannot be edited.</p>
                </div>
                <div className="field">
                    <label className="label">First Name</label>
                    <div className="control has-icons-left has-icons-right">
                        {onValidFirstName === true ? <input className='input is-success' type="text" placeholder={key.firstName} defaultValue={key.firstName} name="firstName" onChange={onChangeFirstName} />
                            : <input className='input is-danger' type="text" placeholder={key.firstName} defaultValue={key.firstName} name="firstName" onChange={onChangeFirstName} />}
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                        <span className="icon is-small is-right">
                            {onValidFirstName === true ? <i className="fas fa-check"></i>
                                : <i className="fas fa-ban"></i>}
                        </span>
                    </div>
                    {isValidFirstName === false ? <p className="help is-danger">{errorFirstName}</p> : <p className="help is-success">First name format is correct.</p>}
                </div>
                <div className="field">
                    <label className="label">Last Name</label>
                    <div className="control has-icons-left has-icons-right">
                        {onValidLastName === true ? <input className='input is-success' type="text" placeholder={key.lastName} defaultValue={key.lastName} name="lastName" onChange={onChangeLastName} />
                            : <input className='input is-danger' type="text" placeholder={key.lastName} defaultValue={key.lastName} name="lastName" onChange={onChangeLastName} />}
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                        <span className="icon is-small is-right">
                            {onValidLastName === true ? <i className="fas fa-check"></i>
                                : <i className="fas fa-ban"></i>}
                        </span>
                    </div>
                    {isValidLastName === false ? <p className="help is-danger">{errorLastName}</p> : <p className="help is-success">Last name format is correct.</p>}
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link "
                            onClick={() => (state.button = 1)}
                        disabled={errorKey !== '' || errorFirstName !== '' || errorLastName !== ''
                            || isValidKey === false || isValidFirstName === false || isValidLastName === false}
                        >Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light" onClick={() => (state.button = 2)}>Cancel</button>
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
)(PersonEdit)