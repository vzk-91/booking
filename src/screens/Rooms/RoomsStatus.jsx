import React,{useEffect,Fragment} from 'react';
import {getStatusThunk} from '../../thunk/';
import {connect} from 'react-redux';
import Spiner from '../../components/spinner/spinner'


const RoomsStatus = ({roomsStatus,getStatus,loading})=>{
const {rooms,booking,visitors} = roomsStatus;

useEffect(()=>{
    getStatus()
  },[])
    
    return(
      <div className="status">
         {loading ? <Spiner/> :<Fragment>
         <div>
              <p> {rooms} </p>
              <p>Rooms</p>
          </div>
          <div>
              <p> {booking} </p>
              <p>Bookings</p>
          </div>
          <div>
              <p>  {visitors} </p>
              <p>Visitors</p>
          </div></Fragment>}
      </div>
    )
}

const mapStateToProps = ({roomsPage}) =>{
    return {
        roomsStatus : roomsPage.status,
        loading : roomsPage.gettingStatus
    }
}

const mapDispatchToProps = (dispatch) =>{
      return {
         getStatus: () => {
             dispatch(getStatusThunk())
         }
      }
}

export default connect(mapStateToProps,mapDispatchToProps)(RoomsStatus);