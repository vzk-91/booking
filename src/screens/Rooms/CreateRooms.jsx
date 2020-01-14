import React, { useEffect } from 'react';
import Input from '../../components/input';
import Button from '../../components/Button';
import {connect} from 'react-redux';
import {createRooms,resetRooms} from '../../actions'
import {postRoomsThunk,getRoomsThunk,updateRoomsThunk} from '../../thunk';
import {roomsDataExample} from '../../constant/constant'

const CreateRooms = ({handleRooms,postRooms,getRooms,roomsData,udpateRooms,resetRoomsInput}) =>{

  const {floor,balcony, beds,roomId,id} = roomsData
 
  
  useEffect(()=>{
    getRooms()
  },[roomsData])

  const handleInputs = (e) =>{
    handleRooms(e,roomsData)
 }

 const handleSubmit = () =>{
   postRooms(roomsData)
   getRooms()
   resetRoomsInput(roomsDataExample)
 }

 const update = (id,roomsData) =>{
   udpateRooms(id,roomsData)
   getRooms()
   resetRoomsInput(roomsDataExample)
 }

  
    return (
        <div className='create_room'>
          <p>ADD NEW ROOM</p>
          <div className="imput_rooms">
          <Input span={"Floor"} name="floor" className={"input_all"} onChange={handleInputs} value={floor} />
          <Input span={"Beds"} name="beds" className={"input_all"} onChange={handleInputs} value={beds}/>
          <Input span={"Balcony"} type='checkbox' className={"input_checkbox"} onChange={handleInputs}  name="balcony" value={balcony} />
          <Input span={"Room Number"} name="roomId" className={"input_all"} onChange={handleInputs} value={roomId}  />
          <Button name={id ? 'Update' : 'Create'}  myClassName={"button_all"} onClick={()=>{ return id ? update(id,roomsData) : handleSubmit() }}/>
          </div>
        </div>
    )
}

const mapStateToProps = ({roomsPage}) =>{
  return{
     rooms : roomsPage.rooms,
     roomsData : roomsPage.roomsData
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    
      handleRooms : (event, roomsData) =>{
          dispatch(createRooms(event,roomsData))
      },
      postRooms : (data) =>{
          dispatch(postRoomsThunk(data))
      },
      udpateRooms : (id,data) =>{
          dispatch(updateRoomsThunk(id,data))
      },
      getRooms : ()=>{
        dispatch(getRoomsThunk())
      },
      resetRoomsInput : (data) =>{
        dispatch(resetRooms(data))
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateRooms);
