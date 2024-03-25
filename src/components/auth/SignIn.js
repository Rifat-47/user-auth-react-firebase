import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    // const auth = getAuth();
    const signInHandler = async (e) => {
        e.preventDefault();
        if (email.length > 0 && password.length > 0) {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password)
                console.log(userCredential.user.email);
                setEmail('');
                setPassword('');
                setMsg('You have successfully signed in!');
                setTimeout(() => navigate('/auth'), 2000);
            } catch(e) {
                if (e.message === 'Firebase: Error (auth/invalid-login-credentials).'){
                    setMsg('Email/Password mismatch');
                } else if (e.message === 'Firebase: Error (auth/network-request-failed).'){
                    setMsg('Network request failed');
                } else {
                console.log(e.message);
                }
            }
        } else {
            setMsg('Please fill in all fields');
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={signInHandler}>
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
                <button type='submit'>Sign In</button>
            </form>
            <div>
                {msg}
            </div>
        </div>
    )
}

export default SignIn;