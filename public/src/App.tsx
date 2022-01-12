import React from 'react';
import './App.css';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Home from './View/Home';
// import { WeekComponent } from './Shared/components/Calendar/WeekComponent'; 
import TicketPackedList from './View/TicketPackedList';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import CheckTicket from './View/CheckTicket';




function App() {
  return (
    <div className="App">
      <article style={{display:"flex" , padding:"1rem 1.5rem" , backgroundColor:"#f9f6f4" , height:"870px"}}>
        <Sidebar />
       <div style={{width:"100%"}}> 
         <Header /> 
        {/* <TicketPackedList />  */}
        <CheckTicket />
        
        {/* <Home /> */}
        </div> 
      </article> 
    </div>
  );
}

export default App;
