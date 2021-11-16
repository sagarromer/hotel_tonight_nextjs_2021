import { combineReducers } from 'redux';
import { allRoomsReducer, roomDetailsReducer } from './roomReducers';
import { authReducer, loadedUserReducer, userReducer, forgotPasswordReducer } from './userReducers';
import { checkBookingReducer, 
        bookedDatesReducer, bookingsReducer,
        bookingDetailsReducer} from './bookingReducers'

const reducer = combineReducers({
    allRooms: allRoomsReducer,
    roomDetails: roomDetailsReducer,
    auth: authReducer,
    loadedUser: loadedUserReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    checkBooking: checkBookingReducer,
    bookedDates: bookedDatesReducer,
    bookings: bookingsReducer,
    bookingDetails: bookingDetailsReducer,
})

export default reducer