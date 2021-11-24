import React, { Component, useEffect, useState } from 'react'
import PersonQuote from './PersonQuote'

function PersonInfo() {
    const [personData, setPersonData] = useState({
        name: "Aeta",
        age: 21,
        quote: "Everyday with React"
    })

    const [counter, setCounter] = useState(0)

    const [personAddress, setPersonAddress] = useState({
        address: "LalaLand"
    })

    const changeAddress = () => {
        const address = "JojoLand"
        setPersonAddress({ ...personData, address })
    }

    const changeName = () => {
        const name = personData.name + 'a'
        setPersonData({ ...personData, name })
    }

    useEffect(() => {
        document.title = `My name is ${personData.name}`
    }, [counter, personAddress])

    return (
        <>
            <h1>Person Information</h1>
            <div>
                <span>Name: {personData.name}</span><br />
                <span>Age: {personData.age}</span><br />
                <span>Quote:</span>
                <PersonQuote quote={personData.quote} />
                <span>Address: {personAddress.address}</span>
            </div>
            <button onClick={changeName}>Change My Name</button>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
            <button onClick={changeAddress}>Change My Address</button>
        </>
    )
}

// class PersonInfo extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: "Septyan",
//             age: 17,
//             quote: "Tiada hari tanpa ngoding React"
//         }
//     }
//     render() {
//         return (
//             <>
//                 <h1>Person Information</h1>
//                 <div>
//                     <span>Name: {this.state.name}</span><br/>
//                     <span>Age: {this.state.age}</span><br/>
//                     <span>Quote:</span>
//                     <PersonQuote quote={this.state.quote}/>
//                 </div>
//                 {/* */}
//             </>
//         )
//     }
// }

export default PersonInfo;