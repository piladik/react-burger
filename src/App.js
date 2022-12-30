import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header.js';

function App() {
  return (
    <div className="App">
      <Header test="This prop has been passed successfully"/>
    </div>
  );
}

export default App;