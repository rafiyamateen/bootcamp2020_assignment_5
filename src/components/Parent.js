import React from 'react'
import {Child1} from './Child1';
import {Child2} from './Child2';
export const Parent = () => {
    return (
        <div>
          <Child1/>  
          <hr/>
          <Child2/>  
        </div>
    )
}
