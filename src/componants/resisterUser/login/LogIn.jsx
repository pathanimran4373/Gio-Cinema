import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import "./style.scss"

function SignUp() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userName = localStorage.getItem('email');
    const userPassword = localStorage.getItem('password');


    const handleChange = (e) => {
        if (email === userName && password === userPassword) {
            localStorage.setItem("loggedIn", true);
            alert('login succefully');
            navigate('/')

        } else {
            alert("invalid user");
        }
    }
    return (
        <>
            <div className="login-form-container">

                <form action="" className='login-box'>
                    <h3>Sign In</h3>
                    <input type="email" placeholder="email" className="box" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <hr className='hrLine'></hr>

                    <input type="password" placeholder="password" className="box" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <hr className='hrLine'></hr>

                    <input type="submit" value="Sign Up" className="btn" onClick={handleChange} />

                    <p className='botomLine'>Not a user ? <span><Link className='botomLink'to="/signup">Resister</Link></span></p>


                </form>

            </div>
        </>
    )



}

export default SignUp
