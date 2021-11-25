import React, { useEffect, useState } from 'react';

// using functional component
function ClockFunction() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => clearInterval(interval)
    }, [])

    function tick() {
        setDate(new Date())
    }

    return (
        <div className="app">
        <h1 className="heading">Digital Clock Jakarta (GMT+7)</h1>
        <div className="outer-wrapper">
          <div className="inner-wrapper">
            <h2 className="clock">
              {date.toLocaleTimeString()}
            </h2>
          </div>
        </div>
      </div>
    )
}

export default ClockFunction;
