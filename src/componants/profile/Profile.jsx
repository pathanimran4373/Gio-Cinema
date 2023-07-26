import React, { useState } from 'react'
import "./style.scss"
import { FaRegUserCircle, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';


const Profile = () => {
    // for sidebar
    const [sidebar, setSidebar] = useState(false);
    // profile page
    const showSidebar = () => setSidebar(!sidebar);

    // logout function
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        setSidebar(!sidebar)
        navigate("/login")
    }
    return (
        <>
            <div className="registerSection">
                <FaRegUserCircle onClick={showSidebar} className="profileIcon" />
                <div className={sidebar ? 'profilePage Active' : 'profilePage'}>
                    <button className='nav-close-btn' onClick={showSidebar}><FaTimes /></button>
                    <div className='profileBlok'>
                        <FaRegUserCircle className="profileImage" />
                        <div>{
                            (!localStorage.getItem("loggedIn")) ? <h2>User Name</h2> :
                                <span>{localStorage.getItem('name')}</span>
                        }
                        </div>
                    </div>
                    <h3>Subscribe By</h3>
                    <hr></hr>
                    <span onClick={showSidebar}><Link className='profile-link' to="/login">Log In</Link></span>
                    <span onClick={showSidebar}><Link className='profile-link' to="/signup">Sign Up</Link></span>
                    <span>News</span>
                    <span>Help and Legal</span>

                    <span onClick={handleLogout}>Log Out</span>
                </div>
            </div>
        </>
    )
}

export default Profile
