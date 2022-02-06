import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Chips from './components/Chips/Chips';
import DropDown from './components/Dropdown/DropDown';
import Modal from './components/Modal/Modal';
import PercentageOverviewCard from './components/OverviewCard/OverviewCard';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <PercentageOverviewCard percentageText={'No of users'} percentage={10}/>
      <Table tableColums={["Name","Role"]} tableData={[["John", "Admin"]]} />
      <Button width={'132px'} height={'42px'} color={'blue'} margin={'20px 0px'} backgroundColor={'white'} buttonText={'Secondary'} />
      <Chips chipsText={'successful'} />
      <DropDown menuTitle={"work"} menuItem={['place', 'house']} />
      <Modal children={<p>Hello</p>} />
    </div>
  );
}

export default App;
