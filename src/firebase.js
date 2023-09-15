// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_bJnr7dS0-ZmlNdxtkChNwBNCAsjYJ08",
    authDomain: "userauth-ff1a8.firebaseapp.com",
    databaseURL: "https://userauth-ff1a8-default-rtdb.firebaseio.com",
    projectId: "userauth-ff1a8",
    storageBucket: "userauth-ff1a8.appspot.com",
    messagingSenderId: "1095420137736",
    appId: "1:1095420137736:web:0ad7c05294b1fc2c559cbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

