import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getRoomsThunk,removeRoomsThunk} from '../../thunk/';
import {updateRooms} from '../../actions'
import Button from '../../components/Button';


const RoomsTable = ({getRooms,rooms,removeRooms,updateRooms}) =>{

  useEffect(()=>{
    getRooms()
  },[rooms])

  const deleteRooms = (id)=>{
    removeRooms(id)
    getRooms()
  }

  const update =(id) =>{
    updateRooms(id)
  }

    return(
      <div className="room_info">
        <table>
           <thead>
           <tr>
                <th>#ID</th>
                <th>Booked</th>
                <th>Beds</th>
                <th>Balcony</th>
                <th>Number</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
           </thead>
           <tbody>
            {rooms.map((e,i)=>{
              return <tr key={e.id}>
                <td>{i+1}</td>
                <td> {e.bookedAt} </td>
                <td> {e.beds} </td>
                <td> {e.balcony? 'Yes' : 'No'} </td>
                <td> {e.roomId} </td> 
                 <td><Button name={'edit'} onClick={()=>update(e.id)} /></td>
                <td><Button name={'delete'} onClick={()=>deleteRooms(e.id)} /></td>
              </tr>
            })}
            </tbody>
        </table>
      </div>
    )
}

const mapStateToProps = ({roomsPage}) =>{
  return {
      rooms : roomsPage.rooms
  }
}

const mapDispatchToProps = (dispatch) =>{
    return {
       getRooms: () => {
           dispatch(getRoomsThunk())
       },
       removeRooms : (id) =>{
        dispatch(removeRoomsThunk(id))
    },
    updateRooms : (id)=>{
      dispatch(updateRooms(id))
    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RoomsTable);
