// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrd1lEpqFfIZLUxczEjGCGup1-H4y5QL4",
  authDomain: "proyecto-3-48532.firebaseapp.com",
  projectId: "proyecto-3-48532",
  storageBucket: "proyecto-3-48532.appspot.com",
  messagingSenderId: "481675321157",
  appId: "1:481675321157:web:040cb68beb5b11702aa82c",
  measurementId: "G-FDQEF7KHB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
