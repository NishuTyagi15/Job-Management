import React from 'react';
import './App.scss';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import SearchAppBar from './Components/Appbar/SearchAppBar';
import BodyContainer from './Components/BodyContainer/BodyContainer';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <div className='body-content'>
        <SideDrawer />
        <BodyContainer/>
      </div>
    </div>
  );
}

export default App;
