import api from '../API';
import axios from "axios";
import { getStatusRequest, getStatusSuccess, getStatusFailure,getRooms,removeRooms } from '../actions';

export const getStatusThunk = () => async (dispatch) => {
  try {
    dispatch(getStatusRequest());
    const response = await api.roomsStatus.get();
    if (response.status !== 200) {
      throw new Error('Cannot get status')
    }
    dispatch(getStatusSuccess(response.data.status));
  } catch (error) {
      console.log(Error)
    dispatch(getStatusFailure());
  }
}

export const getRoomsThunk = () =>  async(dispatch) =>{
  try {
    const response = await api.rooms.get();
    if (response.status !== 200) {
      throw new Error('Cannot get status')
    }
    dispatch(getRooms(response.data));
  } catch (error) {
      console.log(Error)
    dispatch(getStatusFailure());
  }
}

export const postRoomsThunk = (data) => async (dispatch) => {
  try {
    const response = await api.rooms.post({...data});
    if (response.status !== 200) {
      throw new Error('Cannot get rooms')
    }
  } catch (error) {
      console.log(Error)
  }
}


export const removeRoomsThunk = (id) => async (dispatch) =>{
  try {
      const res = await axios.delete(`https://it-blog-posts.herokuapp.com/api/rooms/${id}`)
      console.log(res.status)
      if (res.status !== 200) {
        throw new Error('Cannot get rooms')
      }
      dispatch(removeRooms(id))
    } catch (error) {
        console.log(Error)
    }
}

export const updateRoomsThunk = (id,data) => async (dispatch) => {
  try {
      const response = await axios.put(`https://it-blog-posts.herokuapp.com/api/rooms/${id}`,{...data})
    if (response.status !== 200) {
      throw new Error('Cannot get visitors')
    }
  } catch (error) {
      console.log(Error)
  }
}