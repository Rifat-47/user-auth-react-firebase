import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const auth = getAuth();
    const signUpHandler = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .then(() => {
                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                console.log(error);
            });
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
        </div>
    )
}

export default SignUp;