import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

    const signOutHandler = () => {
        signOut(auth)
            .then(() => {
                console.log('signed out');
                navigate('/signin');
            })
            .catch((error) => {
                console.log(error.message);
            });
        
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                // console.log(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            unSubscribe();
        }
    }, []);

    return (
        <div>{authUser ? <>
            <h4>Signed In User</h4>
            <p>{authUser.email}</p>
            <button onClick={signOutHandler}>Sign Out</button>
        </> : <p>Signed Out</p>}</div>
    )
}

export default AuthDetails;