import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    const signOutHandler = () => {
        signOut(auth)
            .then(() => {
                console.log('signed out');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                console.log(user);
            } else {
                setAuthUser(null);
            }
        });
        console.log(unSubscribe);

        return () => {
            unSubscribe();
        }
    }, []);

    return (
        <div>{authUser ? <>
            <p>{authUser.email}</p>
            <button onClick={signOutHandler}>Sign Out</button>
        </> : <p>Signed Out</p>}</div>
    )
}

export default AuthDetails;