import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import "./style.scss"

function ResisterPage() {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "") {
            toast.error('name is required');
        } else if (number === "") {
            toast.error('number is required');
        } else if (email === "") {
            toast.error('email is required');
        } else if (password === "") {
            toast.error('password is required');
        } else {
            localStorage.setItem('name', name);
            localStorage.setItem('number', number);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            alert("you resister succefully");
            navigate('/login')
        }
    };


    return (
            <div className="login-form-container">


                    <form className='login-box' action="">
                        <h3>Resister</h3>
                        <input type="name" placeholder="name" className="box" value={name} onChange={(e) => setName(e.target.value)} />
                        <hr className='hrLine'></hr>
                        <input type="number" placeholder="number" className="box" value={number} onChange={(e) => setNumber(e.target.value)} />
                        <hr className='hrLine'></hr>
                        <input type="email" placeholder="email" className="box" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <hr className='hrLine'></hr>
                        <input type="password" placeholder="password" className="box" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <hr className='hrLine'></hr>

                        <input type="submit" value="Sign Up" className="btn" onClick={handleSubmit} />

                        <p className='botomLine'>Alredy user ? <span><Link className='botomLink'to="/login">Log In</Link></span></p>

                    </form>

            </div>

    )
}

export default ResisterPage
