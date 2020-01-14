import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.style.css'


const Nav = () =>{
    return(
        <div className="nav">
            <div className="logo"><img src="logo.png"></img><p>GRAND HOTEL</p></div>
            <div className="links">
               <NavLink to="/rooms">Rooms</NavLink>
               <NavLink to="/booking">Booking</NavLink>
               <NavLink to="/visitor">Visitors</NavLink>
            </div>
        </div>
    )
}

export default Nav;