const initialState = {
    getBookingStatus: false,
    postBookingStatus: true,
    bookings: [],
    bookingData : {
        personName : '',
        roomNumber : '',
        personId : '',
        bookedAt : '',
        roomId : '00'
      }
  };
  
  export default function bookingReducer(state = initialState, action) {
    switch(action.type) {
      case 'GET_BOOKING_SUCCSESS':
      return {
        ...state,
        getBookingStatus: true,
        bookings: action.payload
      }
      case 'GET_BOOKING_FAILURE':
      return {
        ...state,
        getBookingStatus: false,
      }
      case 'POST_BOOKING_SUCCSESS':
      return {
        ...state,
        postBookingStatus: true,
        postBooking: action.payload
      }
      case 'POST_BOOKING_FAILURE':
      return {
        ...state,
        postBookingStatus: false
      }
        case "CREATE_BOOKINGS":
          return{
              ...state,
              bookingData : action.payload,
          }
        case "REMOVE_BOOKINGS":
          const newBookings = state.rooms.filter(el =>{
              return el.id !== action.payload
          })
          return{
              ...state,
            bookings : newBookings
          }
      case "UPDATE_BOOKINGS":
          const findEvent = state.bookings.find((event) => {
              return event.id === action.payload
          });
          return {
              ...state,
              bookingData: findEvent
          }
      default:
        return state;
    }
  }