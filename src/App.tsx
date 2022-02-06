import React from 'react';
import './App.css';
import PercentageOverviewCard from './components/OverviewCard/OverviewCard';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <PercentageOverviewCard percentageText={'No of users'} percentage={10}/>
      {/* <Table tableColums={["data","data"]} tableData={["daad", "eeq"]} /> */}
    </div>
  );
}

export default App;
