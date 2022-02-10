import React from 'react';
import './App.css';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckTicket from './View/CheckTicket';
import TicketPackedList from './View/TicketPackedList';
import Home from './View/Home';




function App() {
  return (
    <div className="App">
      <Router>
      <article style={{display:"flex" , padding:"1rem 1.5rem" , backgroundColor:"#f9f6f4" , height:"870px"}}>
        <Sidebar />
       <div style={{width:"100%"}}> 
         <Header /> 
        <Routes>
          <Route path='/'  element={<Home />}/>
          <Route path='/QuanLyVe' element={<TicketPackedList />}/>
          <Route path='/SoatVe' element={<CheckTicket />}/>
        </Routes>
        
        {/* <Home /> */}
        </div> 
      </article> 
      </Router>
    </div>
  );
}

export default App;
