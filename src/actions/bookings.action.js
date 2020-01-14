export const getBookingSuccess = (data) => ({
    type: 'GET_BOOKING_SUCCSESS',
    payload: data
  })
  
  export const getBookingFailure = () => ({
    type: 'GET_BOOKING_FAILURE'
  })
  export const postBookingSuccsess = (data) => ({
    type: 'POST_BOOKING_SUCCSESS',
    payload: data
  })
  
  export const postBookingFailure = () => ({
    type: 'POST_BOOKING_FAILURE'
  })

  export const updateBookings = (id) =>{
    return {
        type : "UPDATE_BOOKINGS",
        payload :id
    }
}

export const createBookings = (event,data,person) =>{
    const { target: { name, value } } = event;
    if (name === "personName") {
        const selPerson = person.find(v => v.personName === value);
    return{
        type : "CREATE_BOOKINGS",
        payload : {...data, [name]:  value, personId: selPerson.personId}
    }
} else{
   return {
    type : "CREATE_BOOKINGS",
    payload : {...data, [name]:  value, }
   }
}
}


  export const removeBookings = (data) =>{
    return{
        type : "REMOVE_ROOMS",
        payload : data
    }
}

