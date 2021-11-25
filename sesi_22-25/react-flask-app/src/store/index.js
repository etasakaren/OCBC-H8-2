import { createStore } from 'redux';

// const { createStore } = require('redux'); =>buat node index

const initialState = {
    counter: 0
}

//reducers

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COUNTER':
            return { counter: action.data }
        case 'INCREMENT':
            return { counter: state.counter + 1 }
        case 'DECREMENT':
            return { counter: state.counter - 1 }
        default:
            return state
    }
}

// create store here

const store = createStore(counter)

export default store

// get state from store

// store.subscribe(() => {
//     console.log(store.getState())
// })

// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'SET_COUNTER', data: 27 })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })