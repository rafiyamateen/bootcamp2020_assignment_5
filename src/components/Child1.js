import React, { useContext } from 'react';
import { Context } from './Context';

export const Child1 = () => {
    let counterValue = useContext(Context);

    return (
        <div>
            <h1>First child using <span>useContext</span></h1>
            <h3>Counter Value: {counterValue[0]} </h3>
            <button onClick={() => { counterValue[1](--counterValue[0]) }}>Decrement(useContext)</button>
            <button onClick={() => { counterValue[1](++counterValue[0]) }}>Increment(useContext)</button>
        </div>
    )
}
