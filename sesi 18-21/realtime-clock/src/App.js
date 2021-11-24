import React from 'react';
import './App.css';
import ClockClass from './components/ClockClass';
import ClockFunction from './components/ClockFunction';

class App extends React.Component {
  render() {
    return (
      <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"></link>
        {/* <ClockClass></ClockClass>
        <div className="padding"></div> */}
        <ClockFunction></ClockFunction>
      </>
    )
  }
}

export default App;
