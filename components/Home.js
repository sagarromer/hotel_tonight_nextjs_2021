import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import RoomItem from './room/RoomItem'

import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Home = () => {
    const { rooms } = useSelector(state => state.allRooms);
    console.log(rooms);

    useEffect(() => {
        toast.success('this is a success message');
        
    }, [])
    

    return (
        <section id="rooms" className="container mt-5">

        <h2 className='mb-3 ml-2 stays-heading'>stay in new york</h2>

        <Link href='/search' >
            <a className='ml-2 back-to-search'>
                <i className='fa fa-arrow-left'></i> Back to Search
        </a>
        </Link>

        <div className="row">
            {rooms && rooms.length === 0 ?
                <div className="alert alert-danger mt-5 w-100"><b>No Rooms.</b></div>
                :
                rooms && rooms.map(room => (
                    <RoomItem key={room._id} room={room} />
                ))
            }
        </div>
    </section>
    )
}

export default Home
