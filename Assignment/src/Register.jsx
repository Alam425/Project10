import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { AuthContext } from './AuthProvider';

const Register = () => {
    const {auth} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [error2, setError2] = useState('');

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const emailRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const photo = e.target.photoURL.value;

        if((password.length && confirmPassword.length) < 6 ){
            setError2('Password length must be of 06 digits!!');
            return;
        }
        else if(password !== confirmPassword){
            setError('Password do not match, please check.');
            return;
        }

        createUserWithEmailAndPassword(auth, email, confirmPassword)
        .then(result => {
            console.log(result?.user);
            updateProfile(auth.currentUser, {
                photoURL: photo, displayName: name
            }).then(() => {               
              }).catch((error) => {
                console.log(error.message);
              });
            e.target.reset();
            navigate('/', { replace: true });
        })
        .catch((e) => {console.log(e);})
    }


    return (
        <div>
            <Navbar />
            <form onSubmit={emailRegister} className='p-10'>
                <h1 className='text-4xl'>Register</h1>
                <p>{error2}</p>
                <p>{error}</p>
                <input className='m-3 p-3 border rounded' type="text" name="name" required placeholder='Your Name' /><br />
                <input className='m-3 p-3 border rounded' type="email" name="email" required placeholder='Your Email' /><br />
                <input className='m-3 p-3 border rounded' type="password" name="password" required placeholder='Your password' /><br />
                <input className='m-3 p-3 border rounded' type="password" name="confirmPassword" required placeholder='Your password' /><br />
                <input className='m-3 p-3 border rounded' type="text" name="photoURL" placeholder='Your PhotoURL' />
                <p className='text-lg mb-2 font-semibold text-slate-700'>Already have an account?? <Link className='text-xl font-bold text-slate-400' to='/login' >Login</Link> Now.</p>
                <button className="btn btn-success" type='submit'>Submit</button>
            </form>


            <div className="mx-auto w-80">
                <button onClick={() => goBack()} className="btn btn-ghost mx-auto">Go Back</button>
            </div>
            <Footer/>
        </div>
    );
};

export default Register;