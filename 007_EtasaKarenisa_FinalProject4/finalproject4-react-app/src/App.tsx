import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store/store'
import PeopleContainer from './components/PeopleContainer'

function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>
      <Provider store={store}>
        <div className='App'>
          <PeopleContainer />
        </div>
      </Provider>
    </>
  )
}

export default App