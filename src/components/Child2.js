import React, {useReducer} from 'react';
import Reducer from './Reducer';

export const Child2 = () => {
    let [state,dispatch]=useReducer(Reducer,0);
    return (
        <div>
            <h1>Second child using <span>useReducer</span></h1>
            <h3>Counter value: {state}</h3>
            <button onClick={()=>dispatch('decrement')}>Decrement(useReducer)</button>
            <button onClick={()=>dispatch('increment')}>Increment(useReducer)</button>
        </div>
    )
}
