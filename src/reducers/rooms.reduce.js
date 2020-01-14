const initialState = {
  gettingStatus : false,
  status        : {
    rooms: 0,
    booking: 0,
    visitors: 0
  },
  rooms :[],
  roomsData : {
    balcony : false,
    floor : '',
    beds : '',
    roomId : '',
    bookedAt : new Date().toLocaleDateString()
  }
};

export default function roomsReducer(state = initialState, action) {
  switch(action.type) {
    
    case 'GET_STATUS_REQUEST': 
      return {
        ...state,
        gettingStatus: true,
      }
    case 'GET_STATUS_SUCCESS': 
    return {
      ...state,
      gettingStatus: false,
      status: action.payload
    }
    case 'GET_STATUS_FAILURE': 
    return {
      ...state,
      gettingStatus: true,
    }
    case "GET_ROOMS" :
      return{
        ...state,
        rooms : action.payload
      }
      case "CREATE_ROOMS":
        return{
            ...state,
            roomsData : action.payload,
        }
      case "REMOVE_ROOMS":
        const newRooms = state.rooms.filter(el =>{
            return el.id !== action.payload
        })
        return{
            ...state,
          rooms : newRooms
        }
    case "UPDATE_ROOMS":
        const findEvent = state.rooms.find((event) => {
            return event.id === action.payload
        });
        return {
            ...state,
            roomsData: findEvent
        }
        case "RESET_ROOMS":
          return{
            ...state,
            roomsData : action.payload
          }
    default:
      return state;
  }
}