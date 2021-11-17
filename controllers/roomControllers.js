import Room from '../models/room';
import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import APIFeatures from '../utils/apiFeatures';

// Create all rooms   =>   /api/rooms
const allRooms = catchAsyncErrors( async (req, res, next) => {
    const resPerPage = 4;
    const roomsCount = await Room.countDocuments();

    const apiFeatures = new APIFeatures(Room.find(), req.query)
                        .search()
                        .filter();
    
    let rooms = await apiFeatures.query;
    let filteredRoomsCount = rooms.length;
    apiFeatures.pagination(resPerPage);
    rooms = await apiFeatures.query;
    console.log(rooms);
    
    res.status(200).json({
        success: true,
        roomsCount,
        resPerPage,
        filteredRoomsCount,
        rooms
    })
});
// get room details   =>   /api/rooms/:id
const getSingleRoom = catchAsyncErrors( async (req, res, next) => {
    const room = await Room.findById(req.query.id);
    if(!room){
        return next(new ErrorHandler('room not found with this ID'));
    }
    res.status(200).json({
        success: true,
        room
    })
});
// Create new room   =>   /api/rooms
const newRoom = catchAsyncErrors( async (req, res, next) => {
    
    const room = await Room.create(req.body);

    res.status(200).json({
        success: true,
        room
    })
});
// update room details   =>   /api/rooms/:id
const updateRoom = catchAsyncErrors( async (req, res, next) => {
    
    let room = await Room.findById(req.query.id);
    console.log(room);
    
    if(!room){
        return next(new ErrorHandler('room not found with this ID'));  
    }
    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        room
    })
});
const deleteRoom = catchAsyncErrors( async (req, res, next) => {
    let room = await Room.findById(req.query.id);
    
    if(!room){
        return next(new ErrorHandler('room not found with this ID'));
    }
    await room.remove();
    res.status(200).json({
        success: true,
        message: 'room is deleted.'
    })
    
});
// Create a new review   =>   /api/reviews
const createRoomReview = catchAsyncErrors(async (req, res) => {

    const { rating, comment, roomId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment
    }

    const room = await Room.findById(roomId);

    const isReviewed = room.reviews.find(
        r => r.user.toString() === req.user._id.toString()
    )

    if (isReviewed) {

        room.reviews.forEach(review => {
            if (review.user.toString() === req.user._id.toString()) {
                review.comment = comment;
                review.rating = rating;
            }
        })

    } else {
        room.reviews.push(review);
        room.numOfReviews = room.reviews.length
    }

    room.ratings = room.reviews.reduce((acc, item) => item.rating + acc, 0) / room.reviews.length

    await room.save({ validateBeforeSave: false })

    res.status(200).json({
        success: true,
    })

})

// Check Review Availability   =>   /api/reviews/check_review_availability
const checkReviewAvailability = catchAsyncErrors(async (req, res) => {

    const { roomId } = req.query;

    const bookings = await Booking.find({ user: req.user._id, room: roomId })

    let isReviewAvailable = false;
    if (bookings.length > 0) isReviewAvailable = true


    res.status(200).json({
        success: true,
        isReviewAvailable
    })

})
export {
    allRooms,
    newRoom,
    getSingleRoom,
    updateRoom,
    deleteRoom,
    createRoomReview,
    checkReviewAvailability,
}