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
export {
    allRooms,
    newRoom
}