import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyBu4ip0zEUPBl5XvjX1RGsQfJLuvbRt3rU",
    authDomain: "capacitacion-benito-juarez.firebaseapp.com",
    projectId: "capacitacion-benito-juarez",
    storageBucket: "capacitacion-benito-juarez.appspot.com",
    messagingSenderId: "523633925986",
    appId: "1:523633925986:web:470c1da66fba97e336163b",
    measurementId: "G-E6TEWZY9R8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

