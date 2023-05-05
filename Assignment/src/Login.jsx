import React from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';

const Login = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <Navbar />
            <div className='ms-10 p-5'>
                <p className="text-xl mb-5">Login with...</p>
                <button className="p-5 me-5 btn btn-primary"><Link to='/emailLogin'>Email</Link></button>
                <button className="p-5 me-5 btn btn-secondary">Google</button>
                <button className="p-5 me-5 btn btn-accent">Github</button>
            </div>
            <div className="mx-auto">
                <button onClick={() => goBack()} className="btn btn-ghost mx-auto">Go Back</button>
            </div>
            <Footer />
        </div>
    );
};

export default Login;