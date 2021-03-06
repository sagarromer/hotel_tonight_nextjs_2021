import { combineReducers } from 'redux';
import { allRoomsReducer, roomDetailsReducer , 
    newReviewReducer, checkReviewReducer, newRoomReducer, roomReducer } from './roomReducers';
import { authReducer,
    loadedUserReducer, 
    userReducer, forgotPasswordReducer, allUsersReducer,
userDetailsReducer} from './userReducers';
import { checkBookingReducer, 
        bookedDatesReducer, bookingsReducer,
        bookingReducer,
        bookingDetailsReducer} from './bookingReducers'

const reducer = combineReducers({
    allRooms: allRoomsReducer,
    newRoom: newRoomReducer,
    roomDetails: roomDetailsReducer,
    room: roomReducer,
    auth: authReducer,
    loadedUser: loadedUserReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    checkBooking: checkBookingReducer,
    bookedDates: bookedDatesReducer,
    bookings: bookingsReducer,
    booking: bookingReducer,
    bookingDetails: bookingDetailsReducer,
    newReview: newReviewReducer,
    checkReview: checkReviewReducer
})

export default reducer