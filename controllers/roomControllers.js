import Room from '../models/room';
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
const getSingleRoom = async (req, res) => {
    try{
        const room = await Room.findById(req.query.id);
        if(!room){
            return res.status(404).json({
                success: false,
                room: 'room not found with this ID'
            })
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
const updateRoom = async (req, res) => {
    try{
        let room = await Room.findById(req.query.id);
        console.log(room);
        
        if(!room){
            return res.status(404).json({
                success: false,
                room: 'room not found with this ID'
            })
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
export {
    allRooms,
    newRoom,
    getSingleRoom,
    updateRoom
}