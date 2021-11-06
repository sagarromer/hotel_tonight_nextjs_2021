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
export {
    allRooms,
    newRoom,
    getSingleRoom,
    updateRoom,
    deleteRoom
}