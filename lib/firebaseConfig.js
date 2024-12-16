// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqacAmgiCOgkz2ocGmstKf7BJjpJS27aI",
    authDomain: "fitness-app-e6709.firebaseapp.com",
    projectId: "fitness-app-e6709",
    storageBucket: "fitness-app-e6709.firebasestorage.app",
    messagingSenderId: "120747390316",
    appId: "1:120747390316:web:f47f6386b9ac6a4f64af49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth,db }