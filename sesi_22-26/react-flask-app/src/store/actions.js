export function increment() {
    //  // "proxy": "http://localhost:5000"
    return (dispatch) => { dispatch({ type: 'INCREMENT' }) }

    //  // "proxy": "https://jsonplaceholder.typicode.com"
    // return async(dispatch) => {
    //     const response = await fetch('/todos/1')
    //     const json = await response.json()

    //     console.log(json)

    //     setInterval(() => {
    //         dispatch({ type: "INCREMENT" })
    //     }, 50)
    // }
}
export function decrement() {
    return (dispatch) => { dispatch({ type: 'DECREMENT' }) }
}
export function setCounter(value) {
    return (dispatch) => {
        dispatch({ type: 'SET_COUNTER', data: value })
    }
}