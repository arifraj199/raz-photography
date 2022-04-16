// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrlS0ZWUqKJEvMFvUBTOU6NHFMtUdsLs4",
  authDomain: "weeding-photographer-b39e1.firebaseapp.com",
  projectId: "weeding-photographer-b39e1",
  storageBucket: "weeding-photographer-b39e1.appspot.com",
  messagingSenderId: "671577019461",
  appId: "1:671577019461:web:363f99ba57fa01759e7f2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;