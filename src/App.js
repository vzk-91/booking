import React from 'react';
import './App.css';
import Rooms from './screens/Rooms';
import Nav from './screens/Nav';
import Bookings from './screens/Bookings';
import {Route} from 'react-router-dom';
import {HashRouter} from "react-router-dom"
import Visitors from './screens/Visitors';

function App() {
  return (
    <div className="App">
       <HashRouter>
       <Nav/>
      <Route  path='/rooms'  render={()=> <Rooms/>}/>
      <Route  path='/booking'  render={()=> <Bookings/>}/>
      <Route  path='/visitor'  render={()=> <Visitors/>}/>
       </HashRouter>
    </div>
  );
}

export default App;
