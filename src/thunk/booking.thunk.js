import api from '../API';
import { getBookingSuccess,getBookingFailure,postBookingFailure,postBookingSuccsess } from '../actions';

export const getBookingThunk = () => async (dispatch) => {
    try {
      
      const response = await api.bookings.get();
      if (response.status !== 200) {
        throw new Error('Cannot get rooms')
      }
      dispatch(getBookingSuccess(response.data));
    } catch (error) {
      dispatch(getBookingFailure());
    }
  }
  export const postBookingThunk = (data) => async (dispatch) => {
    try {
      
      const response = await api.bookings.post(data);
      if (response.status !== 200) {
        throw new Error('Cannot post room')
      }
      dispatch(postBookingSuccsess(response));
    } catch (error) {
      dispatch(postBookingFailure());
    }
  }
  export const updateBookingThunk = (data,id) => async (dispatch) => {
    try {
    
      const response = await api.putBooking(id).put(data);
      
      if (response.status !== 200) {
        throw new Error('Cannot post room')
      }
      dispatch(postBookingSuccsess(response));
    } catch (error) {
      dispatch(postBookingFailure());
    }
  }
  
  export const deleteBookingThunk = (id) => async (dispatch) => {
    try {
    
      const response = await api.putBooking(id).delete();
      
      if (response.status !== 200) {
        throw new Error('Cannot post room')
      }
      dispatch(postBookingSuccsess(response));
    
    } catch (error) {
      dispatch(postBookingFailure());
    }
  }