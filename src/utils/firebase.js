import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBme8LQ3FR2oKjaYgYMkbxjwLJqpROnsx8",
    authDomain: "job-nest-1015b.firebaseapp.com",
    projectId: "job-nest-1015b",
    storageBucket: "job-nest-1015b.firebasestorage.app",
    messagingSenderId: "43539612284",
    appId: "1:43539612284:web:b12d86f0b07da9fa79bff9",
    measurementId: "G-JZCPFVZGSR"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}