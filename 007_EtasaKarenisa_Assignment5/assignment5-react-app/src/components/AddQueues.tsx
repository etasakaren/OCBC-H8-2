import React, { useState } from "react";
import './AddQueues.css'

const AddQueues = ({ addName }: any) => {
    const [name, setName] = useState('')
    const handleSubmit = (e: any) => {
        e.preventDefault()
        addName(name)
    }
    return (
        <>
            <div className="inline-block">
                <form onSubmit={handleSubmit}>
                    <div className="submit">
                        <input className="input" type="text" value={name} required onChange={(e) => setName(e.target.value)} maxLength={9} />
                    </div>
                    <div>
                        <button className="button is-info is-small">Add to Queue</button>
                    </div>
                </form>
            </div>

        </>
    )
}
export default AddQueues