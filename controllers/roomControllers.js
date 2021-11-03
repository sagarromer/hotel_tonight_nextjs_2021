import Room from '../models/room';
import ErrorHandler from '../utils/errorHandler';

// Create all rooms   =>   /api/rooms
const allRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json({
            success: true,
            count: rooms.length,
            rooms
        })
    } catch(err) {
        res.status(400).json({
            success: false,
            error: error
        })
    }
    
}
// get room details   =>   /api/rooms/:id
const getSingleRoom = async (req, res, next) => {
    try{
        const room = await Room.findById(req.query.id);
        if(!room){
            return next(new ErrorHandler('room not found with this ID'));
        }
        res.status(200).json({
            success: true,
            room
        })
        
    } catch(error){
        res.status(400).json({
            success: true,
            error: error.message
        })
    }
    
}
// Create new room   =>   /api/rooms
const newRoom = async (req, res) => {
    try{
        const room = await Room.create(req.body);

        res.status(200).json({
            success: true,
            room
        })
    } catch {
        res.status(400).json({
            success: false,
            error: error
        })
    }
    
}
// update room details   =>   /api/rooms/:id
const updateRoom = async (req, res, next) => {
    try{
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
    } catch {
        res.status(400).json({
            success: false,
            error: error
        })
    }
    
}
const deleteRoom = async (req, res, next) => {
    try{
        let room = await Room.findById(req.query.id);
        
        if(!room){
            return next(new ErrorHandler('room not found with this ID'));
        }
        await room.remove();
        res.status(200).json({
            success: true,
            message: 'room is deleted.'
        })
    } catch {
        res.status(400).json({
            success: false,
            error: error
        })
    }
    
}
export {
    allRooms,
    newRoom,
    getSingleRoom,
    updateRoom,
    deleteRoom
}