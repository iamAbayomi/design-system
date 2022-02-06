import React from 'react';
import logo from './logo.svg';
import './App.css';
import PercentageOverviewCard from './components/PercentageOverviewCard/PercentageOverviewCard';

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <PercentageOverviewCard percentageText={''} percentage={10}/>
    </div>
  );
}

export default App;
