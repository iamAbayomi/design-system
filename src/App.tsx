import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Chips from './components/Chips/Chips';
import PercentageOverviewCard from './components/OverviewCard/OverviewCard';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <PercentageOverviewCard percentageText={'No of users'} percentage={10}/>
      <Table tableColums={["Name","Role"]} tableData={[["John", "Admin"]]} />
      <Button width={'132px'} height={'42px'} color={'blue'} margin={'20px 0px'} backgroundColor={'white'} buttonText={'Secondary'} />
      <Chips chipsText={'successful'} />
    </div>
  );
}

export default App;
