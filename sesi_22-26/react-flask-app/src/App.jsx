import React from 'react';
import './App.css';
import { Outlet } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setCounter } from './store/actions.js'
import Header from './components/Header'

function App() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const incrementCounter = () => dispatch(increment())

  const decrementCounter = () => dispatch(decrement())

  const customCounter = (value) => dispatch(setCounter(state.counter + value))

  const showData = (value) => console.log(value)

  return (
    <div className="App">
      <Header title="Hello, I'm from Header Child" example={showData}></Header>
      <nav>
        <ul className="li">Home</ul>
        <ul className="li">About</ul>
        <ul className="li">Contact</ul>
      </nav>
      <div>
        <h3>Counter Time:</h3>
        <h3>{state.counter}</h3>
        <button onClick={incrementCounter}>Add by 1</button>
        <button onClick={decrementCounter}>Substract by 1</button>
        <button onClick={() => customCounter(10)}>Add by 10</button>

      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
