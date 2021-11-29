import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPeople } from '../actions/personActions'

function PeopleContainer({ personData, fetchPeople }: any) {
    useEffect(() => {
        fetchPeople()
    }, [])

    return personData.loading ? (
        <h2>Loading</h2>
    ) : personData.error ? (
        <h2>{personData.error}</h2>
    ) : (
        <div>
            <h2>People List</h2>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>First Name</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr> */}
                        {personData &&
                            personData.people
                            &&
                            Object.values(personData.people).map((person: any, index: any) => {
                                return <tr key={index}><td>{person.key}</td><td >{person.firstName}</td></tr>
                            })
                        }
                    {/* </tr> */}

                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        personData: state.person
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
)(PeopleContainer)