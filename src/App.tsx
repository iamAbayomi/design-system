import React from 'react';
import './App.css';
import PercentageOverviewCard from './components/OverviewCard/OverviewCard';

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <PercentageOverviewCard percentageText={''} percentage={10}/>
    </div>
  );
}

export default App;
