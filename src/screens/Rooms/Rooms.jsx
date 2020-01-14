import React from 'react';
import RoomsStatus from './RoomsStatus';
import './rooms.style.css'
import CreateRooms from './CreateRooms';
import RoomsTable from './RoomTable';



const Rooms = () => {



    return (
        <div className="rooms_content" >
       <div className="rooms_main">
       <RoomsStatus/>
       <CreateRooms/> 
       </div>
      <div className="room_table">
      <RoomsTable/>
      </div>
        </div>
    )
};



export default Rooms;