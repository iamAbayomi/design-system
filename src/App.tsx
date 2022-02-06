import React from 'react';
import './App.css';
import PercentageOverviewCard from './components/OverviewCard/OverviewCard';

function App() {
  return (
    <div className="App">
      <PercentageOverviewCard percentageText={'No of users'} percentage={10}/>
    </div>
  );
}

export default App;
