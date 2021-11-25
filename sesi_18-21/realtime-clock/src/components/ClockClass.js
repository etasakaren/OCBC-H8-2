import React from 'react';

// using class component
class ClockClass extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div className="App">
                <h1>Realtime Clock Using Class Component</h1>
                <hr className="divider"/>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default ClockClass;
