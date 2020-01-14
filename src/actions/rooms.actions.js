export const getStatusRequest = () => ({
    type: 'GET_STATUS_REQUEST'
  })
  export const getStatusSuccess = (data) => ({
    type: 'GET_STATUS_SUCCESS',
    payload: data
  })
  export const getStatusFailure = () => ({
    type: 'GET_STATUS_FAILURE'
  })

  export const getRooms = (data) =>{
    return{
      type : "GET_ROOMS",
      payload : data
    }
  }

  export const createRooms = (event,data) =>{
    const { target: { name, value,checked } } = event;
    return{
        type : "CREATE_ROOMS",
        payload : {...data, [name]: name === 'balcony' ? !!checked : value}
    }
}


  export const removeRooms = (data) =>{
    return{
        type : "REMOVE_ROOMS",
        payload : data
    }
}

export const updateRooms = (id) =>{
    return {
        type : "UPDATE_ROOMS",
        payload :id
    }
}

export const resetRooms = (data) =>{
  return {
      type : "RESET_ROOMS",
      payload : data
  }
}

