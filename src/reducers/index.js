import {combineReducers} from 'redux';
import roomsReducer from './rooms.reduce';
import visitorsReducer from './visitors.reducer';
import bookingReducer from './bookings.reducer'

export default combineReducers({
   roomsPage : roomsReducer,
   visitorsPage : visitorsReducer,
   bookingPage : bookingReducer
})

