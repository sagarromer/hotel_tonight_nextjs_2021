import React from 'react'
import Link from 'next/link'

import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../redux/actions/userActions'
import { signOut } from 'next-auth/client'

const Header = () => {
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.loadedUser);
    useEffect(() => {
        if (!user) {
            dispatch(loadUser())
        }
    }, [dispatch, user])

    return (
        <nav className="navbar row justify-content-center sticky-top">
            <div className="container">
                <div className="col-3 p-0">
                    <div className="navbar-brand">
                        <Link href='/' passHref>
                            <img style={{ cursor: 'pointer', height: '50px', width:'80px' }} src="/images/hotel_tonight_logo.png" alt="BookIT" />
                        </Link>
                    </div>
                </div>
                <div className="col-3 mt-3 mt-md-0 text-center">
                    <a className="btn btn-danger px-4 text-white login-header-btn float-right">Login</a>
                </div>
            </div>
        </nav>
    )
}

export default Header
