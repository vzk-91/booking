export const createVisitors = (event,data) =>{
    const { target: { name, value } } = event;
    return{
        type : "CREATE_VISITORS",
        payload : {...data,[name] : value}
    }
}

export const getVisitors = (data) =>{
    return{
        type : "GET_VISITORS",
        payload : data
    }
}

export const removeVisitors = (data) =>{
    return{
        type : "REMOVE_VISITORS",
        payload : data
    }
}

export const updateVisitors = (id) =>{
    return {
        type : "UPDATE_VISITORS",
        payload :id
    }
}

export const resetViisitors = (data) =>{
    return {
        type : "RESET_VISITORS",
        payload : data
    }
  }

