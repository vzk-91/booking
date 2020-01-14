import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {updateBookings} from '../../actions'
import {getBookingThunk,deleteBookingThunk} from '../../thunk/';
import Button from '../../components/Button';


const BooksTable = ({booking,getBooking,updateBookings,removeBookings}) =>{
  
useEffect(()=>{
  getBooking()
},[])
console.log("TCL: BooksTable -> booking", booking)


const update =(id) =>{
  updateBookings(id)
}

const deleteBookings = (id)=>{
  removeBookings(id)
  getBooking()
}
    return(
      <div className="books_info">
         <table>
           <thead>
           <tr>
                <th>#</th>
                <th>Person Name</th>
                <th>Room ID</th>
                <th>Booked</th>
                <th>Person ID</th>
                <th>Edit</th>
                <th>Delete</th>
           </tr>
           </thead>
            <tbody>
            {booking.map((e,i)=>{
              return <tr key={e.id}>
                <td>{i+1}</td>
                <td> {e.personName} </td>
                <td> {e.roomNumber} </td>
                <td> {e.bookedAt} </td>
                <td> {e.personId} </td> 
                 <td><Button name={'edit'} onClick={()=>update(e.id)} /></td>
                <td><Button name={'delete'} onClick={()=>deleteBookings(e.id)} /></td>
              </tr>
            })}
            </tbody>
        </table>
      </div>
    )
}

const mapStateToProps = ({bookingPage}) =>{
  return {
      booking : bookingPage.bookings
  }
}

const mapDispatchToProps = (dispatch) =>{
    return {
       getBooking: () => {
           dispatch(getBookingThunk())
       },
       removeBookings : (id) =>{
        dispatch(deleteBookingThunk(id))
    },
    updateBookings : (id)=>{
      dispatch(updateBookings(id))
    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BooksTable);