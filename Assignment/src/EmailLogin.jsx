import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

const EmailLogin = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <Navbar />
            <div className='p-10'>
                <h1 className='text-4xl'>Login</h1>
                <input className='m-3 p-3 rounded border' type="email" name="email" required placeholder='Your Email' /><br />
                <input className='m-3 p-3 rounded border' type="password" name="password" required placeholder='Your password' />
                <p>New here?? <Link className='font-bold' to='/register'>Register</Link> now.</p>
            </div>
            <div className="mx-auto">
                <button onClick={() => goBack()} className="btn btn-ghost mx-auto">Go Back</button>
            </div>
            <Footer />
        </div>
    );
};

export default EmailLogin;