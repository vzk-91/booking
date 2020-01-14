import api from '../API';
import axios from "axios";
import {  getVisitors,updateVisitors,removeVisitors } from '../actions';


export const getVisitorsThunk = () => async (dispatch) => {
  try {
    const response = await api.visitors.get();
    if (response.status !== 200) {
      throw new Error('Cannot get visitors')
    }
    dispatch(getVisitors(response.data));
  } catch (error) {
      console.log(Error)
  }
}

export const postVisitorsThunk = (data) => async (dispatch) => {
    try {
      const response = await api.visitors.post({...data});
      if (response.status !== 200) {
        throw new Error('Cannot get visitors')
      }
    } catch (error) {
        console.log(Error)
    }
  }

  export const removeVisitorsThunk = (id) => async (dispatch) =>{
    try {
        const res = await axios.delete(`https://it-blog-posts.herokuapp.com/api/visitors/${id}`)
        if (res.status !== 200) {
          throw new Error('Cannot get visitors')
        }
        dispatch(removeVisitors(id))
      } catch (error) {
          console.log(Error)
      }
  }

  export const updateVisitorsThunk = (id,data) => async (dispatch) => {
    try {
        const response = await axios.put(`https://it-blog-posts.herokuapp.com/api/visitors/${id}`,{...data})
      if (response.status !== 200) {
        throw new Error('Cannot get visitors')
      }
    } catch (error) {
        console.log(Error)
    }
  }