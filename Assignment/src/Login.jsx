import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';
import { AuthContext } from './AuthProvider';


const Login = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const google = () =>{
        googleSignIn();
        navigate('/', { replace: true });
    }

    const github = () =>{
        githubSignIn();
        navigate('/', { replace: true });
    }
    return (
        <div>
            <Navbar />
            <div>
                <div className='ms-10 p-5'>
                    <p className="text-xl mb-5">Login with...</p>
                    <button className="p-5 me-5 btn btn-primary"><Link to='/emailLogin'>Email</Link></button>
                    <button onClick={() => google()} className="p-5 me-5 btn btn-secondary">Google</button>
                    <button onClick={() => github()} className="p-5 me-5 btn btn-accent">Github</button>
                </div>
                <div className="mx-auto w-80">
                    <button onClick={() => goBack()} className="btn btn-ghost mx-auto">Go Back</button>
                </div>
                <Footer />
            </div>
        </div>
            );
};

            export default Login;