import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const auth = getAuth();
    const signInHandler = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
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
        </div>
    )
}

export default SignIn;