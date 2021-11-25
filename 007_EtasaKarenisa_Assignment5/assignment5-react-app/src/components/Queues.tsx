import React, { useState, useEffect } from "react"
import './Queues.css';
import AddQueues from "./AddQueues";

function Queues() {
    const [names, setNames]: any = useState([
        {
            name: ''
        }
    ])

    const addName = (name: any) => {
        setNames([...names, { name }])
    }

    const fwdName = (name: any) => {
        var array = [...names];
        array.splice(name, 1)
        setNames(array)
    }

    return (
        <>
            <div className="Card">
                <div className="Header">
                    <h1>A Queue!</h1>
                </div>
                <hr />
                <label>
                    <p>Input a Name:</p>
                    <AddQueues addName={addName} />
                    {names.length > 2 && <button onClick={fwdName} className="button is-warning is-small">Make Me Go Front!</button>}
                </label>
                <hr />
                <label>{
                    <p>Queue:</p>}
                </label>
                {names.length > 0 && names.map((element: any, index: any) => {
                    return index > 0 ? <div className="PerName" key={index}><ul  >{element['name']}</ul></div> : ''
                })}
            </div>
        </>
    )
}
export default Queues