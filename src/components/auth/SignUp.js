import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const signUpHandler = async (e) => {
        e.preventDefault();
        if (email.length > 0 && password.length > 0) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log(userCredential.user.email);
                setEmail('');
                setPassword('');
                setMsg('You have successfully signed up!');
                setTimeout(() => navigate('/auth'), 2000);
            } catch (error) {
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setMsg('Email already in use');
                } else if (error.message === 'Firebase: Error (auth/network-request-failed).') {
                    setMsg('Network request failed');
                } else {
                    setMsg(error.message);
                }
            }
        } else {
            setMsg('Please fill in all fields');
        }
    };
    

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={signUpHandler}>
                <input 
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                ></input>
                <input 
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                ></input>
                <button type='submit'>Sign Up</button>
            </form>
            <div>
                {msg}
            </div>
        </div>
    )
}

export default SignUp;