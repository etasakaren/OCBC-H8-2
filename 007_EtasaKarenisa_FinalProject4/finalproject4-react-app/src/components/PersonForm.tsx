import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createPeople } from "../actions/personCreateActions";
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

function PersonForm({ personData, fetchPeople }: any) {
    const [newKey, setNewKey] = useState('')
    const [newFirstName, setNewFirstName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isValidKey, setIsValidKey] = useState(false)
    const [isValidFirstName, setIsValidFirstName] = useState(false)
    const [isValidLastName, setIsValidLastName] = useState(false)
    const [errorKey, setErrorKey] = useState('')
    const [errorFirstName, setErrorFirstName] = useState('')
    const [errorLastName, setErrorLastName] = useState('')
    const state = { button: 1 }
    const [onValidKey, setOnValidKey] = useState(false)
    const [onValidFirstName, setOnValidFirstName] = useState(false)
    const [onValidLastName, setOnValidLastName] = useState(false)

    useEffect(() => {
        fetchPeople()
    }, [])

    const handleSubmit = (e: any) => {
        if (state.button === 1) {
            dispatch(createPeople({
                firstName: newFirstName,
                lastName: newLastName,
                key: newKey
            }))
            e.target.reset()
            setNewKey('')
            setNewFirstName('')
            setNewLastName('')
            alert(`Successfully added data.`)
            navigate('/')
        }
        if (state.button === 2) {
            navigate('/');
        }

    }

    const onChangeKey = (e: any) => {
        const reg = /^[0-9\b]+$/
        setNewKey(e.target.value)
        if (e.target.value === '') {
            setErrorKey('Key is empty.')
            setIsValidKey(false)
            setOnValidKey(false)
        } else if (!reg.test(e.target.value)) {
            setErrorKey(`Valid key format is '0000'.`)
            setIsValidKey(false)
            setOnValidKey(false)
        } else if (e.target.value.length !== 4) {
            setErrorKey('Key field length must be 4.')
            setIsValidKey(false)
            setOnValidKey(false)
        } else if (e.target.value !== '' && reg.test(e.target.value) && e.target.value.length === 4) {
            setErrorKey('')
            setIsValidKey(true)
            setOnValidKey(true)
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
            <Header title="Create Person Information"></Header>
            <form onSubmit={handleSubmit} style={{ width: '500px', margin: ' 0 auto' }}>
                <div className="field" >
                    <label className="label">Key</label>
                    <div className="control has-icons-left has-icons-right">
                        {onValidKey === true ? <input className='input is-success' type="text" placeholder="0001" name="key" onChange={onChangeKey} maxLength={4} />
                            : <input className='input is-danger' type="text" placeholder="0001" name="key" onChange={onChangeKey} maxLength={4} />}
                        <span className="icon is-small is-left">
                            <i className="fas fa-key"></i>
                        </span>
                        <span className="icon is-small is-right">
                            {onValidKey === true ? <i className="fas fa-check"></i>
                                : <i className="fas fa-ban"></i>}
                        </span>
                    </div>
                    {isValidKey === false ? <p className="help is-danger">{errorKey}</p> : <p className="help is-success">Key format is correct.</p>}
                </div>
                <div className="field">
                    <label className="label">First Name</label>
                    <div className="control has-icons-left has-icons-right">
                        {onValidFirstName === true ? <input className='input is-success' type="text" placeholder="John" name="firstName" onChange={onChangeFirstName} />
                            : <input className='input is-danger' type="text" placeholder="John" name="firstName" onChange={onChangeFirstName} />}
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
                        {onValidLastName === true ? <input className='input is-success' type="text" placeholder="Doe" name="lastName" onChange={onChangeLastName} />
                            : <input className='input is-danger' type="text" placeholder="Doe" name="lastName" onChange={onChangeLastName} />}
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
                            onClick={() => (state.button = 1)} disabled={errorKey !== '' || errorFirstName !== '' || errorLastName !== ''
                                || isValidKey === false || isValidFirstName === false || isValidLastName === false}>Submit</button>
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
)(PersonForm)