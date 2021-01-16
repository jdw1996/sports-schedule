import React from 'react';

import logo from './logo.svg';
import './App.css';

function numDaysInMonth(month: number, year: number): number {
  // NB: Months are 0-indexed (i.e. January = 0). Day 0 of the following month is the last day of the given month.
  return new Date(year, month + 1, 0).getDate();
}

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
