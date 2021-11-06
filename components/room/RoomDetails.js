import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

import RoomFeatures from './RoomFeatures'

// import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css";

import { Carousel } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { clearErrors } from '../../redux/actions/roomActions'

import axios from 'axios'

const RoomDetails = () => {

    const dispatch = useDispatch()
    const router = useRouter();

    const { room, error } = useSelector(state => state.roomDetails);


    useEffect(() => {

        toast.error(error)
        dispatch(clearErrors())

        return () => {
            dispatch({ type: CHECK_BOOKING_RESET })
        }

    }, [])


    return (
        <>
            <Head>
                <title>{room.name} - BookIT</title>
            </Head>

            <div className="container container-fluid">
                <h2 className='mt-5'>{room.name}</h2>
                <p>{room.address}</p>

                <div className="ratings mt-auto mb-3">
                    <div className="rating-outer">
                        <div className="rating-inner" style={{ width: `${(room.ratings / 5) * 100}%` }}></div>
                    </div>
                    <span id="no_of_reviews">({room.numOfReviews} Reviews)</span>
                </div>

                <Carousel hover='pause'>
                    {room.images && room.images.map(image => (
                        <Carousel.Item key={image.public_id}>
                            <div style={{ width: '100%', height: '440px' }}>
                                <Image
                                    className='d-block m-auto'
                                    src={image.url}
                                    alt={room.name}
                                    layout='fill'
                                />
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>


                <div className="row my-5">
                    <div className="col-12 col-md-6 col-lg-8">
                        <h3>Description</h3>
                        <p>{room.description}</p>
                        <RoomFeatures room={room} />
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="booking-card shadow-lg p-4">
                            <p className='price-per-night'><b>${room.pricePerNight}</b> / night</p>

                            <hr />

                            <p className="mt-5 mb-3">
                                Pick Check In & Check Out Date
                            </p>
                        </div>
                    </div>
                </div>

                

                

            </div>
        </>
    )
}

export default RoomDetails