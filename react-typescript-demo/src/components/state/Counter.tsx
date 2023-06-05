import { useReducer } from 'react'
type CounterState = {
    count: number
}
type IncDecAction = {
    type: "INCREMENT" | "DECREMENT",
    payload: number
}
type ResetAction = {
    type: "RESET"
}
type CounterAction = IncDecAction | ResetAction;
const initialState = {
    count: 0
}
const reducer = (state: CounterState, action: CounterAction) => {
    switch(action.type){
        case "INCREMENT":
            return {
                count: state.count + action.payload
            }
        case "DECREMENT":
            return {
                count: state.count - action.payload
            }
        case "RESET":
            return initialState
        default:
            return state
    }
}
export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h3>{state.count}</h3>
        <button onClick={() => {dispatch({type: "INCREMENT", payload: 10})}}>Increment 10</button>
        <button onClick={() => {dispatch({type: "DECREMENT", payload: 10})}}>Decriment 10</button>
        <button onClick={() => {dispatch({type: "RESET"})}}>Reset</button>
    </div>
  )
}
