import React from 'react';
import logo from './logo.svg';

import groceries from './Grocery.js';
import list from './List.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <list />
        <groceries title="" />
      </header>
    </div>
  );
}

export default App;
