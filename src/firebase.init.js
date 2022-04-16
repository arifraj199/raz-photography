// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAERctDa89fOe5MfS8yKflAnsz-CPy5F4s",
  authDomain: "home-food-services.firebaseapp.com",
  projectId: "home-food-services",
  storageBucket: "home-food-services.appspot.com",
  messagingSenderId: "140100980532",
  appId: "1:140100980532:web:f1dd292ae241b3138f9f61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;