import React, { useContext } from 'react';
import { Context } from './Context';

export const Child1 = () => {
    let value = useContext(Context);

    return (
        <div>
            <h1>First child using useContext</h1>
            <h3>Counter value: {value[0]} </h3>
            <button onClick={() => { value[1](++value[0]) }}>Increment(useContext)</button>
        </div>
    )
}
