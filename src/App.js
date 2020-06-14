import React, { useState } from 'react';
import './App.css';
import { Parent } from './components/Parent';
import { Context } from './components/Context';

function App() {
  let counterState = useState(0)
  return (
    <Context.Provider value={counterState}>
      <div>
        <Parent />
      </div>
    </Context.Provider>
  );
}
  export default App;
