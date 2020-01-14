import React,{useEffect} from 'react';
import Input from '../../components/input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import {connect} from 'react-redux';
import {createBookings} from '../../actions'
import {postBookingThunk,getRoomsThunk,getVisitorsThunk,getBookingThunk,updateBookingThunk} from '../../thunk';

const CreateBooks = ({bookingData,getRooms,getVisitors,rooms,visitors,handleBooking,postBookings,getBooking,udpateBooks}) =>{
  const { personName,personId,roomNumber,bookedAt,id} = bookingData;

  useEffect(()=>{
    getRooms()
    getVisitors()
  },[])
 

  const handleBooks = (e)=>{
    handleBooking(e,bookingData,visitors)
  }

  const handleSubmit = () =>{
    postBookings(bookingData)
    getBooking()
  }

  const update = () =>{
    udpateBooks(bookingData,id)
  }
 

    return (
        <div className='create_book'>
          <p> NEW Booking</p>
          <div className="imput_books">
          <Select data={visitors} title="Person Name" name={"personName"} id={'personName'} value={personName} onChange={handleBooks}    className={"select_all"}/>
          <Input span={"Person ID"}  disabled={'disabled'} className={"input_all"} onChange={handleBooks} value={personId} />
          <Select data={rooms} title="Rooms Id" name={'roomNumber'} onChange={handleBooks} id={'roomId'} value={roomNumber} className={"select_all"}/>
          <Input span={"Date"} type={'date'} name={'bookedAt'} className={"input_all"} value={bookedAt} onChange={handleBooks}/>
          <Button name={id ? 'Update' : 'Book'}  myClassName={"button_all"} onClick={()=>{ return id ? update(bookingData,id) : handleSubmit() }}/>
          </div>
        </div>
    )
}
const mapStateToProps = ({bookingPage,roomsPage,visitorsPage}) =>{
  return{
     bookingData : bookingPage.bookingData,
     rooms : roomsPage.rooms,
     visitors : visitorsPage.visitors,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    
      handleBooking : (event, bookingData,personId) =>{
          dispatch(createBookings(event,bookingData,personId))
      },
      postBookings : (data) =>{
          dispatch(postBookingThunk(data))
      },
      udpateBooks : (id,data) =>{
          dispatch(updateBookingThunk(id,data))
      },
      getBooking : ()=>{
        dispatch(getBookingThunk())
      },
      getRooms: () => {
           dispatch(getRoomsThunk())
       },
       getVisitors : () =>{
        dispatch(getVisitorsThunk())
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateBooks);


